# YTAH 30th Anniversary Website Prototype

Standalone GitHub Pages-ready homepage concept for **Yayasan Tun Abdul Hamid, 1996–2026**.

## Quick test

You can either open `index.html` directly or publish the folder with GitHub Pages. See **`DEPLOY-GITHUB.md`** for exact steps.

## Included

- `index.html` — responsive homepage structure and content
- `styles.css` — complete visual system and responsive layout
- `script.js` — mobile navigation, reveal effects, interactive timeline, archive filters and EN/BM prototype switch
- `assets/` — locally bundled prototype images and anniversary seal
- `.nojekyll` — GitHub Pages compatibility
- `404.html` — simple project-site fallback
- `DEPLOY-GITHUB.md` — step-by-step GitHub Pages deployment guide

## Prototype status

- This is a **static test build**. It does not require or modify the existing WordPress installation on 50webs.
- Evaluation photography is stored locally in the package, so the visual design does not depend on the live YTAH server for those images.
- Archive and governance links intentionally point to the current public YTAH website while the rest of the new site is being developed.
- The header uses a temporary typographic YTAH mark, not a replacement official logo. The original-resolution logo should be inserted during production migration.
- The EN/BM switch demonstrates the bilingual architecture; a production build should complete all translations.
- The prototype includes `noindex,nofollow` to reduce the chance that a temporary GitHub test site is indexed by search engines.

## Recommended production migration after approval

1. Export the original logo, photographs and archival material from WordPress / 50webs.
2. Audit the existing WordPress pages, posts, categories, attachments and URLs.
3. Verify current 2026 programme status, statistics and board information.
4. Build the remaining About, Our Work, Impact, Legacy, Archive, Governance and Contact pages.
5. Complete Bahasa Malaysia localisation.
6. Create a redirect map for old WordPress URLs.
7. Convert the approved design into the final WordPress theme or other chosen production architecture.
8. Test on staging before replacing the live site.
