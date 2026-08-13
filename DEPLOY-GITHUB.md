# Deploy on GitHub Pages

This package is ready to sit at the repository root.

1. Upload all files in this folder to the root of `https://github.com/iskaziz/ytah`.
2. Commit the files to the `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**.
6. Save.

GitHub will publish the site at the repository's Pages URL.

## Important

- Keep `.nojekyll` in the repository root.
- The staging build uses relative paths, so it works both at a project URL such as `/ytah/` and when opened locally.
- Pages contain `noindex,nofollow` while testing. Remove that meta tag from all pages only when the new site becomes the official production site.
- Do not point `ytah.com.my` to GitHub Pages yet; this package is for design/content testing while the existing WordPress site remains live.
