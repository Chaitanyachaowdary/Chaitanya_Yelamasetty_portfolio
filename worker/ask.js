// worker/ask.js
// The portfolio's Ask-AI backend.
//
// Why this exists at all: the portfolio is a static site, so a Gemini key placed
// in it would ship inside the JavaScript bundle and be readable by anyone. This
// Worker is the only thing that ever sees the key — the same shape Encludo uses,
// where the widget holds no credentials and calls the backend for every AI call.
//
// Contract:
//   POST  { "question": "..." }  ->  200 { "answer": "..." }
//                                    4xx/5xx { "error": "..." }
// The front end treats ANY non-200 as "fall back to the local rule-based
// engine", so the assistant never goes dead if this is down or out of quota.

const MAX_QUESTION = 500;

// Everything the model is allowed to know. Kept here rather than fetched so a
// cold start costs nothing and the answers cannot drift with the site.
const PROFILE = `
Chaitanya Yelamasetty — Full Stack & DevOps Engineer, Bengaluru, India.
2+ years of experience. Currently at CodeSage India (Feb 2026 – present).
Open to remote, hybrid and onsite roles, full-time or freelance.
Contact: chaitanyachowdary4e3@gmail.com, +91 79938 56293.
GitHub Chaitanyachaowdary, LinkedIn chaitanya-yelamasetty.

WHAT MAKES HIM UNUSUAL: he builds accessibility-first software that blind people
use daily to do their jobs. WCAG 2.2 AA is a build requirement for him, not a
final pass; he tests with NVDA on desktop and TalkBack on Android.

CLIENT & PRODUCT WORK
- Encludo (Purple Aware Technologies): privacy-first web accessibility platform,
  built from scratch. One script tag adds font scaling, contrast modes, a
  dyslexia-friendly font, AI text simplification, voice assistance and
  20-language translation to any site. Under 50 KB gzipped. Monorepo with an
  Express API, React admin dashboard and the embeddable widget. Runs on a
  self-hosted Coolify instance for staging and production, consolidated off
  Railway; DNS on Hostinger. Deploys never fire automatically — a release ships
  only through a CI-gated GitHub Actions workflow or an explicit redeploy.
- GarvSe 2.0 (EnAble India): monitoring, evaluation and learning platform serving
  45 centres across 10 states and 2 union territories. React 19 + TypeScript
  front end, type-safe Node.js + Hono APIs with Drizzle ORM on PostgreSQL 17 in
  Docker on EC2. Real-time updates via PostgreSQL LISTEN/NOTIFY over SSE, S3
  document storage behind access-control middleware, background jobs on BullMQ,
  Redis and pg_cron. Offline-first desktop and Android builds with Tauri,
  including a local mirror and sync queue. He ran the production migration from
  the legacy system — reproducible in one command, executed with zero errors —
  and owns CI and the staging/production deployments.
- GarvSe 1.0: the live predecessor. Password and email-OTP sign-in, user
  block/unblock with duplicate detection, pagination and search across every
  module, the OpunSeva partner API, sole maintainer of the reports service.

PERSONAL & OPEN SOURCE
EnableU (accessibility-first learning platform, React client + Node and Python
backends, 127 source files, 7 architecture docs); TinyLink (Next.js 15 +
TypeScript URL shortener on PostgreSQL); Tech.Care (React + Recharts clinical
dashboard); CineVerse (React/Vite TMDB streaming SPA); HealthCare+ (React +
Express appointment booking); Kanna (native Kotlin Android AI assistant — wake
word engine, Gemini client, encrypted Room database, MVVM, Jetpack Compose);
plus a WhatsApp clone, ChatGPT clone and several live business sites.

STACK: React 19, TypeScript, Next.js, Vite, TanStack Router, shadcn/ui, Tailwind.
Node.js, Hono, NestJS, Express, Zod, NATS, SSE, BullMQ. PostgreSQL, Drizzle ORM,
Redis, MySQL, MongoDB. AWS (EC2, S3), Cloudflare, Coolify, Railway, Docker,
Nginx, GitHub Actions CI/CD, Tauri. Vitest, Playwright, NVDA and TalkBack
testing. Java, Spring Boot, Python, Kotlin.
`.trim();

