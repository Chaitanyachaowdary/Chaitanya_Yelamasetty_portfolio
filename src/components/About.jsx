// src/components/About.jsx
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <Section id="about" title="About Me">
            <div className="grid md:grid-cols-5 gap-12 items-center">
                <motion.div
                    className="md:col-span-3 text-lg text-medium-gray space-y-6 leading-relaxed"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p>
                        As an aspiring <span className="text-accent font-semibold">Full Stack Web Developer</span>, I possess a solid understanding of programming fundamentals and have hands-on experience building responsive web applications using Java, Python, JavaScript, HTML, CSS, and the React framework.
                    </p>
                    <p>
                        I am passionate about crafting efficient, high-quality software solutions and am adept at analyzing and overcoming complex technical challenges.
                    </p>
                    <p>
                        A quick and enthusiastic learner, I am always eager to adapt to new technologies and contribute effectively to dynamic development teams, continuously growing as a software professional.
                    </p>

                    <div className="pt-2">
                        <p className="text-sm uppercase tracking-wider text-medium-gray mb-3">Languages I speak</p>
                        <div className="flex flex-wrap gap-2">
                            {[
                                { name: 'English', level: 'Professional' },
                                { name: 'Telugu', level: 'Native' },
                                { name: 'Hindi', level: 'Conversational' },
                            ].map((lang) => (
                                <span
                                    key={lang.name}
                                    className="inline-flex items-center gap-2 bg-secondary/50 border border-secondary text-light-gray text-sm px-3 py-1.5 rounded-full"
                                >
                                    <span className="font-semibold">{lang.name}</span>
                                    <span className="text-medium-gray text-xs">{lang.level}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="md:col-span-2 relative group w-full max-w-sm mx-auto"
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent via-purple-500 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div className="relative rounded-xl overflow-hidden glass p-2">
                        <img
                            src={`${import.meta.env.BASE_URL}pic.jpg`}
                            alt="Chaitanya Yelamasetty"
                            loading="lazy"
                            className="w-full h-auto rounded-lg object-cover transform transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default About;
