import { SKILLS, PROJECTS, EXPERIENCE, CERTIFICATIONS, CLIENT_WORK, EDUCATION } from '../constants.jsx';

const allSkills = Object.values(SKILLS).flat().map((s) => s.name);
const techCount = allSkills.length;

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis?.scrollTo) window.__lenis.scrollTo(el, { offset: -80 });
  else el.scrollIntoView({ behavior: 'smooth' });
};
const openUrl = (url) => window.open(url, '_blank', 'noopener');

const A = {
  contact: { label: 'Go to Contact', run: () => scrollTo('contact') },
  projects: { label: 'See Projects', run: () => scrollTo('projects') },
  clients: { label: 'See Client Work', run: () => scrollTo('clients') },
  skills: { label: 'See Skills', run: () => scrollTo('skills') },
  experience: { label: 'See Experience', run: () => scrollTo('experience') },
  certs: { label: 'See Certifications', run: () => scrollTo('certifications') },
  education: { label: 'See Education', run: () => scrollTo('education') },
  email: { label: 'Email Chaitanya', run: () => { window.location.href = 'mailto:chaitanyachowdary4e3@gmail.com'; } },
  github: { label: 'GitHub', run: () => openUrl('https://github.com/Chaitanyachaowdary') },
  linkedin: { label: 'LinkedIn', run: () => openUrl('https://www.linkedin.com/in/chaitanya-yelamasetty') },
  resume: { label: 'Open resume', run: () => openUrl(`${import.meta.env.BASE_URL}Chaitanya_yelamasetty_Resume.pdf`) },
};

// Known technologies → display name + where it's used (for "does he know X" questions)
const TECH = {
  react: ['React', 'his current front-end framework'],
  'react.js': ['React', 'his current front-end framework'],
  typescript: ['TypeScript', 'used across his front end and back end'],
  ts: ['TypeScript', 'used across his front end and back end'],
  javascript: ['JavaScript', 'a core language for him'],
  node: ['Node.js', 'his primary backend runtime'],
  nodejs: ['Node.js', 'his primary backend runtime'],
  hono: ['Hono', 'the lightweight framework he builds REST APIs with'],
  drizzle: ['Drizzle ORM', 'his type-safe ORM on PostgreSQL'],
  zod: ['Zod', 'used for schema validation'],
  postgres: ['PostgreSQL', 'his main database (PostgreSQL 17, Dockerized on EC2)'],
  postgresql: ['PostgreSQL', 'his main database (PostgreSQL 17, Dockerized on EC2)'],
  sql: ['SQL', 'used daily via PostgreSQL'],
  redis: ['Redis', 'used for caching, lockout and background jobs'],
  bullmq: ['BullMQ', 'used for background jobs with Redis'],
  docker: ['Docker', 'used to containerize services (Postgres runs in Docker on EC2)'],
  aws: ['AWS', 'used for hosting — EC2, plus S3 storage'],
  ec2: ['AWS EC2', 'where the MEL backend and database run'],
  s3: ['Amazon S3', 'used for file storage with access control'],
  java: ['Java', 'from his CS degree and Java Full Stack programme'],
  spring: ['Spring Boot', 'part of his Java full-stack background'],
  springboot: ['Spring Boot', 'part of his Java full-stack background'],
  hibernate: ['Hibernate', 'from his Java background'],
  python: ['Python', 'used for scripting and FastAPI work'],
  fastapi: ['FastAPI', 'his Python web framework'],
  mongodb: ['MongoDB', 'one of the databases he has worked with'],
  mongo: ['MongoDB', 'one of the databases he has worked with'],
  mysql: ['MySQL', 'a relational database he has used'],
  next: ['Next.js', 'a React framework he works with'],
  nextjs: ['Next.js', 'a React framework he works with'],
  vite: ['Vite', 'his front-end build tool'],
  tailwind: ['Tailwind CSS', 'his styling framework'],
  shadcn: ['shadcn/ui', 'his component library'],
  tanstack: ['TanStack Router', 'his routing/data layer'],
  git: ['Git', 'his version control'],
  nestjs: ['NestJS', 'the backend framework behind GarvSe 1.0'],
  nest: ['NestJS', 'the backend framework behind GarvSe 1.0'],
  tauri: ['Tauri', 'used to ship the GarvSe desktop and Android apps with offline support'],
  nats: ['NATS', 'the message transport behind email and SMS notifications'],
  sse: ['Server-sent events', 'used with PostgreSQL LISTEN/NOTIFY for live updates'],
  vitest: ['Vitest', 'his unit-test runner'],
  playwright: ['Playwright', 'used for end-to-end tests'],
  cloudflare: ['Cloudflare', 'used for hosting and web analytics'],
  nginx: ['Nginx', 'the reverse proxy in front of the containerised services'],
  kotlin: ['Kotlin', 'used to build Kanna, his native Android AI assistant'],
  android: ['Android', 'native with Kotlin and Jetpack Compose, plus Tauri Android builds for GarvSe'],
  compose: ['Jetpack Compose', 'the UI toolkit behind his native Android work'],
  room: ['Room', 'the encrypted on-device database in his Android assistant'],
  gemini: ['the Gemini API', 'the model behind his Android assistant'],
  flask: ['Flask', 'one of his Python web frameworks'],
  express: ['Express', 'used for the booking backend in HealthCare+'],
  recharts: ['Recharts', 'used for the clinical charts in his patient dashboard'],
  tmdb: ['the TMDB API', 'the data source behind CineVerse'],
  encludo: ['Encludo', 'the accessibility widget from Purple Aware that he integrates'],
  wcag: ['WCAG 2.2 AA', 'the accessibility standard he builds to by default'],
};

