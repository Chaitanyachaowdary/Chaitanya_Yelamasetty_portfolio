// src/constants.js

import React from 'react';

export const SKILLS = {
  languages: [
    { name: 'Java', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' }
  ],
  frontend: [
    { name: 'React.js', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'HTML5', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Tailwind CSS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' }
  ],
  backend: [
    { name: 'Node.js', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Spring Boot', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Hibernate', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg' },
    { name: 'JDBC', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }, // Using Java logo for JDBC as it's standard
    { name: 'FastAPI', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'REST APIs', imageUrl: 'https://cdn-icons-png.flaticon.com/512/8297/8297437.png' }, // Icon for API
    { name: 'Maven', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg' }
  ],
  database: [
    { name: 'MySQL', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
  ],
  cloud: [
    { name: 'AWS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' }
  ],
  tools: [
    { name: 'Git', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub Actions', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg' },
    { name: 'Docker', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Postman', imageUrl: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'VS Code', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Eclipse', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg' },
    { name: 'IntelliJ', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' }
  ]
};

export const EXPERIENCE = [
  {
    role: 'Full Stack Developer',
    company: 'CodeSage India Pvt Ltd',
    logoUrl: 'companies/codesage.png',
    accent: 'from-purple-500 to-indigo-500',
    period: 'Jan 2026 – Present',
    description: [
      'Developing and maintaining scalable backend services using Python and FastAPI.',
      'Collaborating with cross-functional teams to define, design, and ship new features.',
      'Optimizing application performance and troubleshooting complex issues.',
      'Participating in code reviews and adhering to best practices for software development.'
    ]
  },
  {
    role: 'Java Full Stack Intern',
    company: 'TAP Academy',
    logoUrl: 'companies/tap-academy.png',
    accent: 'from-orange-500 to-amber-500',
    period: 'May 2025 – Dec 2025',
    description: [
      'Completed intensive hands-on training in Java Full Stack Web Development.',
      'Gained strong knowledge in Java, Spring Boot, MySQL, HTML, CSS, JavaScript, and React.js.',
      'Built backend APIs, created UI components, and completed multiple real-world mini-projects.',
      'Practiced DSA, OOP concepts, SQL queries, debugging techniques, and deployment workflows.',
      'Worked in an Agile environment with weekly coding evaluations and structured assessments.'
    ]
  }
];


export const CLIENT_WORK = [
  {
    client: 'EnAble India',
    initial: 'E',
    accent: 'from-sky-500 to-cyan-400',
    logoUrl: 'clients/enable-india.png',
    project: 'MEL Platform — Monitoring, Evaluation & Learning (GarvSe programme)',
    role: 'Full Stack Developer',
    period: 'Apr 2026 – Present',
    deliverables: [
      'Shipped production-grade authentication: password + email/SMS OTP forgot-password, forced first-time password change, Redis-backed lockout (5x → 15 min), and 30-day JWT sessions.',
      'Designed a wireframe-aligned PostgreSQL schema (10 tables) and built secure REST APIs with Hono + Drizzle, hardened with bcrypt-12, hashed OTPs at rest, sliding-window rate limits, and no-enumeration responses.',
      'Built the React 19 + Vite + Tauri 2 client with TanStack Router/Query and TypeScript across web + desktop, plus a live multi-repo context dashboard; 102 automated tests passing (40 backend Vitest + 62 frontend Vitest).',
    ],
    stack: ['React 19', 'TypeScript', 'Tauri 2', 'TanStack Router/Query', 'Hono', 'Drizzle', 'PostgreSQL', 'Redis', 'BullMQ', 'AWS', 'Docker'],
    websiteUrl: 'https://enableindia.org/',
  },
];

export const PROJECT_CATEGORIES = ['All', 'Full-stack', 'Frontend', 'AI'];

export const PROJECTS = [
  {
    title: 'WhatsApp Clone',
    description: 'Real-time chat application with one-to-one messaging, WhatsApp-inspired responsive UI, and persistent data storage. Deployed using Vercel for seamless accessibility.',
    tags: ['React', 'Tailwind', 'Node.js', 'Socket.io', 'JSON Server', 'Vercel'],
    category: 'Full-stack',
    imageUrl: 'whatsappclone.jpg',
    liveUrl: 'https://whatsappclone-jet.vercel.app/',
    repoUrl: 'https://github.com/Chaitanyachaowdary/whatsappclone',
  },
  {
    title: 'Design Declares Clone',
    description: 'Built a fully responsive, pixel-perfect clone of the Design Declares website. Implemented scroll-triggered animations, sticky bottom navigation, and smooth user interactions. Deployed on Vercel.',
    tags: ['React.js', 'Tailwind CSS', 'Vercel'],
    category: 'Frontend',
    imageUrl: 'Design.png',
    liveUrl: 'https://design-one-gold.vercel.app/',
    repoUrl: 'https://github.com/Chaitanyachaowdary/Design',
  },
  {
    title: 'Health Care Dashboard',
    description: 'Developed a React-based healthcare simulation platform as part of a patient project. Enabled interactive training for mental health professionals through AI-powered virtual patient conversations. Deployed using Vercel for seamless accessibility.',
    tags: ['React', 'AI', 'Vercel'],
    category: 'AI',
    imageUrl: 'health.png',
    liveUrl: 'https://healthcare-psi-sepia.vercel.app/',
    repoUrl: 'https://github.com/Chaitanyachaowdary/healthcare',
  },
  {
    title: 'Easy Shop',
    description: 'A React.js e-commerce frontend demonstrating authentication, Tailwind CSS styling, API integration, and state management with Redux/Context API.',
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    category: 'Frontend',
    imageUrl: 'easyshop.png',
    liveUrl: 'https://easy-shop-main.vercel.app/',
    repoUrl: 'https://github.com/Chaitanyachaowdary/easy_shop-main'
  },
  {
    title: 'Cubic Technologies Website',
    description: 'Developed a static business portfolio website to showcase Cubic Technologies\' services and branding. Designed for responsiveness and ease of navigation, and deployed on Vercel.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    category: 'Frontend',
    imageUrl: 'cubic.png',
    liveUrl: 'https://cubic-technologies.vercel.app/',
    repoUrl: 'https://github.com/Chaitanyachaowdary/cubic-technologies',
  },
  {
    title: 'Veltore — AI Studio Site',
    description: 'Corporate site for Veltore, an AI-native software studio that runs the veltore.ai career platform. Built as a single static page with Tailwind via CDN, inline Feather icons, and aurora-gradient visual language. Shipped on Cloudflare Pages.',
    tags: ['HTML5', 'Tailwind CSS', 'Cloudflare Pages'],
    category: 'Frontend',
    imageUrl: 'veltore.jpg',
    liveUrl: 'https://veltore.vercel.app/',
  },
  {
    title: 'ChatGPT Clone',
    description: 'A powerful AI chat application powered by the OpenAI API. Features real-time conversation, code highlighting, and a responsive UI mimicking the original ChatGPT experience.',
    tags: ['React', 'OpenAI API', 'Node.js', 'Tailwind CSS'],
    category: 'AI',
    imageUrl: 'chatgpt-preview.png',
    liveUrl: 'https://drive.google.com/file/d/14ihb6-vbyO-imzH3KekO_e4xChCEclSG/view',
    liveLabel: 'Demo Video',
    repoUrl: 'https://github.com/Chaitanyachaowdary/ChatWIthAI',
  },
];

export const EDUCATION = [
  {
    degree: 'B.Tech in Electronics and Communication Engineering (GPA: 7.2)',
    institution: 'JNTU Anantapur (SVPCET)',
    period: 'Dec 2021 – April 2025',
    description: 'Puttur, Tirupati, Andhra Pradesh',
  },
  {
    degree: 'Intermediate in Maths, Physics, and Chemistry (GPA: 6.6)',
    institution: 'Vijayawada Nalanda Junior College',
    period: 'June 2019 – May 2021',
    description: 'Anantapur, Andhra Pradesh',
  },
  {
    degree: '10th (General) (GPA: 8.2)',
    institution: 'Loyola E.M High School',
    period: 'June 2018 – April 2019',
    description: 'Hindupur, Andhra Pradesh',
  },
];

export const CERTIFICATIONS = [
  {
    name: 'Full Stack Web Development – MSR ENDUSOFT PVT LTD (2023)',
    link: 'https://drive.google.com/file/d/1Ni4-hhE8TZjpelseP5GWZ6f-BHl67ASQ/view?usp=drive_link'
  },
  {
    name: 'Python for Data Science – NPTEL (2024)',
    link: 'https://drive.google.com/file/d/1cFgstzBjGiNNHoiJt01L9L9ayqPo6chHvl/view?usp=drive_link'
  },
  {
    name: 'Python (Basic) – HackerRank (2024)',
    link: 'https://drive.google.com/file/d/1x9y99GIxaGXKF8w0FS58c0YuDcmU2RP0/view?usp=drive_link'
  }
];
