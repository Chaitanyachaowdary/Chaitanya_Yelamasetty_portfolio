import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const SIZE = 600;

const Spotlight = () => {
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const sx = useSpring(x, { stiffness: 120, damping: 30, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 120, damping: 30, mass: 0.6 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const move = (e) => { x.set(e.clientX - SIZE / 2); y.set(e.clientY - SIZE / 2); };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[-1] rounded-full hidden md:block"
      style={{
        x: sx,
        y: sy,
        width: SIZE,
        height: SIZE,
        background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, rgba(99,102,241,0.05) 35%, transparent 65%)',
      }}
    />
  );
};

export default Spotlight;
