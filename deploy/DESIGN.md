# 43 Industries — Design System

> Nairobi-built wealth company. Three divisions — fintech, digital assets, metals & markets — in a **lighter charcoal** interface with one electric accent.

---

## Voice

**Plain brand English.** No Python/terminal roleplay: no `.py` filenames, no `$` shell prompts, no `class Product(Shop):`, no `pip install`, no `enter_world()` as UI labels.

| Do | Don't |
|----|--------|
| Home, About, Shop, Explore divisions | `main.py`, `shop.py`, `explore_divisions()` |
| Add to cart, Send message | `add()`, `send_message.py` |
| Overview / Stack / Tools tabs | `overview.py` |

JetBrains Mono is for **prices and data**, not a pretend IDE costume.

---

## Color tokens

| Token | Value | Role |
|-------|-------|------|
| `--surface-0` / `--bg` | `#14161a` | Page charcoal (lighter than pure void) |
| `--surface-1` / `--bg2` | `#1c1f24` | Depth |
| `--surface-2` / `--bg3` | `#252830` | Cards / panels |
| `--surface-3` / `--bg4` | `#2e323a` | Elevated |
| `--orange` | `#ff6a00` | Site brand accent — nav, hero CTAs, LIVE, shop, price-up |
| `--on-accent` | `#ffffff` | Text on orange buttons |
| `--white` / `--ink` | `#f0ebe6` | Primary text |
| `--white-dim` / `--ink-dim` | `#9a9ea6` | Body / metadata |
| `--red` | `#ff5e5e` | Price-down / errors only |

**Do:** Soft black / charcoal. Orange is the company brand accent.  
**Don't:** Flat pure-white marketing pages. Don't use purple / cyan / gold for general site chrome.

### Division identity exception

Scoped to homepage **doors** and **division world shells** (not global UI):

| Division | Token | Value | Icon |
|----------|-------|-------|------|
| Fintech | `--div-ft` | `#9b5cff` | Lightning bolt |
| Digital Assets | `--div-da` | `#2ee6d6` | Hex crystal / node |
| Metals & Markets | `--div-mt` | `#d4af37` | Stacked bullion |

Monoline SVG icons; fill/stroke from the matching `--div-*`. Chain asset marks keep product colors.

---

## Typography

- **Display:** Orbitron 900 — headlines, metrics. Tight tracking on large sizes.
- **Body / UI:** DM Sans — paragraphs, buttons, nav.
- **Data:** JetBrains Mono — prices, badges, HUD labels.
- Body paragraphs: ~14–15px, `--white-dim`.

---

## Spacing & shape

- Base unit: **4px**
- Panel radius: **4px**
- Primary CTA: **pill (9999px)** — prefer pill for primary only
- Section padding: 60–100px desktop; ~48–64px vertical on mobile

---

## Icons

Monoline SVG (1.5px stroke, `currentColor`) for brand UI. No emoji.

| Location | Treatment |
|----------|-----------|
| Division doors | Quiet monoline in ring — **Fintech** = three rails, **Digital Assets** = chain link, **Metals & Markets** = bullion bar |
| World cards | Small SVG or title-only |
| Shop | Category mark or `image_url` |
| Team | Initials in graphite square |
| **Crypto asset marks** | Official-style filled SVG logos (BTC / ETH / SOL / TRX / XRP) with **product brand colors** |

Hero isometric tower marks use the same three division metaphors as the door glyphs.

**Asset-mark exception:** Chain logos may use their product colors (`--chain-btc` `#F7931A`, `--chain-eth` `#627EEA`, `--chain-sol` `#9945FF`, `--chain-trx` `#FF0013`, `--chain-xrp` `#E5E5E5`). These are identity colors for third-party assets — not a second site brand accent. Site chrome stays charcoal + orange.

---

## Shop & admin catalog

- **Source of truth:** Supabase `products` table (not hardcoded JS).
- **Public shop:** reads published rows; respects stock.
- **Admin:** [`admin.html`](admin.html) — Auth login, CRUD. Not linked in public nav.
- Config: [`config.js`](config.js) — `SUPABASE_URL` + `SUPABASE_ANON_KEY` only (never service-role key).

---

## Motion

- Restrained glow on brand + primary CTA only.
- Ambient: CSS hero grid / glow drift.
- Scroll reveals + hero entrance: **GSAP + ScrollTrigger** (CDN).
- `prefers-reduced-motion: reduce` disables ambient animations and skips GSAP timelines.
- **Home hero:** brand-first copy left; right side = **isometric foundation graphic** (orange 43 Industries plinth + three division towers with depth faces) — not flat boxes, not a stats card. Quiet location line + headline + one sub + CTAs. Division doors carry atmosphere + metric whisper + unique `--div-*` color/icon per division + enter CTA.

---

## Files

- Production: `deploy/index.html`
- Admin: `deploy/admin.html`
- Shared API: `deploy/js/shop-api.js`
- This contract: `deploy/DESIGN.md`
