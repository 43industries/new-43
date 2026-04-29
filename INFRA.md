# 43 Industries — technical infrastructure checklist

This document complements the **stack.py** views in [`deploy/index.html`](deploy/index.html). Use it for domain, deploy, and operational hygiene.

## Domain and DNS

- Point **43industries.com** and **www** at your production host (e.g. Vercel) using the **exact** records the host shows in its domain settings.
- Remove or replace any legacy A/CNAME records that still serve a placeholder site.
- After changes, wait for DNS TTL and verify with a clean DNS resolver (not only browser cache).

## Deploy (static `deploy/`)

- Prefer **Git-connected production deploys** (push to `main` → build) so production matches the repo without manual CLI steps.
- Keep **one** canonical production project; document which Vercel project (or other host) owns the custom domain.

## Next.js app (`43-industries/`)

- Run `npm run build` locally before release; CI should run the same (see [.github/workflows/ci-next.yml](.github/workflows/ci-next.yml)).
- Pin Node version in CI to match local/Vercel (e.g. 20.x).

## Forms and edge

- Replace Formspree placeholder **`YOUR_FORM_ID`** in the contact form when going live.
- Confirm spam protection and rate limits for any public form endpoint.

## Secrets

- Do **not** commit API keys, signing keys, or webhooks secrets into the repo.
- If you add serverless or API routes later, inject secrets via the host’s environment variable UI.

## Observability

- Enable host analytics or an external uptime check on the production URL after domain cutover.
- If you add backends, add structured logging and error tracking (e.g. Sentry) as a follow-up.

## Division stacks (reference)

| Division           | Layers (marketing model)                                        |
|-------------------|------------------------------------------------------------------|
| Fintech           | Rails → core platform → compliance → observability               |
| Digital assets    | Chain plane → custody → settlement router → risk                 |
| Metals & markets  | Sourcing → vault & logistics → tokenization → markets desk     |

Final integrations vary by **corridor, licensing, and partner**; keep public copy aligned with what you can substantiate.
