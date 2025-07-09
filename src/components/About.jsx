// src/components/About.jsx
import React from 'react';
import Section from './Section';

const About = () => {
    return (
        <Section id="about" title="About Me">
            <div className="grid md:grid-cols-5 gap-10 items-center">
                <div className="md:col-span-3 text-lg text-medium-gray space-y-4">
                    <p>
                        As an aspiring Full Stack Web Developer, I possess a solid understanding of programming fundamentals and have hands-on experience building responsive web applications using Java, Python, JavaScript, HTML, CSS, and the React framework.
                    </p>
                    <p>
                       I am passionate about crafting efficient, high-quality software solutions and am adept at analyzing and overcoming complex technical challenges.
                    </p>
                    <p>
                      A quick and enthusiastic learner, I am always eager to adapt to new technologies and contribute effectively to dynamic development teams, continuously growing as a software professional.
                    </p>
                </div>
                <div className="md:col-span-2 relative group w-full max-w-sm mx-auto">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <img
                        src="photo.jpg" // REMINDER: Replace with your actual profile image
                        alt="Chaitanya Yelamasetty"
                        className="relative w-full rounded-lg shadow-xl" 
                    />
                </div>
            </div>
        </Section>
    );
};

export default About;
