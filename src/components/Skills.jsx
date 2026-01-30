import React from "react";
import Section from "./Section";
import { SKILLS } from "../constants";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const SkillBadge = ({ skill, index }) => {
  const { name, imageUrl } = skill;
  return (
    <motion.div
      className="flex items-center space-x-4 p-3 rounded-lg bg-secondary/50 backdrop-blur-sm border border-transparent hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all cursor-default"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-10 h-10 object-contain"
        loading="lazy"
      />
      <span className="font-medium text-light-gray">{name}</span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <Section id="skills" title="My Tech Stack">
      {Object.entries(SKILLS).map(([category, skills], categoryIndex) => (
        <motion.div
          key={category}
          className="mb-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
        >
          <h3 className="text-accent font-semibold mb-6 capitalize text-xl">{category}</h3>
          <div className="flex flex-wrap gap-6">
            {skills.map((skill, index) => (
              <SkillBadge key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      ))}
    </Section>
  );
};

export default Skills;
