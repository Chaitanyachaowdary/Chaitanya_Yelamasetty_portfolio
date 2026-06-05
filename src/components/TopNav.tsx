export function TopNav() {
  const links = [
    { label: "Work", href: "#projects", active: true },
    { label: "Journey", href: "#experience", active: false },
    { label: "Stack", href: "#stack", active: false },
    { label: "Connect", href: "#contact", active: false },
  ];
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 bg-obsidian-surface/60 backdrop-blur-xl border-b border-glass-stroke">
      <div className="flex items-center gap-4">
        <span className="font-headline-lg text-headline-lg font-black text-neon-cyan tracking-tighter">
          CHAITANYA_Y
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={
              l.active
                ? "text-neon-cyan font-bold border-b-2 border-neon-cyan pb-1 font-body-md text-body-md"
                : "text-on-surface-variant font-medium hover:text-neon-purple transition-all duration-300 font-body-md text-body-md"
            }
          >
            {l.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/Chaitanyachaowdary"
          target="_blank"
          rel="noopener noreferrer"
          className="material-symbols-outlined text-on-surface-variant hover:text-neon-cyan transition-colors"
          aria-label="GitHub"
        >
          code
        </a>
        <a
          href="mailto:ychaitanya317@gmail.com"
          className="material-symbols-outlined text-on-surface-variant hover:text-neon-cyan transition-colors"
          aria-label="Email"
        >
          mail
        </a>
      </div>
    </nav>
  );
}
