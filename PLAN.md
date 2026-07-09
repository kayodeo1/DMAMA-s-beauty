# DMAMA Beauty — Improvement Plan (July 2026)

Working plan for upgrading the site after the Catalogue 03 2026 product update
(commit "update products to Oriflame Catalogue 03 2026"). Any session (Fable,
Opus, or human) can pick this up: each phase is an independent commit; finished
items are checked off. Verify with the workflow at the bottom before pushing.

## Context

- Static site (no build step) on GitHub Pages, custom domain `https://dmamasbeauty.com.ng`.
- `script.js` holds `productGroups` (41 groups / 171 products) + render/filter/slideshow logic.
- Product images are two-page catalogue spreads in `images/C3-2026 catalogue 3_page-NNNN.jpg` (45 files, 1713px wide, ~400KB each, 17MB total).
- Business runs on WhatsApp: +234 802 333 7336. Facebook + Instagram links in contact section.
- Catalogue update convention: old `images/` + `script.js` move to `archived/vN/` (v3 is the latest archive).
- Known review findings (session 2026-07-09): no purchase path from product cards,
  no SEO/OG meta, 17MB image payload, footer says 2025, spreads unreadable at card size.

## Phase 1 — SEO (commit: "SEO: meta, social preview, sitemap, structured data")

- [ ] `index.html` head: meta description (Oriflame Nigeria / catalogue keywords), canonical
      `https://dmamasbeauty.com.ng/`, `theme-color`, Open Graph (title/description/url/type/image
      1200x630), Twitter card (`summary_large_image`).
- [ ] Favicon set: `favicon.svg` (brand ✦ on rose background) + `favicon.png` 48px +
      `apple-touch-icon.png` 180px, linked in head. Colors from `css/styles.css` variables.
- [ ] Social preview image `images/og-cover.jpg` (1200x630, brand typography; can be rendered
      with Playwright screenshot of a small HTML file).
- [ ] `robots.txt` (allow all, point to sitemap) and `sitemap.xml` (single URL, lastmod today).
- [ ] JSON-LD in `index.html`: `LocalBusiness` (name, url, telephone +2348023337336,
      addressCountry NG, sameAs Facebook/Instagram URLs from the contact section).
- [ ] Dynamic JSON-LD `ItemList` of products injected on load in `script.js` from
      `productGroups` (name, image, `offers` with NGN price parsed from the price string).
- [ ] Footer: dynamic year (`new Date().getFullYear()`), fixes stale "© 2025".
- [ ] `<noscript>` fallback paragraph (brand line + call/WhatsApp links) since all content is JS-rendered.

## Phase 2 — Push (after Phase 1)

- [ ] `git push origin main` (deploys via GitHub Pages).

## Phase 3 — Performance (commit: "perf: compressed grid thumbnails")

- [ ] Generate `images/thumbs/` from the 45 catalogue pages at ~720px wide, JPEG q~72
      (macOS: `sips --resampleWidth 720 -s format jpeg -s formatOptions 72`). Target ≤120KB each.
- [ ] Grid cards load the thumb; keep full-res path on the card (e.g. `data-full`) for the lightbox.
- [ ] Keep `productGroups[].image` pointing at full-res; derive thumb path in `createProductCard`
      (same filename inside `images/thumbs/`), with `onerror` fallback to full-res.

## Phase 4 — UI / conversion (commit: "feat: WhatsApp ordering + catalogue lightbox")

- [ ] Per-product "Order on WhatsApp" button on every slide in `createProductCard`:
      `https://wa.me/2348023337336?text=<encoded "Hi DMAMA Beauty! I'd like to order: {name} ({size}) - {price}">`.
      Style to match `.btn-primary`, smaller; must not break slideshow layout.
- [ ] Click on card image opens a lightbox showing the full-res spread (readable text):
      fixed overlay, dark backdrop, close on backdrop click / Esc / × button; lazy-load full image
      only when opened. Plain JS + CSS in existing files.
- [ ] Product-name cleanups in `productGroups`: "Opt Optimals ..." → "Optimals ...";
      drop "(Nutrition Facts)" and "(3-Week Supply)" disambiguation suffixes (fold duplicates:
      pages 23/24 and 23/26 repeat Meal Replacement and Wellness Packs — keep both entries,
      just make names identical and natural).
- [ ] Pause slideshow on touchstart (mobile equivalent of the existing mouseenter pause).
- [ ] Delete dead `css/styles222.css`.

## Phase 5 — Verify + final push

- [ ] `node --check script.js`.
- [ ] Serve locally: `python3 -m http.server 8099` from repo root.
- [ ] Playwright (scratchpad has `verify.js` pattern from 2026-07-09 session): desktop 1400px +
      mobile 390px — products render (should stay "171 products in 41 collections"), category
      tabs filter, search works, thumbs load (naturalWidth ~720), lightbox opens full-res,
      WhatsApp button href contains encoded product name, zero console errors.
- [ ] Check OG tags with `curl -s localhost:8099 | grep 'og:'`.
- [ ] Commit remaining work, `git push origin main`.
- [ ] After deploy: verify `https://dmamasbeauty.com.ng` shows new catalogue; share the URL in a
      WhatsApp chat to confirm the preview card renders.

## Out of scope / later ideas

- Per-product cropped photos instead of full-spread images (biggest UX win, needs manual cropping
  or detection tooling).
- Analytics (e.g. GoatCounter/Plausible — GitHub Pages friendly).
- Order form or cart; catalogue set-bundle pages (42–44 skipped in transcription — set pricing only).
