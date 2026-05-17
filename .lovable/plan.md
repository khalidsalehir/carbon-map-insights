
# CarbonMap → Top-Tier CCS Intelligence Platform

Synthesis of the three reviews (ChatGPT, Grok, Gemini). All three converge on the same core diagnosis, so the plan is built around their consensus — not three separate roadmaps.

## The one-sentence diagnosis

> The site reads like a *consultancy / info project*. It needs to read like a *Bloomberg Terminal for European CCS* — owned by operators, visibly alive, and easy to convert from.

Three priorities run through every reviewer:

1. **Positioning is split-brained** — "Every CCS project on Earth" vs "Built from Rotterdam, European infrastructure". Pick a lane.
2. **The product is invisible** — visitors are asked to "Request a demo" without ever seeing the dashboard, the map, the route optimizer, or the ETS integration in action.
3. **Trust is throttled** — "Names on request", no faces, no partner logos, no pilot quotes. In B2B enterprise this is fatal.

Everything below flows from those three.

---

## The 10 changes (ranked by impact)

### 1. Reposition the hero — own Europe, reference the world
**Why:** Reviewers agree the global/Europe split confuses the visitor in the first 3 seconds.

- Replace `See every CCS project on Earth.` with a sharper European claim, e.g.
  *"Europe's CCS infrastructure, mapped from the inside."*
  sub: *"Real-time intelligence on emitters, capture, transport, storage and hub economics — across the North Sea Basin and beyond."*
- Keep the global dataset visible as a secondary stat ("150+ countries indexed") — but the *hero promise is European depth*.
- Replace the cyan-globe illustration with a **live product visual**: a dark Mapbox-style screenshot of the European CCS network (Porthos, Aramis, Northern Lights, Greensand) with glowing pipelines and a floating ETS price ticker overlay. Static is fine for v1, but it must look like the actual product, not an illustration.
- CTAs: primary `Explore the live map →`, secondary `Book a 30-min call`. The "Explore" CTA is critical — currently there is no low-commitment way in.

### 2. Show the product — three "Show, Don't Tell" feature blocks
**Why:** Gemini and ChatGPT both said this is the single biggest credibility gap.

Below the hero, three full-width feature blocks, each with a stylised UI mockup (PNG/SVG is fine, no animation needed for v1):

| Block | UI mockup shows |
|---|---|
| Route optimisation | A line drawing from a Tata Steel emitter through Delta Rhine Corridor to Porthos, with a side panel showing cost/tonne |
| Live ETS economics | An EU ETS sparkline + the cost recalculating per project as the price moves |
| Hub cluster economics | The 20-emitters-to-1-hub schematic from `ThreeMoats` blown up, with a "−65%" callout |

Each block: short headline, 2-line body, the mockup. No bullet lists.

### 3. Kill "Names on request" — put faces and logos up
**Why:** All three reviewers flagged this as a trust-killer. Cheapest single change with highest credibility lift.

- New `Founders` strip in `OurMission`: 2–4 photos, name, one-line role, LinkedIn icon.
- Below it: *"Past experience"* row with greyscale logos of **Gasunie, Vopak, Shell, EBN, TNO, Big 4** (whatever is true for the actual team).
- Delete the `Meet the team — names on request` mailto link.

### 4. Add a soft conversion — the Intelligence Brief
**Why:** Right now the only conversion is "Book a 30-min call" — too much friction. CarbonStorage's newsletter and Rystad's reports both convert visitors who aren't ready to buy.

- Replace the current `FinalCTA` with a two-track CTA section:
  - **Left:** *"The European CCS Intelligence Brief"* — bi-weekly email, email-only signup, sample issue preview. Powered by Lovable Cloud (table `subscribers` + edge function for double opt-in).
  - **Right:** *"Talk to the team"* — Calendly, unchanged.
- Add a slim sticky footer bar that surfaces the same brief signup on long pages.

### 5. Make the activity feed actually feel live
**Why:** "Live feeling" was the single most-praised CarbonStorage trait. We already have `LiveActivityFeed` — it just needs to *look alive*.

- Items animate in from the top every few seconds (staggered, not all at once on load).
- Each item has a relative timestamp that updates ("2 min ago", "11 min ago").
- Coloured tag per event type (Permit · FID · Acquisition · Capacity update) using the existing semantic palette.
- Source attribution per row (small, muted): "ACM" / "Gassco" / "EBN".
- Below the feed, a small line: *"Updated continuously from 40+ European regulators and operators."*

### 6. A free tool as lead magnet — Hub Economics Estimator
**Why:** Gemini's strongest concrete suggestion. CarbonStorage uses unit converters; we have the actual economic model — turn it into the bait.

New page `/tools/hub-estimator`:

