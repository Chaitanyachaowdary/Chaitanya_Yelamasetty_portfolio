// src/constants.js

import React from 'react';

export const SKILLS = {
  frontend: [
    { name: 'JavaScript', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'React', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'HTML5', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
    { name: 'CSS3', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
    { name: 'Tailwind CSS', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { name: 'Material UI', imageUrl: 'https://raw.githubusercontent.com/mui/material-ui/master/docs/public/static/logo.png' }
  ],
  backend: [
    { name: 'Java', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
    { name: 'Python', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
    { name: 'Git & GitHub', imageUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' }
  ],
  database: [
    { name: 'MySQL', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg' }
  ],
  design: [
    { name: 'Canva', imageUrl: '/can.png' } // Local image in public folder
  ],
};


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
