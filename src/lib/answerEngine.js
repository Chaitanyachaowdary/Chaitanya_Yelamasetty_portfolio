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
  email: { label: 'Email Chaitanya', run: () => { window.location.href = 'mailto:ychaitanya317@gmail.com'; } },
  github: { label: 'GitHub', run: () => openUrl('https://github.com/Chaitanyachaowdary') },
  linkedin: { label: 'LinkedIn', run: () => openUrl('https://www.linkedin.com/in/chaitanya-yelamasetty') },
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
};

const tokenize = (q) => q.toLowerCase().replace(/[^a-z0-9.#+ ]/g, ' ').split(/\s+/).filter(Boolean);

// token matches a key by exact match, or prefix for longer stems (len>=4)
const tokensHit = (tokens, key) => {
  if (key.includes(' ')) return false; // phrases handled separately
  return tokens.some((t) => t === key || (key.length >= 4 && t.startsWith(key)) || t.replace(/\./g, '') === key.replace(/\./g, ''));
};

export const SUGGESTIONS = [
  'Why should I hire him?',
  'Is he available for freelance?',
  'What’s his tech stack?',
  'What is he working on?',
  'Does he know React & Node?',
  'Show me his projects',
  'What are his strengths?',
  'How do I contact him?',
];

// Pool used to suggest contextual follow-up questions after each answer.
const FOLLOWUP_POOL = [
  'What’s his tech stack?',
  'What is he working on?',
  'Is he available for freelance?',
  'Why should I hire him?',
  'Show me his projects',
  'Has he worked with real clients?',
  'Does he know Hono & Drizzle?',
  'Where is he located?',
  'What are his certifications?',
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
    return { text: `Hey! 👋 I'm Chaitanya's assistant. He's a Full Stack Developer & UI/UX Designer building with React, Hono, Drizzle and PostgreSQL — open to full-time and freelance work. What would you like to know?`, actions: [A.projects, A.contact] };
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
      const base = p
        ? `${p.title}: ${p.description}`
        : `He built ${name}.`;
      return { text: base, actions: [A.projects] };
    }
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
      text: `Chaitanya ships production software end-to-end — from accessible React UIs to type-safe Node.js + Hono APIs on PostgreSQL. He's already delivering real, secure features for EnAble India, learns fast, sweats the details, and is equally comfortable with design and engineering. Available for full-time and freelance.`,
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
    return { text: `Chaitanya can share an up-to-date resume on request — drop him a message via the contact form or email and he'll send it over.`, actions: [A.email, A.contact] };
  }

  // 6) AI / ML
  if (has('ai', 'ml', 'machine learning', 'llm', 'gpt', 'openai', 'artificial')) {
    return { text: `Yes — he's built AI-powered apps: an AI healthcare training dashboard and a ChatGPT clone using the OpenAI API, integrating LLMs into React/Node products.`, actions: [A.projects] };
  }

  // 7) DevOps / infra
  if (has('devops', 'infra', 'deploy', 'ci', 'cd', 'pipeline', 'hosting', 'cloud')) {
    return { text: `On the infra side he works with Docker, AWS (EC2 + S3), and PostgreSQL running in Docker on EC2 for the MEL platform, plus background jobs via BullMQ + Redis and CI/CD-style workflows.`, actions: [A.skills, A.clients] };
  }

  // 8) Stack / technologies (generic)
  if (has('stack', 'technolog', 'tools', 'tech', 'languages', 'frameworks', 'skill')) {
    return {
      text: `His core stack is React, TypeScript, Node.js, Hono, Drizzle ORM and PostgreSQL. Across ${techCount}+ technologies he also uses Vite, Zod, Redis, BullMQ, Amazon S3, Docker, AWS, plus Java, Spring Boot and Python.`,
      actions: [A.skills],
    };
  }

  // 9) Frontend / design / UI-UX
  if (has('frontend', 'front end', 'front-end', 'ui', 'ux', 'design', 'interface', 'css', 'styling')) {
    return { text: `Chaitanya is a Full Stack Developer and UI/UX Designer. On the front end he builds with React 19, Vite, TypeScript, Tailwind CSS, shadcn/ui and TanStack Router, focused on accessible, intuitive interfaces.`, actions: [A.skills, A.projects] };
  }

  // 10) Backend / database
  if (has('backend', 'back end', 'back-end', 'api', 'server', 'database', 'db')) {
    return { text: `On the back end he builds lightweight, type-safe REST APIs with Node.js + Hono and Zod, backed by PostgreSQL and Drizzle ORM — plus Redis, BullMQ background jobs, Amazon S3, and real-time updates via PostgreSQL LISTEN/NOTIFY over SSE.`, actions: [A.clients, A.skills] };
  }

  // 11) Mobile
  if (has('mobile', 'android', 'ios', 'app')) {
    return { text: `His focus is the web — he builds fully responsive React apps that work great on mobile devices. For native/desktop needs he's comfortable picking up the right tooling.`, actions: [A.projects] };
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
      text: `He's shipped ${PROJECTS.length}+ projects — a real-time WhatsApp clone, an e-commerce front end, an AI healthcare dashboard, a ChatGPT clone, and live business sites (Veltore, Cubic, Design Declares), most deployed on Vercel.`,
      actions: [A.projects],
    };
  }

  // 15) Contact channels (specific)
  if (has('github')) return { text: `Here's Chaitanya's GitHub — github.com/Chaitanyachaowdary.`, actions: [A.github, A.contact] };
  if (has('linkedin')) return { text: `Here's his LinkedIn — linkedin.com/in/chaitanya-yelamasetty.`, actions: [A.linkedin, A.contact] };
  if (has('contact', 'email', 'reach', 'get in touch', 'phone', 'connect', 'message', 'talk', 'call')) {
    return { text: `You can reach Chaitanya at ychaitanya317@gmail.com, or via the contact form. He's also on GitHub, LinkedIn and X.`, actions: [A.email, A.contact] };
  }

  // 16) Location
  if (has('location', 'where', 'based', 'country', 'city', 'timezone', 'remote', 'relocate', 'onsite', 'hybrid')) {
    return { text: `Chaitanya is based in Andhra Pradesh, India (IST), and is open to remote, hybrid, or onsite work — full-time or freelance.`, actions: [A.contact] };
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
    return { text: `Chaitanya Yelamasetty is a Full Stack Web Developer and UI/UX Designer who builds fast, intuitive web products end to end — currently shipping production software at EnAble India and CodeSage, and open to freelance projects.`, actions: [A.projects, A.contact] };
  }

  // Fallback — always steer back to something real about Chaitanya
  return {
    text: `I'm here to talk about Chaitanya Yelamasetty — a Full Stack Developer & UI/UX Designer who ships production software with React, Node.js, Hono, Drizzle and PostgreSQL, currently working with EnAble India and CodeSage, and open to full-time & freelance work. Ask me about his stack, projects, experience, or how to reach him — or just message him directly.`,
    actions: [A.projects, A.contact, A.email],
  };
}
