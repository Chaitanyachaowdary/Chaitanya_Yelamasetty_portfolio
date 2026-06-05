"use client";

import { useRef } from "react";
import { Icon } from "./Icon";

type Project = {
  pid: string;
  image: string;
  alt: string;
  inference: string[];
  name: string;
  category: string;
  blurb: string;
  type: string;
  deploy: string;
  tags: string[];
  live?: string;
  demo?: string;
  github?: string;
};

const GH = "https://github.com/Chaitanyachaowdary";

// Map a tech tag to its icon (omitted tags simply render as text — e.g. AI, Aurora_UI).
const TAG_ICON: Record<string, string> = {
  React: "/icons/react.svg",
  "React.js": "/icons/react.svg",
  "Socket.io": "/icons/socketio.svg",
  "Node.js": "/icons/nodejs.svg",
  Tailwind: "/icons/tailwindcss.svg",
  HTML5: "/icons/html5.svg",
  HTML: "/icons/html5.svg",
  CSS: "/icons/css3.svg",
  JavaScript: "/icons/javascript.svg",
  Vercel: "/icons/vercel.svg",
  Cloudflare: "/icons/cloudflare.svg",
  Redux: "/icons/redux.svg",
};

const projects: Project[] = [
  {
    pid: "PID_WHATSAPP",
    image: "/proj-whatsapp.webp",
    alt: "WhatsApp clone real-time chat app",
    inference: ["> SOCKET_CONNECTED...", "> Channel: 1:1_MESSAGING", "> Persistence: ACTIVE", "> Status: LIVE"],
    name: "WhatsApp Clone",
    category: "FULL_STACK",
    blurb:
      "Real-time chat application with one-to-one messaging, a WhatsApp-inspired responsive UI and persistent storage.",
    type: "REAL_TIME_CHAT",
    deploy: "VERCEL",
    tags: ["React", "Socket.io", "Node.js", "Tailwind"],
    live: "https://whatsappclone-jet.vercel.app/",
    github: `${GH}/whatsappclone`,
  },
  {
    pid: "PID_VELTORE",
    image: "/proj-veltore.webp",
    alt: "Veltore AI studio corporate site",
    inference: ["> RENDER_AURORA...", "> Icons: FEATHER_INLINE", "> Layout: SINGLE_PAGE", "> Status: LIVE"],
    name: "Veltore — AI Studio",
    category: "FRONTEND",
    blurb:
      "Corporate site for Veltore, an AI-native software studio — a single static page with an aurora-gradient visual language.",
    type: "STATIC_SITE",
    deploy: "VERCEL",
    tags: ["HTML5", "Tailwind", "Aurora_UI"],
    live: "https://veltore.vercel.app/",
  },
  {
    pid: "PID_HEALTH",
    image: "/proj-health.webp",
    alt: "Healthcare simulation dashboard",
    inference: ["> DIAGNOSTIC_SCAN...", "> AI_Patient: ENABLED", "> Training_Mode: ON", "> Status: LIVE"],
    name: "Health Care Dashboard",
    category: "AI",
    blurb:
      "React-based healthcare simulation platform enabling interactive training for mental-health professionals via AI-powered virtual patients.",
    type: "AI_SIMULATION",
    deploy: "VERCEL",
    tags: ["React", "AI", "Vercel"],
    live: "https://healthcare-psi-sepia.vercel.app/",
    github: `${GH}/healthcare`,
  },
  {
    pid: "PID_CHATGPT",
    image: "/proj-chatgpt.webp",
    alt: "ChatGPT clone AI chat app",
    inference: ["> OPENAI_API: LINKED", "> Stream: REAL_TIME", "> Code_Highlight: ON", "> Status: READY"],
    name: "ChatGPT Clone",
    category: "AI",
    blurb:
      "AI chat application powered by the OpenAI API — real-time conversation, code highlighting and a responsive ChatGPT-style UI.",
    type: "AI_CHAT",
    deploy: "NODE.JS",
    tags: ["React", "OpenAI_API", "Node.js"],
    demo: "https://drive.google.com/file/d/14ihb6-vbyO-imzH3KekO_e4xChCEclSG/view",
    github: `${GH}/ChatWIthAI`,
  },
  {
    pid: "PID_DESIGN",
    image: "/proj-design.webp",
    alt: "Design Declares pixel-perfect clone",
    inference: ["> SCROLL_TRIGGER...", "> Pixel_Match: 100%", "> Animations: SMOOTH", "> Status: LIVE"],
    name: "Design Declares Clone",
    category: "FRONTEND",
    blurb:
      "Fully responsive, pixel-perfect clone of the Design Declares website with scroll-triggered animations and sticky navigation.",
    type: "PIXEL_PERFECT",
    deploy: "VERCEL",
    tags: ["React.js", "Tailwind", "Vercel"],
    live: "https://design-one-gold.vercel.app/",
    github: `${GH}/Design`,
  },
  {
    pid: "PID_EASYSHOP",
    image: "/proj-easyshop.webp",
    alt: "Easy Shop e-commerce frontend",
    inference: ["> CART_STATE: SYNCED", "> Auth: ENABLED", "> API: INTEGRATED", "> Status: LIVE"],
    name: "Easy Shop",
    category: "FRONTEND",
    blurb:
      "React.js e-commerce frontend demonstrating authentication, API integration and state management with Redux / Context API.",
    type: "E_COMMERCE",
    deploy: "VERCEL",
    tags: ["React", "Redux", "Tailwind"],
    live: "https://easy-shop-main.vercel.app/",
  },
  {
    pid: "PID_CUBIC",
    image: "/proj-cubic.webp",
    alt: "Cubic Technologies business website",
    inference: ["> BUILD_STATIC...", "> Responsive: PASS", "> Branding: APPLIED", "> Status: LIVE"],
    name: "Cubic Technologies",
    category: "FRONTEND",
    blurb:
      "Static business portfolio site showcasing Cubic Technologies' services and branding, built for responsiveness and easy navigation.",
    type: "BUSINESS_SITE",
    deploy: "VERCEL",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://cubic-technologies.vercel.app/",
    github: `${GH}/cubic-technologies`,
  },
];

