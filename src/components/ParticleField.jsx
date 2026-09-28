// src/components/ParticleField.jsx
// Accessibility-first gate for the 3D hero backdrop.
// Renders the WebGL scene ONLY when motion is allowed and WebGL exists;
// otherwise renders nothing (the CSS background still shows through).
// The heavy three.js scene is code-split via React.lazy, so reduced-motion
// visitors never download it.
import React, { useState, useEffect, Suspense, lazy } from 'react';

const ParticleScene = lazy(() => import('./ParticleScene.jsx'));

export default function ParticleField() {
  const [enabled, setEnabled] = useState(false);
  // Defer mounting until AFTER the hero's entrance animations have played.
  // The lazy 3D Canvas suspends on first render; if it mounts during the hero's
  // initial render, React discards that render and the framer-motion enter
  // animations get skipped (content stays hidden at opacity:0). Mounting late
  // fully decouples the 3D from those animations.
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const hasWebGL = (() => {
      try {
        const c = document.createElement('canvas');
        return !!(c.getContext('webgl') || c.getContext('experimental-webgl'));
      } catch {
        return false;
      }
    })();
    const update = () => setEnabled(!mq.matches && hasWebGL);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const t = setTimeout(() => setReady(true), 1300); // after hero animations
    return () => clearTimeout(t);
  }, [enabled]);

  if (!enabled || !ready) return null;

  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none opacity-70">
      <Suspense fallback={null}>
        <ParticleScene />
      </Suspense>
    </div>
  );
}
