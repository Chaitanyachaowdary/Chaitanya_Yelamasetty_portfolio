const links = [
  { label: "GitHub", href: "https://github.com/Chaitanyachaowdary", icon: "/icons/github.svg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chaitanya-yelamasetty", icon: "/icons/linkedin.svg" },
  { label: "Email", href: "mailto:ychaitanya317@gmail.com", icon: "/icons/gmail.svg" },
  { label: "X", href: "https://x.com/Chaitanya154975", icon: "/icons/x.svg" },
];

export function Footer() {
  return (
    <footer className="w-full py-gutter px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-6 bg-obsidian-surface border-t border-glass-stroke">
      <div className="flex flex-col items-center md:items-start gap-2">
        <span className="font-label-code text-label-code text-on-surface-variant opacity-60">
          © 2026 CHAITANYA YELAMASETTY // BUILT_WITH_NEXT.JS
        </span>
        <span className="font-status-telemetry text-status-telemetry text-data-green tracking-widest">
          STATUS: AVAILABLE FOR WORK
        </span>
      </div>

      {/* Single set of social links (icon + label) */}
      <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-1.5 text-on-surface-variant font-label-code text-label-code hover:text-neon-cyan transition-colors"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={l.icon} alt="" aria-hidden className="w-4 h-4 object-contain" />
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
