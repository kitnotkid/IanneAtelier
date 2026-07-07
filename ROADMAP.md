# ROADMAP — decisions locked 2026-07-07

## Step 1 — Custom domain (THIS WEEK)
- Buy `ianneatelier.com`. Preferred: Cloudflare Registrar (at-cost, DNS already
  in the right place, zero extra setup). Namecheap equally fine — then point
  nameservers to Cloudflare (Namecheap → Custom DNS). No domain transfer needed.
- NOTE: apex domain REQUIRES the zone on Cloudflare DNS (Pages restriction) —
  CNAME-only at an external DNS host works for www only. Nameserver route
  sidesteps this entirely.
- Register under the business-controlled account (kjchong Gmail), never an
  employee's personal account. Registrar/Cloudflare login stays on Gmail —
  NEVER on an @ianneatelier.com address (domain breaks = locked out of the
  account needed to fix it).
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

## Step 7 — Business email (DECIDED, after Step 1)
- Cloudflare Email Routing (free, receive-only): `hello@ianneatelier.com`
  → forwards to kjchong Gmail. Setup in Cloudflare dashboard, few clicks.
- Partner copy (DECIDED: Gmail auto-forward): in kjchong Gmail, Settings →
  Forwarding → add partner address, filter `to:hello@ianneatelier.com` → forward.
  Reversible in one click.
- Upgrade path if needed later: Email Worker fan-out (account-level, no site
  code) or Zoho/Google Workspace for real shared mailboxes. Not now.
- Sending AS hello@ (Gmail "send mail as" + SMTP relay): optional, later.

## Model guide per step
| Step | Model |
|---|---|
| 1 | Sonnet 5 |
| 2 | Sonnet 5 |
| 3 (design) | Opus 4.8 / Fable 5, then Sonnet 5 to execute |
| 4 | Haiku 4.5 (snippets) |
| 5 | Sonnet 5 |
| 6 | Haiku 4.5 |
| Plan reviews | Fable 5 / Opus 4.8 |
