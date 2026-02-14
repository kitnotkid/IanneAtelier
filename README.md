https://ianneatelier.pages.dev/

# IANNE ATELIER – Project README

This project is a static, content-driven website designed with long-term maintainability
and host portability as first-class goals.

The priority of Phase 1 is **structure stability**, not feature completeness.

---

## 1. Core Principles

### 1.1 Single Source of Truth
- Case data lives **only** in `assets/js/cases.js`
- Images live **only** under `assets/images/`
- Styles live **only** in `assets/css/style.css`
- HTML files act as **rendering shells**, not data containers

No content duplication across files.

---

### 1.2 Clear Responsibility Separation

| Layer | Responsibility |
|-----|---------------|
| HTML | Structure only |
| CSS | Visual system only |
| JS (cases.js) | Data only |
| JS (page scripts) | Rendering logic only |

Mixing responsibilities is explicitly avoided.

---

## 2. Phase Strategy

### Phase 1 (Current)
**Goal:** Structural stability & migration safety

- Pure static site
- No backend
- No API
- No Cloudflare Workers
- No dynamic rendering on state change
- Language switching may not re-render all content (accepted by design)

> Phase 1 favors **clarity over completeness**.

---

### Phase 2 (Planned, Not Implemented)
**Goal:** Progressive enhancement without breaking Phase 1

Potential additions:
- Re-render cases on language switch
- Image lightbox / gallery interaction
- Case filtering by service or category

Rules:
- No breaking changes to directory structure
- No refactoring of existing data model
- Enhancements must be optional layers

---

### Phase 3 (Optional / Long Term)
**Goal:** Interaction & submission features

Possible use cases:
- Feedback submission
- Assessment request forms

At this phase only:
- Cloudflare Workers may be introduced
- Worker usage must be limited to **non-core features**
- Static content must remain deployable without Workers

---

## 3. Hosting & Migration Philosophy

### 3.1 Host-Agnostic by Design
The project assumes it may move between:
- Cloudflare Pages
- Netlify
- Self-hosted CDN / VPS

Therefore:
- All paths are relative
- No hard-coded hostnames
- No environment-specific assumptions

Migration should require **minimal or zero code changes**.

---

### 3.2 Cloudflare Workers Policy

Current status:
- **Not used**
- **Not required**
- **Not assumed**

Future policy:
- Workers may exist only as optional glue
- Core site must function without them
- No critical data or logic should depend on Workers

---

## 4. Case Data Rules

- Each case ID is immutable once created
- No partial or placeholder cases in `cases.js`
- Single-image cases use `image`
- Multi-image cases use `images[]`
- Cover image for listings is always `images[0]` or `image`

Case Registry is treated as a **historical record**, not a draft area.

---

## 5. CSS & Layout Discipline

- All global styles live in `assets/css/style.css`
- No inline styles in HTML
- Header uses `position: sticky`
- Parent elements of header must not use `overflow`

Visual consistency is prioritized over page-specific tweaks.

---

## 6. What This Project Intentionally Does NOT Do (Yet)

- No framework (React / Vue / etc.)
- No build step
- No backend
- No runtime configuration
- No CMS

These are deferred until a real, unavoidable need appears.

---

## 7. Guiding Rule

> If a change makes future migration harder, it is postponed.

This project favors **engineering restraint** over feature velocity.

=========================================
Function On Cases.js generation
System overview:

We use a Google Sheet (sheet name: cases) as the data entry layer.
A Google Colab notebook performs:

1. Structure validation (column integrity)
2. Data validation (case_id, service format, image naming pattern, duplicates, empty fields)
3. History consistency check against existing cases.js (ID-level only)
4. Incremental JSON generation (only rows where Status != completed)

Important constraints:

- Sheet is NOT the source of truth.
- cases.js is the single source of truth.
- Status = completed → already exists in cases.js
- Status blank → new case to generate
- The system never auto-commits to GitHub.
- User manually pastes generated JSON into cases.js.

History checks include:
- Completed but not in JS → warning
- Not completed but already in JS → warning
- JS ID not found in Sheet → warning

Generation output:
- Only produces incremental `"000X": { ... }` entries.
- Does not wrap with outer braces.
- Designed for manual insertion.

This system prioritizes:
- Structural safety
- Data integrity
- Manual control over GitHub commits
- Minimal automation risk
=========================================