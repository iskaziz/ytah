# YTAH Security Phase 4 — Final Static Hardening

Use this phase only AFTER you have backed up and removed the obsolete WordPress installation.

## 1. Backup first
Before deleting anything:
- Download the complete existing web root via FileZilla.
- Export the old WordPress MySQL database through phpMyAdmin.
- Keep a separate copy of `wp-content/uploads/` for archival material.

## 2. Remove old WordPress files
Typical WordPress items that can be removed once backed up:

Directories:
- wp-admin/
- wp-includes/
- wp-content/

Files:
- wp-login.php
- xmlrpc.php
- wp-config.php
- wp-config-sample.php
- wp-cron.php
- wp-settings.php
- wp-load.php
- wp-blog-header.php
- wp-comments-post.php
- wp-signup.php
- wp-trackback.php
- wp-activate.php
- wp-links-opml.php
- readme.html
- license.txt
- old WordPress `index.php`

IMPORTANT:
Keep the redesigned site's `index.html`.
Do not delete `assets/`, `styles.css`, `script.js`, the HTML pages, redirects, robots.txt, sitemap.xml, or 404.html.

## 3. Database
After confirming the static site works independently:
- retain the SQL export offline;
- remove the old WordPress database and database user if nothing else uses them;
- do not reuse the old database password.

## 4. Upload the Phase 4 `.htaccess`
This version blocks ALL `.php` files in the public web root.

That means if a malicious or forgotten PHP file appears later, Apache will refuse to serve it.

## 5. Verify
Normal pages should work:
- /
- /governance.html
- /legacy.html
- /archive.html
- /clp.html
- /small-steps.html
- /contact.html

Old compatibility URLs should still route correctly.

Security tests:
- /wp-login.php → Forbidden / blocked
- /test.php → Forbidden / blocked
- /something.sql → blocked
- /something.bak → blocked
- a nonexistent normal path → YTAH custom 404
- http://... → redirects to https://...

## 6. Hosting account hardening
Recommended:
- Enable ModSecurity in 50webs.
- Use FTPS/SFTP instead of plain FTP if your account supports it.
- Use a unique strong hosting password.
- Review access/error logs periodically.
- Keep offline backups.
- Keep GitHub as the version-controlled source of truth.

## 7. HSTS
Still leave HSTS disabled for now.
It is not necessary to get most of the security benefit, and it is intentionally deferred until certificate renewal behaviour has been proven stable.
