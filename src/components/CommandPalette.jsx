import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis?.scrollTo) window.__lenis.scrollTo(el, { offset: -80 });
  else el.scrollIntoView({ behavior: 'smooth' });
};

const NavIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
);
const LinkIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
);
const MailIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);

const SparkIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-6.714 2.143L12 21l-2.286-6.857L3 12l6.714-2.143L12 3z" /></svg>
);

const COMMANDS = [
  { group: 'Assistant', label: 'Ask AI about me', kind: 'action', action: () => window.__openAskMe?.(), icon: <SparkIcon /> },
  { group: 'Navigate', label: 'Home', kind: 'nav', action: () => scrollToId('hero'), icon: <NavIcon /> },
  { group: 'Navigate', label: 'About', kind: 'nav', action: () => scrollToId('about'), icon: <NavIcon /> },
  { group: 'Navigate', label: 'Experience', kind: 'nav', action: () => scrollToId('experience'), icon: <NavIcon /> },
  { group: 'Navigate', label: 'Client Work', kind: 'nav', action: () => scrollToId('clients'), icon: <NavIcon /> },
  { group: 'Navigate', label: 'Skills', kind: 'nav', action: () => scrollToId('skills'), icon: <NavIcon /> },
  { group: 'Navigate', label: 'Projects', kind: 'nav', action: () => scrollToId('projects'), icon: <NavIcon /> },
  { group: 'Navigate', label: 'Certifications', kind: 'nav', action: () => scrollToId('certifications'), icon: <NavIcon /> },
  { group: 'Navigate', label: 'Education', kind: 'nav', action: () => scrollToId('education'), icon: <NavIcon /> },
  { group: 'Navigate', label: 'Contact', kind: 'nav', action: () => scrollToId('contact'), icon: <NavIcon /> },
  { group: 'Connect', label: 'Email me', kind: 'link', action: () => { window.location.href = 'mailto:ychaitanya317@gmail.com'; }, icon: <MailIcon /> },
  { group: 'Connect', label: 'GitHub', kind: 'link', action: () => window.open('https://github.com/Chaitanyachaowdary', '_blank'), icon: <LinkIcon /> },
  { group: 'Connect', label: 'LinkedIn', kind: 'link', action: () => window.open('https://www.linkedin.com/in/chaitanya-yelamasetty', '_blank'), icon: <LinkIcon /> },
  { group: 'Connect', label: 'X (Twitter)', kind: 'link', action: () => window.open('https://x.com/Chaitanya154975', '_blank'), icon: <LinkIcon /> },
];

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? COMMANDS.filter((c) => c.label.toLowerCase().includes(q) || c.group.toLowerCase().includes(q)) : COMMANDS;
  }, [query]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [open]);

  useEffect(() => { setActive(0); }, [query]);

  const run = (cmd) => {
    setOpen(false);
    setTimeout(() => cmd.action(), 120);
  };

  const onInputKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => Math.min(a + 1, filtered.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === 'Enter') { e.preventDefault(); if (filtered[active]) run(filtered[active]); }
  };

  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-idx="${active}"]`);
    el?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  // expose a global opener so other components (header hint) can trigger it
  useEffect(() => {
    window.__openCommandPalette = () => setOpen(true);
    return () => { delete window.__openCommandPalette; };
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-start justify-center px-4 pt-[15vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <div className="absolute inset-0 bg-dark/70 backdrop-blur-sm" />
          <motion.div
            className="relative w-full max-w-xl bg-secondary/90 backdrop-blur-xl border border-accent/20 rounded-2xl shadow-2xl shadow-accent/10 overflow-hidden"
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-secondary">
              <svg className="h-5 w-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKey}
                placeholder="Type a command or search…"
                className="flex-grow bg-transparent text-light-gray placeholder-medium-gray focus:outline-none text-base"
              />
              <kbd className="hidden sm:block text-[10px] text-medium-gray border border-secondary rounded px-1.5 py-0.5">ESC</kbd>
            </div>

            <div ref={listRef} className="max-h-[320px] overflow-y-auto py-2">
              {filtered.length === 0 && (
                <p className="text-center text-medium-gray text-sm py-6">No results</p>
              )}
              {filtered.map((cmd, i) => {
                const showGroup = i === 0 || filtered[i - 1].group !== cmd.group;
                return (
                  <React.Fragment key={cmd.label}>
                    {showGroup && (
                      <p className="px-4 pt-3 pb-1 text-[11px] uppercase tracking-wider text-medium-gray/70 font-semibold">{cmd.group}</p>
                    )}
                    <button
                      data-idx={i}
                      onMouseEnter={() => setActive(i)}
                      onClick={() => run(cmd)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${i === active ? 'bg-accent/15 text-light-gray' : 'text-medium-gray hover:text-light-gray'}`}
                    >
                      <span className={i === active ? 'text-accent' : 'text-medium-gray'}>{cmd.icon}</span>
                      <span className="flex-grow text-sm font-medium">{cmd.label}</span>
                      {i === active && <span className="text-[10px] text-medium-gray">↵</span>}
                    </button>
                  </React.Fragment>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
