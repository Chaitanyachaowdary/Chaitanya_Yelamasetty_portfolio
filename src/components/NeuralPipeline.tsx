import { Icon } from "./Icon";

const stages = [
  {
    icon: "brush",
    iconColor: "text-neon-purple",
    iconBg: "bg-neon-purple/20",
    stage: "STAGE_01",
    stageColor: "text-neon-purple",
    border: "border-neon-purple/20",
    title: "UI/UX_CORE",
    body: "Designing responsive, pixel-perfect interfaces with React 19, Tailwind and shadcn/ui — clean flows that feel effortless.",
    tags: ["React_19", "Tailwind", "shadcn/ui"],
  },
  {
    icon: "code",
    iconColor: "text-neon-cyan",
    iconBg: "bg-neon-cyan/20",
    stage: "STAGE_02",
    stageColor: "text-neon-cyan",
    border: "border-neon-cyan/20",
    title: "FULL_STACK",
    body: "Type-safe REST APIs with Node.js + Hono and Zod, backed by PostgreSQL 17 and Drizzle ORM for end-to-end type safety.",
    tags: ["Node.js", "Hono", "PostgreSQL"],
  },
  {
    icon: "rocket_launch",
    iconColor: "text-data-green",
    iconBg: "bg-data-green/20",
    stage: "STAGE_03",
    stageColor: "text-data-green",
    border: "border-data-green/20",
    title: "DEPLOY_&_SCALE",
    body: "Dockerized services on AWS (EC2, S3), real-time SSE, and background jobs via BullMQ + Redis — shipped with CI/CD.",
    tags: ["Docker", "AWS", "GitHub_Actions"],
  },
];

export function NeuralPipeline() {
  return (
    <section
      id="synapse"
      className="px-margin-mobile md:px-margin-desktop py-24 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neon-purple/5 to-transparent pointer-events-none" />
      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 flex items-center gap-3">
        <Icon name="account_tree" className="text-neon-cyan text-[0.8em]" />
        HOW I WORK
      </h2>
      <p className="text-on-surface-variant max-w-2xl mb-16">
        The architectural transition from creative conception to automated
        production, orchestrated through high-fidelity DevOps practices.
      </p>
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {stages.map((s) => (
          <div
            key={s.stage}
            className={`glass-panel p-8 rounded-2xl relative z-10 ${s.border}`}
          >
            <div className="flex justify-between items-start mb-6">
              <div
                className={`w-12 h-12 ${s.iconBg} rounded flex items-center justify-center`}
              >
                <Icon name={s.icon} className={s.iconColor} />
              </div>
              <span className={`${s.stageColor} font-label-code text-[10px]`}>
                {s.stage}
              </span>
            </div>
            <h3 className="font-headline-lg-mobile text-2xl mb-4 break-words">
              {s.title}
            </h3>
            <p className="text-on-surface-variant text-body-sm mb-6">{s.body}</p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="text-[9px] px-2 py-0.5 rounded border border-glass-stroke uppercase"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Connector line (desktop) */}
        <svg
          className="hidden lg:block absolute top-1/2 left-0 w-full h-8 -translate-y-1/2 pointer-events-none opacity-20"
          viewBox="0 0 1000 32"
        >
          <path
            className="pipeline-dash"
            d="M0 16H1000"
            stroke="url(#pipeline-grad)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="pipeline-grad"
              x1="0%"
              x2="100%"
              y1="0%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#BC13FE" />
              <stop offset="50%" stopColor="#00F0FF" />
              <stop offset="100%" stopColor="#39FF14" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
