"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

type Msg = { role: "agent" | "user"; text: string };

const CANNED: { match: string; reply: string }[] = [
  {
    match: "stack",
    reply:
      "Core stack: React 19, TypeScript & Tailwind on the front end; Node.js + Hono, Zod, PostgreSQL + Drizzle on the back end. Also comfortable with Java/Spring Boot, Python and AWS.",
  },
  {
    match: "available",
    reply:
      "Yes — Chaitanya is open to full-time Full Stack / UI-UX roles and freelance projects. Drop a message via the uplink form or email ychaitanya317@gmail.com.",
  },
  {
    match: "freelance",
    reply:
      "Absolutely — freelance and contract work is welcome. Share your project via the uplink form and you'll get a reply soon.",
  },
  {
    match: "portfolio",
    reply:
      "See the Work section above — WhatsApp Clone, Veltore AI Studio, Health Care Dashboard, ChatGPT Clone and more. Full list: github.com/Chaitanyachaowdary.",
  },
];

function replyFor(query: string): string {
  const q = query.toLowerCase();
  const hit = CANNED.find((c) => q.includes(c.match));
  return (
    hit?.reply ??
    "Thanks for the message! Chaitanya will get back to you shortly — the uplink form and ychaitanya317@gmail.com are the fastest channels."
  );
}