function LinkBtn({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="flex-shrink-0 w-9 h-9 rounded-full border border-glass-stroke flex items-center justify-center text-on-surface-variant hover:text-neon-cyan hover:border-neon-cyan transition-all"
    >
      <Icon name={icon} className="text-[18px]" />
    </a>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const xPercent = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const yPercent = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    card.style.transform = `perspective(1000px) rotateX(${yPercent}deg) rotateY(${xPercent}deg) translateY(-4px) scale(1.02)`;
  };
  const onLeave = () => {
    const card = ref.current;
    if (card)
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="neural-card glass-panel rounded-xl overflow-hidden relative flex flex-col h-[540px]"
    >
      <div className="h-[220px] relative overflow-hidden group">
        <div className="optimization-overlay absolute inset-0 z-10" />
        <div className="scan-line z-20 opacity-0 group-hover:opacity-100" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={p.alt} className="w-full h-full object-cover" src={p.image} />
        <div className="inference-overlay absolute inset-0 flex flex-col justify-center p-6 pointer-events-none z-10">
          <div className="font-label-code text-data-green text-[10px] mb-2">
            {p.inference[0]}
          </div>
          {p.inference.slice(1).map((line) => (
            <div
              key={line}
              className="font-label-code text-white text-[12px] opacity-70 mb-1"
            >
              {line}
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-auto">
          <div className="flex justify-between items-start mb-4 gap-3">
            <h3 className="font-headline-lg text-2xl text-white">{p.name}</h3>
            <div className="bg-neon-cyan/20 border border-neon-cyan/50 text-neon-cyan px-2 py-1 rounded-sm font-label-code text-[10px] whitespace-nowrap">
              {p.category}
            </div>
          </div>
          <p className="text-on-surface-variant text-body-sm mb-6">{p.blurb}</p>
        </div>
        <div className="space-y-3 mb-6 border-t border-glass-stroke pt-4">
          <div className="flex justify-between items-center">
            <span className="font-status-telemetry text-status-telemetry text-on-surface-variant uppercase tracking-tighter opacity-60">
              TYPE
            </span>
            <span className="font-label-code text-[11px] text-neon-cyan">
              {p.type}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-status-telemetry text-status-telemetry text-on-surface-variant uppercase tracking-tighter opacity-60">
              DEPLOY
            </span>
            <span className="font-label-code text-[11px] text-data-green">
              {p.deploy}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex gap-2 flex-wrap">
            {p.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1 bg-white/5 border border-white/10 px-2 py-1 rounded-full text-[10px] font-label-code text-on-surface-variant"
              >
                {TAG_ICON[t] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={TAG_ICON[t]}
                    alt=""
                    aria-hidden
                    className="w-3 h-3 object-contain"
                  />
                )}
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-2 flex-shrink-0">
            {p.live && (
              <LinkBtn href={p.live} label={`${p.name} — live site`} icon="open_in_new" />
            )}
            {p.demo && (
              <LinkBtn href={p.demo} label={`${p.name} — demo video`} icon="play_circle" />
            )}
            {p.github && (
              <LinkBtn href={p.github} label={`${p.name} — GitHub`} icon="code" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="px-margin-mobile md:px-margin-desktop py-24">
      <header className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="bg-data-green/10 text-data-green px-3 py-1 rounded-full font-label-code text-[10px] border border-data-green/30 inline-flex items-center">
            <Icon name="check_circle" className="text-[10px] mr-1" />
            07_PROJECTS_ONLINE
          </span>
          <span className="font-status-telemetry text-status-telemetry text-on-surface-variant">
            THINGS I&apos;VE BUILT
          </span>
        </div>
        <h2 className="font-headline-xl text-headline-xl text-white max-w-4xl">
          Selected <span className="text-neon-cyan">Work</span>: from real-time
          apps to AI tools.
        </h2>
        <p className="text-on-surface-variant font-body-md text-body-md mt-6 max-w-2xl">
          A mix of full-stack products, pixel-perfect frontends and AI-powered
          interfaces — built with React, Node.js and a focus on clean,
          performant UX. Every card links to a live demo.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter perspective-grid">
        {projects.map((p) => (
          <ProjectCard key={p.pid} p={p} />
        ))}

        {/* Build log */}
        <div className="lg:col-span-2 glass-panel rounded-xl p-8 overflow-hidden relative min-h-[300px] flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-[80px] -mr-32 -mt-32" />
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-data-green rounded-full glow-cyan" />
              <h3 className="font-headline-lg text-2xl text-white uppercase tracking-tight">
                Build &amp; Ship Log
              </h3>
            </div>
            <div className="bg-obsidian-deep/80 rounded-lg p-6 border border-glass-stroke font-label-code text-sm">
              <div className="flex gap-4">
                <div className="w-1 bg-data-green rounded-full min-h-[160px]" />
                <div className="space-y-3 w-full" aria-live="polite">
                  <p className="text-data-green typewriter">
                    &gt; git push origin main ... [OK]
                  </p>
                  {[
                    "> Building React 19 + Vite bundle...",
                    "> Running type checks (TypeScript)...",
                    "> Deploying to Vercel / Cloudflare...",
                    "> Lighthouse: performance pass.",
                    "> Status: SHIPPED.",
                  ].map((line) => (
                    <p
                      key={line}
                      className="text-white opacity-40 font-label-code text-sm"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-between items-center mt-6">
            <p className="font-status-telemetry text-status-telemetry text-data-green inline-flex items-center">
              <Icon name="sensors" className="text-[10px] mr-1" />
              ALL_PROJECTS: DEPLOYED
            </p>
            <a
              href="https://github.com/Chaitanyachaowdary?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-neon-purple/50 text-neon-purple px-4 py-2 text-sm rounded-sm hover:bg-neon-purple hover:text-white transition-all font-bold"
            >
              VIEW_ALL_ON_GITHUB
            </a>
          </div>
        </div>

        {/* Meta stats */}
        <div className="glass-panel rounded-xl p-8 flex flex-col justify-center items-center text-center">
          <div className="text-6xl font-headline-xl text-neon-cyan mb-2">07+</div>
          <div className="font-label-code text-label-code text-on-surface-variant uppercase tracking-widest">
            Projects Shipped
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 w-full">
            <div className="text-left border-l border-neon-purple pl-4">
              <div className="text-2xl font-headline-lg text-white">20+</div>
              <p className="font-status-telemetry text-status-telemetry text-on-surface-variant">
                TECHNOLOGIES
              </p>
            </div>
            <div className="text-left border-l border-neon-cyan pl-4">
              <div className="text-2xl font-headline-lg text-white">3</div>
              <p className="font-status-telemetry text-status-telemetry text-on-surface-variant">
                CERTIFICATIONS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
