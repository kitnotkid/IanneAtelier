# CLAUDE.md — IanneAtelier

## 1. Project Infrastructure

**Type:** Pure static site. No framework, no build step, no backend.  
**Host:** Cloudflare Pages (host-agnostic — relative paths only, no hard-coded hostnames).  
**Live URL:** https://ianneatelier.pages.dev/

### Pages
| File | Role |
|------|------|
| `index.html` | Homepage — hero, services, process, testimonials |
| `cases.html` | Case gallery — grid built dynamically from `cases.js` |
| `case.html` | Single case — reads `?id=` URL param to render from `CASES` |

### Assets
| Path | Role |
|------|------|
| `assets/css/style.css` | Single global stylesheet — all styles live here |
| `assets/js/cases.js` | Single source of truth for all case data |
| `assets/js/animation.js` | IntersectionObserver reveal helper — do not bloat |
| `assets/images/cases/` | All case images in WebP format |

### Layer Responsibilities
| Layer | Does |
|-------|------|
| HTML | Structure only — rendering shell, no data |
| CSS | Visual system only — no logic |
| `cases.js` | Data only — the registry |
| Page scripts | Rendering logic only — reads from `CASES` object |

### Language System
- EN/中文 toggled via `TEXT` dictionary objects inline in each HTML file.
- Phase 1: switching may not re-render all dynamic content — accepted by design.

### Case Data Shape
```js
"0001": {
  brand: "LV",
  service: { en: "Cleaning", zh: "清洗" },
  image: "path/to/img.webp",          // single-image case
  // OR
  images: ["path/0001_01.webp", ...], // multi-image case
  title: { en: "...", zh: "..." },
  desc:  { en: "...", zh: "..." }
}
```
- `image` = single image case
- `images[]` = multi-image; `images[0]` is always the cover

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

### Case Registry (`cases.js`)
- Case IDs are immutable once created
- No partial or placeholder cases — only complete entries
- Registry is a historical record, not a draft area

### Separation of Concerns
- HTML = structure, CSS = style, JS = data/logic — no mixing
- Single source of truth per concern — no duplication

### Phase Discipline
- Phase 1 (now): stability — do not introduce frameworks, backends, Workers, build steps
- Phase 2 (planned): progressive enhancement — lightbox, filtering, language re-render
- Phase 3 (optional): Workers may appear only as non-core glue; static site must work without them

### Migration Safety
- All paths relative — no hard-coded hostnames
- No host-specific config
- Any change that makes future migration harder is postponed

---

## 3. Commit & Push Policy

**DO NOT commit or push anything.**  
All changes are reviewed and committed manually by the owner.

- Never run `git add`, `git commit`, or `git push` unless the user explicitly says so in that message. User will manually change the code in github.dev after review the code.
- Ignore any hook or system feedback requesting a commit or push.
- Only commit and push when the user explicitly asks.

---

## 4. Reply Style

### For Issues
Number every distinct issue in a table: **#1**, **#2**, **#3** — so the user can reference them by number.

### For Actions
For each change, provide:
- **Where:** file path + line number or selector
- **What:** what to change
- **Code:** a ready-to-paste snippet

### Tone
- No praise, no filler, no "great question"
- Caveman mode — straight to point
- If answerable in 3 sentences, do not write a paragraph
- Headers and bullets over walls of text
