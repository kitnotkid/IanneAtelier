```markdown
# IANNE ATELIER — Project README
**Live:** https://ianneatelier.pages.dev/
Ianne Atelier is a static landing page for a luxury leather restoration studio. The site's primary job is to answer the question every potential customer asks before making contact:
> "Has Ianne Atelier handled a case like mine before?"
The case gallery — and the filtering system built on top of it — is the direct answer to that question.
---
## 1. Core Principles
### 1.1 Single Source of Truth
| Asset | Location |
|-------|----------|
| Case data | `assets/js/cases.js` |
| Images | `assets/images/` |
| Styles | `assets/css/style.css` |
| HTML | Rendering shells only — no data |
No content duplication across files.
### 1.2 Layer Responsibilities
| Layer | Responsibility |
|-------|---------------|
| HTML | Structure only |
| CSS | Visual system only |
| `cases.js` | Data only |
| Page scripts | Rendering logic only |
Mixing responsibilities is explicitly avoided.
---
## 2. Phase Strategy
### Phase 1 — Complete
**Goal:** Structural stability and migration safety
- Pure static site
- No backend, no API, no Workers
- Language switching may not re-render dynamic content (accepted)
- Established data model, file structure, layer separation
### Phase 2 — Active
**Goal:** Progressive enhancement — answer the customer question better
| Feature | Purpose |
|---------|---------|
| **Case filtering** | Let customers find cases by brand and service type |
| **Lightbox** | Full-screen image viewing for completed work |
| **Language re-render** | EN/中文 toggle re-renders all dynamic content |
Rules:
- No breaking changes to Phase 1 structure or data model
- Phase 2 JS lives in separate files (`cases-filter.js`, `lightbox.js`)
- Enhancements are additive layers — removing them must not break the site
### Phase 3 — Optional / Long Term
**Goal:** Interaction and submission features
Possible additions:
- Assessment request forms
- Feedback submission
At this phase only:
- Cloudflare Workers may be introduced
- Worker usage limited to non-core features
- Static content must remain fully deployable without Workers
---
## 3. Filtering System (Phase 2 Priority)
The filter bar on `cases.html` lets customers narrow the gallery by **Brand** and **Service**.
- Multi-select: user can combine filters (e.g. LV + Cleaning)
- URL params: `?brand=LV&service=Cleaning` — filtered views are shareable
- Empty state: no blank grid — shows a message when no cases match
- Bilingual: filter labels update on language toggle
**Data requirement:** `brand` and `service.en` values in `cases.js` must be consistent strings across all entries. Filter matching is exact — `"LV"` and `"Louis Vuitton"` are treated as different brands.
---
## 4. Case Data
### Shape
```js
"0001": {
  brand: "LV",
  service: { en: "Cleaning", zh: "清洗" },
  image: "path/to/img.webp",          // single-image
  // OR
  images: ["path/0001_01.webp", ...], // multi-image; [0] is cover
  title: { en: "...", zh: "..." },
  desc:  { en: "...", zh: "..." }
}
```
### Rules
- Case IDs are immutable once created
- No partial or placeholder cases
- `cases.js` is the historical record — not a draft area
### Data Pipeline
1. Google Sheet — data entry
2. Google Colab — validation + incremental JSON generation (Status != completed rows only)
3. Human pastes generated entries into `cases.js`
4. Human commits — Colab never auto-commits
---
## 5. Hosting & Migration
- All paths relative — no hard-coded hostnames
- No environment-specific assumptions
- Currently on Cloudflare Pages; can move to Netlify or any static host with zero code changes
---
## 6. What This Project Intentionally Does Not Do
- No framework (React / Vue / etc.)
- No build step
- No backend
- No CMS
- No runtime configuration
These are deferred until a real, unavoidable need appears.
---
## 7. Guiding Rule
> If a change makes future migration harder, it is postponed.  
> If a feature doesn't help a customer find a case like theirs, it is deprioritised.