# YTAH 30th Anniversary Website

Static GitHub Pages staging build for Yayasan Tun Abdul Hamid, 1996–2026.

## Pages

- `index.html` — homepage
- `about.html` — foundation purpose and values
- `work.html` — legal education, academic excellence and partnerships
- `impact.html` — verified public impact indicators
- `legacy.html` — Tun Abdul Hamid Omar and foundation chronology
- `archive.html` — selected stories and links to the existing historical archive
- `governance.html` — current Board, members, advisor, leadership history and meeting records
- `contact.html` — verified registered contact information
- `clp.html` — dedicated CLP Best Overall Student Prize page
- `small-steps.html` — dedicated Small Steps page
- `30-years.html` — 1996–2026 anniversary timeline

## Design system

- `styles.css` contains the complete responsive visual system.
- `script.js` contains mobile navigation, reveal effects, homepage timeline and archive filtering.
- `assets/` contains the locally bundled staging photography and anniversary mark.

## Staging status

This build is intentionally marked `noindex,nofollow` while it is being evaluated on GitHub Pages. It is independent of WordPress and does not modify the current YTAH website.

Facts and names in the staging pages were adapted from YTAH's current public website. The archive page deliberately links selected historical stories back to `ytah.com.my` until the WordPress database is migrated.

No email address, telephone number, cumulative donation value or other data has been invented where the current public site does not provide it.

## Production migration later

1. Export the full WordPress database and `wp-content/uploads` media library.
2. Replace staging images with original-resolution archival files.
3. Verify all 2026 programme status, current Board information and impact figures.
4. Import the full historical post archive.
5. Create a redirect map from old WordPress URLs to the new information architecture.
6. Convert this approved design into the final WordPress theme, retaining WordPress as the CMS.