- Inputs: tonnage/year, distance to nearest hub (or postcode → auto-distance), capture cost band.
- Output: ballpark €/tCO₂ for solo vs. shared-hub case, plus the % saving curve.
- After result, a soft gate: *"Want the full methodology + your country's hub map? Get the PDF →"* (email capture).
- Linked from the homepage `WhatWeDo` section as a fourth tile: "Try the calculator →".

### 7. Audience-specific solution pages (Rystad pattern)
**Why:** `Audience` currently lists 4 personas in one strip. Rystad's edge is dedicated pages per persona.

Create four sub-pages under `/solutions/`:
- `/solutions/developers` — capacity, permits, FID timelines
- `/solutions/investors` — pipeline of bankable projects, ETS exposure modelling
- `/solutions/operators` — hub utilisation, route economics
- `/solutions/policymakers` — corridor coverage, regulatory gaps

Each page: tailored hero, the 2–3 features that matter for that persona, one case story, the demo CTA. The homepage `Audience` block becomes a router into these.

### 8. Thought leadership — Intelligence Briefs, not blog posts
**Why:** Rystad's authority comes from publishing. We should publish *short, dense* artefacts, not blogs.

- New `/intelligence` index page listing quarterly briefs:
  - *"State of European CCS — Q1 2026"*
  - *"North Sea Carbon Infrastructure Atlas"*
  - *"Delta Rhine Corridor: ETS price impact model"*
- Each brief: PDF behind email gate, 1–2 page web preview, hero chart.
- Link from navbar (`Platform · Intelligence · Solutions · Book a call`).

### 9. Typography & spacing pass — Bloomberg discipline
**Why:** ChatGPT's "Priority 5". Cheap, high-impact.

- Bump display headings: hero `text-6xl` → `text-7xl/8xl` on desktop. H2s `text-4xl` → `text-5xl`.
- Tighten max-width on body copy to ~58ch — no more wide paragraphs.
- Enforce 8-pt vertical rhythm across sections (`py-32` everywhere → consistent `py-24`/`py-32` pair).
- Numbers in JetBrains Mono get tabular-nums + slightly larger weight; everywhere a number appears it should feel "terminal".
- Add a thin top-of-section eyebrow label in mono uppercase (we already do this in `ThreeMoats` — apply to every section).

### 10. SEO & technical polish
**Why:** Grok and Gemini both flagged thin content and load weight.

- Per-page `<title>` + `<meta description>` for `/`, `/platform`, each `/solutions/*`, `/intelligence`, `/tools/hub-estimator`.
- JSON-LD `Organization` + `Product` on the homepage.
- `sitemap.xml` + `robots.txt` (robots exists, sitemap doesn't).
- Lazy-load the globe image (already an `<img>` — add `loading="lazy"` + `decoding="async"`).
- Preload the display font; drop unused weights from the Google Fonts request.
- OG image: regenerate with the new hero claim + product visual.
- Add a `Built for` / Trust strip with 5–6 partner logos in greyscale (whatever is true).

---

## Suggested navbar after this work

```
CarbonMap        Platform   Solutions ▾   Intelligence   Tools ▾        [Book a call]
```

## Suggested homepage section order after this work

```
1. Hero (product visual + Europe-first claim)
2. Live activity ticker (one-line, runs across)        ← NEW
3. Three "Show, Don't Tell" feature blocks             ← REWORKED
4. Value chain (current ValueChain, kept)
5. Three Moats (current, kept)
6. Founders + past-experience logos                    ← NEW
7. Audience router → Solutions pages                   ← REWORKED
8. Intelligence Brief preview (latest 3)               ← NEW
9. Two-track CTA: brief signup + Book a call           ← REPLACES FinalCTA
10. Footer (current, kept)
```

---

## What this is NOT

- Not a full Mapbox build. The cinematic map is *vision*; v1 ships with a high-quality static product visual. A real WebGL map deserves its own scoped project.
- Not a CMS migration. Intelligence briefs and solution pages start as React routes with MDX content; we can move to a CMS later if volume justifies it.
- Not a colour/brand overhaul. The dark `#080c14` + cyan/teal/orange/pink/purple system is good and stays — reviewers liked the existing palette discipline.

---

## Sequencing suggestion

| Wave | Items | Why this order |
|---|---|---|
| **Wave 1 (quick wins, ~1 build session)** | 1, 3, 9 | Hero reposition, faces & logos, typography — biggest credibility lift, no new infra |
| **Wave 2 (product proof, ~1 session)** | 2, 5, 10 | Show-don't-tell blocks, live-feeling activity feed, SEO/perf |
| **Wave 3 (lead engine, ~2 sessions)** | 4, 6, 8 | Brief signup + Hub Estimator + Intelligence index — needs Lovable Cloud (subscribers table, email capture, PDF gating) |
| **Wave 4 (depth, ~2 sessions)** | 7 | Four solution sub-pages |

Approve this plan and I'll start with Wave 1.
