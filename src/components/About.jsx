// src/components/About.jsx

import React from 'react';
import Section from './Section';

const About = () => {
    return (
        <Section id="about" title="About Me">
            <div className="grid md:grid-cols-5 gap-10 items-center">
                <div className="md:col-span-3 text-lg text-medium-gray space-y-4">
                    <p>
                        I am an aspiring Software Developer with a solid understanding of programming fundamentals and a strong grasp of logical reasoning. Currently pursuing my B.Tech, I have hands-on experience in building responsive web applications using Java, Python, and JavaScript.
                    </p>
                    <p>
                        I am excellent at analyzing complex problems and creating efficient, high-quality software solutions. My skill set includes HTML, CSS, and JavaScript, and I am very familiar with the React framework.
                    </p>
                    <p>
                       I am a quick learner, eager to adapt to new technologies and contribute to a dynamic development team. I enjoy applying my problem-solving skills to grow as a software professional and stay updated with industry trends.
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