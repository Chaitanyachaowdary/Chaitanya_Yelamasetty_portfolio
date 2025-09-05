import React from "react";
import Section from "./Section";
import { SKILLS } from "../constants";

const SkillBadge = ({ skill }) => {
  const { name, imageUrl } = skill;
  return (
    <div className="flex items-center space-x-4 p-2 rounded hover:shadow-lg transition cursor-default">
      <img
        src={imageUrl}
        alt={name}
        className="w-10 h-10 object-contain"
        loading="lazy"
      />
      <span className="font-medium text-light-gray">{name}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <Section id="skills" title="My Tech Stack">
      {Object.entries(SKILLS).map(([category, skills]) => (
        <div key={category} className="mb-10 max-w-4xl mx-auto">
          <h3 className="text-accent font-semibold mb-6 capitalize">{category}</h3>
          <div className="flex flex-wrap gap-6">
            {skills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
};

export default Skills;
