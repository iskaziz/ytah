# YTAH 50webs Security Deployment

This security baseline is designed for the current static HTML/CSS/JavaScript YTAH website hosted on 50webs.

## Before uploading

1. Download a full backup of the current live web root using FileZilla.
2. In the 50webs control panel, confirm whether a Let's Encrypt certificate is active for both:
   - ytah.com.my
   - www.ytah.com.my
3. If an existing `.htaccess` file is present, download and preserve it before replacing or merging it.
4. If WordPress is no longer needed, do not leave an old WordPress installation publicly accessible.

## Deploy the baseline

Upload `.htaccess` to the same directory that contains `index.html`.

Immediately check:

- homepage loads
- Governance, Legacy, Our Work, Impact, Archive and Contact load
- images display
- navigation works on desktop/mobile
- `/this-page-does-not-exist` shows the YTAH 404 page
- attempting to browse an asset directory does not show a file listing

If the entire site returns a 500 error after uploading `.htaccess`, rename it temporarily (for example `.htaccess-off`) and restore the previous file. This usually means one Apache directive is restricted on the hosting plan; enable the rules incrementally or use the 50webs `.htaccess` generator/support desk.

## 50webs control-panel security

Enable where available on the account:

- Let's Encrypt SSL certificate
- ModSecurity
- IP blocking only when needed (avoid blocking legitimate visitors)
- DNSSEC if DNS for the domain is managed through a provider that supports it correctly
- account/FTP password that is unique and long

## WordPress cleanup

If WordPress is no longer used for YTAH, remove it after taking a complete backup. In particular, old public copies of these should not remain reachable:

- `/wp-admin/`
- `/wp-login.php`
- `/xmlrpc.php`
- `/wp-content/plugins/`
- `/wp-content/themes/`
- old WordPress PHP files in the site root

Also remove the old WordPress database only after confirming a backup exists and that no other site on the hosting account uses it.

If WordPress is retained in a separate private CMS folder later, remove the `wp-login.php|xmlrpc.php` blocking section from the root `.htaccess` or scope it only to the public static root as appropriate.

## HTTPS phase 2

The supplied `.htaccess` intentionally does NOT force HTTPS yet.

After confirming both domain variants have valid certificates:

1. Uncomment the HTTPS rewrite block.
2. Upload `.htaccess`.
3. Test both `http://ytah.com.my` and `http://www.ytah.com.my`; both should redirect to HTTPS.
4. Check every main page and image.
5. Only after HTTPS has been stable should you consider uncommenting HSTS.

Do not use `includeSubDomains` or `preload` for HSTS unless every relevant subdomain is permanently HTTPS-ready.

## Ongoing operating security

- Keep GitHub as the clean source-of-truth copy.
- Keep at least one offline backup of each deployed release.
- Use FileZilla only from trusted devices/networks.
- Rotate the hosting/FTP password if it has been reused anywhere else.
- Review the 50webs access/error logs periodically for repeated probes or unexplained errors.
- Do not upload ZIPs, SQL dumps, `.env` files, old WordPress backups or staging copies into the public web root.
