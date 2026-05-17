import React, { useEffect, Suspense, lazy } from 'react';
import { MotionConfig } from 'framer-motion';
import Header from './components/Header';
const ThreeBackground = lazy(() => import('./components/ThreeBackground'));
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
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
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
      <div className="text-light-gray font-sans md:cursor-none">
        <Suspense fallback={<div className="fixed inset-0 z-[-1] bg-primary" aria-hidden="true" />}>
          <ThreeBackground />
        </Suspense>
        <Cursor />
        <ScrollProgress />
        <Header />
        <main className="container mx-auto px-6 md:px-12">
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
      </div>
    </MotionConfig>
  );
};
export default App;
