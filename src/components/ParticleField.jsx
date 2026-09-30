// src/components/ParticleField.jsx
// The hero backdrop: an aurora mesh built from a few oversized, heavily blurred
// radial gradients that drift slowly past each other.
//
// This replaced a three.js particle scene. That scene was an 832 KB download —
// larger than the entire rest of the site — for a decorative background, and the
// dense-points look reads as a 2010s WebGL demo. Soft mesh gradients are the
// current idiom and cost nothing: no WebGL context, no extra bytes, and it
// renders identically on a low-end phone.
//
// Motion is CSS-only and stops entirely under prefers-reduced-motion (the global
// rule in index.css), leaving the gradients in place as a static wash.
import React from 'react';

const BLOBS = [
  {
    className: 'left-[-10%] top-[-20%] h-[70vw] w-[70vw] sm:h-[46rem] sm:w-[46rem]',
    color: 'rgb(var(--c-accent) / 0.22)',
    animation: 'aurora-a 26s ease-in-out infinite',
  },
  {
    className: 'right-[-15%] top-[10%] h-[60vw] w-[60vw] sm:h-[40rem] sm:w-[40rem]',
    color: 'rgba(139, 92, 246, 0.18)',
    animation: 'aurora-b 32s ease-in-out infinite',
  },
  {
    className: 'left-[20%] bottom-[-25%] h-[55vw] w-[55vw] sm:h-[34rem] sm:w-[34rem]',
    color: 'rgba(236, 72, 153, 0.12)',
    animation: 'aurora-c 38s ease-in-out infinite',
  },
];

export default function ParticleField() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {BLOBS.map((b, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-[90px] sm:blur-[120px] ${b.className}`}
          style={{
            background: `radial-gradient(circle at 50% 50%, ${b.color} 0%, transparent 70%)`,
            animation: b.animation,
            willChange: 'transform',
          }}
        />
      ))}

      {/* a very faint grid, so the wash does not read as empty space */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgb(var(--c-line) / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--c-line) / 0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at 50% 40%, #000 25%, transparent 72%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, #000 25%, transparent 72%)',
        }}
      />
    </div>
  );
}
