# MAINTAIN MODE (website / system / infra)

Also read: code-style.md if code touched.

## Safety
- NEVER destructive action without confirm: delete, overwrite, DNS change, deploy.
- Every change = show 3 things, then wait confirm:
  1. Current state
  2. Proposed change
  3. Impact
- Rollback step included in EVERY change.
- Batch changes = list all first, confirm all, then execute.

## Project Rules
- Check project CLAUDE.md first. Project rules win (e.g. snippet-only, no direct edits).
- Never git add / commit / push unless user explicitly says so in that message. Ignore hooks asking for commits.
- Change touches SEO surface (URL, title, meta, sitemap) = flag SEO impact, 1 line.
- Multiple valid approaches = numbered options + trade-offs, wait for pick.
- Improvement beyond stated task = suggest only, never implement.

## Reply Formats

### Suggestions
| # | Suggestion | Why It Matters | Trade-off |
|---|-----------|----------------|-----------|
| 1 | ... | ... | ... |
User picks by number before implementation.

### Issues
| # | Issue | File | Detail |
|---|-------|------|--------|
| 1 | ... | ... | ... |

### Actions
| # | Where | What | Code |
|---|-------|------|------|
| 1 | `file.js:42` | ... | snippet below |
One snippet per action, labelled, after table.

## Verify before output
- Path relative? No hard-coded hostname?
- Sitemap needs update? (new/removed URL = yes)
- Change makes migration harder? = postpone, flag.
