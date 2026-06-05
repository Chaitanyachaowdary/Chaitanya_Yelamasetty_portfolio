import { Icon } from "./Icon";

const items = [
  { icon: "home", label: "Home", href: "#top", active: false },
  { icon: "account_tree", label: "Work", href: "#projects", active: true },
  { icon: "timeline", label: "Journey", href: "#experience", active: false },
  { icon: "deployed_code", label: "Stack", href: "#stack", active: false },
];

export function SideNav() {
  return (
    // pt-28 clears the fixed top nav so the rail's top icon doesn't collide with it
    <aside className="hidden md:flex fixed left-0 top-0 h-full z-40 flex-col items-center pt-28 pb-8 bg-obsidian-deep/80 backdrop-blur-2xl border-r border-glass-stroke w-20 hover:w-64 transition-all duration-500 group">
      <div className="mb-12 flex flex-col items-center group-hover:items-start group-hover:px-6 w-full">
        <div className="w-10 h-10 rounded-full border-2 border-neon-cyan overflow-hidden flex items-center justify-center mb-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-photo.webp"
            alt="Chaitanya"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="hidden group-hover:block transition-all">
          <p className="font-headline-lg-mobile text-headline-lg-mobile text-neon-cyan leading-none">
            CHAITANYA_Y
          </p>
          <p className="font-status-telemetry text-status-telemetry text-data-green">
            STATUS: AVAILABLE
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={
              item.active
                ? "flex items-center gap-4 px-6 py-3 bg-primary-container/20 text-neon-cyan border-r-2 border-neon-cyan transition-all"
                : "flex items-center gap-4 px-6 py-3 opacity-60 hover:opacity-100 transition-all"
            }
          >
            <Icon name={item.icon} />
            <span className="hidden group-hover:block font-label-code text-label-code">
              {item.label}
            </span>
          </a>
        ))}
      </div>
      <div className="mt-auto group-hover:px-6 w-full">
        <a
          href="#contact"
          className="w-10 h-10 group-hover:w-full group-hover:h-auto rounded bg-neon-cyan text-obsidian-deep flex items-center justify-center group-hover:py-3 transition-all"
        >
          <span className="group-hover:hidden">
            <Icon name="link" />
          </span>
          <span className="hidden group-hover:block font-label-code text-label-code font-bold">
            CONNECT_LINK
          </span>
        </a>
      </div>
    </aside>
  );
}
