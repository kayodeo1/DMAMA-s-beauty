---
name: seo
description: Full SEO playbook for static sites — audit, head metadata, social previews, favicons, structured data, sitemap/robots, Search Console verification, and ranking follow-up. Use whenever the user asks about SEO, ranking on Google, meta tags, social/WhatsApp link previews, structured data, sitemaps, or Search Console. Written so any model can execute it end-to-end; verify every phase before moving on.
---

# SEO Playbook (static sites / GitHub Pages)

You are executing a proven SEO workflow. Work phase by phase, **verify each phase
with the given check before continuing**, and commit once per phase. Do not skip
verification steps — a wrong guess (e.g. verifying in Search Console before the
deploy finishes) fails silently and wastes the user's time.

This repo (dmamasbeauty.com.ng) already completed all phases on 2026-07-09 — see
`PLAN.md`. For a re-run (new catalogue, new pages) do Phase 0 and fix what regressed.
For a NEW site, run all phases in order.

## Phase 0 — Audit (always start here)

Serve locally and inspect (never trust memory of the code — read the actual files):

```bash
python3 -m http.server 8099   # from site root, in background
curl -s localhost:8099 | grep -c 'og:'          # social tags present?
curl -s localhost:8099 | grep -i 'description\|canonical\|ld+json' | head
curl -s -o /dev/null -w "%{http_code}\n" localhost:8099/robots.txt
curl -s -o /dev/null -w "%{http_code}\n" localhost:8099/sitemap.xml
du -sh images/ 2>/dev/null                       # payload weight
```

Checklist of what "healthy" looks like:
- [ ] `<title>` ~50–65 chars: `Brand | What it sells + where` (keywords people actually search)
- [ ] meta description 140–160 chars, mentions product/location/action
- [ ] canonical URL, `theme-color`, `lang` attribute on `<html>`
- [ ] OG: type, site_name, title, description, url, image (+width/height); Twitter card `summary_large_image`
- [ ] favicon.svg + favicon.png + apple-touch-icon.png linked
- [ ] robots.txt (+ Sitemap: line), sitemap.xml with correct lastmod
- [ ] JSON-LD: LocalBusiness (or Organization) in head; Product/ItemList if there are products
- [ ] every `<img>` has meaningful alt; hero h1 contains a real keyword, not just slogan
- [ ] page weight sane (grid images should be thumbnails; see PLAN.md Phase 3 pattern)
- [ ] `<noscript>` fallback if content is JS-rendered
- [ ] asset links cache-busted (`styles.css?v=YYYYMMDD`) — bump the stamp when JS/CSS change

## Phase 1 — Head metadata

Edit `index.html` head. Rules that matter more than templates:
- Title/description are for HUMANS scanning results — front-load brand + what + where.
  This site's pattern: `DMAMA Beauty | Buy Oriflame Products in Nigeria — Skincare, Fragrance & Makeup`.
