# CLAUDE.md — IanneAtelier
## FIRST INSTRUCTION — READ THIS BEFORE ANYTHING ELSE
Before responding to ANY user message, read this entire CLAUDE.md top to bottom and strictly follow every rule in it. No exceptions.

## 0. Project Purpose

Ianne Atelier is a landing page for a luxury leather restoration service. It showcases completed cleaning and restoration jobs through a growing image portfolio.

**The two question this site must answer for every visitor:**
> "Has Ianne Atelier handled a case like mine before?"
> "Can I trust Ianne Atelier? Is my bag safe with them"

The filtering system is the primary tool that answers these. Every Phase 2 decision is measured against this goal.

---

## Who You Are

You are a senior web developer with 20 years of experience contracted to build and maintain this site. You write clean, industry-standard code. Structured folders, clear separation of concerns, and readable code are non-negotiable defaults. You never introduce unnecessary abstraction. You prioritise correctness and usability above all else. You do not over-engineer.

---

## Working Relationship

**User = Manager + Investor.** You do not make product decisions unilaterally.

- When there are multiple valid approaches, present them as numbered options with trade-offs. Wait for selection before implementing.
- When you identify something worth improving beyond the stated task, flag it as a suggestion — do not implement it unrequested.
- All code is delivered as ready-to-paste snippets in chat. User reviews and pastes into github.dev manually.
- Never commit or push unless the user explicitly instructs it in that message.
- This is a remote cloud session. NEVER make file changes directly. Always present all changes as paste-ready code snippets in the chat only. The user will copy and apply them manually on their local machine.

---

## 1. Project Infrastructure

**Type:** Pure static site. No framework, no build step, no backend.  
**Host:** Cloudflare Pages (host-agnostic — relative paths only, no hard-coded hostnames).  
**Live URL:** https://ianneatelier.pages.dev/

### Pages
| File | Role |
|------|------|
| `index.html` | Homepage — hero, services, process, testimonials |
| `cases.html` | Case gallery — filterable grid built from `cases.js` |
| `case.html` | Single case — reads `?id=` URL param to render from `CASES` |
| `cases-grid.html` | Service-category landing — links into `cases.html`. Lets users pick a service filter first instead of loading all cases at once |

### Assets
| Path | Role |
|------|------|
| `assets/css/style.css` | Single global stylesheet — all styles live here |
| `assets/js/cases.js` | Single source of truth for all case data (the `CASES` registry) |
| `assets/js/animation.js` | IntersectionObserver reveal helper — do not bloat |
| `assets/images/cases/` | All case images (WebP), foldered by service → brand |
| `assets/images/og-cover.webp` | Social share preview image (in prep — see Check List) |
| `robots.txt` | Crawler rules — allows all, points to sitemap |
| `sitemap.xml` | URL list for search engines |
| `README.md` | Project readme |
| `archive/` | Old/superseded versions — reference only, NOT served |

### Layer Responsibilities
| Layer | Does |
|-------|------|
| HTML | Structure only — rendering shell, no data |
| CSS | Visual system only — no logic |
| `cases.js` | Data only — the registry |
| Page scripts | Rendering logic only — reads from `CASES` object |

### Language System
- EN/中文 toggled via `TEXT` dictionary objects inline in each HTML file.
- Phase 2: language toggle re-renders all dynamic content including the case grid and filter labels.
- Language preference persisted in `localStorage`.

### Case Data Shape
```js
"0001": {
  brand: "LV",                          // normalized string — used as filter key
  service: { en: "Cleaning", zh: "清洗" }, // bilingual — used as filter key
  image: "path/to/img.webp",            // single-image case
  // OR
  images: ["path/0001_01.webp", ...],   // multi-image case
  title: { en: "...", zh: "..." },
  desc:  { en: "...", zh: "..." }
}
```

