// src/components/Education.jsx

import React from 'react';
import Section from './Section';
import { EDUCATION } from '../constants.jsx'; // Corrected import path and added .jsx extension

const EducationItem = ({ item }) => {
    return (
        <div className="relative pl-8 sm:pl-12 py-4 group">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-secondary group-hover:bg-accent transition-colors duration-300"></div>
            <div className="absolute left-[-6px] top-6 w-4 h-4 rounded-full bg-secondary border-2 border-primary group-hover:bg-accent transition-colors duration-300"></div>

            <p className="text-sm font-semibold text-accent mb-1">{item.period}</p>
            <h3 className="text-xl font-bold text-light-gray mb-1">
                {item.degree} - <span className="text-medium-gray font-medium">{item.institution}</span>
            </h3>
            <p className="text-medium-gray">{item.description}</p>
        </div>
    );
};

const Education = () => {
    return (
        <Section id="education" title="My Education">
            <div className="max-w-3xl mx-auto relative">
                <div className="space-y-8">
                    {EDUCATION.map((item) => (
                        <EducationItem key={item.degree} item={item} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Education;