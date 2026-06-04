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
    { name: 'Vite', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    { name: 'HTML5', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Tailwind CSS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' }
  ],
  backend: [
    { name: 'Node.js', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Hono', imageUrl: 'https://cdn.simpleicons.org/hono' },
    { name: 'Zod', imageUrl: 'https://cdn.simpleicons.org/zod' },
    { name: 'Spring Boot', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Hibernate', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg' },
    { name: 'FastAPI', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'REST APIs', imageUrl: 'https://cdn-icons-png.flaticon.com/512/8297/8297437.png' }, // Icon for API
    { name: 'Maven', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg' }
  ],
  database: [
    { name: 'PostgreSQL', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Drizzle ORM', imageUrl: 'https://cdn.simpleicons.org/drizzle' },
    { name: 'Redis', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'MySQL', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
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
      'Building full-stack features with React 19, Vite, and TypeScript on the front end and Node.js + Hono services on the back end.',
      'Designing type-safe PostgreSQL data access with Drizzle ORM and Zod, plus S3 file storage, real-time SSE, and BullMQ/Redis background jobs.',
      'Collaborating with cross-functional teams to define, design, and ship new features in an Agile workflow.',
      'Optimizing application performance, troubleshooting complex issues, and participating in code reviews.'
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
    period: 'Feb 2026 – Present',
    deliverables: [
      'Building lightweight, type-safe REST APIs with Node.js + Hono and Zod validation, backed by PostgreSQL 17 (Dockerized on EC2) and Drizzle ORM for fully type-safe data access.',
      'Architected real-time updates with PostgreSQL LISTEN/NOTIFY over Hono SSE, Amazon S3 file storage with access-control middleware, and background jobs via BullMQ + Redis + pg_cron.',
      'Building the React 19 + Vite + TypeScript front end with shadcn/ui, Tailwind CSS, and TanStack Router; production-grade auth (OTP, lockout, JWT) with strong automated test coverage.',
    ],
    stack: ['React 19', 'Vite', 'TypeScript', 'TanStack Router', 'shadcn/ui', 'Node.js', 'Hono', 'Zod', 'Drizzle ORM', 'PostgreSQL 17', 'Redis', 'BullMQ', 'Amazon S3', 'Docker', 'EC2'],
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
    imageUrl: 'whatsappclone.webp',
    liveUrl: 'https://whatsappclone-jet.vercel.app/',
    repoUrl: 'https://github.com/Chaitanyachaowdary/whatsappclone',
  },
  {
    title: 'Design Declares Clone',
    description: 'Built a fully responsive, pixel-perfect clone of the Design Declares website. Implemented scroll-triggered animations, sticky bottom navigation, and smooth user interactions. Deployed on Vercel.',
    tags: ['React.js', 'Tailwind CSS', 'Vercel'],
    category: 'Frontend',
    imageUrl: 'Design.webp',
    liveUrl: 'https://design-one-gold.vercel.app/',
    repoUrl: 'https://github.com/Chaitanyachaowdary/Design',
  },
  {
    title: 'Health Care Dashboard',
    description: 'Developed a React-based healthcare simulation platform as part of a patient project. Enabled interactive training for mental health professionals through AI-powered virtual patient conversations. Deployed using Vercel for seamless accessibility.',
    tags: ['React', 'AI', 'Vercel'],
    category: 'AI',
    imageUrl: 'health.webp',
    liveUrl: 'https://healthcare-psi-sepia.vercel.app/',
    repoUrl: 'https://github.com/Chaitanyachaowdary/healthcare',
  },
  {
    title: 'Easy Shop',
    description: 'A React.js e-commerce frontend demonstrating authentication, Tailwind CSS styling, API integration, and state management with Redux/Context API.',
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    category: 'Frontend',
    imageUrl: 'easyshop.webp',
    liveUrl: 'https://easy-shop-main.vercel.app/',
  },
  {
    title: 'Cubic Technologies Website',
    description: 'Developed a static business portfolio website to showcase Cubic Technologies\' services and branding. Designed for responsiveness and ease of navigation, and deployed on Vercel.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    category: 'Frontend',
    imageUrl: 'cubic.webp',
    liveUrl: 'https://cubic-technologies.vercel.app/',
    repoUrl: 'https://github.com/Chaitanyachaowdary/cubic-technologies',
  },
  {
    title: 'Veltore — AI Studio Site',
    description: 'Corporate site for Veltore, an AI-native software studio that runs the veltore.ai career platform. Built as a single static page with Tailwind via CDN, inline Feather icons, and aurora-gradient visual language. Shipped on Cloudflare Pages.',
    tags: ['HTML5', 'Tailwind CSS', 'Cloudflare Pages'],
    category: 'Frontend',
    imageUrl: 'veltore.webp',
    liveUrl: 'https://veltore.vercel.app/',
  },
  {
    title: 'ChatGPT Clone',
    description: 'A powerful AI chat application powered by the OpenAI API. Features real-time conversation, code highlighting, and a responsive UI mimicking the original ChatGPT experience.',
    tags: ['React', 'OpenAI API', 'Node.js', 'Tailwind CSS'],
    category: 'AI',
    imageUrl: 'chatgpt-preview.webp',
    liveUrl: 'https://drive.google.com/file/d/14ihb6-vbyO-imzH3KekO_e4xChCEclSG/view',
    liveLabel: 'Demo Video',
    repoUrl: 'https://github.com/Chaitanyachaowdary/ChatWIthAI',
  },
];

export const EDUCATION = [
  {
    degree: 'B.Tech in Electronics and Communication Engineering',
    gpa: 'GPA: 7.2',
    institution: 'JNTU Anantapur (SVPCET)',
    period: 'Dec 2021 – April 2025',
    description: 'Puttur, Tirupati, Andhra Pradesh',
  },
  {
    degree: 'Intermediate (Maths, Physics, Chemistry)',
    gpa: 'GPA: 6.6',
    institution: 'Vijayawada Nalanda Junior College',
    period: 'June 2019 – May 2021',
    description: 'Anantapur, Andhra Pradesh',
  },
  {
    degree: 'SSC (10th, General)',
    gpa: 'GPA: 8.2',
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
