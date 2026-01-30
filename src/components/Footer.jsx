// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 text-sm border-t border-secondary text-medium-gray">
      <div className="container mx-auto px-4 md:px-12">

        {/* Footer Navigation Links */}
        <div className="mb-2 flex justify-center flex-wrap gap-4">
          <a href="#about" className="hover:text-accent transition">About</a>
          <a href="#experience" className="hover:text-accent transition">Experience</a>
          <a href="#skills" className="hover:text-accent transition">Skills</a>
          <a href="#projects" className="hover:text-accent transition">Projects</a>
          <a href="#certifications" className="hover:text-accent transition">Certifications</a>
          <a href="#education" className="hover:text-accent transition">Education</a>
          <a href="#contact" className="hover:text-accent transition">Contact</a>
        </div>

        {/* Footer Text Inline */}
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <p>Designed & Built by Chaitanya Yelamasetty</p>
          <p>© {new Date().getFullYear()}. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
