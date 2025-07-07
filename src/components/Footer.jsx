// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-medium-gray text-sm border-t border-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <p>Designed & Built by Chaitanya Yelamasetty</p>
        <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;