"use client";

import { useEffect, useRef } from "react";
import { Icon } from "./Icon";

type Milestone = {
  phase: string;
  phaseColor: string;
  pid: string;
  pidColor: string;
  nodeColor: string; // tailwind bg-* for the dot
  borderColor: string; // tailwind border-* for the node ring / card
  titleColor: string;
  title: string;
  meta: string;
  body: string;
  tags: string[];
  tagColor: string; // e.g. "neon-cyan"
  logo?: string; // company/client logo image
  logoIcon?: string; // material icon fallback (e.g. education)
};

const milestones: Milestone[] = [
  {
    phase: "PHASE_01 // FOUNDATIONS",
    phaseColor: "text-neon-purple",
    pid: "PID: B.TECH-ECE",
    pidColor: "text-on-surface-variant opacity-40",
    nodeColor: "bg-neon-cyan",
    borderColor: "border-neon-cyan/50",
    titleColor: "text-neon-cyan",
    title: "B.Tech — Electronics & Communication",
    meta: "JNTU Anantapur (SVPCET) · Dec 2021 – Apr 2025 · GPA 7.2",
    body: "Built core programming fundamentals and discovered a passion for web development — moving from circuits to building responsive, full-stack applications.",
    tags: ["FUNDAMENTALS", "DSA", "OOP"],
    tagColor: "neon-cyan",
    logoIcon: "school",
  },
  {
    phase: "PHASE_02 // TRAINING",
    phaseColor: "text-neon-purple",
    pid: "PID: TAP-INTERN",
    pidColor: "text-neon-purple",
    nodeColor: "bg-neon-purple",
    borderColor: "border-neon-purple/50",
    titleColor: "text-on-surface",
    title: "Java Full Stack Intern @ TAP Academy",
    meta: "May 2025 – Dec 2025",
    body: "Intensive hands-on training in Java Full Stack — Spring Boot, MySQL and React.js. Built backend APIs and UI components across multiple real-world mini-projects in an Agile workflow.",
    tags: ["JAVA", "SPRING_BOOT", "REACT"],
    tagColor: "neon-purple",
    logo: "/logos/tap-academy.png",
  },
  {
    phase: "PHASE_03 // ACTIVE_THREAD",
    phaseColor: "text-data-green",
    pid: "PID: CODESAGE",
    pidColor: "text-data-green",
    nodeColor: "bg-data-green",
    borderColor: "border-data-green/50",
    titleColor: "text-on-surface",
    title: "Full Stack Developer @ CodeSage India",
    meta: "Jan 2026 – Present",
    body: "Building full-stack features with React 19, Vite & TypeScript on the front end and Node.js + Hono services on the back end — type-safe PostgreSQL access via Drizzle + Zod, S3 storage, real-time SSE and BullMQ/Redis jobs.",
    tags: ["REACT_19", "HONO", "POSTGRESQL"],
    tagColor: "data-green",
    logo: "/logos/codesage.png",
  },
  {
    phase: "PHASE_04 // CLIENT_WORK",
    phaseColor: "text-neon-purple",
    pid: "PID: ENABLE-INDIA",
    pidColor: "text-neon-purple",
    nodeColor: "bg-neon-purple",
    borderColor: "border-neon-purple/50",
    titleColor: "text-neon-purple",
    title: "EnAble India — MEL Platform",
    meta: "Full Stack Developer · Feb 2026 – Present",
    body: "Building the Monitoring, Evaluation & Learning platform for the GarvSe programme — type-safe REST APIs (Node.js + Hono + Zod), PostgreSQL 17 on Dockerized EC2, real-time LISTEN/NOTIFY over SSE, and a React 19 + shadcn/ui front end with production-grade auth.",
    tags: ["TANSTACK", "DOCKER", "AWS"],
    tagColor: "neon-purple",
    logo: "/logos/enable-india.png",
  },
];

