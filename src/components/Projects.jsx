// src/components/Projects.jsx

import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants.jsx'; // CORRECTED import path and added .jsx extension

const Projects = () => {
  return (
    <Section id="projects" title="Things I've Built">
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;