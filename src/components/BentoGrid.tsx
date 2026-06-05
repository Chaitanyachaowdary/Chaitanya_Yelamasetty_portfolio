import { Icon } from "./Icon";

type Tech = { name: string; icon: string };
type StackCategory = {
  key: string;
  icon: string;
  label: string;
  span: string; // md col-span
  accentText: string;
  accentBg: string;
  items: Tech[];
};

const I = (file: string) => `/icons/${file}`;

const categories: StackCategory[] = [
  {
    key: "FRONTEND",
    icon: "web",
    label: "Frontend",
    span: "md:col-span-8",
    accentText: "text-neon-cyan",
    accentBg: "bg-neon-cyan/20",
    items: [
      { name: "React.js", icon: I("react.svg") },
      { name: "Next.js", icon: I("nextjs.svg") },
      { name: "Vite", icon: I("vite.svg") },
      { name: "TypeScript", icon: I("typescript.svg") },
      { name: "HTML5", icon: I("html5.svg") },
      { name: "CSS3", icon: I("css3.svg") },
      { name: "Tailwind CSS", icon: I("tailwindcss.svg") },
    ],
  },
  {
    key: "LANGUAGES",
    icon: "code",
    label: "Languages",
    span: "md:col-span-4",
    accentText: "text-neon-purple",
    accentBg: "bg-neon-purple/20",
    items: [
      { name: "Java", icon: I("java.svg") },
      { name: "Python", icon: I("python.svg") },
      { name: "JavaScript", icon: I("javascript.svg") },
      { name: "TypeScript", icon: I("typescript.svg") },
    ],
  },
  {
    key: "BACKEND",
    icon: "dns",
    label: "Backend",
    span: "md:col-span-8",
    accentText: "text-data-green",
    accentBg: "bg-data-green/20",
    items: [
      { name: "Node.js", icon: I("nodejs.svg") },
      { name: "Hono", icon: I("hono.svg") },
      { name: "Zod", icon: I("zod.svg") },
      { name: "Spring Boot", icon: I("spring.svg") },
      { name: "Hibernate", icon: I("hibernate.svg") },
      { name: "FastAPI", icon: I("fastapi.svg") },
      { name: "REST APIs", icon: I("restapi.png") },
      { name: "Maven", icon: I("maven.svg") },
    ],
  },
  {
    key: "DATABASE",
    icon: "database",
    label: "Database",
    span: "md:col-span-4",
    accentText: "text-neon-cyan",
    accentBg: "bg-neon-cyan/20",
    items: [
      { name: "PostgreSQL", icon: I("postgresql.svg") },
      { name: "Drizzle ORM", icon: I("drizzle.svg") },
      { name: "Redis", icon: I("redis.svg") },
      { name: "MySQL", icon: I("mysql.svg") },
      { name: "MongoDB", icon: I("mongodb.svg") },
    ],
  },
  {
    key: "CLOUD",
    icon: "cloud",
    label: "Cloud",
    span: "md:col-span-4",
    accentText: "text-neon-purple",
    accentBg: "bg-neon-purple/20",
    items: [
      { name: "AWS", icon: I("aws.svg") },
      { name: "Vercel", icon: I("vercel.svg") },
      { name: "Cloudflare", icon: I("cloudflare.svg") },
    ],
  },
  {
    key: "TOOLS",
    icon: "build",
    label: "Tools",
    span: "md:col-span-8",
    accentText: "text-data-green",
    accentBg: "bg-data-green/20",
    items: [
      { name: "Git", icon: I("git.svg") },
      { name: "GitHub Actions", icon: I("githubactions.svg") },
      { name: "Docker", icon: I("docker.svg") },
      { name: "Postman", icon: I("postman.svg") },
      { name: "VS Code", icon: I("vscode.svg") },
      { name: "IntelliJ", icon: I("intellij.svg") },
      { name: "Eclipse", icon: I("eclipse.svg") },
    ],
  },
];

export function BentoGrid() {
  return (
    <section id="stack" className="px-margin-mobile md:px-margin-desktop py-24">
      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2 flex items-center gap-3">
        <Icon name="code_blocks" className="text-neon-cyan text-[0.8em]" />
        MY_TECH_STACK
      </h2>
      <p className="text-on-surface-variant mb-12 max-w-2xl">
        The tools I reach for to design, build and ship — from type-safe
        backends to polished, responsive interfaces.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {categories.map((c) => (
          <div
            key={c.key}
            className={`${c.span} glass-panel p-8 rounded-2xl group hover:border-neon-cyan/40 transition-all`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 ${c.accentBg} rounded-lg flex items-center justify-center`}
                >
                  <Icon name={c.icon} className={c.accentText} />
                </div>
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile">
                  {c.label}
                </h3>
              </div>
              <span className="font-status-telemetry text-status-telemetry text-on-surface-variant opacity-60">
                {String(c.items.length).padStart(2, "0")}_MODULES
              </span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {c.items.map((item) => (
                <span
                  key={item.name}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-glass-stroke text-body-sm text-on-surface-variant hover:text-on-surface hover:border-neon-cyan/40 transition-all"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.icon}
                    alt=""
                    aria-hidden
                    className="w-5 h-5 object-contain"
                  />
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
