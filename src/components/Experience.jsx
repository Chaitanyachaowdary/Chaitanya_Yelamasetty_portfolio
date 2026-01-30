// src/components/Experience.jsx
import React from 'react';
import Section from './Section';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';

const ExperienceItem = ({ role, company, period, description, index }) => {
    return (
        <motion.div
            className="relative pl-8 sm:pl-12 py-6 group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
        >
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-secondary group-hover:bg-accent transition-colors duration-300"></div>
            {/* Timeline Dot */}
            <div className="absolute left-[-6px] top-8 w-4 h-4 rounded-full bg-secondary border-2 border-primary group-hover:bg-accent transition-colors duration-300 shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-light-gray group-hover:text-white transition-colors">
                    {role} <span className="text-accent">@ {company}</span>
                </h3>
                <span className="text-sm font-mono text-medium-gray mt-1 sm:mt-0 bg-secondary/30 px-2 py-1 rounded inline-block">
                    {period}
                </span>
            </div>

            <ul className="list-disc list-outside ml-5 space-y-2 text-medium-gray">
                {description.map((point, i) => (
                    <li key={i} className="pl-2 hover:text-light-gray transition-colors duration-200">
                        {point}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <Section id="experience" title="Work Experience">
            <div className="max-w-4xl mx-auto">
                <div className="space-y-2">
                    {EXPERIENCE.map((exp, index) => (
                        <ExperienceItem
                            key={index}
                            {...exp}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
