import React from 'react';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#clients', label: 'Clients' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-secondary/60 bg-primary/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-12 py-8">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-6 text-sm font-medium text-medium-gray">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-accent transition-colors duration-200">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-xs text-medium-gray/80">
          <p>Designed &amp; built by <span className="text-light-gray font-medium">Chaitanya Yelamasetty</span></p>
          <span className="hidden sm:inline text-secondary" aria-hidden="true">•</span>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
