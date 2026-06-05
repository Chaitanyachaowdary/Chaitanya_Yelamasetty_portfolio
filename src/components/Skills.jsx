import React from "react";
import Section from "./Section";
import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const SkillBadge = ({ skill, index }) => {
  const { name, imageUrl } = skill;
  return (
    <motion.div
      className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-accent/40 hover:bg-white/[0.06] transition-colors cursor-default"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.3) }}
      whileHover={{ y: -3 }}
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-7 h-7 object-contain"
        loading="lazy"
      />
      <span className="font-medium text-light-gray text-sm">{name}</span>
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
          <h3 className="text-xs uppercase tracking-[0.2em] text-medium-gray font-semibold mb-5">{category}</h3>
          <div className="flex flex-wrap gap-3">
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
