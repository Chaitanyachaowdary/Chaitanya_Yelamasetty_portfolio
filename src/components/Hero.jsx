// src/components/Hero.jsx

import React from 'react';
import { motion } from 'framer-motion';
import CodeBlock from './CodeBlock';
import { ReactTyped } from 'react-typed';

const SocialLink = ({ href, label, children }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-medium-gray hover:text-accent transition-colors duration-300"
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
    >
        {children}
    </motion.a>
);

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">

            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between z-10 w-full gap-12 lg:gap-0">
                {/* Left Side - Text */}
                <div className="w-full lg:w-1/2 text-left">
                    <motion.div
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-medium-gray bg-secondary/60 border border-secondary backdrop-blur-sm rounded-full px-3 py-1.5 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                        </span>
                        <span>Open to Full Stack roles</span>
                        <span className="text-secondary">·</span>
                        <span>Onsite</span>
                        <span className="text-secondary">·</span>
                        <span>Hybrid</span>
                        <span className="text-secondary">·</span>
                        <span>Remote</span>
                    </motion.div>
                    <motion.p
                        className="text-accent text-lg md:text-xl font-medium mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Hi, my name is
                    </motion.p>
                    <motion.h1
                        className="text-5xl md:text-7xl font-extrabold text-light-gray mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <ReactTyped
                            strings={["Chaitanya Yelamasetty."]}
                            typeSpeed={70}
                            showCursor={false}
                        />
                    </motion.h1>
                    <motion.h2
                        className="text-2xl md:text-4xl font-extrabold text-medium-gray mb-6 leading-tight min-h-[64px] md:min-h-[96px]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <ReactTyped
                            strings={[
                                "Aspiring Full Stack Web Developer",
                                "React Developer",
                                "UI/UX Enthusiast",
                                "Problem Solver"
                            ]}
                            typeSpeed={50}
                            backSpeed={30}
                            loop
                        />
                    </motion.h2>
                    <motion.p
                        className="text-medium-gray text-lg md:text-xl max-w-xl mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        With a strong foundation in programming fundamentals and a passion for creating intuitive user experiences, I am an aspiring Full Stack Web Developer.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap items-center gap-4 sm:gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <motion.a
                            href="#projects"
                            className="px-8 py-4 bg-accent text-primary text-lg font-bold rounded-full hover:bg-accent-hover transition-colors duration-300 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            See My Projects
                        </motion.a>
                        {/* RESUME-CTA-HERO — disabled until a fresh PDF is ready; uncomment to re-enable
                        <motion.a
                            href={`${import.meta.env.BASE_URL}Chaitanya_yelamasetty_Resume.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border-2 border-accent text-accent text-lg font-bold rounded-full hover:bg-accent/10 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Resume
                        </motion.a>
                        */}

                        <div className="flex items-center space-x-6">
                            <SocialLink href="https://github.com/Chaitanyachaowdary" label="GitHub profile">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </SocialLink>
                            <SocialLink href="https://www.linkedin.com/in/chaitanya-yelamasetty" label="LinkedIn profile">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.47 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.59-11.018-3.714v-2.155z" /></svg>
                            </SocialLink>
                            <SocialLink href="https://x.com/Chaitanya154975" label="X (Twitter) profile">
                                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.144h3.762L14.417 9.87l7.545 11.002h-6.24L11.564 12.012l-6.31 8.864H1.385l8.037-11.196L1.082 1.144h7.828l4.914 6.789L18.901 1.144zm-1.666 17.502h2.208L7.697 3.529H5.35L17.235 18.646z" /></svg>
                            </SocialLink>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side - Code Block 3D */}
                <div className="w-full lg:w-1/2 flex justify-center perspective-1000">
                    <CodeBlock />
                </div>
            </div>
        </section>
    );
};

export default Hero;
