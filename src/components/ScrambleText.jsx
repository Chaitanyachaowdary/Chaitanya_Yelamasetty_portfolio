// src/components/ScrambleText.jsx
// "Decrypt" effect: text resolves from random glyphs, left to right, when it
// scrolls into view. Respects reduced-motion (shows the final text instantly).
import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

const GLYPHS = '!<>-_\\/[]{}—=+*^?#________';

export default function ScrambleText({ text, as: Tag = 'span', className = '', duration = 900 }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(reduce ? text : '');
  const started = useRef(false);

  useEffect(() => {
    if (reduce) { setDisplay(text); return; }
    if (!inView || started.current) return;
    started.current = true;

    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const revealed = Math.floor(p * text.length);
      let out = '';
      for (let i = 0; i < text.length; i++) {
        if (i < revealed || text[i] === ' ') out += text[i];
        else out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      setDisplay(out);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(text);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, text, duration]);

  return (
    <Tag ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{display || ' '}</span>
    </Tag>
  );
}
