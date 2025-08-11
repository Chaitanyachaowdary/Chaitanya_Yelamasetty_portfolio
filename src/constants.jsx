// src/constants.js

import React from 'react';

// SVG Icon Components
const ReactIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" strokeWidth="1.5"></path> <path d="M15.4645 15.4644C14.7578 16.1711 12.001 17.4132 12.001 17.4132C12.001 17.4132 9.24422 16.1711 8.53752 15.4644C7.83082 14.7577 6.58872 12 6.58872 12C6.58872 12 7.83082 9.24222 8.53752 8.53552C9.24422 7.82882 12.001 6.58672 12.001 6.58672C12.001 6.58672 14.7578 7.82882 15.4645 8.53552C16.1712 9.24222 17.4133 12 17.4133 12C17.4133 12 16.1712 14.7577 15.4645 15.4644Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 12L21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 12L21 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 12L12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 12L3 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 12L3 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 12L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
);

const JsIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 0H3v24h18V0zM12.1 18.25c-.75 1-1.85 1.5-3.2 1.5-1.3 0-2.3-.4-3-1.2-.7-.8-1.05-1.9-.9-3.3l2.25.45c0 .8.15 1.4.45 1.8.3.4.75.6 1.35.6.75 0 1.3-.2 1.65-.6.35-.4.5-1 .5-1.75V11.2h2.2v6.6c0 .15 0 .25.05.35zM19.75 18h-2.2v-5.6c0-1.1-.1-1.9-.3-2.4s-.6-.75-1.15-.75c-.6 0-1.05.25-1.35.75s-.45 1.2-.45 2.15V18h-2.2V9.4h2.2v1.3c.4-.6.9-1 1.5-1.2.6-.2 1.25-.3 2-.3.9 0 1.6.25 2.1.75.5.5.75 1.2.75 2.2V18z" fill="currentColor"/></svg>
);

const TailwindIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.25C12 18.25 12.75 21.25 16 21.25C19.25 21.25 20 18.25 20 18.25C20 18.25 19.25 15.25 16 15.25C12.75 15.25 12 18.25 12 18.25Z" fill="currentColor"></path><path d="M4 18.25C4 18.25 4.75 21.25 8 21.25C11.25 21.25 12 18.25 12 18.25C12 18.25 11.25 15.25 8 15.25C4.75 15.25 4 18.25 4 18.25Z" fill="currentColor"></path><path d="M8 2.75C8 2.75 8.75 5.75 12 5.75C15.25 5.75 16 2.75 16 2.75C16 2.75 15.25 -0.25 12 -0.25C8.75 -0.25 8 2.75 8 2.75Z" fill="currentColor"></path><path d="M12 9.5C12 9.5 12.75 12.5 16 12.5C19.25 12.5 20 9.5 20 9.5C20 9.5 19.25 6.5 16 6.5C12.75 6.5 12 9.5 12 9.5Z" fill="currentColor"></path></svg>
);

const HtmlIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 16.57l-4.24-1.22.3-3.23h3.94V9.28H7.5l.44-4.86h9.12l-.4 4.54H12v2.86h4.5l-.46 5.15L12 16.57zM2.81 1l1.8 20.3L12 23l7.38-1.7L21.19 1H2.81z" fill="currentColor"/></svg>
);

const CssIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 16.56l-3.32-.9.23-2.58h3.09v-2.9H8.38l.23-2.58h7.24l-.24 2.58H12v2.9h3.32l-.33 3.65L12 16.56zM2.81 1l1.8 20.3L12 23l7.38-1.7L21.19 1H2.81z" fill="currentColor"/></svg>
);

const GitIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.944 10.969a.531.531 0 00-.281-.469L13.12 5.094a.531.531 0 00-.532 0l-2.093 1.203v3.5l1.938 1.125a.266.266 0 01.133.235v3.453a.266.266 0 01-.133.234l-1.938 1.125v3.5l2.094 1.203a.531.531 0 00.531 0l8.547-4.906a.531.531 0 00.281-.469v-5.812zM11.969 3.375c-.328 0-.61.122-.843.36l-2.5 2.5a1.18 1.18 0 00-.36.844v3.75h-2.5a1.18 1.18 0 00-.844.36l-2.5 2.5c-.238.239-.36.516-.36.844 0 .328.122.61.36.844l2.5 2.5c.238.238.515.36.843.36h2.5v3.75c0 .328.122.61.36.844l2.5 2.5c.238.238.515.36.843.36.328 0 .61-.122.844-.36l2.5-2.5a1.18 1.18 0 00.36-.844v-3.75h2.5c.328 0 .61-.122.844-.36l2.5-2.5a1.18 1.18 0 00.36-.844 1.18 1.18 0 00-.36-.844l-2.5-2.5a1.18 1.18 0 00-.844-.36h-2.5V6.75a1.18 1.18 0 00-.36-.844l-2.5-2.5a1.18 1.18 0 00-.844-.36zm0 1.25c.104 0 .193.04.265.117l2.5 2.5a.375.375 0 01.118.266v3.75h1.25a.375.375 0 01.266.117l2.5 2.5c.077.072.117.161.117.266a.375.375 0 01-.117.266l-2.5 2.5a.375.375 0 01-.266.117H14.75v3.75a.375.375 0 01-.118.266l-2.5 2.5a.375.375 0 01-.265.117.375.375 0 01-.266-.117l-2.5-2.5a.375.375 0 01-.117-.266v-3.75H8a.375.375 0 01-.266-.117l-2.5-2.5A.375.375 0 015.117 12a.375.375 0 01.117-.266l2.5-2.5A.375.375 0 018 9.125h1.25V5.375a.375.375 0 01.117-.266l2.5-2.5a.375.375 0 01.266-.117z" fill="currentColor"></path></svg>
);

const JavaIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3.5 1h2v8h-2V7zM13 7h3v1h-1v2h1v1h-1v4h-2V7z" fill="currentColor"/></svg>
);

const PythonIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.24 14.24c-1.28 1.28-2.98 1.92-4.68 1.92s-3.4-.64-4.68-1.92c-1.28-1.28-1.92-2.98-1.92-4.68s.64-3.4 1.92-4.68 2.98-1.92 4.68-1.92 3.4.64 4.68 1.92c1.28 1.28 1.92 2.98 1.92 4.68s-.64 3.4-1.92 4.68zm-3.08-9.08H9.8v1.64h1.72c.6 0 1.08.48 1.08 1.08v.54h-2.8v1.64h2.8v1.64h-2.8v1.64h2.8v.54c0 .6-.48 1.08-1.08 1.08H9.8v1.64h3.36c1.48 0 2.68-1.2 2.68-2.68v-4.96c0-1.48-1.2-2.68-2.68-2.68zm-4.72 2.68v4.96c0 1.48 1.2 2.68 2.68 2.68h1.64v-1.64H9.8c-.6 0-1.08-.48-1.08-1.08v-.54h2.8V9.8h-2.8V8.16h2.8V6.52h-2.8v-.54c0-.6.48-1.08 1.08-1.08h1.64V3.24H8.44c-1.48 0-2.68 1.2-2.68 2.68z" fill="currentColor"/></svg>
);

const MaterialUiIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4.5-8.5h9v2h-9zm0-3h9v2h-9z" fill="currentColor"/></svg>
);

const MySqlIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v3h-2zm0 4h2v6h-2z" fill="currentColor"/></svg>
);

const CanvaIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5z" fill="currentColor"/><path d="M12 8a4 4 0 100 8 4 4 0 000-8zm0 1.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill="currentColor"/></svg>
);

// DATA
export const SKILLS = [
  { name: 'Java', Icon: JavaIcon },
  { name: 'Python', Icon: PythonIcon },
  { name: 'JavaScript', Icon: JsIcon },
  { name: 'React', Icon: ReactIcon },
  { name: 'HTML5', Icon: HtmlIcon },
  { name: 'CSS3', Icon: CssIcon },
  { name: 'Tailwind CSS', Icon: TailwindIcon },
  { name: 'Material UI', Icon: MaterialUiIcon },
  { name: 'MySQL', Icon: MySqlIcon },
  { name: 'Git & GitHub', Icon: GitIcon },
  { name: 'Canva', Icon: CanvaIcon },
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
    title: 'Cubic Technologies Website',
    description: 'Developed a static business portfolio website to showcase Cubic Technologies\' services and branding. Designed for responsiveness and ease of navigation, and deployed on Vercel.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    imageUrl: 'cubic.png', // Replace with actual image URL
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
