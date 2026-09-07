# YTAH 30th Anniversary Website

Production-ready static website for Yayasan Tun Abdul Hamid, 1996–2026.

## Pages

- `index.html` — homepage
- `about.html` — foundation purpose and values
- `work.html` — legal education, academic excellence and partnerships
- `impact.html` — verified public impact indicators
- `legacy.html` — Tun Abdul Hamid Omar and foundation chronology
- `archive.html` — selected historical stories and archival material
- `governance.html` — current Directors & Trustees, advisor, leadership history and meeting records
- `contact.html` — verified registered contact information
- `clp.html` — dedicated CLP Best Overall Student Prize page
- `small-steps.html` — dedicated Small Steps page
- `30-years.html` — 1996–2026 anniversary timeline

## Design system

- `styles.css` contains the responsive visual system.
- `script.js` contains mobile navigation, reveal effects, homepage timeline and archive filtering.
- `assets/media/` contains the curated, web-optimised image set used by the site.
- `MEDIA-SOURCES.md` maps each optimised site image back to its source in the supplied media archive.

## Production status

This repository is prepared as the public launch candidate. Public pages permit indexing and include canonical URLs, social sharing metadata, `robots.txt`, `sitemap.xml` and a `CNAME` for `www.ytah.com.my`.

Compatibility routes are included for selected legacy WordPress URLs so important bookmarked and search-indexed paths continue to lead visitors to relevant content after cutover. Redirect pages are intentionally `noindex,follow`.

Facts and names were adapted from YTAH's public material and supplied source archive. No email address, telephone number, cumulative donation value, appointment, honour, quotation or historical claim has been invented where the available source did not support it.

## Editorial conventions

- On the Legacy page, sentences referring to Tun Abdul Hamid do not begin with the pronoun “He”.
- The current governance heading is **Directors & Trustees**.
- The former visitor-facing **Voting Members** heading and description are not used.
- Historically accurate uses of “Board” are retained where they refer to records, documents or historical governance terminology.

## Deployment

See `DEPLOY-GITHUB.md` for the GitHub Pages and custom-domain cutover procedure.

Before public cutover, verify current programme availability, Directors & Trustees appointments, contact channels and any time-sensitive impact figures against YTAH's internal records. Preserve a complete backup of the existing WordPress site and database before changing DNS.
