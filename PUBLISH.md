# PUBLISH.md — How to publish a new case

## Part A — Images (do this FIRST, before touching the Sheet)

### A1. Pick + prepare
- Select photos: before / during / after. First image = cover on the grid.
- Convert to WebP. Tool: TODO(your converter — e.g. Squoosh.app / Photoshop export)
- Target: TODO(max width px + quality setting you use, e.g. 1600px, q80)

### A2. Rename — convention is FIXED
    <caseID>_<NN>.webp        e.g. 0021_01.webp, 0021_02.webp
- caseID = next 4-digit ID, must match the `cases.js` key exactly.
- NN starts at 01. (Historical exception: 0004 starts at _00 — do NOT copy it.)
- _01 = cover image (becomes images[0]).
- Lowercase, no spaces, no parentheses like "(1)" from phone exports.

### A3. Upload to R2
- Cloudflare dashboard → R2 → bucket TODO(bucket name) → folder `cases/`
- Drag renamed files in. Do not overwrite existing files — IDs are immutable.
- Verify each URL loads in a browser BEFORE the next step:
  https://pub-cb39ce8f1e9548d2a5935c9f21e20a35.r2.dev/cases/<file>.webp
  (A typo here = broken image on the live site with no error anywhere.)

## Part B — Data
1. Add row(s) to the Google Sheet (link: TODO). Image filenames must exactly
   match what you uploaded in A3.
2. Run the Colab notebook (link: TODO) — it validates and generates cases.js.
3. Paste output into `assets/js/cases.js` (paste-REPLACE whole file once
   Step 5 of ROADMAP.md is done; until then, paste-insert new entries).

## Part C — Sitemap (same commit, no exceptions)
- Follow the SOP in Project/CLAUDE.md: copy template, set ID + date,
  `<loc>` ID must EXACTLY match the cases.js key.

## Part D — Commit
- Commit `cases.js` + `sitemap.xml` together. Human commits only.
- Check the live site grid after deploy (~1 min).

## Recovery
- Gallery broken after publish → `git revert` the commit. Site restores; fix and republish.
- Broken image only → filename mismatch between R2 and cases.js. Fix in R2 (upload
  correctly named copy), never by renaming the cases.js entry of an existing case.