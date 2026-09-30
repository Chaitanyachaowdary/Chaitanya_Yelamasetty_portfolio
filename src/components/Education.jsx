// src/components/Education.jsx

import React from 'react';
import Section from './Section';
import { EDUCATION } from '../constants.jsx'; // Corrected import path and added .jsx extension

const EducationItem = ({ item }) => {
    return (
        <div className="relative pl-8 sm:pl-12 py-4 group">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-secondary group-hover:bg-accent transition-colors duration-300"></div>
            <div className="absolute left-[-6px] top-6 w-4 h-4 rounded-full bg-secondary border-2 border-primary group-hover:bg-accent transition-colors duration-300"></div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                <p className="text-sm font-semibold text-accent">{item.period}</p>
                {item.gpa && (
                    <span className="text-xs font-semibold text-light-gray bg-secondary/60 border border-secondary px-2 py-0.5 rounded-full">
                        {item.gpa}
                    </span>
                )}
            </div>
            <h3 className="text-xl font-bold text-light-gray mb-1">
                {item.degree} <span className="text-medium-gray font-medium">— {item.institution}</span>
            </h3>
            <p className="text-medium-gray">{item.description}</p>
        </div>
    );
};

const Education = () => {
    return (
        <Section
            id="education"
            title="My Education"
            eyebrow="Foundations"
            intro="A computer-science-adjacent engineering degree, and the schooling behind it."
        >
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