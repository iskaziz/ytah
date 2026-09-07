# YTAH public cutover checklist

## Before DNS cutover

- Preserve a complete backup/export of the current WordPress site, database and uploads.
- Confirm current Directors & Trustees appointments with YTAH records.
- Confirm current programme availability and any application/enquiry process.
- Confirm registered contact information and preferred public contact channels.
- Confirm time-sensitive impact figures and 2026 programme captions.
- Confirm official logo/wordmark usage.
- Test the committed GitHub Pages build on desktop, tablet and mobile browsers.
- Test keyboard navigation, mobile menu, timeline tabs and Archive filtering.
- Check all compatibility URLs listed below.

## Legacy compatibility routes

- `/clp-prize/` → `/clp.html`
- `/current-ventures/` → `/work.html`
- `/small-steps/` → `/small-steps.html`
- `/contact/` → `/contact.html`
- `/awards-bursaries/` → `/archive.html`
- `/yayasan-tun-abdul-hamid-sponsors-five-iium-law-students/` → `/archive.html`
- `/yayasan-tun-abdul-hamid-law-scholarship-bursary-awards-2011-presentation-ceremony/` → `/archive.html`

## GitHub Pages

- Deploy `main` from repository root.
- Confirm custom domain `www.ytah.com.my`.
- Update DNS only after the GitHub Pages build has been reviewed.
- Enable Enforce HTTPS once DNS is valid.
- Verify `/robots.txt` and `/sitemap.xml` from the public domain.

## After launch

- Check all primary pages on the public domain.
- Check old bookmarked/search-indexed URLs.
- Check Open Graph preview for the homepage and representative inner pages.
- Submit the new sitemap to the Foundation's search-console account if one is in use.
- Monitor 404s and add further compatibility routes where historically important URLs surface.
