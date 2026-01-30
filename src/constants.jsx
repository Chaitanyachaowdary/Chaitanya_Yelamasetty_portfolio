// src/constants.js

import React from 'react';

export const SKILLS = {
  languages: [
    { name: 'Java', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
  ],
  frontend: [
    { name: 'React.js', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'HTML5', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Tailwind CSS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' }
  ],
  backend: [
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
    { name: 'Postman', imageUrl: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'VS Code', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Eclipse', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg' },
    { name: 'IntelliJ', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' }
  ]
};

export const EXPERIENCE = [
  {
    role: 'Junior Backend Developer',
    company: 'CodeSage',
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
    period: 'May 2025 – DEC 2025',
    description: [
      'Completed intensive hands-on training in Java Full Stack Web Development.',
      'Gained strong knowledge in Java, Spring Boot, MySQL, HTML, CSS, JavaScript, and React.js.',
      'Built backend APIs, created UI components, and completed multiple real-world mini-projects.',
      'Practiced DSA, OOP concepts, SQL queries, debugging techniques, and deployment workflows.',
      'Worked in an Agile environment with weekly coding evaluations and structured assessments.'
    ]
  }
];


export const PROJECTS = [
  {
    title: 'WhatsApp Clone',
    description: 'Real-time chat application with one-to-one messaging, WhatsApp-inspired responsive UI, and persistent data storage. Deployed using Vercel for seamless accessibility.',
    tags: ['React', 'Tailwind', 'Node.js', 'Socket.io', 'JSON Server', 'Vercel'],
    imageUrl: 'whatsappclone.jpg',
    liveUrl: 'https://whatsappclone-jet.vercel.app/',
    repoUrl: 'https://github.com/Chaitanyachaowdary/whatsappclone',
  },

  {
    title: 'Design Declares Clone',
    description: 'Built a fully responsive, pixel-perfect clone of the Design Declares website. Implemented scroll-triggered animations, sticky bottom navigation, and smooth user interactions. Deployed on Vercel.',
    tags: ['React.js', 'Tailwind CSS', 'Vercel'],
    imageUrl: 'Design.png', // Replace with actual image URL
    liveUrl: 'https://design-one-gold.vercel.app/',
    repoUrl: 'https://github.com/Chaitanyachaowdary/Design',
  },
  {
    title: 'Health Care Dashboard',
    description: 'Developed a React-based healthcare simulation platform as part of a patient project. Enabled interactive training for mental health professionals through AI-powered virtual patient conversations. Deployed using Vercel for seamless accessibility.',
    tags: ['React', 'AI', 'Vercel'],
    imageUrl: 'health.png',
    liveUrl: 'https://healthcare-psi-sepia.vercel.app/',
    repoUrl: 'https://github.com/Chaitanyachaowdary/healthcare',
  },
  {
    title: 'Easy Shop',
    description: 'A React.js e-commerce frontend demonstrating authentication, Tailwind CSS styling, API integration, and state management with Redux/Context API.',
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    imageUrl: 'easyshop.png',
    liveUrl: 'https://easy-shop-main.vercel.app/',
    repoUrl: 'https://github.com/Chaitanyachaowdary/easy_shop-main'
  },
  {
    title: 'Cubic Technologies Website',
    description: 'Developed a static business portfolio website to showcase Cubic Technologies\' services and branding. Designed for responsiveness and ease of navigation, and deployed on Vercel.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    imageUrl: 'cubic.png',
    liveUrl: 'https://cubic-technologies.vercel.app/',
    repoUrl: 'https://github.com/Chaitanyachaowdary/cubic-technologies',
  },
  {
    title: 'ChatGPT Clone',
    description: 'A powerful AI chat application powered by the OpenAI API. Features real-time conversation, code highlighting, and a responsive UI mimicking the original ChatGPT experience.',
    tags: ['React', 'OpenAI API', 'Node.js', 'Tailwind CSS'],
    imageUrl: 'chatgpt-preview.png',
    liveUrl: 'https://drive.google.com/file/d/14ihb6-vbyO-imzH3KekO_e4xChCEclSG/view',
    repoUrl: 'https://github.com/Chaitanyachaowdary/ChatWIthAI',
  },
];

export const EDUCATION = [
  {
    degree: 'B.Tech in Electronics and Communication Engineering (GPA: 7.2)',
    institution: 'JNTU Anantapur, (SVPCET)',
    period: 'Dec 2021 – April 2025',
    description: 'Puttur, Tirupathi',
  },
  {
    degree: 'Intermediate in Maths, Physics, and Chemistry (GPA: 6.6)',
    institution: 'Vijayawada Nalanda Junior College',
    period: 'June 2019 – May 2021',
    description: 'Anantapur, Anantapur',
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
