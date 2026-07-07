# ROADMAP — decisions locked 2026-07-07

## Step 1 — Custom domain (THIS WEEK)
- Buy `ianneatelier.com` at Namecheap.
- Point nameservers to Cloudflare (Namecheap → Custom DNS). No domain transfer needed.
- Cloudflare Pages → Custom domains → add apex + www. `pages.dev` stays live = rollback.
- One commit: replace `pages.dev` hostname in `sitemap.xml` (21 URLs), `case.html`
  canonical/OG JS, `robots.txt`, README/CLAUDE.md. Grep `pages.dev` for stragglers.
- GSC: add new property, submit sitemap, keep old property to watch traffic move.

## Step 2 — Ship Phase 2 filter (APPROVED, next build session)
- `assets/js/cases-filter.js` per existing spec: pills from `CASES`, multi-select,
  URL params, empty state, bilingual. Hook in `cases.html`, pill styles in `style.css`.
- Lightbox = separate later task.
- Same commit: add Designed/Shipped status table to README.

## Step 3 — Per-case social previews (DECIDED: option 1, static pre-render)
- Colab additionally emits one static `cases/00XX.html` per case with real
  OG title/desc/image, canonical to the case. Paste + commit like case entries.
- Update sitemap SOP: new case = entry for the pre-rendered URL too.
- Old `?id=` URLs stay live. No Workers.

## Step 4 — Acquisition layer (OWNER ACTIONS, LATER)
- Claim/verify Google Business Profile; add case-gallery photos.
- Habit: after every completed job, send GBP review link in WhatsApp follow-up.
- Add `wa.me/<number>?text=` deep link site-wide; case pages pre-fill case ID.
- Add Cloudflare Web Analytics (one script tag) to measure WhatsApp clicks.
- Phase 3 assessment forms: STRUCK from plan — WhatsApp link replaces them.

## Step 5 — Pipeline hardening (APPROVED, fold into Step 3 session)
- Colab emits ENTIRE `cases.js` (paste-replace, not paste-insert).
- Colab pre-output checks: valid JS + brand/service strings match canonical set.
- Bad publish rollback = `git revert`.

## Step 6 — Runbook (APPROVED)
- Add `PUBLISH.md`: Sheet link, Colab link, 5-step publish SOP incl. sitemap,
  recovery = revert. Start writing `HANDOFF.md` at session end per CLAUDE.md.
