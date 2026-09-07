# Production deployment — GitHub Pages

This package is structured to deploy from the repository root.

1. Commit the site files to the `main` branch of `https://github.com/iskaziz/ytah`.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select **main** and **/(root)**, then save.
5. Configure the custom domain as **www.ytah.com.my**. The included `CNAME` file preserves this setting.
6. Update the domain DNS only when the redesign is approved for public cutover.
7. After DNS resolves, enable **Enforce HTTPS** in GitHub Pages.
8. Verify `https://www.ytah.com.my/robots.txt` and `https://www.ytah.com.my/sitemap.xml`.

## Before public cutover

- Back up/export the existing WordPress site and database.
- Preserve the old site separately if its historical articles may be required later.
- Confirm legacy URLs listed in the compatibility routes resolve to the intended replacement pages.
- Re-test desktop, tablet and mobile on real browsers.
- Confirm all navigation, archive filters and interactive controls.
- Submit the new sitemap to the Foundation's search-console account after launch, if one is in use.

## Search indexing

The launch candidate now permits indexing and contains canonical URLs, Open Graph metadata, `robots.txt`, and `sitemap.xml`. Do not point the public domain at this build until the redesign is approved. Compatibility redirect pages remain `noindex,follow`.
