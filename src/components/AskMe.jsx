import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { answer, SUGGESTIONS, followups } from '../lib/answerEngine';

const SpeechRec = typeof window !== 'undefined' ? (window.SpeechRecognition || window.webkitSpeechRecognition) : null;
const ttsSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

const AskMe = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [listening, setListening] = useState(false);
  const [voiceReplies, setVoiceReplies] = useState(false);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);
  const recRef = useRef(null);
  const voiceRepliesRef = useRef(false);

  useEffect(() => { voiceRepliesRef.current = voiceReplies; }, [voiceReplies]);

  const speak = (text) => {
    if (!ttsSupported) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 1.05; u.pitch = 1; u.lang = 'en-US';
    window.speechSynthesis.speak(u);
  };
  const stopSpeaking = () => { if (ttsSupported) window.speechSynthesis.cancel(); };

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
    if (!open) { stopSpeaking(); try { recRef.current?.stop(); } catch { /* noop */ } setListening(false); }
  }, [open]);

  const startListening = () => {
    if (!SpeechRec) return;
    if (listening) { try { recRef.current?.stop(); } catch { /* noop */ } return; }
    const rec = new SpeechRec();
    rec.lang = 'en-US';
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    rec.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      setInput(transcript);
      ask(transcript);
    };
    rec.onend = () => setListening(false);
    rec.onerror = () => setListening(false);
    recRef.current = rec;
    setListening(true);
    stopSpeaking();
    rec.start();
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

  const ask = (text) => {
    const q = (text ?? input).trim();
    if (!q) return;
    setMessages((m) => [...m, { role: 'user', text: q }]);
    setInput('');
    setTyping(true);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delay = reduced ? 0 : 450;
    setTimeout(() => {
      setTyping(false);
      const a = answer(q);
      setMessages((m) => [...m, { role: 'bot', ...a }]);
      if (voiceRepliesRef.current) speak(a.text);
    }, delay);
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
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
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
              <div ref={bodyRef} className="flex-grow overflow-y-auto px-4 py-4 space-y-3">
                {messages.map((m, i) => (
                  <div key={i} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                    <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.role === 'user' ? 'bg-accent text-primary font-medium' : 'bg-white/5 text-light-gray border border-white/10'}`}>
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
                    <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 flex gap-1">
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
                      <p className="text-[11px] text-medium-gray/70 mb-2 ml-1">You might also ask</p>
                      <div className="flex flex-wrap gap-2">
                        {fu.map((q) => (
                          <button key={q} onClick={() => ask(q)} className="text-xs text-medium-gray border border-white/10 rounded-full px-3 py-1.5 hover:text-accent hover:border-accent/40 transition-colors">
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
                    <button key={s} onClick={() => ask(s)} className="text-xs text-medium-gray border border-white/10 rounded-full px-3 py-1.5 hover:text-accent hover:border-accent/40 transition-colors">
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <form
                onSubmit={(e) => { e.preventDefault(); ask(); }}
                className="flex items-center gap-2 p-3 border-t border-white/10"
              >
                {SpeechRec && (
                  <button
                    type="button"
                    onClick={startListening}
                    aria-label={listening ? 'Stop listening' : 'Speak your question'}
                    title="Speak your question"
                    className={`shrink-0 relative h-10 w-10 flex items-center justify-center rounded-full transition-colors ${listening ? 'bg-accent text-primary' : 'bg-primary/60 border border-white/10 text-medium-gray hover:text-accent hover:border-accent/40'}`}
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
                  className="flex-grow min-w-0 bg-primary/60 border border-white/10 rounded-full px-4 py-2.5 text-sm text-light-gray placeholder-medium-gray focus:outline-none focus:border-accent/50"
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
