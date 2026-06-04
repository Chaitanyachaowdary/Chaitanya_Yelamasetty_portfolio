import { useEffect } from 'react';

// Delegated mousemove → sets --mx/--my on the hovered .card so the CSS
// radial highlight follows the cursor (Vercel/Linear-style). Desktop only.
const CardGlow = () => {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const onMove = (e) => {
      const card = e.target.closest?.('.card');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  return null;
};

export default CardGlow;
