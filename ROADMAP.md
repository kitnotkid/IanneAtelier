# ROADMAP — 1-Year Blueprint (Jul 2026 → Jun 2027)

Updated 2026-07-12. Supersedes the 2026-07-07 step list; locked decisions carried over.

**Strategy in one line:** local, trust-based, visual business → Q1 fix the
plumbing → Q2 win local search → Q3 win topical search → Q4 scale what the
data says works.

**Who-does-what legend**
- `HUMAN` — owner action: accounts, money, photos, customers, dashboards.
- `AI` — Claude session does it end-to-end in the repo; human only reviews + commits.
- `HUMAN+AI` — human supplies input/access, AI builds.

---

## DONE
- [x] `HUMAN` Buy `ianneatelier.com` + add property in Google Search Console (2026-07)
- [x] `HUMAN` Task 1.1 — domain live: zone on Cloudflare DNS, apex + www on Pages,
      accounts on kjchong Gmail, GSC property verified (2026-07-12)
- [x] `AI` Shoe Cleaning category: filter in `cases.html`, cases in `cases.js` (PR #1)
- [x] `AI` SEO base: meta/OG/canonical, JSON-LD, robots.txt, sitemap.xml
- [x] Phase 1 site: static, bilingual, cases pipeline (Sheet → Colab → cases.js)

## KNOWN ISSUE (fix in Q1.2)
- Cases `0020 0021 0022 0024 0025` exist in `cases.js` but are MISSING from
  `sitemap.xml` — violates PUBLISH.md Part C (case + sitemap = same commit).

---

## Q1 (Jul–Sep 2026) — Foundation: make the domain actually work
Goal: Google indexes ianneatelier.com; every visit measurable; contact in one tap.

| # | Task | Who | Detail |
|---|------|-----|--------|
| 1.1 | ~~Domain live on Cloudflare~~ ✅ DONE 2026-07-12 | HUMAN | Zone on Cloudflare DNS, apex + www on Pages, accounts on kjchong Gmail, GSC verified. `pages.dev` stays live = rollback. |
| 1.2 | Domain cutover commit — NEXT UP | AI | Replace `pages.dev` → `ianneatelier.com` in `index.html`, `case.html`, `cases.html`, `sitemap.xml` (all URLs), `robots.txt`. Grep for stragglers. Same commit: add missing sitemap entries 0020/21/22/24/25. |
| 1.3 | GSC sitemap submit | HUMAN | AFTER 1.2 deploys: submit sitemap under the new property (once — Google re-fetches it automatically; new cases never need re-submitting). Keep old `pages.dev` property to watch traffic move. |
| 1.4 | Cloudflare Web Analytics | HUMAN+AI | Human creates the site in CF dashboard (gets token); AI adds the one script tag site-wide. |
| 1.5 | WhatsApp deep link site-wide | HUMAN+AI | Human supplies number + default message text; AI adds `wa.me/<num>?text=` header/footer CTA, case pages pre-fill case ID. |
| 1.6 | Google Business Profile | HUMAN | Claim + verify, correct categories, upload best 15–20 before/after photos. Map pack > website for "bag spa <city>" searches. |
| 1.7 | Business email | HUMAN | CF Email Routing: `hello@ianneatelier.com` → kjchong Gmail (few clicks). Partner copy via Gmail filter-forward. AI adds address to site footer after. |

**KPI end of Q1:** ianneatelier.com pages indexed in GSC · GBP live with photos
· weekly visitors + WhatsApp clicks known as numbers.

## Q2 (Oct–Dec 2026) — Local dominance + proof engine
Goal: obvious first result in-state; every job becomes marketing.

| # | Task | Who | Detail |
|---|------|-----|--------|
| 2.1 | Review habit | HUMAN | After EVERY completed job: WhatsApp follow-up includes GBP review link. Target 2–4 reviews/month, 30+ by year end. |
| 2.2 | Phase 2 filter | AI | `assets/js/cases-filter.js` per README spec: pills from CASES, multi-select, URL params (`?brand=LV&service=Cleaning`), empty state, bilingual. |
| 2.3 | Lightbox | AI | `assets/js/lightbox.js`, separate task after filter. |
| 2.4 | Per-case static pages | HUMAN+AI | AI updates Colab to also emit static `cases/00XX.html` with real OG title/desc/image + canonical; human pastes + commits like case entries. Sitemap SOP gains the pre-rendered URL. Old `?id=` URLs stay live. No Workers. |
| 2.5 | Pipeline hardening | AI | Colab emits ENTIRE `cases.js` (paste-replace); pre-output checks: valid JS + brand/service strings match canonical set. Also emit `sitemap.xml` — kills the manual PUBLISH.md Part C step (root cause of the 0020–0025 miss). Rollback = `git revert`. |
| 2.6 | Publish cadence | HUMAN | Every completed job enters the pipeline within a week. Target ~50 cases by Jun 2027. |
| 2.7 | IG ↔ site loop | HUMAN | Every IG post links its case URL; case pages link IG. Same asset, two channels. |

**KPI end of Q2:** map pack for "<city> bag spa" · 15+ GBP reviews · case pages
getting organic impressions in GSC.

## Q3 (Jan–Mar 2027) — Topical search: own the questions
Goal: capture people who don't know you yet but have a damaged bag.

| # | Task | Who | Detail |
|---|------|-----|--------|
| 3.1 | Service landing pages | HUMAN+AI | One static page per service (Cleaning, Colour, Edge Oil, Strap, Shoe Cleaning): what it fixes, embedded filtered gallery, price-range guidance, WhatsApp CTA. Bilingual. Human supplies price ranges + service copy facts; AI builds pages + sitemap entries. |
| 3.2 | FAQ page + FAQ schema | HUMAN+AI | Human collects the 10 most-asked real WhatsApp questions; AI writes the page + JSON-LD. |
| 3.3 | Ship-in service decision | HUMAN | If mailed-in bags accepted, say so loudly — expands market from Kelantan to all Malaysia. Biggest single lever this year. Business decision, then AI updates pages. |
| 3.4 | GSC-driven iteration | HUMAN+AI | Human exports 6 months of query data; AI retitles/re-metas pages to match what people actually type. |

**KPI end of Q3:** page 1 for 2–3 non-brand queries · WhatsApp clicks from
organic search measurable.

## Q4 (Apr–Jun 2027) — Convert, scale, decide with data
| # | Task | Who | Detail |
|---|------|-----|--------|
| 4.1 | Testimonials on case pages | HUMAN+AI | Human picks GBP review quotes; AI places them on matching case/service pages. |
| 4.2 | Paid test (optional) | HUMAN | RM10–20/day Meta ads → best before/after case pages. Only now: pages convert + analytics exist to judge. |
| 4.3 | Phase 3 call | HUMAN | Assessment form via Workers — currently STRUCK in favour of WhatsApp. Revisit only if a year of data shows demand. |
| 4.4 | Year-end review | HUMAN+AI | Human exports GSC + analytics; AI writes next year's plan from which pages/queries/services actually converted. |

**KPI end of year:** organic search a steady measurable lead channel · 50+
indexed case pages · 30+ reviews · cost per WhatsApp lead known.

---

## Deliberately NOT doing (per README guiding rule)
Blog treadmill · TikTok/YouTube (unless already filming) · framework rewrite ·
CMS · booking system · Workers for anything core.

## Model guide
| Work | Model |
|---|---|
| Snippets, runbook edits (1.4, 1.5, 4.1) | Haiku 4.5 |
| Feature builds (2.2–2.5, 3.1, 3.2) | Sonnet 5 |
| Design/plan reviews (2.4 design, 3.4, 4.4) | Fable 5 / Opus 4.8 |
