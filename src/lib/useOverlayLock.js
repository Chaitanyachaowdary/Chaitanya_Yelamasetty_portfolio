// src/lib/useOverlayLock.js
// Freezes the page behind an open overlay.
//
// Setting body overflow is not enough on this site: Lenis drives scrolling from
// its own rAF loop bound to window, so the page keeps moving behind a modal
// unless Lenis is stopped too. Everything that covers the page — the project
// dialog, the command palette, the Ask-AI panel and the intro loader — uses
// this so the behaviour is identical in all of them.
//
// IMPORTANT: any scrollable element INSIDE an overlay needs `data-lenis-prevent`
// on it. Lenis listens for wheel events on the document and preventDefaults
// them, which silently kills native scrolling in nested containers — the chat
// transcript, the dialog body and the command-palette list all hit this.
import { useEffect } from 'react';

export default function useOverlayLock(open) {
  useEffect(() => {
    if (!open) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.__lenis?.stop();
    return () => {
      document.body.style.overflow = prevOverflow;
      window.__lenis?.start();
    };
  }, [open]);
}