export function Contact() {
  const rootRef = useRef<HTMLElement>(null);
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "agent",
      text: "Hi! I'm Chaitanya's assistant. Ask about my stack, availability or work — or use the uplink form to send a message directly.",
    },
  ]);
  const [input, setInput] = useState("");
  const [sent, setSent] = useState(false);

  // Reveal on scroll.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const targets = root.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  // Keep the chat pinned to the latest message — but scroll ONLY the chat box,
  // never the page (scrollIntoView would auto-jump the whole page to this section).
  useEffect(() => {
    const box = chatBoxRef.current;
    if (box) box.scrollTop = box.scrollHeight;
  }, [messages]);

  const sendQuery = (text: string) => {
    const q = text.trim();
    if (!q) return;
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    window.setTimeout(
      () => setMessages((m) => [...m, { role: "agent", text: replyFor(q) }]),
      400
    );
  };

  return (
    <section
      id="contact"
      ref={rootRef}
      className="px-margin-mobile md:px-margin-desktop py-24 max-w-[1440px] mx-auto"
    >
      {/* Header */}
      <div className="mb-16 reveal">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-label-code text-label-code text-neon-cyan tracking-widest block mb-2 uppercase">
              Contact
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-background flex items-center gap-4">
              <Icon name="handshake" className="text-neon-cyan text-[0.8em]" />
              LET&apos;S CONNECT
            </h2>
          </div>
          <div className="glass-card px-6 py-3 rounded-xl border border-data-green/30">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-data-green opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-data-green" />
              </span>
              <span className="font-status-telemetry text-status-telemetry text-data-green tracking-tighter">
                AVAILABLE FOR FREELANCE
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Agent chat */}
        <div className="md:col-span-7 flex flex-col gap-gutter reveal">
          <div className="glass-card rounded-2xl overflow-hidden flex flex-col h-[600px] border border-neon-purple/20">
            <div className="bg-obsidian-deep px-6 py-4 border-b border-glass-stroke flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-error" />
                <div className="w-2 h-2 rounded-full bg-tertiary-container" />
                <div className="w-2 h-2 rounded-full bg-data-green" />
                <span className="ml-4 font-label-code text-label-code text-on-surface-variant">
                  ask-me-anything
                </span>
              </div>
              <span className="font-status-telemetry text-status-telemetry text-on-surface-variant/40">
                ONLINE
              </span>
            </div>

            <div
              ref={chatBoxRef}
              className="flex-1 p-6 overflow-y-auto custom-scrollbar font-label-code text-label-code space-y-6"
            >
              {messages.map((m, i) =>
                m.role === "agent" ? (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full border border-neon-cyan flex-shrink-0 agent-pulse overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt="Chaitanya avatar"
                        className="w-full h-full object-cover object-top rounded-full"
                        src="/hero-photo.webp"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="bg-surface-container px-4 py-3 rounded-tr-xl rounded-br-xl rounded-bl-xl border border-glass-stroke max-w-[80%]">
                        <p className="text-neon-cyan mb-1">AGENT_01:</p>
                        <span className="text-on-surface-variant leading-relaxed">
                          {m.text}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={i} className="flex justify-end">
                    <div className="bg-neon-cyan/10 border border-neon-cyan/30 px-4 py-3 rounded-tl-xl rounded-br-xl rounded-bl-xl max-w-[80%]">
                      <p className="text-neon-cyan mb-1">USER:</p>
                      <span className="text-on-surface leading-relaxed">
                        {m.text}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="p-6 border-t border-glass-stroke bg-obsidian-deep/40">
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "What is your stack?",
                  "Are you available?",
                  "Show me your portfolio",
                ].map((q) => (
                  <button
                    key={q}
                    onClick={() => sendQuery(q)}
                    className="font-label-code text-[10px] px-3 py-1 rounded-full border border-glass-stroke hover:border-neon-cyan hover:text-neon-cyan transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
              <form
                className="relative flex items-center"
                onSubmit={(e) => {
                  e.preventDefault();
                  sendQuery(input);
                }}
              >
                <span className="absolute left-4 text-neon-cyan font-bold">
                  &gt;
                </span>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full bg-obsidian-surface border border-glass-stroke rounded-lg py-3 pl-10 pr-12 font-label-code text-label-code focus:outline-none focus:border-neon-cyan transition-all"
                  placeholder="Type a message..."
                  type="text"
                />
                <button
                  type="submit"
                  aria-label="Send"
                  className="absolute right-4 text-neon-cyan hover:text-neon-purple material-symbols-outlined transition-colors"
                >
                  send
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Uplink form */}
        <div className="md:col-span-5 reveal">
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 p-4 font-status-telemetry text-status-telemetry text-on-surface-variant/30">
              DIRECT MESSAGE
            </div>
            <div className="mb-8">
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-neon-cyan mb-2">
                SEND A MESSAGE
              </h3>
              <div className="w-12 h-1 bg-neon-cyan" />
            </div>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="space-y-2 input-glow">
                <label className="font-label-code text-label-code text-on-surface-variant/80 uppercase flex items-center gap-1.5">
                  <Icon name="badge" className="text-[14px]" />
                  Your Name
                </label>
                <input
                  required
                  className="w-full bg-transparent border-b border-glass-stroke focus:border-neon-cyan py-3 font-label-code text-on-background focus:outline-none transition-all placeholder:text-on-surface-variant/30"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
              <div className="space-y-2 input-glow">
                <label className="font-label-code text-label-code text-on-surface-variant/80 uppercase flex items-center gap-1.5">
                  <Icon name="mail" className="text-[14px]" />
                  Email
                </label>
                <input
                  required
                  className="w-full bg-transparent border-b border-glass-stroke focus:border-neon-cyan py-3 font-label-code text-on-background focus:outline-none transition-all placeholder:text-on-surface-variant/30"
                  placeholder="email@domain.com"
                  type="email"
                />
              </div>
              <div className="space-y-2 input-glow">
                <label className="font-label-code text-label-code text-on-surface-variant/80 uppercase flex items-center gap-1.5">
                  <Icon name="chat" className="text-[14px]" />
                  Message
                </label>
                <textarea
                  required
                  className="w-full bg-transparent border-b border-glass-stroke focus:border-neon-cyan py-3 font-label-code text-on-background focus:outline-none transition-all placeholder:text-on-surface-variant/30 resize-none"
                  placeholder="Describe the mission parameters..."
                  rows={6}
                />
              </div>
              <div className="pt-6">
                <button
                  className="w-full bg-neon-cyan text-on-primary font-headline-lg-mobile text-[16px] py-4 rounded hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                  type="submit"
                  disabled={sent}
                >
                  <Icon name={sent ? "check_circle" : "send"} />
                  {sent ? "MESSAGE SENT" : "SEND MESSAGE"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Signal channels */}
        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-gutter mt-8 reveal">
          {[
            {
              img: "/icons/gmail.svg",
              border: "border-neon-cyan",
              color: "text-neon-cyan",
              bg: "bg-primary-container/10",
              hover: "hover:bg-neon-cyan/5",
              label: "Email",
              value: "ychaitanya317@gmail.com",
              href: "mailto:ychaitanya317@gmail.com",
              valueHover: "group-hover:text-neon-cyan",
            },
            {
              img: "/icons/github.svg",
              border: "border-neon-purple",
              color: "text-neon-purple",
              bg: "bg-secondary-container/10",
              hover: "hover:bg-neon-purple/5",
              label: "GitHub",
              value: "github.com/Chaitanyachaowdary",
              href: "https://github.com/Chaitanyachaowdary",
              valueHover: "group-hover:text-neon-purple",
            },
            {
              img: "/icons/linkedin.svg",
              border: "border-data-green",
              color: "text-data-green",
              bg: "bg-data-green/10",
              hover: "hover:bg-data-green/5",
              label: "LinkedIn",
              value: "linkedin.com/in/chaitanya-yelamasetty",
              href: "https://www.linkedin.com/in/chaitanya-yelamasetty",
              valueHover: "group-hover:text-data-green",
            },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card p-6 rounded-xl border-l-2 ${c.border} group hover:scale-[1.02] ${c.hover} transition-all`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-10 h-10 rounded-lg ${c.bg} flex items-center justify-center`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.img}
                    alt=""
                    aria-hidden
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <h4 className="font-label-code text-label-code text-on-background">
                  {c.label}
                </h4>
              </div>
              <p
                className={`text-[18px] text-on-surface-variant ${c.valueHover} transition-colors break-words`}
              >
                {c.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
