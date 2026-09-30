import React from 'react';
import { WHATSAPP_URL } from '../lib/whatsapp';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#clients', label: 'Clients' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Chaitanyachaowdary',
    path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/chaitanya-yelamasetty',
    path: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-4.47 6.029 0V24H24V13.869C24 5.989 15.078 6.279 12.982 10.155V8z',
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/chaitanyatarak9',
    path: 'M18.901 1.144h3.762L14.417 9.87l7.545 11.002h-6.24L11.564 12.012l-6.31 8.864H1.385l8.037-11.196L1.082 1.144h7.828l4.914 6.789L18.901 1.144z',
  },
];

// Footer standards this follows:
//   - <footer> with contentinfo semantics, and its nav labelled so a screen
//     reader can tell it apart from the header nav
//   - a back-to-top link, since the footer is the furthest point from the nav
//   - real contact routes (email, WhatsApp), not just social icons
//   - <address> for contact details and <time> for the copyright year, so the
//     year is machine-readable rather than plain text
//   - every target at least 44px, and external links carrying rel="noopener
//     noreferrer" with the new-tab behaviour announced
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-line/12 bg-secondary/40 backdrop-blur-sm">
      {/* pb-28 reserves room for the floating controls. They are fixed to the
          viewport, so at the very bottom of the page the Ask-AI launcher and the
          WhatsApp button sit directly on top of this last row — the Ask-AI pill
          was covering "Back to top" by 24px. */}
      <div className="container mx-auto px-6 md:px-12 pt-12 pb-28">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* identity */}
          <div>
            <p className="text-lg font-bold text-light-gray">Chaitanya Yelamasetty</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-medium-gray">
              Full Stack &amp; DevOps Engineer building accessibility-first software that
              people rely on to do their jobs.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-medium-gray">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for full-time &amp; freelance
            </p>
          </div>

          {/* section links */}
          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-medium-gray">
              Explore
            </h2>
            {/* Each link is 44px tall — WCAG 2.2 SC 2.5.8 Target Size (AA). */}
            <ul className="mt-3 grid grid-cols-2 gap-x-2 text-sm font-medium text-medium-gray">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center rounded-lg px-2 transition-colors duration-200 hover:bg-accent/10 hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-medium-gray">
              Get in touch
            </h2>
            <address className="mt-3 not-italic text-sm text-medium-gray">
              <a
                href="mailto:chaitanyachowdary4e3@gmail.com"
                className="inline-flex min-h-[44px] items-center rounded-lg px-2 -ml-2 transition-colors hover:bg-accent/10 hover:text-accent"
              >
                chaitanyachowdary4e3@gmail.com
              </a>
              <br />
              <a
                href="tel:+917993856293"
                className="inline-flex min-h-[44px] items-center rounded-lg px-2 -ml-2 transition-colors hover:bg-accent/10 hover:text-accent"
              >
                +91 79938 56293
              </a>
              <br />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center rounded-lg px-2 -ml-2 transition-colors hover:bg-accent/10 hover:text-accent"
              >
                WhatsApp
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <br />
              <span className="inline-flex items-center px-2 -ml-2">Bengaluru, India</span>
            </address>

            <ul className="mt-3 flex items-center gap-1">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} (opens in a new tab)`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full text-medium-gray transition-colors hover:bg-accent/10 hover:text-accent"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d={s.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-line/10 pt-6 sm:flex-row">
          <p className="text-xs text-medium-gray">
            &copy; <time dateTime={String(year)}>{year}</time> Chaitanya Yelamasetty. All rights
            reserved.
          </p>
          <a
            href="#hero"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg px-3 text-xs font-medium text-medium-gray transition-colors hover:bg-accent/10 hover:text-accent"
          >
            Back to top
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
