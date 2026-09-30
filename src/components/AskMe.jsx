import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { answer, SUGGESTIONS, followups } from '../lib/answerEngine';
import useOverlayLock from '../lib/useOverlayLock';

const SpeechRec = typeof window !== 'undefined' ? (window.SpeechRecognition || window.webkitSpeechRecognition) : null;
const ttsSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

const AskMe = () => {
  const [open, setOpen] = useState(false);
  useOverlayLock(open);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [listening, setListening] = useState(false);
  const [voiceReplies, setVoiceReplies] = useState(false);
  const [speechNote, setSpeechNote] = useState('');
  const inputRef = useRef(null);
  const bodyRef = useRef(null);
  const recRef = useRef(null);
  const listenTimer = useRef(null);
  const voiceRepliesRef = useRef(false);

  useEffect(() => { voiceRepliesRef.current = voiceReplies; }, [voiceReplies]);

  // Voices load asynchronously. getVoices() returns [] on the first call in
  // Chrome and Edge until the engine has enumerated them, and an utterance
  // spoken before that happens is silently dropped — which is exactly the
  // "it does not read anything" case, and why it looked fine in testing: the
  // call succeeds, nothing comes out.
  const voicesReady = () =>
    new Promise((resolve) => {
      const have = window.speechSynthesis.getVoices();
      if (have.length) return resolve(have);
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        resolve(window.speechSynthesis.getVoices());
      };
      window.speechSynthesis.addEventListener('voiceschanged', finish, { once: true });
      // Some engines never fire the event; do not hang on them.
      setTimeout(finish, 1500);
    });

  const keepAlive = useRef(null);

  const speak = async (text) => {
    if (!ttsSupported) return;
    window.speechSynthesis.cancel();
    clearInterval(keepAlive.current);

    const voices = await voicesReady();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 1.05;
    u.pitch = 1;
    u.lang = 'en-US';
    // Pick a real voice rather than relying on the default. With only a lang
    // hint some systems match nothing and stay silent.
    const pick =
      voices.find((v) => /^en[-_]?(GB|IN)/i.test(v.lang)) ||
      voices.find((v) => /^en/i.test(v.lang)) ||
      voices[0];
    if (pick) u.voice = pick;

    u.onerror = (e) => {
      clearInterval(keepAlive.current);
      // 'interrupted' and 'canceled' are us calling cancel(); not worth telling
      // the visitor about.
      if (e?.error && e.error !== 'interrupted' && e.error !== 'canceled') {
        setSpeechNote('Could not play the reply aloud in this browser.');
      }
    };
    u.onend = () => clearInterval(keepAlive.current);

    // Chrome stops synthesising after roughly fifteen seconds unless it is
    // nudged, which truncates longer answers mid-sentence.
    keepAlive.current = setInterval(() => {
      if (!window.speechSynthesis.speaking) return clearInterval(keepAlive.current);
      window.speechSynthesis.pause();
      window.speechSynthesis.resume();
    }, 10000);

    // cancel() followed synchronously by speak() can swallow the utterance in
    // Chrome; yielding a frame avoids the race.
    setTimeout(() => window.speechSynthesis.speak(u), 60);
  };

  const stopSpeaking = () => {
    if (!ttsSupported) return;
    clearInterval(keepAlive.current);
    window.speechSynthesis.cancel();
  };

  useEffect(() => {
    window.__openAskMe = () => setOpen(true);
    return () => { delete window.__openAskMe; };
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // stop voice when the panel closes
  useEffect(() => {
    if (!open) {
      stopSpeaking();
      clearTimeout(listenTimer.current);
      try { recRef.current?.stop(); } catch { /* noop */ }
      setListening(false);
      setSpeechNote('');
    }
  }, [open]);

  const startListening = () => {
    // Say so rather than doing nothing: Firefox has no Web Speech recognition,
    // and a dead button with no explanation reads as a broken site.
    if (!SpeechRec) {
      setSpeechNote('Voice input is not supported in this browser. Try Chrome or Edge, or type your question.');
      return;
    }

    // Always able to get out of the listening state, even if the recogniser has
    // already gone away.
    if (listening) {
      try { recRef.current?.stop(); } catch { /* noop */ }
      setListening(false);
      return;
    }

    const rec = new SpeechRec();
    rec.lang = 'en-US';
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    rec.onresult = (e) => {
      clearTimeout(listenTimer.current);
      const transcript = e.results[0][0].transcript;
      setInput(transcript);
      ask(transcript);
    };
    rec.onend = () => {
      clearTimeout(listenTimer.current);
      setListening(false);
    };
    rec.onerror = (e) => {
      clearTimeout(listenTimer.current);
      setListening(false);
      setSpeechNote(
        e?.error === 'not-allowed' || e?.error === 'service-not-allowed'
          ? 'Microphone access was blocked. Allow it in your browser settings, or type instead.'
          : 'Could not hear anything. Try again, or type your question.'
      );
    };
    recRef.current = rec;
    setSpeechNote('');
    stopSpeaking();

    // start() throws synchronously if the recogniser is already running or the
    // device is unavailable. Setting the flag first left the button stuck on
    // "Stop listening" with no way back.
    try {
      rec.start();
      setListening(true);
      // Safety stop. Recognition can start cleanly and then simply never fire
      // onresult or onerror — no microphone, silence, a device that goes away —
      // which leaves the panel saying "Listening…" with nothing coming. Give it
      // a bounded window rather than an open one.
      clearTimeout(listenTimer.current);
      listenTimer.current = setTimeout(() => {
        try { rec.stop(); } catch { /* already gone */ }
        setListening(false);
        setSpeechNote('No speech detected. Try again, or type your question.');
      }, 10000);
    } catch {
      setListening(false);
      setSpeechNote('Voice input could not start. Try again, or type your question.');
    }
  };

  useEffect(() => {
    if (open) {
      if (messages.length === 0) {
        setMessages([{ role: 'bot', ...answer('') }]);
      }
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  // Ask the Worker first, fall back to the local rule-based engine.
  //
  // The fallback is the point: the endpoint may be unset (no VITE_ASK_ENDPOINT),
  // unconfigured (no key yet), rate-limited, out of free-tier quota, or simply
  // down — and in every one of those cases the assistant must still answer
  // rather than show an error. The local engine also keeps the action buttons
  // ("See Projects", "Email Chaitanya"), which the model cannot produce.
  const ENDPOINT = import.meta.env.VITE_ASK_ENDPOINT;

  const askRemote = async (q) => {
    if (!ENDPOINT) return null;
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 12000);
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q }),
        signal: controller.signal,
      });
      clearTimeout(timer);
      if (!res.ok) return null;
      const data = await res.json();
      return typeof data?.answer === 'string' && data.answer.trim() ? data.answer.trim() : null;
    } catch {
      return null; // network error, timeout, CORS — fall back silently
    }
  };

  const ask = (text) => {
    const q = (text ?? input).trim();
    if (!q) return;
    setMessages((m) => [...m, { role: 'user', text: q }]);
    setInput('');
    setTyping(true);

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const local = answer(q); // computed up front so it is ready either way

    askRemote(q).then((remote) => {
      const settle = () => {
        setTyping(false);
        // Keep the local engine's action buttons alongside the model's text.
        const a = remote ? { ...local, text: remote } : local;
        setMessages((m) => [...m, { role: 'bot', ...a }]);
        if (voiceRepliesRef.current) speak(a.text);
      };
      // Without a remote call the reply is instant, which reads as canned; the
      // short delay is deliberate. A real round trip has already taken time.
      if (remote || reduced) settle();
      else setTimeout(settle, 450);
    });
  };

  const toggleVoice = () => {
    setVoiceReplies((v) => {
      const next = !v;
      if (!next) stopSpeaking();
      return next;
    });
  };

  return (
    <>
      {/* Floating launcher */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Ask me anything"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-accent text-primary font-semibold shadow-lg shadow-accent/30 hover:bg-accent-hover transition-colors"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-4 4v-4z" /></svg>
        <span className="hidden sm:inline">Ask AI about me</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[10000] flex items-end sm:items-center justify-center sm:justify-end p-0 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Portfolio assistant"
          >
            <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm" />
            <motion.div
              className="relative w-full sm:w-[400px] h-[78vh] sm:h-[560px] bg-secondary/95 backdrop-blur-xl border border-accent/20 rounded-t-3xl sm:rounded-3xl shadow-2xl shadow-accent/10 flex flex-col overflow-hidden"
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 320, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-line/15">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                  </span>
                  <div>
                    <p className="text-light-gray font-bold leading-tight">Ask about Chaitanya</p>
                    <p className="text-medium-gray text-xs">{listening ? 'Listening…' : 'Type or talk · instant answers'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {ttsSupported && (
                    <button
                      onClick={toggleVoice}
                      aria-label={voiceReplies ? 'Turn off voice replies' : 'Turn on voice replies'}
                      aria-pressed={voiceReplies}
                      title={voiceReplies ? 'Voice replies on' : 'Voice replies off'}
                      className={`h-8 w-8 flex items-center justify-center rounded-full transition-colors ${voiceReplies ? 'text-accent bg-accent/15' : 'text-medium-gray hover:text-light-gray'}`}
                    >
                      {voiceReplies ? (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M19.07 4.93a10 10 0 010 14.14M5 9v6h4l5 5V4L9 9H5z" /></svg>
                      ) : (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 9v6h4l5 5V4L9 9H5zM17 9l4 4m0-4l-4 4" /></svg>
                      )}
                    </button>
                  )}
                  <button onClick={() => setOpen(false)} aria-label="Close" className="h-8 w-8 flex items-center justify-center text-medium-gray hover:text-light-gray">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div ref={bodyRef} data-lenis-prevent className="flex-grow overflow-y-auto px-4 py-4 space-y-3">
                {messages.map((m, i) => (
                  <div key={i} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                    <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.role === 'user' ? 'bg-accent text-primary font-medium' : 'bg-elevated/[0.06] text-light-gray border border-line/15'}`}>
                      <p className="whitespace-pre-line">{m.text}</p>
                      {m.actions?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {m.actions.map((a) => (
                            <button
                              key={a.label}
                              onClick={() => { a.run(); setOpen(false); }}
                              className="text-xs font-semibold text-accent bg-accent/10 border border-accent/30 rounded-full px-3 py-1 hover:bg-accent/20 transition-colors"
                            >
                              {a.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {typing && (
                  <div className="flex justify-start">
                    <div className="bg-elevated/[0.06] border border-line/15 rounded-2xl px-4 py-3 flex gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-medium-gray animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="h-1.5 w-1.5 rounded-full bg-medium-gray animate-bounce" style={{ animationDelay: '120ms' }} />
                      <span className="h-1.5 w-1.5 rounded-full bg-medium-gray animate-bounce" style={{ animationDelay: '240ms' }} />
                    </div>
                  </div>
                )}
                {/* Contextual follow-up questions after a reply */}
                {!typing && messages.length > 1 && messages[messages.length - 1].role === 'bot' && (() => {
                  const asked = messages.filter((m) => m.role === 'user').map((m) => m.text);
                  const fu = followups(asked, 3);
                  if (fu.length === 0) return null;
                  return (
                    <div className="pt-1">
                      <p className="text-[11px] text-medium-gray mb-2 ml-1">You might also ask</p>
                      <div className="flex flex-wrap gap-2">
                        {fu.map((q) => (
                          <button key={q} onClick={() => ask(q)} className="text-xs text-medium-gray border border-line/15 rounded-full px-3 py-1.5 hover:text-accent hover:border-accent/40 transition-colors">
                            {q}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Suggestions */}
              {messages.length <= 1 && (
                <div className="px-4 pb-2 flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button key={s} onClick={() => ask(s)} className="text-xs text-medium-gray border border-line/15 rounded-full px-3 py-1.5 hover:text-accent hover:border-accent/40 transition-colors">
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {/* Why voice input did nothing. role=status so a screen reader is
                  told too, instead of the failure being purely visual. */}
              {speechNote && (
                <p
                  role="status"
                  className="px-4 pb-1 pt-2 text-xs text-amber-300"
                >
                  {speechNote}
                </p>
              )}

              {/* Input */}
              <form
                onSubmit={(e) => { e.preventDefault(); ask(); }}
                className="flex items-center gap-2 p-3 border-t border-line/15"
              >
                {SpeechRec && (
                  <button
                    type="button"
                    onClick={startListening}
                    aria-label={listening ? 'Stop listening' : 'Speak your question'}
                    title="Speak your question"
                    className={`shrink-0 relative h-10 w-10 flex items-center justify-center rounded-full transition-colors ${listening ? 'bg-accent text-primary' : 'bg-primary/60 border border-line/15 text-medium-gray hover:text-accent hover:border-accent/40'}`}
                  >
                    {listening && <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />}
                    <svg className="relative h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-14 0m7 7v3m0-3a4 4 0 01-4-4V7a4 4 0 118 0v4a4 4 0 01-4 4z" /></svg>
                  </button>
                )}
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={listening ? 'Listening…' : 'Type or tap the mic…'}
                  aria-label="Ask a question"
                  className="flex-grow min-w-0 bg-primary/60 border border-line/15 rounded-full px-4 py-2.5 text-sm text-light-gray placeholder-medium-gray focus:outline-none focus:border-accent/50"
                />
                <button type="submit" aria-label="Send" className="shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-accent text-primary hover:bg-accent-hover transition-colors">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AskMe;
