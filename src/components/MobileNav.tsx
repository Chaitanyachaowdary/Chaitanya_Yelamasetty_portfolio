import { Icon } from "./Icon";

const items = [
  { icon: "home", label: "HOME", href: "#top", active: true },
  { icon: "account_tree", label: "WORK", href: "#projects", active: false },
  { icon: "deployed_code", label: "STACK", href: "#stack", active: false },
  { icon: "mail", label: "CONNECT", href: "#contact", active: false },
];

export function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-obsidian-surface/80 backdrop-blur-xl border-t border-glass-stroke flex justify-around py-4">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={
            item.active
              ? "flex flex-col items-center gap-1 text-neon-cyan"
              : "flex flex-col items-center gap-1 text-on-surface-variant opacity-60"
          }
        >
          <Icon name={item.icon} />
          <span className="font-label-code text-[10px]">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
