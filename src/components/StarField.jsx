import React, { useEffect, useRef } from 'react';

// Lightweight canvas starfield — replaces the heavy three.js background.
// ~3KB, slow drift + subtle twinkle, reduced-motion aware, pauses when hidden.
const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let w, h, dpr, stars, raf;

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(Math.floor((w * h) / 9000), 180);
      stars = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.3 + 0.3,
        a: Math.random() * 0.5 + 0.2,
        tw: Math.random() * 0.02 + 0.005,
        tp: Math.random() * Math.PI * 2,
        accent: i % 14 === 0,
        vy: Math.random() * 0.06 + 0.02,
      }));
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        const twinkle = reduced ? s.a : s.a + Math.sin(t * s.tw + s.tp) * 0.25;
        ctx.globalAlpha = Math.max(0.05, Math.min(1, twinkle));
        ctx.fillStyle = s.accent ? '#38bdf8' : '#cdd9ef';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        if (!reduced) {
          s.y += s.vy;
          if (s.y > h + 2) { s.y = -2; s.x = Math.random() * w; }
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    const start = () => { if (!raf) raf = requestAnimationFrame(draw); };
    const stop = () => { if (raf) { cancelAnimationFrame(raf); raf = null; } };

    build();
    if (reduced) { draw(0); stop(); } else { start(); }

    const onResize = () => { build(); };
    const onVis = () => { if (document.hidden) stop(); else if (!reduced) start(); };
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVis);

    return () => {
      stop();
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] bg-primary" aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full" />
      {/* subtle aurora wash for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(900px circle at 75% 15%, rgba(56,189,248,0.06), transparent 55%), radial-gradient(700px circle at 10% 80%, rgba(99,102,241,0.05), transparent 55%)' }}
      />
    </div>
  );
};

export default StarField;
