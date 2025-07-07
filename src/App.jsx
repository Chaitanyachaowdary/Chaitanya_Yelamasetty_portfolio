// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-primary text-light-gray font-sans">
      <Header />
      <main className="container mx-auto px-6 md:px-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
export default App;