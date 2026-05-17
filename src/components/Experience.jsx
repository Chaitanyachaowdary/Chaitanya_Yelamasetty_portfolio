// src/components/Experience.jsx
import React from 'react';
import Section from './Section';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';

const ExperienceItem = ({ role, company, logoUrl, accent, period, description, index }) => {
    const resolvedLogo = logoUrl && !/^https?:/i.test(logoUrl) ? `${import.meta.env.BASE_URL}${logoUrl}` : logoUrl;
    return (
        <motion.div
            className="relative pl-8 sm:pl-12 py-6 group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
        >
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-secondary group-hover:bg-accent transition-colors duration-300"></div>
            <div className="absolute left-[-6px] top-8 w-4 h-4 rounded-full bg-secondary border-2 border-primary group-hover:bg-accent transition-colors duration-300 shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                    {resolvedLogo ? (
                        <img src={resolvedLogo} alt={`${company} logo`} className="w-11 h-11 rounded-lg object-contain bg-white/5 p-1 border border-secondary" />
                    ) : (
                        <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${accent || 'from-sky-500 to-cyan-400'} flex items-center justify-center text-primary text-lg font-extrabold shadow-md`}>
                            {company[0]}
                        </div>
                    )}
                    <h3 className="text-xl font-bold text-light-gray group-hover:text-white transition-colors leading-tight">
                        {role} <span className="text-accent">@ {company}</span>
                    </h3>
                </div>
                <span className="text-sm font-mono text-medium-gray bg-secondary/30 px-2 py-1 rounded inline-block self-start sm:self-center shrink-0">
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
