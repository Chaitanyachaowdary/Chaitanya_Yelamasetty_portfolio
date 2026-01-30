// src/components/Projects.jsx

import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants.jsx';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Projects = () => {
  return (
    <Section id="projects" title="Things I've Built">
      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/Chaitanyachaowdary?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-primary transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] transform hover:-translate-y-1"
        >
          View More on GitHub
        </a>
      </div>
    </Section>
  );
};

export default Projects;