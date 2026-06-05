import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { EXPERIENCE, PROJECTS, CERTIFICATIONS, SKILLS } from '../constants.jsx';
import CountUp from './CountUp';
import Magnetic from './Magnetic';

const techCount = Object.values(SKILLS).reduce((a, g) => a + g.length, 0);
const current = EXPERIENCE[0];
const topStack = ['React', 'TypeScript', 'Node.js', 'Hono', 'Drizzle', 'PostgreSQL'];

const SocialLink = ({ href, label, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-medium-gray hover:text-accent transition-colors duration-300"
    whileHover={{ scale: 1.15, y: -2 }}
    whileTap={{ scale: 0.9 }}
  >
    {children}
  </motion.a>
);

const ease = [0.22, 1, 0.36, 1];
const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

const Hero = () => {
  const companyLogo = current.logoUrl ? `${import.meta.env.BASE_URL}${current.logoUrl}` : '';

  return (
    <section id="hero" className="min-h-screen flex items-center pt-28 pb-16 relative">
      <div className="w-full grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">

        {/* LEFT — editorial */}
        <div className="lg:col-span-7">
          <motion.div
            {...rise(0)}
            className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-medium text-medium-gray bg-secondary/50 border border-white/10 backdrop-blur-sm rounded-full px-3.5 py-1.5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-light-gray">Available — Full-time &amp; Freelance</span>
            <span className="text-white/20 hidden sm:inline">·</span>
            <span className="hidden sm:inline">Remote · Hybrid · Onsite</span>
          </motion.div>

          <motion.h1
            {...rise(0.08)}
            className="text-[12.5vw] leading-[0.95] sm:text-6xl lg:text-8xl font-extrabold tracking-tightest mb-5"
          >
            <span className="block text-light-gray">Chaitanya</span>
            <span className="block text-gradient">Yelamasetty</span>
          </motion.h1>

          <motion.div
            {...rise(0.16)}
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-medium-gray mb-6 min-h-[36px]"
          >
            <ReactTyped
              strings={['Full Stack Developer', 'UI/UX Designer', 'React Engineer', 'Problem Solver']}
              typeSpeed={45}
              backSpeed={28}
              backDelay={1600}
              loop
            />
          </motion.div>

          <motion.p {...rise(0.24)} className="text-medium-gray text-base sm:text-lg max-w-xl mb-9 leading-relaxed">
            I design and build fast, intuitive web products — from clean interfaces
            to scalable backends. Currently shipping production software at
            <span className="text-light-gray font-medium"> EnAble India</span> and
            <span className="text-light-gray font-medium"> CodeSage</span>, and
            <span className="text-light-gray font-medium"> open to freelance projects</span>.
          </motion.p>

          <motion.div {...rise(0.32)} className="flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-primary text-base font-bold rounded-full hover:bg-accent-hover transition-all duration-300 shadow-lg hover:shadow-[0_0_35px_-6px_rgba(56,189,248,0.6)]"
              >
                View my work
                <svg className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-block px-7 py-3.5 border border-white/15 text-light-gray text-base font-semibold rounded-full hover:border-accent/60 hover:text-accent transition-colors duration-300"
              >
                Let's talk
              </a>
            </Magnetic>

            <div className="flex items-center gap-5 ml-1">
              <SocialLink href="https://github.com/Chaitanyachaowdary" label="GitHub profile">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/chaitanya-yelamasetty" label="LinkedIn profile">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.47 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.59-11.018-3.714v-2.155z" /></svg>
              </SocialLink>
              <SocialLink href="https://x.com/Chaitanya154975" label="X (Twitter) profile">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.144h3.762L14.417 9.87l7.545 11.002h-6.24L11.564 12.012l-6.31 8.864H1.385l8.037-11.196L1.082 1.144h7.828l4.914 6.789L18.901 1.144zm-1.666 17.502h2.208L7.697 3.529H5.35L17.235 18.646z" /></svg>
              </SocialLink>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — proof bento */}
        <motion.div
          {...rise(0.4)}
          className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4"
        >
          {/* Currently — wide */}
          <div className="card col-span-2 p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] uppercase tracking-wider text-medium-gray font-semibold">Currently</span>
              <span className="flex items-center gap-1.5 text-[11px] text-green-400">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Active
              </span>
            </div>
            <div className="flex items-center gap-3">
              {companyLogo && <img src={companyLogo} alt={`${current.company} logo`} className="w-11 h-11 rounded-lg object-contain bg-white/5 p-1 border border-white/10" />}
              <div>
                <p className="text-light-gray font-bold leading-tight">{current.role}</p>
                <p className="text-medium-gray text-sm">{current.company} · {current.period}</p>
              </div>
            </div>
          </div>

          {/* Stat — projects */}
          <div className="card p-5 flex flex-col justify-center">
            <p className="text-4xl font-extrabold text-gradient-accent"><CountUp end={PROJECTS.length} suffix="+" /></p>
            <p className="text-medium-gray text-sm mt-1">Projects shipped</p>
          </div>

          {/* Stat — tech */}
          <div className="card p-5 flex flex-col justify-center">
            <p className="text-4xl font-extrabold text-gradient-accent"><CountUp end={techCount} suffix="+" /></p>
            <p className="text-medium-gray text-sm mt-1">Technologies</p>
          </div>

          {/* Stack — wide */}
          <div className="card col-span-2 p-5">
            <span className="text-[11px] uppercase tracking-wider text-medium-gray font-semibold">Core stack</span>
            <div className="flex flex-wrap gap-2 mt-3">
              {topStack.map((t) => (
                <span key={t} className="text-xs font-semibold text-accent bg-accent/10 border border-accent/20 rounded-full px-2.5 py-1">{t}</span>
              ))}
            </div>
          </div>

          {/* Freelance availability — wide */}
          <a href="#contact" className="card col-span-2 p-5 flex items-center justify-between group">
            <div>
              <p className="text-light-gray font-bold leading-tight flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400" /> Open for freelance
              </p>
              <p className="text-medium-gray text-sm mt-1">Need a developer? Let's build something.</p>
            </div>
            <span className="text-accent text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
              Hire me
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </span>
          </a>

          {/* Certs + location */}
          <div className="card p-5 flex flex-col justify-center">
            <p className="text-light-gray font-bold leading-tight">{CERTIFICATIONS.length} Certs</p>
            <p className="text-medium-gray text-sm mt-1">+ ongoing learning</p>
          </div>
          <div className="card p-5 flex flex-col justify-center">
            <p className="text-light-gray font-bold leading-tight">India</p>
            <p className="text-medium-gray text-sm mt-1">Andhra Pradesh · IST</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
