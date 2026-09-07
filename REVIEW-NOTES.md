# YTAH redesign review — 7 September 2026

The redesign is worth retaining: forest green, burgundy, serif headings and real foundation photographs give it a consistent institutional identity. The separate programme, governance and history pages are useful. This update refines the existing static site rather than rebuilding it.

## Changes made

- Increased navigation, action labels, biographies and programme body text for readability; improved small-screen header, hero spacing, footer wrapping and caption backgrounds.
- Added visible keyboard focus, active-page semantics, Escape/outside-click menu dismissal, menu state reset and scrollable navigation on short screens.
- Implemented arrow keys, Home/End, roving focus and associated panels for the history tabs. Archive filters now expose their selected state to assistive technology.
- Made content visible by default when JavaScript is unavailable; supplied a no-JavaScript mobile navigation fallback. Motion respects the visitor's reduced-motion preference.
- Added intrinsic image dimensions and asynchronous image decoding.
- Replaced internal implementation copy on Contact and Archive with visitor-facing language. The later launch-readiness pass removed preview wording and enabled indexing on public pages.
- Corrected the 2012 IIUM archive thumbnail using the supplied IMG_2782-With-Tie original, which matches the official story. Removed the 2015 image from the 2011 story rather than implying that it depicted that event.
- Removed the uncertain 2026 CLP photograph from the anniversary page; used the documented Sumita Selvakumar photograph instead. The uncertain asset remains available in the package for later confirmation.
- Changed an archive label from a page-update date to the known event year; labelled the Small Steps programme as ongoing rather than implying a dated event.

## Checks completed

- All 12 HTML pages have one primary heading.
- 306 local HTML links and asset references, plus CSS image references, resolve; local fragment targets were checked.
- JavaScript passes Node syntax validation.
- Inspected a contact sheet of the existing curated images and checked the source media mapping.
- This was a source, content and media review. Source-level responsive, keyboard and accessibility checks were completed. Headless Chromium is present in the workspace but could not complete local-page rendering because its system bus/zygote process does not initialise correctly here; no visual browser certification is claimed.

## Before the public launch

- Supply a preferred public email address or telephone number and the actual bursary enquiry/application process. The current official Contact page provides only the registered address, so no new contact details were invented.
- Confirm current Director and Trustee appointments, programme availability and whether the approximate 170-student figure has changed. The current Awards & Bursaries page supports that figure, but it is not a live counter.
- The 30th anniversary falls on 9 November 2026; the design treats 2026 as the anniversary year.
- Confirm the 2026 CLP photo's event and people before restoring a specific caption.
- Compatibility routes for the identified legacy WordPress URLs are now included. Preserve the existing WordPress installation and database as a backup before public cutover.
- The existing circular YTAH wordmark is a design treatment, not an assertion that it is the approved foundation logo. Confirm preferred official logo usage before launch.

## Official sources checked

- https://ytah.com.my/contact/ — registered address and registration number
- https://ytah.com.my/clp-prize/ — RM10,000 prize and named recipient photographs
- https://ytah.com.my/awards-bursaries/ — approximate 170 students and university award records
- https://ytah.com.my/yayasan-tun-abdul-hamid-sponsors-five-iium-law-students/ — 2012 event and photograph

## Opening the update

Extract the ZIP, open the ytah folder and double-click index.html. This is a static website; Node/npm is not required. Replace the corresponding files in your existing repository when ready. The ZIP omits Git history; keep the .git directory already in your working repository. No changes have been pushed or published to the live website.

## Milestone 2 — editorial and consistency pass

- Reconciled remaining governance terminology across the homepage, Governance page and project notes. The visitor-facing navigation now uses “Directors & Trustees”; historical references to a Board remain where they describe archival records or the foundation's governing documents.
- Removed the remaining sentence-opening “He” reference to Tun Abdul Hamid from the interactive homepage chronology and strengthened the 2006 Legacy chronology wording by naming Tun directly.
- Tightened governance biographies for institutional tone and consistency without adding new biographical claims. Corrected the Aza Izati name inconsistency against the profile heading and source page.
- Changed the governance records subheading from “Board meetings” to “Meeting records” while retaining the historically accurate term “Board meetings” in the explanatory copy.
- Normalised several awkward phrases and capitalisation choices in current leadership profiles.


## Milestone 3 — production readiness

- Removed staging-only preview wording and enabled indexing on public pages while retaining `noindex,follow` on compatibility redirects and `noindex,nofollow` on the 404 page.
- Added canonical URLs, Open Graph/Twitter metadata, homepage Organization structured data, `robots.txt`, `sitemap.xml`, `CNAME`, and launch deployment guidance.
- Added compatibility routes for selected legacy WordPress URLs and removed visitor-facing dependence on the outgoing WordPress site for the main navigation and archive journeys.
- Re-audited media usage: 38 of 39 optimised WebP assets are used; the unverified CLP 2026 image remains intentionally unused pending confirmation.

## Milestone 4 — repository reconciliation

- Reconciled the launch candidate against the public `main` branch state reviewed on 7 September 2026.
- Updated repository documentation so it no longer describes the codebase as a `noindex` staging build or claims that Archive still depends on the outgoing WordPress site.
- Preserved the existing static HTML/CSS/JavaScript architecture and all prior editorial changes.
