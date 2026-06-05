"use client";

import { useEffect, useRef } from "react";
import { Icon } from "./Icon";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  // Micro-interaction: mouse parallax tilt on the holographic avatar.
  useEffect(() => {
    const section = sectionRef.current;
    const avatar = avatarRef.current;
    if (!section || !avatar) return;

    const onMove = (e: MouseEvent) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 60;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 60;
      avatar.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    };
    const onEnter = () => {
      avatar.style.transition = "none";
    };
    const onLeave = () => {
      avatar.style.transition = "all 0.5s ease";
      avatar.style.transform = "rotateY(0deg) rotateX(0deg)";
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseenter", onEnter);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseenter", onEnter);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative px-margin-mobile md:px-margin-desktop py-12 md:py-24 flex flex-col items-center"
    >
      {/* Background neural glow (clipped so the blobs don't widen the page) */}
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-cyan/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-purple/10 blur-[100px] rounded-full" />
      </div>

      {/* Role chips */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/10 border border-neon-cyan/30 text-neon-cyan">
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
          <span className="font-label-code text-label-code uppercase">
            Full_Stack_Dev
          </span>
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/10 border border-neon-purple/30 text-neon-purple">
          <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
          <span className="font-label-code text-label-code uppercase">
            UIUX_Design
          </span>
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest/50 border border-data-green/30 text-data-green">
          <span className="w-2 h-2 rounded-full bg-data-green animate-pulse" />
          <span className="font-label-code text-label-code uppercase">
            Open_To_Freelance
          </span>
        </div>
      </div>

      {/* Headline (name) */}
      <h1 className="text-center max-w-5xl mb-12">
        <span className="block font-headline-xl text-headline-xl text-on-surface">
          CHAITANYA
        </span>
        <span className="block font-headline-xl text-headline-xl bg-gradient-to-r from-neon-cyan via-primary to-neon-purple bg-clip-text text-transparent">
          YELAMASETTY
        </span>
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl">
        {/* Holographic avatar */}
        <div
          ref={avatarRef}
          className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center"
          style={{ transition: "0.5s", transform: "rotateY(0deg) rotateX(0deg)" }}
        >
          <div className="absolute inset-0 border-2 border-dashed border-neon-cyan/20 rounded-full animate-spin [animation-duration:20s]" />
          <div className="absolute inset-4 border border-neon-purple/30 rounded-full animate-spin [animation-duration:15s] [animation-direction:reverse]" />
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neon-cyan/50 glow-cyan">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Chaitanya Yelamasetty"
              className="w-full h-full object-cover object-top"
              src="/hero-photo.webp"
            />
          </div>
        </div>

        {/* Intro HUD & CTA */}
        <div className="flex-1 flex flex-col gap-8 w-full">
          <div className="glass-panel p-6 rounded-xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-data-green animate-neural-pulse shadow-[0_0_8px_#39FF14] flex items-center justify-center">
                <Icon
                  name="check"
                  className="text-[8px] text-obsidian-deep font-bold"
                />
              </div>
              <span className="font-label-code text-label-code text-on-surface">
                Status: <span className="text-data-green">AVAILABLE_FOR_WORK</span>
              </span>
            </div>
            <div className="space-y-4 font-label-code text-label-code">
              <div className="flex gap-3">
                <span className="text-neon-cyan opacity-50">&gt;</span>
                <p className="text-on-surface-variant">
                  Full-Stack Developer &amp; UI/UX Designer building fast,
                  intuitive web products.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-neon-cyan opacity-50">&gt;</span>
                <p className="text-on-surface-variant">
                  Currently shipping production software at{" "}
                  <span className="text-neon-cyan">EnAble India</span> &amp;{" "}
                  <span className="text-neon-purple">CodeSage</span>.
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-neon-cyan opacity-50">&gt;</span>
                <p className="text-data-green typewriter">
                  Stack: React 19 · Node.js · Hono · PostgreSQL · AWS
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-neon-cyan text-obsidian-deep px-8 py-4 rounded font-label-code text-label-code font-bold glow-cyan hover:scale-105 active:scale-95 transition-all text-center"
            >
              GET_IN_TOUCH
            </a>
            <a
              href="#projects"
              className="border border-glass-stroke px-8 py-4 rounded font-label-code text-label-code font-bold text-on-surface hover:bg-white/5 glow-purple-hover transition-all text-center"
            >
              VIEW_WORK
            </a>
          </div>
          <div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2">
              <Icon name="verified" className="text-[18px]" />
              <span className="font-label-code text-label-code">
                3_CERTIFICATIONS
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="school" className="text-[18px]" />
              <span className="font-label-code text-label-code">B.TECH_ECE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
