# 43 Industries — technical infrastructure checklist

This document covers domain, deploy, and the **admin-managed shop catalog** (Supabase).

## Domain and DNS

- Point **43industries.com** and **www** at your production host (e.g. Vercel) using the **exact** records the host shows in its domain settings.
- Remove or replace any legacy A/CNAME records that still serve a placeholder site.
- After changes, wait for DNS TTL and verify with a clean DNS resolver (not only browser cache).

## Deploy (static `deploy/`)

- Prefer **Git-connected production deploys** (push to `main` → build) so production matches the repo without manual CLI steps.
- Keep **one** canonical production project; document which Vercel project owns the custom domain.
- Public site: `/` (`index.html`). Admin catalog: `/admin.html` (not linked in the public nav — bookmark it).

### Vercel settings (fixes `404: NOT_FOUND`)

The live site is **only** under `deploy/`. Repo root has no `index.html`, so a default Vercel project returns `NOT_FOUND` on `/`.

In the Vercel project → **Settings → General / Build & Development**:

| Setting | Value |
|---------|--------|
| Framework Preset | **Other** (not Next.js) |
| Root Directory | leave empty **or** set to `deploy` |
| Build Command | empty / disabled |
| Output Directory | `deploy` if Root Directory is empty; leave empty if Root Directory is `deploy` |
| Install Command | empty / disabled |

Repo root [`vercel.json`](vercel.json) sets `framework: null` and `outputDirectory: "deploy"`. If the dashboard has **Override** toggles on, turn them off so `vercel.json` applies — or set the table above manually and redeploy.

Do **not** point this production project at `43-industries/` (that Next app is secondary). After changing settings, **Redeploy** the latest `main` commit.

## Shop catalog (Supabase)

The shop no longer uses hardcoded products. Catalog + stock live in Supabase.

### One-time setup

1. Create a free project at [supabase.com](https://supabase.com).
2. In **SQL Editor**, run the schema below.
3. **Authentication → Users → Add user** — create your admin email/password (this is admin access).
4. **Project Settings → API** — copy **Project URL** and **anon public** key into [`deploy/config.js`](deploy/config.js):

```js
window.SITE_CONFIG = {
  SUPABASE_URL: 'https://YOUR_REF.supabase.co',
  SUPABASE_ANON_KEY: 'eyJ...',
};
```

5. Deploy `deploy/` (including `config.js`, `admin.html`, `js/shop-api.js`).
6. Open `https://yoursite/admin.html`, sign in, add products.

**Never** commit or paste the **service_role** key into the frontend.

### Schema + RLS (run in SQL Editor)

```sql
create extension if not exists "pgcrypto";

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  sku text not null unique,
  category text not null default 'general',
  name text not null,
  description text default '',
  price_usd numeric(12,2) not null default 0,
  stock int not null default 0 check (stock >= 0),
  badge text,
  image_url text,
  published boolean not null default true,
  sort_order int default 0,
  updated_at timestamptz not null default now()
);

alter table public.products enable row level security;

-- Public shop: read published only
create policy "Public read published products"
  on public.products for select
  to anon, authenticated
  using (published = true);

-- Authenticated admins: read all (including unpublished)
create policy "Authenticated read all products"
  on public.products for select
  to authenticated
  using (true);

-- Authenticated: insert / update / delete
create policy "Authenticated insert products"
  on public.products for insert
  to authenticated
  with check (true);

create policy "Authenticated update products"
  on public.products for update
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated delete products"
  on public.products for delete
  to authenticated
  using (true);
```

Note: If two SELECT policies conflict oddly in your project, keep a single SELECT for `anon` (`published = true`) and a separate one for `authenticated` (`true`). Supabase ORs permissive policies for the same role.

Optional: disable public sign-ups under **Authentication → Providers → Email** → turn off “Enable sign ups” so only users you create in the dashboard can log into admin.

### Admin workflow

1. Go to `/admin.html`
2. Sign in with the Auth user you created
3. Add / edit products (SKU, category, name, description, price USD, stock, badge, **image URL**, published)
4. Unpublish hides an item from the public shop without deleting it
5. Sign out when finished

Public shop respects `stock` (sold out / qty cap). Checkout does **not** yet decrement stock on the server.

### Product photos (image URL)

- In Admin, paste a **public HTTPS** image URL into **Image URL** (Cloudinary, ImgBB, your CDN, etc.).
- Preview appears in the form when the URL loads. Broken / private URLs fall back to initials on the shop.
- Recommended: ~800×800 (or similar square) product photo, JPEG/WebP/PNG.
- Do not use hotlinked pages that block hotlinking; host images where `img src` is allowed from your site.

### First products checklist

For each real SKU you add in Admin:

| Field | Example |
|-------|---------|
| SKU | `AU-1OZ-001` (unique) |
| Category | `metals`, `hardware`, `merch`, … |
| Name | Short customer-facing name |
| Description | 1–2 lines |
| Price USD | Numeric |
| Stock | Integer ≥ 0 |
| Badge | optional (`NEW`, `LBMA`, …) |
| Image URL | `https://…` public photo |
| Published | on for shop visibility |

Add a few published items, then open `/#shop` — photos and stock should appear without redeploying.

Until Supabase is configured (or the table has no published rows), the public shop falls back to a **built-in demo catalog** so `#shop` is never empty.

## Next.js app (`43-industries/`)

- Secondary until the static deploy design is locked.
- Run `npm run build` locally before release if you ship that app.

## Forms and edge

- Replace Formspree placeholder **`YOUR_FORM_ID`** in the contact form when going live.
- Confirm spam protection and rate limits for any public form endpoint.

## Secrets

- Do **not** commit service-role keys, signing keys, or webhook secrets.
- Frontend may only use the **anon** key + project URL.

## Observability

- Enable host analytics or an uptime check on the production URL after domain cutover.

## Division stacks (marketing reference)

| Division           | Layers                                                          |
|--------------------|-----------------------------------------------------------------|
| Fintech            | Rails → core platform → compliance → observability            |
| Digital assets     | Chain plane → custody → settlement router → risk                |
| Metals & markets   | Sourcing → vault & logistics → tokenization → markets desk    |
