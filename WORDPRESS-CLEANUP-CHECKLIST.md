# YTAH Security Phase 3 — WordPress/PHP Cleanup

## Goal

The live YTAH site is now static HTML/CSS/JS. WordPress is no longer required to serve it.
This phase reduces the attack surface left behind by the former WordPress installation.

## Before deleting anything

1. Download a complete copy of the current server web root with FileZilla.
2. Export the old WordPress MySQL database using phpMyAdmin.
3. Keep both backups offline.
4. Confirm the new static site's Archive, CLP, Small Steps and compatibility URLs work.
5. Confirm no current page references files from old `wp-content/uploads/...` paths.

## Files/folders that normally belong to WordPress

If present in the same web root, these are candidates for removal AFTER backup:

- wp-admin/
- wp-includes/
- wp-content/
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
- index.php (ONLY if this is the old WordPress index.php; do not remove your new index.html)
- readme.html
- license.txt

## Important exception: old uploaded media

Do NOT immediately delete `wp-content/uploads/` if the old site contains historical photographs or documents that were not copied into the redesign.

First download/archive the whole uploads directory. Compare it with the site's current `assets/` directory and media archive.

## Database cleanup

Once WordPress files are removed and you have confirmed the static site is independent:

1. Export the WordPress database.
2. Store the SQL export offline.
3. Remove the WordPress database/user from the 50webs control panel if nothing else uses it.
4. Never reuse the old database password elsewhere.

## PHP

The supplied `.htaccess` blocks the main WordPress attack endpoints while still allowing PHP generally.

After WordPress is fully removed and you confirm the YTAH site uses no PHP, you may enable the stronger "block ALL PHP" section in `.htaccess`.

That is preferable for a purely static deployment because a stray uploaded `.php` file then cannot execute through the public web root.

## 50webs control-panel hardening

Where available on your hosting plan:

- Enable ModSecurity.
- Review IP Blocking only for known abusive addresses; do not block broad geographic ranges casually.
- Enable/retain Let's Encrypt SSL.
- Review Access Logs and Error Logs periodically.
- Use automated or browsable backups.
- Enable DNSSEC if the domain/DNS configuration supports it and you are comfortable managing DS records.
- Avoid adding password protection to the public site itself; use it only for private directories.

## File permissions

Typical safe values on shared hosting are:

- directories: 755
- static files: 644
- `.htaccess`: 644

Do not use 777 permissions.

## FTP security

If 50webs offers FTPS/SFTP for your plan, use it instead of plain FTP.
Keep the hosting password unique and change it if it has been reused elsewhere.

## Verification after cleanup

Check:
- homepage
- governance.html
- legacy.html
- archive.html
- clp.html
- small-steps.html
- contact.html
- old compatibility URLs
- custom 404 page
- HTTP → HTTPS redirects
- images/styles/scripts

Then test:
- /wp-login.php → should return Forbidden
- /xmlrpc.php → should return Forbidden
- /wp-admin/ → should return Forbidden
- a made-up `.sql` or `.bak` path → should not be downloadable

## Do not enable HSTS yet

Keep HSTS disabled until HTTPS has remained stable for an extended period and you are confident certificate renewal is functioning correctly.