// Full literal class strings so Tailwind can statically detect them (no dynamic concatenation).
const TAG_CLASSES: Record<string, string> = {
  "neon-cyan":
    "px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-[10px] font-label-code",
  "neon-purple":
    "px-3 py-1 rounded-full bg-neon-purple/10 text-neon-purple text-[10px] font-label-code",
  "data-green":
    "px-3 py-1 rounded-full bg-data-green/10 text-data-green text-[10px] font-label-code",
};

export function Experience() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const targets = root.querySelectorAll(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={rootRef}
      className="px-margin-mobile md:px-margin-desktop py-24 max-w-7xl mx-auto"
    >
      <div className="max-w-3xl mb-24">
        <h2 className="font-headline-xl text-headline-xl text-neon-cyan mb-6 flex items-center gap-4">
          <Icon name="timeline" className="text-[0.8em]" />
          THE_JOURNEY
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
          From electronics fundamentals to shipping production software — every
          node is a step toward building better, faster web products.
        </p>
      </div>

      <div className="relative">
        {/* Central line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-glass-stroke">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent animate-pulse" />
        </div>

        {[...milestones].reverse().map((m, i) => {
          const flip = i % 2 === 1; // alternate sides on desktop
          return (
            <div
              key={m.pid}
              className={`relative flex flex-col ${
                flip ? "md:flex-row-reverse" : "md:flex-row"
              } items-center mb-24 last:mb-0 scroll-reveal`}
            >
              <div
                className={`hidden md:block w-1/2 ${
                  flip ? "pl-16 text-left" : "pr-16 text-right"
                }`}
              >
                <span className={`font-label-code text-label-code ${m.phaseColor}`}>
                  {m.phase}
                </span>
              </div>
              <div
                className={`z-10 w-8 h-8 rounded-full glass-panel flex items-center justify-center ${m.borderColor}`}
              >
                <div className={`w-3 h-3 ${m.nodeColor} rounded-full`} />
              </div>
              <div
                className={`w-full md:w-1/2 mt-6 md:mt-0 ${
                  flip
                    ? "pr-12 md:pr-16 text-left md:text-right"
                    : "pl-12 md:pl-16"
                }`}
              >
                <div className="glass-panel p-6 rounded-xl relative overflow-hidden">
                  <span
                    className={`md:hidden font-label-code text-label-code ${m.phaseColor} mb-2 block`}
                  >
                    {m.phase}
                  </span>
                  <div
                    className={`mb-3 w-11 h-11 rounded-md bg-white/95 p-1.5 flex items-center justify-center ${
                      flip ? "md:ml-auto" : ""
                    }`}
                  >
                    {m.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={m.logo}
                        alt=""
                        aria-hidden
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <Icon
                        name={m.logoIcon || "work"}
                        className="text-obsidian-deep"
                      />
                    )}
                  </div>
                  <h3
                    className={`font-headline-lg text-2xl ${m.titleColor} mb-1`}
                  >
                    {m.title}
                  </h3>
                  <p className="font-status-telemetry text-status-telemetry text-on-surface-variant mb-3">
                    {m.meta}
                  </p>
                  <p className="text-on-surface-variant font-body-sm">{m.body}</p>
                  <div
                    className={`mt-4 flex flex-wrap gap-2 ${
                      flip ? "justify-start md:justify-end" : ""
                    }`}
                  >
                    {m.tags.map((t) => (
                      <span key={t} className={TAG_CLASSES[m.tagColor]}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Visual asset */}
      <div className="mt-24 scroll-reveal">
        <div className="glass-panel rounded-2xl p-1 overflow-hidden h-[400px] relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000 rounded-2xl"
            alt="Neural connection visualization"
            src="/neural-bg.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <h4 className="font-headline-lg text-2xl text-neon-cyan break-words">
              ALWAYS_SHIPPING
            </h4>
            <p className="font-status-telemetry text-status-telemetry text-on-surface-variant">
              OPEN TO FULL-TIME &amp; FREELANCE // BASED IN ANDHRA PRADESH, INDIA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
