// src/components/ThemeToggle.jsx
// Light/dark switch.
//
// The theme is written to data-theme on <html>; every colour token in
// index.css keys off that, so nothing here needs to know about individual
// colours. The initial value is resolved by an inline script in index.html
// BEFORE first paint — doing it here would flash the wrong theme on load.
//
// It is a real <button> with aria-pressed, so a screen reader announces the
// current state rather than just "button".
import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'cy_theme';

function currentTheme() {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

// Keep <meta name="theme-color"> in step, so the mobile browser chrome matches
// the page instead of staying on whatever the pre-paint script set at load.
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'light' ? '#f8fafc' : '#0b1120');
}

export default function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState(currentTheme);

  // Follow the OS setting for as long as the visitor has not chosen for themselves.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = (e) => {
      let stored = null;
      try {
        stored = localStorage.getItem(STORAGE_KEY);
      } catch {
        /* storage can be blocked; fall through to the OS preference */
      }
      if (stored) return;
      const next = e.matches ? 'light' : 'dark';
      applyTheme(next);
      setTheme(next);
    };
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  const toggle = () => {
    // Read the live attribute rather than React state. State can drift from the
    // DOM — the pre-paint script in index.html sets the attribute before this
    // component ever mounts — and a stale read makes the first click a no-op.
    const next = currentTheme() === 'light' ? 'dark' : 'light';
    applyTheme(next);
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* not fatal — the theme still applies for this visit */
    }
  };

  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isLight}
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      title={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-line/15 text-medium-gray transition-colors hover:border-accent/50 hover:text-accent ${className}`}
    >
      {isLight ? (
        // moon — the action available, i.e. "go dark"
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        // sun
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      )}
    </button>
  );
}