- og:image must be an absolute URL (crawlers don't resolve relative paths), 1200×630 JPEG.
- Keep og:description shorter than meta description (~100 chars); it renders in small cards.
- Canonical always points at the naked production URL with trailing slash.

## Phase 2 — Visual assets (favicon + social preview)

The og-image and favicons for this site were **rendered with Playwright** — write a
small self-contained HTML file (brand fonts from Google Fonts, brand colors from
`css/styles.css` `:root` variables), screenshot it at exactly 1200×630, save as
`images/og-cover.jpg` (JPEG q≈88, keep under 300KB). Favicon: author `favicon.svg`
by hand (simple mark on brand-color rounded square), screenshot it at 48px and
180px with `omitBackground: true` for the PNGs.

Playwright is installed in the scratchpad of past sessions but NOT globally:
`cd <scratchpad> && npm init -y && npm install playwright && npx playwright install chromium`.
**Always Read the rendered image back and look at it** — fonts fail silently.

## Phase 3 — Crawler files

`robots.txt`: allow all, `Disallow:` any archive/junk dirs (this repo: `/archived/`),
end with absolute `Sitemap:` URL. `sitemap.xml`: one `<url>` per real page (this is
a single-page site → exactly one entry), update `<lastmod>` whenever content changes
(catalogue updates count).

## Phase 4 — Structured data

Two JSON-LD blocks, both validated by pasting into https://validator.schema.org/ or
at minimum `JSON.parse`-checked:
1. **Static in head**: LocalBusiness — name, description, url, image, telephone,
   address (country), sameAs (real social profile URLs from the contact section).
2. **Injected by JS on DOMContentLoaded** (Google executes JS; this is fine):
   ItemList of Product items generated from the product data — name, description,
   absolute image URL (`encodeURI` paths with spaces!), brand, offers {price parsed
   to digits only, priceCurrency, availability InStock}. In this repo see
   `injectProductSchema()` in `script.js` — reuse it, don't rewrite.

## Phase 5 — Local verification (gate before pushing)

```bash
node --check script.js
# with local server running:
curl -s localhost:8099 | grep -c 'og:'        # expect ≥8
```
Then a headless-browser pass (pattern in scratchpad `verify_seo.js` of the
2026-07-09 session, or rewrite: ~20 lines of Playwright): assert JSON-LD blocks
parse and the ItemList count matches the product count, page renders with zero
console errors. **A page can look fine and still throw** — check console errors.

## Phase 6 — Deploy and confirm (GitHub Pages specifics)

- Commit per phase; push. Large pushes (images) can fail with
  "unexpected disconnect" → retry with `git -c http.postBuffer=157286400 push`.
- Pages deploys take 1–10 min (this repo is image-heavy → slow). **Never tell the
  user something is live without checking**:
  ```bash
  until curl -sf -o /dev/null https://<domain>/sitemap.xml; do sleep 15; done
  ```
  (run in background with a timeout; check build status via
  `gh api repos/<owner>/<repo>/pages/builds/latest --jq .status`)
- Returning visitors cache assets for 4h (`max-age=14400`) — if the user says
  "change isn't showing", it is almost always THEIR browser cache: verify the live
  site in a fresh headless browser first, then tell them to hard-refresh. Bump the
  `?v=` stamp on script/css links in every commit that changes them.

## Phase 7 — Google Search Console

1. User opens https://search.google.com/search-console/welcome →
   **URL prefix** (not Domain; Domain needs DNS TXT) → enter `https://<domain>/`.
2. Verification: HTML-file method — user downloads `googleXXXX.html`, you commit it
   to the repo root and push. **Wait for the deploy poll to confirm the file serves
   200 before telling the user to click Verify** (premature Verify = 404 = confusing
   failure). This repo is already verified via `googled384019dc79dcd79.html` — never
   delete that file.
3. After verify: Sitemaps → submit `sitemap.xml`; URL Inspection → request indexing
   of the homepage.
4. Set expectations honestly: branded queries can rank #1 within days; non-branded
   ("Oriflame products Nigeria") takes weeks+. A single-page site showing
   "1 page indexed" is CORRECT, not a problem.

## Phase 8 — Ongoing ranking work (suggest, don't silently skip)

- Google Business Profile (business.google.com) — biggest local-search lever, user must do it.
- Site URL in Instagram/Facebook/WhatsApp Business bios (backlinks + brand signals).
- Search Console → Performance after 1–2 weeks: find non-branded queries with
  impressions but low position; tune title/h1/visible copy toward those exact phrases.
- Keep `sitemap.xml` lastmod fresh with each catalogue update.

## Pitfalls index (all hit in real sessions)

| Symptom | Cause | Fix |
|---|---|---|
| Search Console Verify fails | deploy not finished | poll the live URL until 200 first |
| "Button/feature not on live site" | user's 4h browser cache | check in fresh headless browser, then hard-refresh + `?v=` bump |
| Push dies "unexpected disconnect" | big image payload | `git -c http.postBuffer=157286400 push` |
| og:image ignored by WhatsApp | relative URL or >600KB | absolute URL, JPEG ≤300KB, 1200×630 |
| JSON-LD image 404s | spaces in filenames | wrap paths in `encodeURI()` |
| "Only 1 page indexed" worry | single-page site | expected — explain, don't fix |
