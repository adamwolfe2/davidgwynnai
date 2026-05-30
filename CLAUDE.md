@AGENTS.md

# AI Advisors LLC — Website

The marketing site for **aiadvisorsllc.com** — Decision Defensibility Infrastructure for General Counsel, Chief Risk Officers, compliance leaders, and boards in banks, insurers, and health systems. Single-page editorial site with anchor sections: About, Services, How It Works, Reviews, FAQ.

## Stack

Next.js 16 App Router + Tailwind v4 + framer-motion + lucide-react, deployed on Vercel. Reuse existing components, config, lint/format rules, and conventions. If anything here conflicts with the existing codebase, flag it rather than silently replacing it.

## Design language — "BCG meets Economist"

Editorial and serif-driven: serif headlines, ivory paper, navy ink, generous whitespace, thin rule lines, one sparing editorial-red accent. Flat and text-forward. **Never** use gradients, drop shadows, glassmorphism, neon, or stock-tech "AI" imagery. Sentence case everywhere except small uppercase eyebrow labels. Two font weights only (400 / 600).

### Color tokens (Tailwind theme / CSS variables)

| Token | Hex | Use |
|---|---|---|
| `navy` | `#1B2A4A` | primary ink, dark sections (footer) |
| `paper` | `#F6F3EB` | page background |
| `paper-2` | `#EFEBDF` | banded sections |
| `red` | `#C8102E` | accent — eyebrows, rule lines, key links, one CTA, "guardrail fired" state. ≤ ~10% of any screen; never a body-text background |
| `ink-body` | `#3A4355` | body copy |
| `sand` | `#8A8170` | muted labels |
| `rule` | `#DAD5C7` | hairline dividers |
| `white` | `#FFFFFF` | cards, masthead |

### Typography (via `next/font/google`, exposed as CSS vars)

- `--font-display` — **Newsreader** (headlines): H1 48–56px, weight 600, leading 1.05, tracking -0.015em; section lede 32–36px weight 500.
- `--font-body` — **Source Serif 4**: 16–17px, line-height 1.6.
- `--font-ui` — **Inter**: nav, labels, buttons; eyebrows 11px uppercase, tracking 0.22em, red.
- `--font-mono` — **IBM Plex Mono**: Decision Receipt™ specimen fields only.

### Layout & rule-line system

Strict columns, ≥ 34px desktop gutters, one idea per horizontal band. Dividers are 1px `rule` hairlines; a 1px `navy` line tops feature groups; a 3px `red` bar sits directly under the masthead; vertical hairlines separate columns. No rounded cards for editorial content — the only boxed element is the Decision Receipt™ specimen.

### Accessibility

WCAG AA contrast, visible focus rings, semantic headings. The red accent must never be the only signal of meaning.

## Brand marks (in `/public`)

- `logo-aiadvisors.svg` — primary site mark (lighthouse). **David to supply** a transparent- or ivory-background export; the current asset has a baked navy background that boxes on the ivory header.
- `prescienceos-wordmark.svg` — product mark only (crosshairs in the "O"); use where PrescienceOS is the subject, never as the primary site mark. For exact site-font kerning, prefer the `PrescienceMark` reticle component.

## Content guardrails (do not invent)

- No fabricated metrics, logos, or quotes. Items marked `[pending]` are real inputs still owed — leave a visible TODO/placeholder, do not fill them in.
- The regulatory "why now" copy (CA EO N-5-26) is **counsel-gated** — keep it at a "direction of travel" level until cleared.
- This is a brand about defensibility: every claim on the site must itself be verifiable or be cut.

## Engineering conventions

- **Preserve** the existing GTM container (GTM-NK99T983), Vercel Analytics, cookie consent, and SEO meta (title/description/OG/Twitter/`og-image`), and the `/privacy` and `/terms` routes.
- Keep the existing **Calendly** primary CTA: `https://calendly.com/dgwynn/introductory-15-minute-meeting-david-gwynn-ai-advisors`
- Keep the existing **Typeform** quiz: `https://form.typeform.com/to/brq8lDnN`
- Work in small, reviewable commits — one section at a time.
- One offer name site-wide: **"AI Decision Exposure Assessment."** CTA copy: **"Request Your Exposure Assessment."** Replace any "Decision Audit."
- Don't delete existing routes or components without flagging.
