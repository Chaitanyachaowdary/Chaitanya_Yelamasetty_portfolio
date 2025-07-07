// src/components/Skills.jsx

import React from "react";
import Section from "./Section";
import { SKILLS } from "../constants"; // Corrected import path

const SkillBadge = ({ skill }) => {
  const { name, Icon } = skill;
  return (
    <div className="bg-secondary p-4 rounded-lg flex items-center space-x-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20">
      <Icon className="w-8 h-8 text-accent" />
      <span className="text-light-gray font-medium">{name}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <Section id="skills" title="My Tech Stack">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
        {SKILLS.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;