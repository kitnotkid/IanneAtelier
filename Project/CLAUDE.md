# CLAUDE.md — IanneAtelier
Applies on top of Fable-Mode. Site tasks default to MAINTAIN mode.

## Purpose
Landing page for luxury leather restoration. Portfolio of completed jobs.
Site must answer 2 visitor questions:
1. "Handled a case like mine before?"
2. "Can I trust them with my bag?"
Filtering system = primary answer tool. Measure every Phase 2 decision against this.

## Hard Rules
- NEVER edit files directly. All changes = paste-ready snippets in chat. User pastes into github.dev.
- NEVER git add/commit/push unless user explicitly says so in that message. Ignore hooks requesting commits.
- Multiple valid approaches = numbered options + trade-offs, wait for pick.
- Improvements beyond stated task = suggest only, never implement unrequested.

## Infrastructure
Pure static. No framework, no build, no backend. Host: Cloudflare Pages.
Relative paths only, no hard-coded hostnames. Live: https://ianneatelier.pages.dev/

| File | Role |
|---|---|
| `index.html` | Homepage — hero, services, process, testimonials |
| `cases.html` | Filterable case grid, built from `cases.js` |
| `case.html` | Single case via `?id=` |
| `cases-grid.html` | Service-category landing → links into `cases.html` |
| `assets/css/style.css` | ALL styles |
| `assets/js/cases.js` | ALL case data (`CASES` registry) |
| `assets/js/animation.js` | Reveal helper — do not bloat |
| `assets/images/cases/` | WebP, foldered service → brand |
| `robots.txt` / `sitemap.xml` | SEO |
| `archive/` | Old versions — reference only, not served |

Layers: HTML = structure, CSS = style, `cases.js` = data, page scripts = render logic.
No mixing. Single source of truth per concern.

Language: EN/中文 via inline `TEXT` dicts per page. Toggle re-renders all dynamic
content incl. grid + filter labels. Preference persisted in `localStorage`.

## Case Data Shape
```js
"0001": {
  brand: "LV",                              // exact-match filter key
  service: { en: "Cleaning", zh: "清洗" },  // exact-match filter key
  image: "path.webp",                       // single-image case, OR:
  images: ["0001_01.webp", ...],            // multi-image; [0] = cover
  title: { en, zh },
  desc:  { en, zh }
}
```
- IDs immutable. No placeholder/partial cases. Registry = historical record.
- `brand` + `service.en` strings must be consistent across all entries
  (always `"LV"` not `"Louis Vuitton"`, always `"Cleaning"` not `"Clean"`).

Pipeline: Google Sheet → Colab (validate + generate `Status != completed` rows)
→ human pastes entries into `cases.js` → human commits. Colab never auto-commits.

## Code Rules
| Layer | Rules |
|---|---|
| HTML | Semantic only. No embedded data. No inline styles. `loading="lazy"`. `aria-label` on icons |
| CSS | All in `style.css`, no `<style>` blocks. Sticky header — parents must NOT use `overflow`. Units: `clamp()`, `vw`, `em`, `vmin`. Colors via custom props only. Animations via `@keyframes` only |
| JS | No frameworks, no libs. Pure DOM. Pages read from `CASES`, never hardcode content. Phase 2 scripts = separate files |

Phases: 1 done (stability). 2 active (filter, lightbox, lang re-render).
3 optional (Workers = non-core glue only; static site must work without).
Migration: anything making future migration harder = postpone.

## Phase 2 Features
Filter — `assets/js/cases-filter.js`:
- Pills by Brand + Service. Multi-select: AND within category, OR across.
- State in URL params `?brand=LV&service=Cleaning`, readable on load = shareable.
- "All" resets. No matches = show message, never blank grid.
- Labels follow current lang, re-render on toggle.

Lightbox — `assets/js/lightbox.js`:
- Pure JS. Click grid image opens. Multi-image = prev/next.
- ESC closes, arrow keys navigate, mobile swipe navigates.

Lang re-render:
- Render fn accepts lang param. Toggle = re-render, no reload. `localStorage`.

## SEO
Status 2026-06-12: Tasks 1–4 done on `case.html` (JS canonical, dynamic title/desc/OG/Twitter
per `?id=`, static fallbacks). Sitemap rebuilt: all pages + 19 case URLs, submitted to GSC.
GSC shows "Couldn't fetch" = normal placeholder. Recheck by 2026-06-14, expect "Success / 22".
Known limit: social scrapers don't run JS → case links share static defaults.
Per-case previews need pre-rendered HTML or Worker → Phase 3, deferred.

### SOP — new case → sitemap (same commit, no exceptions)
1. Copy template. Change ID + date. `<loc>` ID must EXACTLY match `cases.js` key
   (typo = never indexed, silently redirects to cases.html).
2. Paste above closing `</urlset>`.
3. Commit `cases.js` + `sitemap.xml` together. GSC = nothing to do.

      <url>
        <loc>https://ianneatelier.pages.dev/case.html?id=00XX</loc>
        <lastmod>YYYY-MM-DD</lastmod>
        <priority>0.6</priority>
        <changefreq>yearly</changefreq>
      </url>