// Named projects → matching tokens
// order matters: more specific keys first (chatgpt before any generic prefix)
const PROJECT_KEYS = {
  whatsapp: 'WhatsApp Clone', socket: 'WhatsApp Clone',
  chatgpt: 'ChatGPT Clone', openai: 'ChatGPT Clone',
  healthcare: 'Health Care Dashboard', health: 'Health Care Dashboard',
  easyshop: 'Easy Shop', ecommerce: 'Easy Shop', 'e-commerce': 'Easy Shop',
  cubic: 'Cubic Technologies Website', veltore: 'Veltore — AI Studio Site',
  declares: 'Design Declares Clone',
  enableu: 'EnableU — Accessibility-First Learning Platform',
  tinylink: 'TinyLink — URL Shortener', shortener: 'TinyLink — URL Shortener',
  techcare: 'Tech.Care — Patient Dashboard', dashboard: 'Tech.Care — Patient Dashboard',
  cineverse: 'CineVerse — Movie Streaming SPA', movie: 'CineVerse — Movie Streaming SPA',
  kanna: 'Kanna — Android AI Assistant',
  garvse: 'GarvSe 2.0 — Accessibility-First Livelihood Platform',
  garv: 'GarvSe 2.0 — Accessibility-First Livelihood Platform',
  encludo: 'Encludo — Accessibility Widget',
  widget: 'Encludo — Accessibility Widget',
};