const SYSTEM = `You are the assistant on Chaitanya Yelamasetty's portfolio site.
Answer questions about him for recruiters and hiring managers.

Rules:
- Use ONLY the profile below. If it does not contain the answer, say you do not
  have that detail and suggest they email him. Never invent projects, employers,
  dates, numbers or technologies.
- Be brief: two or three sentences unless asked for detail. No bullet lists
  unless the question asks for a list.
- Write in third person about Chaitanya, in plain British English.
- Do not discuss salary specifics; say compensation is best discussed directly.
- If asked something unrelated to Chaitanya, redirect to his work.

PROFILE:
${PROFILE}`;

function corsHeaders(origin, allowed) {
  const ok = allowed.includes(origin);
  return {
    'Access-Control-Allow-Origin': ok ? origin : allowed[0] || '',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

function json(body, status, headers) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...headers },
  });
}

export default {
  async fetch(request, env, ctx) {
    const allowed = (env.ALLOWED_ORIGIN || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    const origin = request.headers.get('Origin') || '';
    const cors = corsHeaders(origin, allowed);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }
    if (request.method !== 'POST') {
      return json({ error: 'Use POST.' }, 405, cors);
    }
    // Only this site may spend the quota.
    if (allowed.length && !allowed.includes(origin)) {
      return json({ error: 'Origin not allowed.' }, 403, cors);
    }

    // Rate limit per visitor IP, so one person cannot drain the daily quota.
    if (env.RATE_LIMITER) {
      const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
      const { success } = await env.RATE_LIMITER.limit({ key: ip });
      if (!success) {
        return json({ error: 'Too many questions, please slow down.' }, 429, cors);
      }
    }

    let question = '';
    try {
      // Bounded read: the body is small by contract, and an unbounded
      // response.text() on arbitrary input is a memory risk.
      const body = await request.json();
      question = typeof body?.question === 'string' ? body.question.trim() : '';
    } catch {
      return json({ error: 'Expected JSON: { "question": "..." }' }, 400, cors);
    }
    if (!question) return json({ error: 'Empty question.' }, 400, cors);
    if (question.length > MAX_QUESTION) {
      return json({ error: 'Question is too long.' }, 400, cors);
    }

    if (!env.GEMINI_API_KEY) {
      // Deployed but not yet configured — the front end falls back silently.
      return json({ error: 'Assistant is not configured yet.' }, 503, cors);
    }

    const model = env.GEMINI_MODEL || 'gemini-2.5-flash';
    const url =
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM }] },
          contents: [{ role: 'user', parts: [{ text: question }] }],
          generationConfig: { temperature: 0.4, maxOutputTokens: 400 },
        }),
      });

      if (!res.ok) {
        const detail = await res.text();
        console.error(
          JSON.stringify({ message: 'gemini request failed', status: res.status, detail: detail.slice(0, 300) })
        );
        return json({ error: 'Assistant is unavailable.' }, 502, cors);
      }

      const data = await res.json();
      const answer = data?.candidates?.[0]?.content?.parts
        ?.map((p) => p.text || '')
        .join('')
        .trim();

      if (!answer) {
        console.error(JSON.stringify({ message: 'gemini returned no text' }));
        return json({ error: 'Assistant returned nothing.' }, 502, cors);
      }
      return json({ answer }, 200, cors);
    } catch (e) {
      console.error(
        JSON.stringify({ message: 'ask handler threw', error: e instanceof Error ? e.message : String(e) })
      );
      return json({ error: 'Assistant is unavailable.' }, 502, cors);
    }
  },
};
