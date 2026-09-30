// src/components/Section.jsx

import React from 'react';
import { motion } from 'framer-motion';
import ScrambleText from './ScrambleText';

// viewport.amount is 'some' (fire as soon as any part is visible) rather than a
// fraction. A fraction is a trap: once a section is taller than 1/amount times
// the viewport, that ratio can never be reached, the IntersectionObserver never
// fires, and the whole section stays stuck at opacity 0. #projects hit exactly
// that on a phone — 10,716px tall against an 844px screen tops out at 0.079,
// under the 0.1 it used to require, so no project ever appeared.
const Section = ({ id, title, eyebrow, intro, children }) => {
  return (
    <motion.section
      id={id}
      className="py-20 md:py-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mb-12">
        {eyebrow && (
          <p className="text-center text-xs sm:text-sm uppercase tracking-[0.25em] text-accent/80 font-semibold mb-3">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          <ScrambleText as="span" className="text-gradient" text={title} />
          <span className="text-accent">.</span>
          <span className="block mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-indigo-500" aria-hidden="true"></span>
        </h2>
        {intro && (
          <p className="mx-auto mt-5 max-w-2xl text-center text-medium-gray leading-relaxed">
            {intro}
          </p>
        )}
      </div>
      {children}
    </motion.section>
  );
};

export default Section;
