# 43 Industries — Cyberpunk Design System

> Nairobi-built wealth terminal. Three divisions — fintech, digital assets, metals & markets — rendered as a midnight server room where data glows.

**References (taste, not clones):** [Refero Neon](https://styles.refero.design/style/cc38369a-41e3-4bcd-b619-230ccffe7e8e), [Linear](https://styles.refero.design/style/90ce5883-bb24-4466-93f7-801cd617b0d1), [Max Yinger](https://styles.refero.design/style/a7891223-a93e-4731-a1aa-4079f1ee928b)

---

## Color tokens

| Token | Value | Role |
|-------|-------|------|
| `--surface-0` | `#050005` | Page void |
| `--surface-1` | `#0a0010` | Depth layer |
| `--surface-2` | `#151617` | Card / terminal body (Neon Graphite) |
| `--surface-3` | `#1f1028` | Elevated panels |
| `--orange` | `#ff6a00` | Primary action, crypto |
| `--purple` | `#c084fc` | Fintech |
| `--gold` | `#ff9f43` | Metals & markets |
| `--hud-cyan` | `#00f0ff` | HUD lines, scan accents (low opacity only) |
| `--white` | `#f0e8ff` | Primary text |
| `--white-dim` | `#94979e` | Body / metadata (Neon Pewter) |

**Do:** Use surface steps for elevation. **Don't:** Stack heavy box-shadows on dark UI.

---

## Typography

- **Display:** Orbitron 900 — headlines, metrics. Tight tracking (`-0.02em` to `-0.04em` on large sizes).
- **UI / code:** JetBrains Mono — labels, terminal copy, data.
- **Do:** Mono for all telemetry, prices, HUD labels. **Don't:** Orbitron on body paragraphs.

---

## Spacing & shape

- Base unit: **4px**
- Panel radius: **4px** (cards, terminals, inputs)
- Primary CTA radius: **9999px** (pill) — Neon tension vs sharp panels
- Section padding: 60–100px desktop; 24px mobile
- Card padding: 24–28px

---

## Components

### Division door card
- HUD bar: traffic dots + `*.py` filename + `● ONLINE`
- One hero metric per division
- Live micro-strip (prices / savings)
- Pill `enter_world()` CTA — **always visible**
- Division accent: purple / orange / gold

### Primary button (`.btn-run`, `.door-cta`)
- Pill shape, accent fill, neon ring on hover
- **Do:** One primary per card section. **Don't:** Multiple competing glows.

### Sparkline / ticker
- Tabular nums, mono font
- Neon stroke + subtle glow on canvas
- Pulse class on price update (`.price-flash-up` / `.price-flash-down`)

### Motion
- Glitch / scanline on headings only
- `prefers-reduced-motion: reduce` disables glitch, parallax, carousel auto-scroll

---

## Accessibility

- Body copy on `--white-dim` against `--surface-*` — minimum 4.5:1 where possible
- Decorative glow on headings only
- Division cards: `tabindex="0"`, Enter/Space opens world
- Touch: no custom cursor; CTAs visible without hover

---

## Files

- Production: `deploy/index.html`
- This contract: `deploy/DESIGN.md`
