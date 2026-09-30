// src/components/ProjectModal.jsx
// Full project detail dialog. Opened from a project card's "More info" button.
//
// Accessibility contract:
//   - role="dialog" + aria-modal on the panel (not the backdrop), labelled by the title
//   - focus moves into the dialog on open and returns to the trigger on close
//   - Tab is trapped inside; Escape closes
//   - page scroll is locked while open
//   - honours prefers-reduced-motion
import React, { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import useOverlayLock from '../lib/useOverlayLock';

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const Section = ({ title, children }) => (
  <section className="mt-6 first:mt-0">
    <h4 className="text-sm uppercase tracking-wider text-accent font-bold mb-2">{title}</h4>
    {children}
  </section>
);

const Bullets = ({ items }) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex gap-3 text-medium-gray leading-relaxed">
        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default function ProjectModal({ project, onClose }) {
  const reduce = useReducedMotion();
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const open = Boolean(project);

  // Trap Tab inside the panel and close on Escape.
  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const nodes = Array.from(panelRef.current.querySelectorAll(FOCUSABLE)).filter(
        (n) => n.offsetParent !== null
      );
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  // Freeze the page behind the dialog (body overflow + Lenis).
  useOverlayLock(open);

  // Remember the trigger, move focus in, and put it back on close.
  useEffect(() => {
    if (!open) return undefined;
    const trigger = document.activeElement;
    const t = setTimeout(() => closeRef.current?.focus(), 40);
    return () => {
      clearTimeout(t);
      if (trigger instanceof HTMLElement) trigger.focus({ preventScroll: true });
    };
  }, [open]);

  const d = project?.details;
  const titleId = 'project-modal-title';

  // Rendered into document.body: this component sits inside <Section>, which
  // framer-motion transforms, and a transformed ancestor would make the fixed
  // overlay position against that section instead of the viewport.
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9000] flex items-end sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.15 }}
          onMouseDown={onClose}
        >
          <div className="absolute inset-0 bg-dark/70 backdrop-blur-sm" />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            data-lenis-prevent
            className="relative w-full sm:max-w-2xl max-h-[88vh] overflow-y-auto bg-secondary border border-line/15 rounded-t-3xl sm:rounded-3xl shadow-2xl"
            initial={reduce ? { opacity: 0 } : { y: 40, opacity: 0, scale: 0.98 }}
            animate={reduce ? { opacity: 1 } : { y: 0, opacity: 1, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { y: 40, opacity: 0, scale: 0.98 }}
            transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 320, damping: 30 }}
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={onKeyDown}
          >
            {/* Cover */}
            <div className="relative aspect-[2/1] max-h-56 overflow-hidden rounded-t-3xl">
              <img
                src={
                  /^https?:/i.test(project.imageUrl)
                    ? project.imageUrl
                    : `${import.meta.env.BASE_URL}${project.imageUrl}`
                }
                alt=""
                width="1200"
                height="600"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent" />
              <button
                type="button"
                ref={closeRef}
                onClick={onClose}
                aria-label="Close project details"
                className="absolute top-3 right-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-dark/70 text-light-gray hover:bg-dark hover:text-accent transition-colors"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-xs uppercase tracking-wider text-accent font-bold mb-2">
                {project.category}
                {d?.period ? ` · ${d.period}` : ''}
              </p>
              <h3 id={titleId} className="text-2xl sm:text-3xl font-bold text-light-gray leading-tight">
                {project.title}
              </h3>

              <p className="mt-4 text-medium-gray leading-relaxed">{project.description}</p>

              {d?.role && (
                <Section title="My role">
                  <p className="text-medium-gray leading-relaxed">{d.role}</p>
                </Section>
              )}

              {d?.problem && (
                <Section title="The problem">
                  <p className="text-medium-gray leading-relaxed">{d.problem}</p>
                </Section>
              )}

              {d?.built?.length > 0 && (
                <Section title="What I built">
                  <Bullets items={d.built} />
                </Section>
              )}

              {d?.highlights?.length > 0 && (
                <Section title="Highlights">
                  <Bullets items={d.highlights} />
                </Section>
              )}

              {d?.facts?.length > 0 && (
                <Section title="At a glance">
                  <dl className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {d.facts.map(({ label, value }) => (
                      <div key={label} className="rounded-xl border border-line/15 bg-primary/40 px-3 py-2">
                        <dt className="text-[11px] uppercase tracking-wider text-medium-gray">{label}</dt>
                        <dd className="text-light-gray font-bold mt-0.5">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </Section>
              )}

              <Section title="Tech used">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-elevated/[0.06] border border-line/15 text-medium-gray text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Section>

              {d?.note && (
                <p className="mt-6 text-sm text-medium-gray border-l-2 border-accent/40 pl-4">{d.note}</p>
              )}

              {(project.liveUrl || project.repoUrl) && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-primary font-semibold hover:bg-accent-hover transition-colors"
                    >
                      {project.liveLabel || 'Live'}
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-line/20 text-light-gray font-semibold hover:border-accent hover:text-accent transition-colors"
                    >
                      Source code
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
