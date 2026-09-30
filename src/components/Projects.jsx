import React, { useState, useMemo } from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { PROJECTS, PROJECT_CATEGORIES } from '../constants.jsx';
import { motion, AnimatePresence } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const GROUPS = [
  {
    kind: 'client',
    heading: 'Client & product work',
    blurb: 'Shipped for real users, in production.',
  },
  {
    kind: 'personal',
    heading: 'Personal & open source',
    blurb: 'Built to learn something specific, and finished.',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [openProject, setOpenProject] = useState(null);

  const filtered = useMemo(
    () => (filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <Section
      id="projects"
      title="Things I've Built"
      eyebrow="Selected work"
      intro="Client and product work first, then the things I built to learn something specific. Open any card for the full story."
    >
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {PROJECT_CATEGORIES.map((cat) => {
          const count = cat === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length;
          const active = filter === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              aria-pressed={active}
              className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-300 ${
                active
                  ? 'bg-accent text-primary border-accent shadow-md shadow-accent/30'
                  : 'border-secondary text-medium-gray hover:text-accent hover:border-accent'
              }`}
            >
              {cat} <span className={active ? 'text-primary/80' : 'text-medium-gray'}>({count})</span>
            </button>
          );
        })}
      </div>

      {/* Unfiltered, the two kinds are separated: paid production work reads
          very differently from practice projects, and there are sixteen now. */}
      {filter === 'All' ? (
        GROUPS.map(({ kind, heading, blurb }) => {
          const items = filtered.filter((p) => p.kind === kind);
          if (items.length === 0) return null;
          return (
            <div key={kind} className="mb-14 last:mb-0" role="group" aria-labelledby={`projects-${kind}`}>
              <div className="mb-6">
                <h3 id={`projects-${kind}`} className="text-sm uppercase tracking-[0.2em] text-accent font-bold">
                  {heading} <span className="text-medium-gray">({items.length})</span>
                </h3>
                <p className="text-medium-gray text-sm mt-1">{blurb}</p>
              </div>
              <motion.div
                className="grid md:grid-cols-2 gap-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 'some' }}
              >
                {items.map((project) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    headingLevel="h4"
                    onOpen={() => setOpenProject(project)}
                  />
                ))}
              </motion.div>
            </div>
          );
        })
      ) : (
        <motion.div
          key={filter}
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} onOpen={() => setOpenProject(project)} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {filtered.length === 0 && (
        <p className="text-center text-medium-gray mt-8">No projects in this category yet.</p>
      )}

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />

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
