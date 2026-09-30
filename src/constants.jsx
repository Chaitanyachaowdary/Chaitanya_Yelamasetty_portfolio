// src/constants.js

import React from 'react';

export const SKILLS = {
  languages: [
    { name: 'Java', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Kotlin', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' }
  ],
  frontend: [
    { name: 'React.js', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Vite', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    { name: 'TanStack Router', imageUrl: 'https://cdn.simpleicons.org/tanstack' },
    { name: 'shadcn/ui', imageUrl: 'https://cdn.simpleicons.org/shadcnui' },
    { name: 'HTML5', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Tailwind CSS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' }
  ],
  backend: [
    { name: 'Node.js', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Hono', imageUrl: 'https://cdn.simpleicons.org/hono' },
    { name: 'NestJS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
    { name: 'Zod', imageUrl: 'https://cdn.simpleicons.org/zod' },
    { name: 'Spring Boot', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Hibernate', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg' },
    { name: 'FastAPI', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'Flask', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'Express', imageUrl: 'https://cdn.simpleicons.org/express' },
    { name: 'REST APIs', imageUrl: 'https://cdn-icons-png.flaticon.com/512/8297/8297437.png' }, // Icon for API
    { name: 'NATS', imageUrl: 'https://cdn.simpleicons.org/natsdotio' },
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
    { name: 'AWS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Cloudflare', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg' },
    { name: 'Railway', imageUrl: 'https://cdn.simpleicons.org/railway' },
    { name: 'Coolify', imageUrl: 'https://cdn.simpleicons.org/coolify' },
    { name: 'Hostinger', imageUrl: 'https://cdn.simpleicons.org/hostinger' },
    { name: 'Nginx', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' }
  ],
  tools: [
    { name: 'Git', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub Actions', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg' },
    { name: 'Docker', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Tauri', imageUrl: 'https://cdn.simpleicons.org/tauri' },
    { name: 'Postman', imageUrl: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'VS Code', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Eclipse', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg' },
    { name: 'IntelliJ', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' }
  ],
  'testing & accessibility': [
    { name: 'Vitest', imageUrl: 'https://cdn.simpleicons.org/vitest' },
    { name: 'Playwright', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg' },
    { name: 'WCAG 2.2 AA', imageUrl: '/icons/accessibility.svg' },
    { name: 'NVDA & TalkBack', imageUrl: '/icons/accessibility.svg' }
  ]
};

export const EXPERIENCE = [
  {
    role: 'Full Stack & DevOps Engineer',
    company: 'CodeSage India Pvt Ltd',
    logoUrl: 'companies/codesage.png',
    accent: 'from-purple-500 to-indigo-500',
    period: 'Feb 2026 – Present',
    description: [
      'Building full-stack features for GarvSe 2.0 — React 19, Vite and TypeScript on the front end, Node.js + Hono services on the back end — for a platform now used across 45 centres in 10 states and 2 union territories.',
      'Treating accessibility as a build requirement rather than a final pass: WCAG 2.2 AA from the first sprint, verified with NVDA and TalkBack, because many of the field officers who use the platform daily are blind.',
      'Designing type-safe PostgreSQL data access with Drizzle ORM and Zod, plus S3 document storage behind access-control middleware, real-time updates over SSE, and BullMQ/Redis background jobs.',
      'Shipping offline-first desktop and Android builds with Tauri, including a local mirror and a sync queue so centres with unreliable connectivity can keep working.',
      'Owning the migration from the legacy system into production and the release engineering behind it — CI, Docker on EC2, and staging and production deployments.',
      'Taking features through client UAT and live demo sessions with end users, then turning the feedback into fixes.',
      'Collaborating with cross-functional teams in an Agile workflow, reviewing code, and profiling and fixing production performance problems.'
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
      'Building to WCAG 2.2 AA from the first sprint and verifying with NVDA and TalkBack — many of the officers who run the programme are blind — and integrating the Encludo accessibility widget so it survives client-side route changes.',
      'Delivering offline-first desktop and Android builds with Tauri, running the production migration from the legacy GarvSe system, and maintaining the CI and deployment pipeline for staging and production releases.',
    ],
    stack: ['React 19', 'Vite', 'TypeScript', 'TanStack Router', 'shadcn/ui', 'Node.js', 'Hono', 'Zod', 'Drizzle ORM', 'PostgreSQL 17', 'Redis', 'BullMQ', 'Amazon S3', 'Docker', 'EC2', 'Tauri', 'GitHub Actions', 'WCAG 2.2 AA'],
    websiteUrl: 'https://enableindia.org/',
  },
];

export const PROJECT_CATEGORIES = ['All', 'Full-stack', 'Frontend', 'AI', 'Mobile'];

export const PROJECTS = [
  {
    title: 'Encludo — Accessibility Widget',
    kind: 'client',
    description: 'Purple Aware Technologies’ privacy-first accessibility platform, built from scratch. One script tag adds font scaling, contrast modes, a dyslexia-friendly font, AI text simplification, voice assistance and 20-language translation to any website. Under 50 KB gzipped, WCAG 2.2 AA, no third-party tracking. Express API, admin dashboard and widget across a monorepo, running on a self-hosted Coolify instance after consolidating off Railway.',
    tags: ['TypeScript', 'Express', 'PostgreSQL', 'Redis', 'Docker', 'Coolify', 'CI/CD', 'WCAG 2.2 AA', 'AI', 'SaaS'],
    category: 'Full-stack',
    imageUrl: 'encludo.webp',
    details: {
      period: '2026',
      role: 'Building the product from scratch at Purple Aware Technologies — backend, dashboard, widget and the deployment pipeline behind them.',
      problem:
        'Most websites are not usable by people with disabilities, and retrofitting each one is slow and expensive. Encludo gives a site the controls its visitors need without rebuilding the site.',
      built: [
        'A monorepo carrying three deployables: an Express API, a React admin dashboard, and the embeddable widget itself.',
        'Self-hosted infrastructure on Coolify for both staging and production — the API in Docker alongside PostgreSQL and Redis — consolidated from an earlier Railway deployment to cut cost and keep the data on our own box.',
        'Deploys that never fire by accident: automatic deployment is switched off, and a release ships only on request, through a GitHub Actions workflow that runs the full CI gate and a smoke test first, or an explicit redeploy.',
        'Domains and DNS on Hostinger, so each environment answers on encludo.com rather than a platform-generated hostname.',
        'Integrated into GarvSe 2.0 as the first consumer, with SPA-safe re-binding so the trigger survives client-side navigation, which the SDK does not handle by default.',
      ],
      highlights: [
        'Font scaling, contrast modes and a dyslexia-friendly font.',
        'AI text simplification and voice assistance.',
        'Translation into 20 languages.',
        'Under 50 KB gzipped, privacy-first, with no third-party tracking.',
      ],
      facts: [
        { label: 'Install', value: 'One script tag' },
        { label: 'Size', value: 'Under 50 KB' },
        { label: 'Standard', value: 'WCAG 2.2 AA' },
        { label: 'Languages', value: '20' },
        { label: 'Stage', value: 'Open beta' },
        { label: 'Hosting', value: 'Self-hosted Coolify' },
      ],
      note: 'Encludo is a Purple Aware Technologies product built by a team, not a solo project. Currently in open beta.',
    },
    liveUrl: 'https://encludo.com/',
  },
  {
    title: 'GarvSe 2.0 — Accessibility-First Livelihood Platform',
    kind: 'client',
    description: 'Monitoring, Evaluation & Learning platform for EnAble India, serving 45 centres across 10 states and 2 UTs. Built WCAG 2.2 AA accessible from the first sprint, because the field officers who use it every day are blind. React 19 and TypeScript front end, Node.js and Hono APIs on PostgreSQL, offline-first desktop and Android builds via Tauri, and a full migration from the legacy system that went live with zero errors.',
    tags: ['React 19', 'TypeScript', 'Node.js', 'Hono', 'Drizzle ORM', 'PostgreSQL', 'Tauri', 'Redis', 'AWS S3', 'Docker', 'WCAG 2.2 AA'],
    category: 'Full-stack',
    imageUrl: 'garvse2.webp',
    details: {
      period: 'Feb 2026 – Present',
      role: 'Full-stack development plus DevOps and releases, working directly with the client through UAT.',
      problem:
        'EnAble India runs a livelihood programme for people with disabilities. Field officers record every candidate, training batch and job settlement, and many of those officers are blind. The platform therefore has to be operable by screen reader and keyboard from the first screen, and it has to keep working in centres where the connection drops.',
      built: [
        'React 19, Vite and TypeScript front end with TanStack Router and shadcn/ui, built to WCAG 2.2 AA and tested with NVDA and TalkBack.',
        'Type-safe Node.js and Hono APIs with Zod validation and Drizzle ORM over PostgreSQL 17, running in Docker on EC2.',
        'Real-time updates using PostgreSQL LISTEN/NOTIFY over server-sent events, S3 document storage behind access-control middleware, and background jobs on BullMQ, Redis and pg_cron.',
        'Offline-first desktop and Android builds with Tauri, including a local mirror and a sync queue so officers can work without a connection.',
        'A full data migration from the previous system, reproducible in one command, which went live in production with zero errors.',
        'Release engineering: CI, signed Android and desktop builds, and staging and production deployments.',
      ],
      facts: [
        { label: 'Centres', value: '45' },
        { label: 'Coverage', value: '10 states + 2 UTs' },
        { label: 'Standard', value: 'WCAG 2.2 AA' },
        { label: 'Platforms', value: 'Web, desktop, Android' },
        { label: 'Offline', value: 'Yes, sync queue' },
        { label: 'Stack', value: 'React 19 · Hono · Postgres' },
      ],
      note: 'Client project. The source is private, so the link opens the live application rather than a repository.',
    },
    liveUrl: 'https://app.garvse.org/',
    liveLabel: 'Open live app',
  },
  {
    title: 'GarvSe 1.0 — Centre Data Management',
    kind: 'client',
    description: 'The production system the programme ran on before 2.0. Added password and email-OTP login, user block and unblock with duplicate detection, pagination and search across every module, and the OpunSeva partner API for external candidate data. Sole maintainer of the reports service, and ran the staging and production deployments.',
    tags: ['React', 'NestJS', 'PostgreSQL', 'REST APIs', 'NATS', 'Production Support'],
    category: 'Full-stack',
    imageUrl: 'garvse1.webp',
    details: {
      period: 'Feb 2026 – Jul 2026',
      role: 'Feature development and production support on the system that ran the programme before 2.0.',
      problem:
        'The original platform was already live and carrying real programme data. Changes had to land without downtime while the replacement was being built in parallel.',
      built: [
        'Password and email-OTP sign-in, replacing an on-screen OTP that was visible to anyone looking at the display.',
        'User management: block and unblock, duplicate mobile and email detection, and clearer validation messages.',
        'Pagination and search across every list so large centres stopped hitting unusable pages.',
        'The OpunSeva partner API, a read-only external candidate feed with lookup joins and filtering.',
        'Sole maintainer of the reports service, fixing village and block names, disability columns and duplicate rows in the livelihood reports.',
      ],
      facts: [
        { label: 'Status', value: 'Superseded by 2.0' },
        { label: 'Deployments', value: '15 to staging and production' },
        { label: 'Reports service', value: 'Sole maintainer' },
      ],
      note: 'Client project on a private repository, now replaced by GarvSe 2.0.',
    },
    liveUrl: 'https://stage.garvse.org/',
    liveLabel: 'Open app',
  },
  {
    title: 'EnableU — Accessibility-First Learning Platform',
    kind: 'personal',
    description: 'A learning platform built so that disability is never the reason someone cannot take the course. Dyslexia-friendly typography and a reading guide, AA-contrast modes, full keyboard navigation, and reduced-motion support, wrapped in a gamified quiz and progress system. Three tiers: a React client, a Node service, and a Python API, with a seven-document architecture and security guide.',
    tags: ['React', 'Node.js', 'Python', 'Flask', 'JWT', 'Tailwind CSS', 'Accessibility'],
    category: 'Full-stack',
    imageUrl: 'enableu.webp',
    details: {
      period: '2026',
      role: 'Designed and built the whole platform — client, both backends, and the docs.',
      problem:
        'Most e-learning platforms treat accessibility as a settings page nobody finds. EnableU starts from the opposite end: the reading aids, contrast modes and keyboard paths are part of the product, so a learner with dyslexia or low vision uses the same course as everyone else rather than a stripped-down alternative.',
      built: [
        'An accessibility layer that is always available — dyslexia-friendly typography, a reading guide, AA-contrast themes, full keyboard navigation and reduced-motion support.',
        'A complete auth system: signup, login, forgot and reset password, forced password change, and a password-strength indicator.',
        'A gamified learning core — quiz player, quiz management, progress dashboard and a synchronised leaderboard.',
        'An admin area with user management, quiz management, analytics and a dashboard overview.',
        'A two-backend architecture: a Node service for quiz, progress and leaderboard routes, and a Python API for auth, admin and gamification.',
        'Seven architecture and setup documents covering the frontend, both backends, security and admin.',
      ],
      facts: [
        { label: 'Source files', value: '127' },
        { label: 'Backends', value: 'Node + Python' },
        { label: 'Docs', value: '7 guides' },
        { label: 'Focus', value: 'Inclusive design' },
        { label: 'Auth', value: 'JWT' },
        { label: 'Type', value: 'Personal project' },
      ],
      note: 'The hosted demo is currently offline, so the link opens the repository.',
    },
    repoUrl: 'https://github.com/Chaitanyachaowdary/EnableU',
  },
  {
    title: 'TinyLink — URL Shortener',
    kind: 'personal',
    description: 'A working URL shortener on Next.js 15 and TypeScript, backed by PostgreSQL. Create a short link with an optional custom code, then watch the click count climb on the dashboard. Includes per-link stats, copy and delete actions, a redirect route, and a health-check endpoint.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'REST APIs', 'Vercel'],
    category: 'Full-stack',
    imageUrl: 'tinylink.webp',
    details: {
      period: '2025',
      role: 'Built end to end, front end and database.',
      problem:
        'A shortener is small enough to finish and complete enough to be honest: it needs a real database, real routing, collision handling on custom codes, and a redirect that is fast.',
      built: [
        'Next.js App Router with TypeScript throughout — no JavaScript escape hatches.',
        'PostgreSQL persistence through a small data layer, rather than in-memory state that resets on deploy.',
        'A REST API for creating, listing and deleting links, plus a dynamic redirect route that counts each hit.',
        'A dashboard listing every link with its code, destination, click count, and copy, stats and delete actions.',
        'A /healthz endpoint so the deployment can be monitored.',
      ],
      facts: [
        { label: 'Framework', value: 'Next.js 15' },
        { label: 'Language', value: 'TypeScript' },
        { label: 'Database', value: 'PostgreSQL' },
        { label: 'Custom codes', value: 'Yes' },
        { label: 'Deployed', value: 'Vercel' },
        { label: 'Type', value: 'Personal project' },
      ],
    },
    liveUrl: 'https://tinylink-phi.vercel.app',
    repoUrl: 'https://github.com/Chaitanyachaowdary/TINYLINK',
  },
  {
    title: 'Tech.Care — Patient Dashboard',
    kind: 'personal',
    description: 'A clinician-facing patient dashboard: a searchable patient list, a six-month blood-pressure chart with systolic and diastolic trends called out against the average, live vitals tiles, a diagnostic list and downloadable lab results. Built with React and Recharts.',
    tags: ['React', 'Recharts', 'Tailwind CSS', 'Data Visualisation', 'Vercel'],
    category: 'Frontend',
    imageUrl: 'techcare.webp',
    details: {
      period: '2025',
      role: 'Built the full interface from a design.',
      problem:
        'A clinician has seconds, not minutes. Everything that matters for one patient — trend, current vitals, diagnoses and results — has to be legible on a single screen without scrolling for it.',
      built: [
        'A three-column layout: patient list, the selected patient\u2019s diagnosis history, and their profile with contact and insurance details.',
        'A six-month blood-pressure chart in Recharts, with systolic and diastolic readings annotated as higher or lower than average.',
        'Vitals tiles for respiratory rate, temperature and heart rate, each carrying its own status.',
        'A diagnostic list and a lab-results panel.',
        'Search across the patient list, and a responsive layout down to tablet width.',
      ],
      facts: [
        { label: 'Charts', value: 'Recharts' },
        { label: 'Domain', value: 'Clinical' },
        { label: 'Layout', value: 'Three-column' },
        { label: 'Deployed', value: 'Vercel' },
      ],
      note: 'Front-end build against mock patient data — no real patient records are involved.',
    },
    liveUrl: 'https://techcare-dashboard-pied.vercel.app',
    repoUrl: 'https://github.com/Chaitanyachaowdary/techcare-dashboard',
  },
  {
    title: 'CineVerse — Movie Streaming SPA',
    kind: 'personal',
    description: 'A Netflix-style single-page app on the TMDB API. Search the catalogue, browse trending and popular rows, open a detail page, and — once signed in — keep a watchlist, see recently viewed titles and pick a subscription plan. Auth-gated routes, context-based state, and a component library of its own.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'TMDB API', 'Axios', 'React Router', 'Context API'],
    category: 'Frontend',
    imageUrl: 'cineverse.webp',
    details: {
      period: '2026',
      role: 'Built end to end as a personal project.',
      problem:
        'Streaming interfaces look simple and are not: rows that load independently, a search that stays responsive, and a set of features that only exist once you are signed in.',
      built: [
        'Trending and popular rows, catalogue search and a movie detail page, all from the TMDB API via a dedicated API layer.',
        'Authentication with login and signup on one page, and protected routes for profile, watchlist and recently viewed.',
        'A watchlist you can add to and remove from, plus recently-viewed tracking, both held in React context.',
        'A subscription plan selector that appears only after sign-in.',
        'A reusable component set — navbar, search bar, modal, loader, error message, movie card, grid and row.',
      ],
      facts: [
        { label: 'Data', value: 'TMDB API' },
        { label: 'State', value: 'Context API' },
        { label: 'Routes', value: 'Auth-protected' },
        { label: 'Build', value: 'Vite' },
        { label: 'Deployed', value: 'Vercel' },
        { label: 'Type', value: 'Personal project' },
      ],
    },
    liveUrl: 'https://cine-verse-snowy.vercel.app',
    repoUrl: 'https://github.com/Chaitanyachaowdary/CineVerse',
  },
  {
    title: 'HealthCare+ — Appointment Booking',
    kind: 'personal',
    description: 'A patient-facing clinic site with real booking behind it: browse services, book an appointment, and sign in as either a patient or an administrator, with separate dashboards for each. React front end with framer-motion, on an Express backend.',
    tags: ['React', 'Express', 'Node.js', 'React Router', 'framer-motion', 'Tailwind CSS'],
    category: 'Full-stack',
    imageUrl: 'healthplus.webp',
    details: {
      period: '2025',
      role: 'Built the front end and the booking backend.',
      problem:
        'A clinic site that only advertises is half a product. The booking has to work, and the clinic needs somewhere to see what was booked.',
      built: [
        'A marketing front — hero, services, about, testimonials and contact — with framer-motion transitions.',
        'An appointment booking flow backed by an Express service.',
        'Two separate sign-in paths: patient login and signup, and an administrator login.',
        'A patient profile area and an admin dashboard over the bookings.',
        'Client-side routing across every section, responsive down to phone width.',
      ],
      facts: [
        { label: 'Backend', value: 'Express' },
        { label: 'Roles', value: 'Patient + admin' },
        { label: 'Motion', value: 'framer-motion' },
        { label: 'Deployed', value: 'Vercel' },
        { label: 'Type', value: 'Personal project' },
      ],
    },
    liveUrl: 'https://health-application-dusky.vercel.app',
    repoUrl: 'https://github.com/Chaitanyachaowdary/Health_Application',
  },
  {
    title: 'Kanna — Android AI Assistant',
    kind: 'personal',
    description: 'A native Android assistant in Kotlin. A wake-word engine listens without a button press, a notification service surfaces replies, and requests go to Gemini. Conversation history lives in an encrypted Room database with its key held in the Android keystore, and the logging policy is explicit about what is kept.',
    tags: ['Kotlin', 'Android', 'Jetpack Compose', 'Room', 'Gemini API', 'MVVM', 'Encryption'],
    category: 'Mobile',
    imageUrl: 'kanna.webp',
    details: {
      period: '2026',
      role: 'Built the app solo, native Android.',
      problem:
        'A voice assistant is a privacy problem before it is an engineering one. If it is always listening and it keeps a history, the history has to be encrypted and the app has to be honest about what it logs.',
      built: [
        'A wake-word engine with a background watcher, so the assistant responds without opening the app.',
        'A Gemini API client with its own model layer for requests and responses.',
        'An encrypted Room database for action history, with the key supplied by a dedicated key provider rather than hard-coded.',
        'An explicit AI logging policy, plus history filtering and export.',
        'MVVM architecture with a Jetpack Compose interface and its own theme.',
        'A notification service and an on-device diagnostics module.',
      ],
      facts: [
        { label: 'Language', value: 'Kotlin' },
        { label: 'UI', value: 'Jetpack Compose' },
        { label: 'Storage', value: 'Encrypted Room' },
        { label: 'Model', value: 'Gemini' },
        { label: 'Pattern', value: 'MVVM' },
        { label: 'Type', value: 'Personal project' },
      ],
      note: 'Native Android, so there is no web demo — the link opens the repository.',
    },
    repoUrl: 'https://github.com/Chaitanyachaowdary/Kanna',
  },
  {
    title: 'WhatsApp Clone',
    kind: 'personal',
    description: 'Real-time chat application with one-to-one messaging, WhatsApp-inspired responsive UI, and persistent data storage. Deployed using Vercel for seamless accessibility.',
    tags: ['React', 'Tailwind', 'Node.js', 'Socket.io', 'JSON Server', 'Vercel'],
    category: 'Full-stack',
    imageUrl: 'whatsappclone.webp',
    details: {
      role: 'Personal project, built end to end.',
      problem:
        'A chat app is the clearest way to practise real-time state: messages have to arrive without a refresh, survive a reload, and read well on a phone.',
      built: [
        'One-to-one messaging over Socket.io, so messages appear for both people without polling.',
        'A responsive, WhatsApp-inspired interface built with React and Tailwind CSS.',
        'Persistent conversations backed by a JSON Server API, so history survives a reload.',
        'Deployed on Vercel.',
      ],
      facts: [
        { label: 'Type', value: 'Personal project' },
        { label: 'Real-time', value: 'Socket.io' },
        { label: 'Deployed', value: 'Vercel' },
      ],
    },
    liveUrl: 'https://whatsappclone-jet.vercel.app/',
    repoUrl: 'https://github.com/Chaitanyachaowdary/whatsappclone',
  },
  {
    title: 'Design Declares Clone',
    kind: 'personal',
    description: 'Built a fully responsive, pixel-perfect clone of the Design Declares website. Implemented scroll-triggered animations, sticky bottom navigation, and smooth user interactions. Deployed on Vercel.',
    tags: ['React.js', 'Tailwind CSS', 'Vercel'],
    category: 'Frontend',
    imageUrl: 'Design.webp',
    details: {
      role: 'Personal project, front end only.',
      problem:
        'Rebuilding a well-known site from scratch is the fastest way to find out whether you can match a professional design exactly, not approximately.',
      built: [
        'A pixel-accurate rebuild of the Design Declares site, responsive from phone to desktop.',
        'Scroll-triggered animations timed to the original.',
        'A sticky bottom navigation bar and smooth section transitions.',
        'Deployed on Vercel.',
      ],
      facts: [
        { label: 'Type', value: 'Personal project' },
        { label: 'Focus', value: 'Pixel accuracy' },
        { label: 'Deployed', value: 'Vercel' },
      ],
    },
    liveUrl: 'https://design-one-gold.vercel.app/',
    repoUrl: 'https://github.com/Chaitanyachaowdary/Design',
  },
  {
    title: 'Health Care Dashboard',
    kind: 'client',
    description: 'Developed a React-based healthcare simulation platform as part of a patient project. Enabled interactive training for mental health professionals through AI-powered virtual patient conversations. Deployed using Vercel for seamless accessibility.',
    tags: ['React', 'AI', 'Vercel'],
    category: 'AI',
    imageUrl: 'health.webp',
    details: {
      role: 'React developer on a client-facing simulation platform.',
      problem:
        'Mental health professionals need practice conversations before they meet real patients, and live role-play is expensive to arrange.',
      built: [
        'A React simulation platform where a trainee holds a conversation with an AI virtual patient.',
        'Interactive training flows that let a professional rehearse a case end to end.',
        'Deployed on Vercel so trainers could reach it without any install.',
      ],
      facts: [
        { label: 'Domain', value: 'Healthcare training' },
        { label: 'Interface', value: 'AI conversation' },
        { label: 'Deployed', value: 'Vercel' },
      ],
    },
    liveUrl: 'https://healthcare-psi-sepia.vercel.app/',
    repoUrl: 'https://github.com/Chaitanyachaowdary/healthcare',
  },
  {
    title: 'Easy Shop',
    kind: 'personal',
    description: 'A React.js e-commerce frontend demonstrating authentication, Tailwind CSS styling, API integration, and state management with Redux/Context API.',
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    category: 'Frontend',
    imageUrl: 'easyshop.webp',
    details: {
      role: 'Personal project, front end only.',
      problem:
        'An e-commerce front end is a compact way to exercise the three things every app needs: authentication, remote data and shared state.',
      built: [
        'Authentication flow and protected views in React.',
        'Product data pulled from an API and rendered into browsable listings.',
        'Shared state handled with Redux and the Context API.',
        'Styled with Tailwind CSS and deployed on Vercel.',
      ],
      facts: [
        { label: 'Type', value: 'Personal project' },
        { label: 'State', value: 'Redux / Context' },
        { label: 'Deployed', value: 'Vercel' },
      ],
      note: 'Front-end demonstration. There is no real payment or order backend behind it.',
    },
    liveUrl: 'https://easy-shop-main.vercel.app/',
  },
  {
    title: 'Cubic Technologies Website',
    kind: 'client',
    description: 'Developed a static business portfolio website to showcase Cubic Technologies\' services and branding. Designed for responsiveness and ease of navigation, and deployed on Vercel.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    category: 'Frontend',
    imageUrl: 'cubic.webp',
    details: {
      role: 'Built and shipped the site solo.',
      problem:
        'A small business needed a presence that loads instantly on a weak connection and costs nothing to run.',
      built: [
        'A static marketing site presenting the company services and branding.',
        'Hand-written HTML, CSS and JavaScript with no framework, so the page stays small.',
        'Responsive layout and straightforward navigation.',
        'Deployed on Vercel.',
      ],
      facts: [
        { label: 'Type', value: 'Business site' },
        { label: 'Stack', value: 'No framework' },
        { label: 'Deployed', value: 'Vercel' },
      ],
    },
    liveUrl: 'https://cubic-technologies.vercel.app/',
    repoUrl: 'https://github.com/Chaitanyachaowdary/cubic-technologies',
  },
  {
    title: 'Veltore — AI Studio Site',
    kind: 'client',
    description: 'Corporate site for Veltore, an AI-native software studio that runs the veltore.ai career platform. Built as a single static page with Tailwind via CDN, inline Feather icons, and aurora-gradient visual language. Shipped on Cloudflare Pages.',
    tags: ['HTML5', 'Tailwind CSS', 'Cloudflare Pages'],
    category: 'Frontend',
    imageUrl: 'veltore.webp',
    details: {
      role: 'Designed and built the single-page site.',
      problem:
        'Veltore needed a corporate face for its AI studio and the career platform it runs, without the weight of a full framework.',
      built: [
        'A single static page using Tailwind from a CDN, so there is no build step at all.',
        'Inline Feather icons instead of an icon package, keeping the payload small.',
        'An aurora-gradient visual language carried through the page.',
        'Shipped on Cloudflare Pages.',
      ],
      facts: [
        { label: 'Type', value: 'Corporate site' },
        { label: 'Build step', value: 'None' },
        { label: 'Hosting', value: 'Cloudflare Pages' },
      ],
    },
    liveUrl: 'https://veltore.vercel.app/',
  },
  {
    title: 'ChatGPT Clone',
    kind: 'personal',
    description: 'A powerful AI chat application powered by the OpenAI API. Features real-time conversation, code highlighting, and a responsive UI mimicking the original ChatGPT experience.',
    tags: ['React', 'OpenAI API', 'Node.js', 'Tailwind CSS'],
    category: 'AI',
    imageUrl: 'chatgpt-preview.webp',
    details: {
      role: 'Personal project, built end to end.',
      problem:
        'Wiring a chat interface to a language model teaches the parts a demo usually hides: streaming responses, formatting code, and keeping the thread readable.',
      built: [
        'A conversational interface over the OpenAI API with a Node.js backend holding the key server-side.',
        'Syntax-highlighted code blocks in replies.',
        'A responsive interface modelled on the original ChatGPT layout.',
      ],
      facts: [
        { label: 'Type', value: 'Personal project' },
        { label: 'Model API', value: 'OpenAI' },
        { label: 'Backend', value: 'Node.js' },
      ],
      note: 'The API key is paid, so the running app is not hosted publicly. The link opens a recorded demo instead.',
    },
    liveUrl: 'https://drive.google.com/file/d/14ihb6-vbyO-imzH3KekO_e4xChCEclSG/view',
    liveLabel: 'Demo Video',
    repoUrl: 'https://github.com/Chaitanyachaowdary/ChatWIthAI',
  },
];

export const EDUCATION = [
  {
    degree: 'B.Tech in Electronics and Communication Engineering',
    gpa: 'GPA: 7.2',
    institution: 'Sri Venkatesa Perumal College of Engineering & Technology',
    period: 'Dec 2021 – April 2025',
    description: 'Puttur, Andhra Pradesh',
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