const tokenize = (q) => q.toLowerCase().replace(/[^a-z0-9.#+ ]/g, ' ').split(/\s+/).filter(Boolean);

// token matches a key by exact match, or prefix for longer stems (len>=4)
const tokensHit = (tokens, key) => {
  if (key.includes(' ')) return false; // phrases handled separately
  return tokens.some((t) => t === key || (key.length >= 4 && t.startsWith(key)) || t.replace(/\./g, '') === key.replace(/\./g, ''));
};

export const SUGGESTIONS = [
  'Why should I hire him?',
  'Tell me about GarvSe',
  'What does he know about accessibility?',
  'Is he available for freelance?',
  'What’s his tech stack?',
  'What is he working on?',
  'Show me his projects',
  'How do I contact him?',
];

// Pool used to suggest contextual follow-up questions after each answer.
const FOLLOWUP_POOL = [
  'Tell me about GarvSe',
  'What is Encludo?',
  'What does he know about accessibility?',
  'Does he build mobile or desktop apps?',
  'What’s his tech stack?',
  'What about DevOps and deployments?',
  'What is EnableU?',
  'Has he built a native mobile app?',
  'Is he available for freelance?',
  'Why should I hire him?',
  'Can I see his resume?',
  'Where is he located?',
  'How do I contact him?',
];

// Returns up to `n` follow-up questions, excluding anything already asked.
export function followups(asked = [], n = 3) {
  const askedLc = asked.map((a) => a.toLowerCase());
  return FOLLOWUP_POOL.filter((q) => !askedLc.includes(q.toLowerCase())).slice(0, n);
}

export function answer(query) {
  const raw = (query || '').toLowerCase().trim();
  if (!raw) {
    return { text: `Hi! I'm Chaitanya's portfolio assistant. Ask me about his stack, experience, availability, projects, or how to get in touch.`, actions: [] };
  }
  const tokens = tokenize(raw);
  const has = (...keys) => keys.some((k) => (k.includes(' ') ? raw.includes(k) : tokensHit(tokens, k)));
  const cur = EXPERIENCE[0];
  const client = CLIENT_WORK[0];

  // 0a) Greetings
  if (has('hi', 'hello', 'hey', 'yo', 'hii', 'namaste', 'good morning', 'good evening', 'good afternoon', 'sup', 'howdy')) {
    return { text: `Hey! 👋 I'm Chaitanya's assistant. He's a Full Stack & DevOps Engineer building with React, Node.js, NestJS and PostgreSQL, plus AWS, Docker and CI/CD — open to remote roles. What would you like to know?`, actions: [A.projects, A.contact] };
  }
  // 0b) Thanks
  if (has('thanks', 'thank you', 'thx', 'thankyou', 'appreciate', 'cheers')) {
    return { text: `You're welcome! If you'd like to take things further, the best step is to reach out to Chaitanya directly.`, actions: [A.contact, A.email] };
  }
  // 0c) Goodbye
  if (has('bye', 'goodbye', 'see you', 'later', 'cya')) {
    return { text: `Thanks for stopping by! Feel free to reach out to Chaitanya anytime — he'd love to connect.`, actions: [A.contact, A.email] };
  }

  // 1) Named project (highest priority — beats generic "about")
  for (const [k, name] of Object.entries(PROJECT_KEYS)) {
    if (tokensHit(tokens, k)) {
      const p = PROJECTS.find((x) => x.title === name);
      if (!p) return { text: `He built ${name}.`, actions: [A.projects] };
      const d = p.details;
      const parts = [`${p.title} — ${p.description}`];
      if (d?.role) parts.push(`His role: ${d.role}`);
      if (d?.built?.length) parts.push(`What he built: ${d.built.slice(0, 2).join(' ')}`);
      if (d?.facts?.length) parts.push(d.facts.map((f) => `${f.label}: ${f.value}`).join(' · '));
      const acts = [A.projects];
      if (p.liveUrl) acts.unshift({ label: p.liveLabel || 'Open live', run: () => openUrl(p.liveUrl) });
      return { text: parts.join('\n\n'), actions: acts };
    }
  }

  // 1b) Accessibility — the thing that actually sets him apart
  if (has('accessib', 'a11y', 'wcag', 'screen reader', 'screenreader', 'nvda', 'talkback', 'disabilit', 'disabled', 'inclusive', 'inclusion', 'blind', 'aria')) {
    return {
      text: `Accessibility is the core of his work, not an afterthought. GarvSe 2.0 is used every day by field officers who are blind, so he builds to WCAG 2.2 AA from the first sprint and tests with NVDA on desktop and TalkBack on Android — keyboard paths, focus management, live regions and colour contrast. He also integrates Encludo, Purple Aware's one-line accessibility widget, which adds font scaling, contrast modes, a dyslexia-friendly font, AI text simplification and translation into 20 languages. On his own time he built EnableU, a learning platform where the dyslexia-friendly typography, reading guide, contrast modes and keyboard paths are part of the product rather than a settings page.`,
      actions: [A.projects, A.clients],
    };
  }

  // 2) Specific technology ("does he know X")
  for (const [k, [name, ctx]] of Object.entries(TECH)) {
    if (tokensHit(tokens, k)) {
      return { text: `Yes — Chaitanya works with ${name}, ${ctx}. He covers ${techCount}+ technologies end to end.`, actions: [A.skills] };
    }
  }

  // 3) Why hire / strengths
  if (has('why', 'strength', 'strong', 'good at', 'special', 'stand out', 'reason', 'best at')) {
    return {
      text: `Two things make him unusual. First, he ships end to end: accessible React interfaces, type-safe Node.js and Hono APIs on PostgreSQL, the releases, and the production data migration behind them. Second, accessibility is not a checkbox for him — GarvSe 2.0 is used daily by officers who are blind, so he builds to WCAG 2.2 AA and tests with a screen reader on every flow. Available for full-time and freelance.`,
      actions: [A.clients, A.contact],
    };
  }

  // 4) Availability / start / freelance / notice
  if (has('freelance', 'hire', 'available', 'availability', 'start', 'join', 'notice', 'open to', 'looking for', 'opportunit', 'vacancy')) {
    return {
      text: `Yes — Chaitanya is available for both full-time roles and freelance projects, and works remote, hybrid, or onsite. The fastest way to discuss timelines or a start date is to reach out directly.`,
      actions: [A.contact, A.email],
    };
  }

  // 5) Resume
  if (has('resume', 'cv', 'portfolio pdf')) {
    return { text: `His current resume is on this site — open it with the button below, or from Resume in the header. Happy to answer anything it does not cover.`, actions: [A.resume, A.contact] };
  }

  // 6) AI / ML
  if (has('ai', 'ml', 'machine learning', 'llm', 'gpt', 'openai', 'artificial')) {
    return { text: `Yes — an AI healthcare training dashboard and a ChatGPT clone on the OpenAI API, plus AI applied to accessibility: plain-language rewriting of dense text and voice input, which is what Encludo's simplification feature does. He integrates LLMs into React and Node products rather than training models.`, actions: [A.projects] };
  }

  // 7) DevOps / infra
  if (has('devops', 'infra', 'deploy', 'ci', 'cd', 'pipeline', 'hosting', 'cloud')) {
    return { text: `He owns releases as well as code: GitHub Actions CI, signed Android and desktop builds via Tauri, and staging and production deployments. The platform runs on AWS with Docker on EC2, PostgreSQL 17, Amazon S3 for documents, and background jobs on BullMQ and Redis. He also ran the production data migration from the previous system, which went live with zero errors.`, actions: [A.skills, A.clients] };
  }

  // 8) Stack / technologies (generic)
  if (has('stack', 'technolog', 'tools', 'tech', 'languages', 'frameworks', 'skill')) {
    return {
      text: `His core stack is React, TypeScript, Node.js, Hono, Drizzle ORM and PostgreSQL. Across ${techCount}+ technologies he also uses Vite, TanStack Router, shadcn/ui, Zod, Redis, BullMQ, Amazon S3, Docker, Nginx and AWS, ships desktop and Android with Tauri, tests with Vitest and Playwright, and has a Java, Spring Boot and Python background.`,
      actions: [A.skills],
    };
  }

  // 9) Frontend / design / UI-UX
  if (has('frontend', 'front end', 'front-end', 'ui', 'ux', 'design', 'interface', 'css', 'styling')) {
    return { text: `Chaitanya is a Full Stack & DevOps Engineer. On the front end he builds with React 19, Vite, TypeScript, Tailwind CSS, shadcn/ui and TanStack Router, focused on accessible, intuitive interfaces.`, actions: [A.skills, A.projects] };
  }

  // 10) Backend / database
  if (has('backend', 'back end', 'back-end', 'api', 'server', 'database', 'db')) {
    return { text: `On the back end he builds lightweight, type-safe REST APIs with Node.js + Hono and Zod, backed by PostgreSQL and Drizzle ORM — plus Redis, BullMQ background jobs, Amazon S3, and real-time updates via PostgreSQL LISTEN/NOTIFY over SSE.`, actions: [A.clients, A.skills] };
  }

  // 11) Mobile
  if (has('mobile', 'android', 'ios', 'app')) {
    return { text: `Yes, both ways. Natively: Kanna is an Android assistant written in Kotlin with Jetpack Compose, a wake-word engine, and conversation history in an encrypted Room database. Cross-platform: GarvSe 2.0 is packaged with Tauri for Windows, macOS and Android, with an offline-first local mirror and a sync queue so field officers keep working without a connection. He handles the signed release builds too.`, actions: [A.projects, A.clients] };
  }

  // 12) Experience / years
  if (has('experience', 'years', 'how long', 'work', 'job', 'company', 'employer', 'background')) {
    return {
      text: `Chaitanya is a ${cur.role} at ${cur.company} (${cur.period}), building full-stack features with React + Node.js/Hono and PostgreSQL/Drizzle. Before that he completed a Java Full Stack programme at TAP Academy (2025). He's been shipping hands-on since 2025.`,
      actions: [A.experience, A.clients],
    };
  }

  // 13) Clients / real work
  if (has('client', 'enable', 'mel', 'real', 'production', 'ship')) {
    return {
      text: `He's currently shipping ${client.project} for ${client.client} — production software with secure auth (OTP, lockout, JWT), a type-safe Node.js + Hono + Drizzle backend on PostgreSQL, S3 storage, and a React front end with strong test coverage.`,
      actions: [A.clients],
    };
  }

  // 14) Projects
  if (has('project', 'built', 'build', 'made', 'samples', 'show', 'work samples')) {
    return {
      text: `He's shipped ${PROJECTS.length}+ projects. The production work: GarvSe 2.0, an accessibility-first platform serving 45 centres across 10 states and 2 UTs; GarvSe 1.0, the live system it replaced; and Encludo, the accessibility widget he integrates. Then EnableU, an accessibility-first learning platform with a React client and two backends; TinyLink, a Next.js and PostgreSQL URL shortener; Tech.Care, a clinical dashboard built with Recharts; CineVerse, a TMDB streaming app; HealthCare+, appointment booking on Express; and Kanna, a native Kotlin Android assistant. Alongside those are a real-time WhatsApp clone, a ChatGPT clone and live business sites. Open any card and press More info for the full story.`,
      actions: [A.projects],
    };
  }

  // 15) Contact channels (specific)
  if (has('github')) return { text: `Here's Chaitanya's GitHub — github.com/Chaitanyachaowdary.`, actions: [A.github, A.contact] };
  if (has('linkedin')) return { text: `Here's his LinkedIn — linkedin.com/in/chaitanya-yelamasetty.`, actions: [A.linkedin, A.contact] };
  if (has('contact', 'email', 'reach', 'get in touch', 'phone', 'connect', 'message', 'talk', 'call')) {
    return { text: `You can reach Chaitanya at chaitanyachowdary4e3@gmail.com, or via the contact form. He's also on GitHub, LinkedIn and X.`, actions: [A.email, A.contact] };
  }

  // 16) Location
  if (has('location', 'where', 'based', 'country', 'city', 'timezone', 'remote', 'relocate', 'onsite', 'hybrid')) {
    return { text: `Chaitanya is based in Bengaluru, India (IST), and is open to remote, hybrid, or onsite work — full-time or freelance.`, actions: [A.contact] };
  }

  // 17) Certifications
  if (has('certif', 'cert', 'course', 'credential')) {
    return { text: `He holds ${CERTIFICATIONS.length} certifications: ${CERTIFICATIONS.map((c) => c.name).join('; ')} — and keeps learning continuously.`, actions: [A.certs] };
  }

  // 18) Education
  if (has('education', 'degree', 'study', 'studied', 'college', 'university', 'gpa', 'graduat', 'qualification')) {
    return { text: `${EDUCATION[0].degree} from ${EDUCATION[0].institution} (${EDUCATION[0].gpa}), ${EDUCATION[0].period}.`, actions: [A.education] };
  }

  // 19) Salary (graceful)
  if (has('salary', 'pay', 'rate', 'cost', 'charge', 'budget', 'compensation')) {
    return { text: `Compensation is best discussed directly — reach out via the contact form or email and Chaitanya will be happy to talk specifics.`, actions: [A.contact, A.email] };
  }

  // 20) Who / about
  if (has('who', 'about', 'yourself', 'introduce', 'tell me', 'profile', 'bio')) {
    return { text: `Chaitanya Yelamasetty is a Full Stack & DevOps Engineer who builds accessibility-first products end to end — currently building production software at CodeSage, and open to remote roles.`, actions: [A.projects, A.contact] };
  }

  // Fallback — always steer back to something real about Chaitanya
  return {
    text: `I'm here to talk about Chaitanya Yelamasetty — a Full Stack & DevOps Engineer who ships accessibility-first software with React, Node.js, NestJS and PostgreSQL, plus AWS, Docker and CI/CD, currently at CodeSage and open to remote roles. Ask me about his stack, projects, experience, or how to reach him — or just message him directly.`,
    actions: [A.projects, A.contact, A.email],
  };
}
