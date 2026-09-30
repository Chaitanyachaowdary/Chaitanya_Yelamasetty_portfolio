import React, { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import Header from './components/Header';
import StarField from './components/StarField';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ClientWork from './components/ClientWork';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';
import CommandPalette from './components/CommandPalette';
import AskMe from './components/AskMe';
import CardGlow from './components/CardGlow';
import Loader from './components/Loader';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const App = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      syncTouch: false,
      touchMultiplier: 2,
      anchors: true,
    });
    window.__lenis = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="text-light-gray font-sans">
        {/* WCAG 2.4.1: let keyboard and screen-reader users jump the nav. */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10001] focus:rounded-lg focus:bg-accent focus:px-5 focus:py-3 focus:font-bold focus:text-primary focus:shadow-lg"
        >
          Skip to content
        </a>
        <Loader />
        <StarField />
        <CardGlow />
        <CommandPalette />
        <AskMe />
        <ScrollProgress />
        <Header />
        <main id="main-content" tabIndex={-1} className="container mx-auto px-6 md:px-12">
          <Hero />
          <About />
          <Experience />
          <ClientWork />
          <Skills />
          <Projects />
          <Certifications />
          <Education />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </div>
    </MotionConfig>
  );
};
export default App;