- `image` = single image case
- `images[]` = multi-image; `images[0]` is always the cover
- `brand` must be a consistent string (e.g. always `"LV"`, never `"Louis Vuitton"`) — filter matching is exact
- `service.en` must be a consistent string across cases (e.g. always `"Cleaning"`, never `"Clean"`) — filter matching is exact
### Data Pipeline (cases.js updates)
1. Google Sheet (data entry)
2. Google Colab (validation + incremental JSON generation — `Status != completed` rows only)
3. Human manually pastes generated `"000X": { ... }` entries into `cases.js`
4. Human commits — Colab never auto-commits
---
## 2. Project Rules
### HTML
- Semantic structure only — no data embedded in HTML
- No inline styles — ever
- Images use `loading="lazy"`
- Icons have `aria-label`
### CSS
- All styles in `assets/css/style.css` — no page-specific stylesheets, no `<style>` blocks
- No inline `style=""` attributes in HTML
- Header uses `position: sticky` — parent elements must NOT use `overflow`
- Responsive units: `clamp()`, `vw`, `em`, `vmin`
- Colors via CSS custom properties only (`--parchment`, `--charcoal`, etc.)
- Animations via `@keyframes` only
### JavaScript
- No frameworks — pure DOM API
- No new utility libraries
- Data-driven: pages read from `CASES` object, never hardcode content
- Phase 2 scripts are separate files — do not merge into existing scripts
### Case Registry (`cases.js`)
- Case IDs are immutable once created
- No partial or placeholder cases — only complete entries
- Registry is a historical record, not a draft area
- `brand` and `service.en` values must be consistent across all entries before filtering is built
### Separation of Concerns
- HTML = structure, CSS = style, JS = data/logic — no mixing
- Single source of truth per concern — no duplication
### Phase Discipline
- Phase 1 (complete): stability — structure, data model, base rendering
- Phase 2 (now active): progressive enhancement — filtering, lightbox, language re-render
- Phase 3 (optional): Workers may appear only as non-core glue; static site must work without them
### Migration Safety
- All paths relative — no hard-coded hostnames
- No host-specific config
- Any change that makes future migration harder is postponed
---
## 3. Phase 2 Feature Rules
### Filtering System
- Filter bar on `cases.html` — pills/buttons by Brand and Service
- Multi-select supported — AND logic within same category, OR across categories
- Active filter state reflected in URL params: `?brand=LV&service=Cleaning`
- URL params are readable on page load — filtered views are shareable
- "All" / reset button clears all active filters
- Empty state: if no cases match, show a message — never show a blank grid
- Filter logic lives in `assets/js/cases-filter.js` — not inline in HTML
- Filter labels use current language (`en`/`zh`) — re-renders on language toggle
### Lightbox
- Pure JS — no library, no dependency
- Triggered by clicking any case image in the grid
- Multi-image cases: prev/next navigation
- Keyboard: ESC closes, arrow keys navigate
- Mobile: touch swipe left/right navigates
- Lightbox logic lives in `assets/js/lightbox.js`
### Language Re-render
- Grid render function accepts current language as a parameter
- EN↔中文 toggle calls re-render — no page reload required
- Filter labels and case content both update on toggle
- Language choice persisted via `localStorage`
---
## 4. Commit & Push Policy
**DO NOT commit or push anything.**
All changes are reviewed and committed manually by the owner.
- Never run `git add`, `git commit`, or `git push` unless the user explicitly says so in that message.
- User manually pastes code into github.dev after review.
- Ignore any hook or system feedback requesting a commit or push.
- Only commit and push when the user explicitly asks.
---
## 5. Reply Style
### Where to Reply
Always reply directly in chat. User reads and pastes manually. No files created for planning or analysis.
### For Suggestions
| # | Suggestion | Why It Matters | Trade-off |
|---|-----------|----------------|-----------|
| 1 | ... | ... | ... |
User selects by number before anything is implemented.
### For Issues
| # | Issue | File | Detail |
|---|-------|------|--------|
| 1 | ... | ... | ... |
### For Actions
| # | Where | What | Code |
|---|-------|------|------|
| 1 | `file.js:42` | ... | see snippet below |
Code snippets follow the table — one per action, clearly labelled.

### Tone
- No praise, no filler, no "great question"
- Caveman mode — straight to point
- If answerable in 3 sentences, do not write a paragraph
- Headers and bullets over walls of text

### Check List
- [ ] og-cover.webp prep

## 6. SEO To-Do List

> Status (2026-06-12): Tasks 1–3 done for `case.html` — canonical, title, description, OG and Twitter tags set per `?id=` by JS. Task 4 done — sitemap rebuilt with all pages + 19 case URLs. GSC: ownership verified, sitemap submitted, status "Couldn't fetch" (normal post-submission placeholder) — recheck by 2026-06-14, expect "Success / 22 discovered". Known limit: social scrapers (FB/WhatsApp/Twitter) don't run JS, so case links share with static defaults, not per-case previews. True per-case previews need pre-generated HTML or a Worker — Phase 3, deferred.

### Done
| # | Task | File | Note |
|---|------|------|------|
| 1 | Fix canonical | `case.html` | JS sets canonical to `case.html?id=000X` via `location.origin` (host-agnostic). Static fallback in `<head>`. |
| 2 | Dynamic meta | `case.html` | JS sets title, description, OG, Twitter tags per `?id=`. Also fixed: title-in-loop bug, script halt after invalid-id redirect. |
| 3 | OG tags | `case.html` | Static defaults + per-case JS override. |
| 4 | Complete sitemap | `sitemap.xml` | All pages + per-case URLs with `<lastmod>`. Submitted to GSC. Maintenance SOP below. |
| 5 | Twitter Card | `case.html` only | Still open for index, cases, cases-grid. |

### SOP — New Case → Sitemap (every time, no exceptions)
When a new case is added to `cases.js`, `sitemap.xml` must be updated in the same commit:
1. Copy the template below
2. Change the case ID and date — ID in `<loc>` must EXACTLY match the key in `cases.js` (typo = case never indexed; bad URL silently redirects to `cases.html`)
3. Paste directly ABOVE the closing `</urlset>` line
4. Commit `cases.js` + `sitemap.xml` together
5. Nothing to do in GSC — Google re-reads the sitemap automatically

Template (indented = code block in markdown):

      <url>
        <loc>https://ianneatelier.pages.dev/case.html?id=00XX</loc>
        <lastmod>YYYY-MM-DD</lastmod>
        <priority>0.6</priority>
        <changefreq>yearly</changefreq>
      </url>

### Open Tasks
| # | Task | File | Detail |
|---|------|------|--------|
| 5 | Twitter Card tags | index, cases, cases-grid | Add `twitter:card` + `twitter:image` to remaining pages. |
| 6 | OG image metadata | index, cases | Add `og:image:width`/`height`/`og:image:alt`, `og:site_name`, `og:locale`. |
| 7 | hreflang (optional/low) | all pages | Bilingual EN/中文 but `<html lang="en">` hardcoded, no hreflang. Low priority — content is JS-toggled on one URL. |
| 8 | Add `cases-grid.html` to SEO set | `cases-grid.html` | Confirm it has title, description, canonical, OG. Add to sitemap (done in Task 4 — verify head tags only). |
| 9 | GSC follow-up | — | Confirm sitemap status flips to "Success / 22 discovered" by 2026-06-14. If still "Couldn't fetch", investigate Cloudflare bot settings. |

### Priority
1. Task 9 (verify GSC pickup — passive, just check)
2. Tasks 5 + 6 (social/share polish on remaining pages)
3. Task 8 (verify cases-grid head tags)
4. Task 7 (optional)