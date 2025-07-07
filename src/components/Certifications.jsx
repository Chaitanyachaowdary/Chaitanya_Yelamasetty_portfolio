// src/components/Certifications.jsx

import React from 'react';
import Section from './Section';
import { CERTIFICATIONS } from '../constants.jsx'; // CORRECTED import path and added .jsx extension

const CertificationItem = ({ cert }) => (
  <div className="bg-secondary p-4 rounded-lg flex justify-between items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20">
    <p className="text-light-gray font-medium">{cert.name}</p>
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:text-accent-hover font-semibold flex items-center space-x-1"
    >
      <span >View</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
    </a>
  </div>
);

const Certifications = () => {
  return (
    <Section id="certifications" title="Certifications">
      <div className="max-w-3xl mx-auto space-y-4">
        {CERTIFICATIONS.map((cert) => (
          <CertificationItem key={cert.name} cert={cert} />
        ))}
      </div>
    </Section>
  );
};

export default Certifications;