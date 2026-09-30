# Ask-AI backend

A single Cloudflare Worker that answers questions about Chaitanya on the
portfolio's Ask-AI panel.

## Why it exists

The portfolio is a static site. A Gemini key placed in it would ship inside the
JavaScript bundle and be readable by anyone who opens DevTools. This Worker is
the only thing that ever sees the key — the same shape Encludo uses, where the
widget holds no credentials and calls the backend for every AI call.

## Deploy

```bash
cd worker
npx wrangler login          # once, opens a browser
npx wrangler deploy
npx wrangler secret put GEMINI_API_KEY   # paste the key at the prompt
```

Get the key from https://aistudio.google.com/apikey — free tier, no card.

The deployed URL will be:

```
https://chaitanya-portfolio-ask.chaitanyachowdary4e3.workers.dev
```

Put that in the portfolio's `.env.local` and in Vercel:

```
VITE_ASK_ENDPOINT=https://chaitanya-portfolio-ask.chaitanyachowdary4e3.workers.dev
```

That variable is public by design — it is only a URL. The key stays on the Worker.

## Contract

```
POST { "question": "..." }  ->  200 { "answer": "..." }
                                4xx/5xx { "error": "..." }
```

The front end treats any non-200 as "use the local rule-based engine instead",
so the assistant keeps working if this is down, unconfigured or out of quota.

## Guards

| Guard | Behaviour |
|---|---|
| Origin allowlist | `ALLOWED_ORIGIN` var; other sites get 403 |
| Rate limit | 20 questions/minute per IP |
| Question length | 500 characters |
| No key set | 503, front end falls back silently |

## Cost

Free. Workers free plan is 100k requests/day; Gemini's free tier is ~1,500
requests/day. A portfolio will not approach either.
