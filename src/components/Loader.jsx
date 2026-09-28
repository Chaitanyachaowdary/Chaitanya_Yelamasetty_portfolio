// src/components/Loader.jsx
// Branded intro loader: name + role animate in, a progress line fills,
// then the overlay lifts to reveal the site. Shows once per browser session.
// Fully accessibility-safe: with reduced-motion (or a repeat visit) it never
// blocks the page — it returns null immediately.
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const SEEN_KEY = 'cy_intro_seen';

export default function Loader() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem(SEEN_KEY) === '1'; } catch { /* ignore */ }
    if (seen || reduce) return; // repeat visit or reduced-motion → no loader
    setShow(true);
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => {
      setShow(false);
      try { sessionStorage.setItem(SEEN_KEY, '1'); } catch { /* ignore */ }
    }, 2100);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = '';
    };
  }, [reduce]);

  return (
    <AnimatePresence onExitComplete={() => { document.body.style.overflow = ''; }}>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary"
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            className="text-3xl sm:text-5xl font-extrabold tracking-tightest text-center px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-light-gray">Chaitanya </span>
            <span className="text-gradient">Yelamasetty</span>
          </motion.div>

          <motion.p
            className="mt-3 text-medium-gray text-sm sm:text-base tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Full Stack &amp; DevOps Engineer
          </motion.p>

          <div className="mt-8 h-[3px] w-48 sm:w-64 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent to-indigo-500"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.7, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
