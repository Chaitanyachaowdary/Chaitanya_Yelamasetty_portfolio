// src/components/CodeCard.jsx
// A short profile, written as source, that types itself in once.
//
// Deliberately NOT a fake macOS window: no traffic-light dots, no chrome, no
// line-number gutter. Those read as a screenshot of an editor from a decade ago.
// This is a flat glass surface with a hairline gradient edge, a single status
// row, and generous type — the code is the content, not the window around it.
//
// Two constraints it holds to:
//   - it types once and stops, so it is not indefinite motion with no way to
//     stop it (WCAG 2.2.2 Pause, Stop, Hide, Level A)
//   - under prefers-reduced-motion it renders complete, instantly
//
// Highlighting is token-based rather than regex-over-a-growing-string: each line
// is a list of {text, cls} pairs and the reveal walks that list, so colours are
// never wrong mid-type. The panel is aria-hidden and a plain-language summary is
// exposed instead — a screen reader should not have to sit through punctuation.
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const K = 'text-violet-300'; // keyword
const N = 'text-light-gray'; // identifier
const P = 'text-accent'; // property
const S = 'text-emerald-300'; // string
const B = 'text-amber-300'; // boolean
const X = 'text-medium-gray'; // punctuation
const C = 'text-medium-gray'; // comment

const LINES = [
  [['const', K], [' ', X], ['chaitanya', N], [' ', X], ['=', X], [' ', X], ['{', X]],
  [['  role', P], [': ', X], ["'Full Stack & DevOps Engineer'", S], [',', X]],
  [['  company', P], [': ', X], ["'CodeSage India'", S], [',', X]],
  [['  experience', P], [': ', X], ["'2+ years'", S], [',', X]],
  [['  based', P], [': ', X], ["'Bengaluru, India'", S], [',', X]],
  [['  stack', P], [': ', X], ['[', X], ["'React'", S], [', ', X], ["'TypeScript'", S], [', ', X], ["'Node.js'", S], [', ', X], ["'Postgres'", S], [']', X], [',', X]],
  [['  focus', P], [': ', X], ["'accessibility-first products'", S], [',', X]],
  [['  shipsToProduction', P], [': ', X], ['true', B], [',', X]],
  [['  openToWork', P], [': ', X], ['true', B], [',', X]],
  [['}', X]],
  [],
  [['// used daily by field officers who are blind', C]],
];

const SPOKEN =
  'Chaitanya Yelamasetty is a Full Stack and DevOps Engineer at CodeSage India, ' +
  'with 2+ years of experience, based in Bengaluru, India. He works with React, ' +
  'TypeScript, Node.js and Postgres, focused on accessibility-first products that ' +
  'are used daily by field officers who are blind. He ships to production and is open to work.';

const TOTAL_CHARS = LINES.reduce(
  (sum, line) => sum + line.reduce((s, [t]) => s + t.length, 0),
  0
);

export default function CodeCard() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 'some' });
  const [revealed, setRevealed] = useState(0);
  const done = revealed >= TOTAL_CHARS;

  useEffect(() => {
    if (reduce) {
      setRevealed(TOTAL_CHARS);
      return undefined;
    }
    if (!inView) return undefined;

    let raf;
    const step = () => {
      setRevealed((n) => {
        const next = n + 3; // ~1.5s for the whole block
        if (next < TOTAL_CHARS) raf = requestAnimationFrame(step);
        return Math.min(next, TOTAL_CHARS);
      });
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce]);

  let budget = revealed;
  const rendered = LINES.map((line, li) => {
    const parts = [];
    for (let ti = 0; ti < line.length; ti++) {
      const [text, cls] = line[ti];
      if (budget <= 0) break;
      const slice = text.slice(0, budget);
      budget -= slice.length;
      parts.push(
        <span key={ti} className={cls}>
          {slice}
        </span>
      );
    }
    return { key: li, parts, empty: line.length === 0 };
  });
  const activeLine = rendered.findLastIndex((r) => r.parts.length > 0);

  return (
    <motion.div
      ref={ref}
      className="relative mx-auto mt-16 w-full max-w-2xl"
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: reduce ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* soft ambient glow, sitting behind the panel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[28px] bg-gradient-to-br from-accent/25 via-transparent to-violet-500/20 blur-lg"
      />

      <div className="relative overflow-hidden rounded-[26px] border border-line/15 bg-elevated/[0.05] backdrop-blur-xl">
        {/* hairline highlight along the top edge */}
        <div
          aria-hidden="true"
          className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        />

        <div className="flex items-center justify-between px-6 pt-5 sm:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-medium-gray">
            chaitanya.ts
          </span>
          <span className="inline-flex items-center gap-2 text-[11px] font-medium text-medium-gray">
            <span
              aria-hidden="true"
              className={`h-1.5 w-1.5 rounded-full ${done ? 'bg-emerald-400' : 'bg-accent'}`}
            />
            {done ? 'ready' : 'writing'}
          </span>
        </div>

        <pre
          aria-hidden="true"
          className="overflow-x-auto px-6 pb-7 pt-5 text-[13px] leading-[1.9] sm:px-8 sm:text-[14px]"
        >
          <code className="font-mono">
            {rendered.map(({ key, parts, empty }) => (
              <div key={key}>
                {empty ? ' ' : parts}
                {!done && key === activeLine && (
                  <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[3px] rounded-full bg-accent" />
                )}
              </div>
            ))}
          </code>
        </pre>
      </div>

      <p className="sr-only">{SPOKEN}</p>
    </motion.div>
  );
}
