// src/components/Section.jsx

import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, children }) => {
  return (
    <motion.section
      id={id}
      className="py-20 md:py-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {title} <span className="text-accent">.</span>
      </h2>
      {children}
    </motion.section>
  );
};

export default Section;