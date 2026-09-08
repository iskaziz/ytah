# YTAH 50webs Security — Phase 2: HTTPS Enforcement

This package enables a reversible HTTP → HTTPS redirect.

## Before uploading
1. In a browser, manually open:
   - https://www.ytah.com.my/
   - https://ytah.com.my/
2. Both should load without a browser certificate warning.
3. Download a backup of the currently working `.htaccess` from FileZilla.

## Deploy
Upload the `.htaccess` in this package to the same directory as the live `index.html`, replacing the existing one.

## Verify immediately
Check:
- http://www.ytah.com.my/ redirects to https://www.ytah.com.my/
- http://ytah.com.my/ redirects to https://ytah.com.my/
- Governance, Legacy, Archive and Contact still load
- images, CSS and navigation still work
- a fake path such as `/nothing-here-test` still shows the custom 404

## Rollback
If HTTPS fails or a certificate warning appears, restore the previous `.htaccess` backup through FileZilla.

## HSTS
HSTS is deliberately NOT enabled yet. It is difficult for visitors to recover from a bad HSTS deployment. Enable it only after both HTTPS hostnames and redirects have worked reliably.
