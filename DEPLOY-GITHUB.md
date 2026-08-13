# Publish this prototype on GitHub Pages

This package is ready to publish as a **GitHub Pages project site**. No build step, WordPress, PHP, Node.js or database is required.

## Option A — easiest: upload through the GitHub website

1. Create a new GitHub repository, for example `ytah-30-prototype`.
2. Keep the repository **Public** if your GitHub plan requires public repositories for Pages.
3. Open the new repository and choose **Add file → Upload files**.
4. Upload the **contents of this folder** so that `index.html` is at the repository root. Do not upload the enclosing folder as a single nested directory.
5. Commit the files to the `main` branch.
6. Open **Settings → Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**.
8. Select branch `main` and folder `/ (root)`, then save.
9. GitHub will publish the site at a URL similar to:
   `https://YOUR-USERNAME.github.io/ytah-30-prototype/`

## Option B — Git command line

```bash
git init
git add .
git commit -m "YTAH 30th anniversary prototype"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ytah-30-prototype.git
git push -u origin main
```

Then enable GitHub Pages from **Settings → Pages → Deploy from a branch → main → /(root)**.

## Important notes

- The site uses **relative file paths**, so it works correctly on a GitHub Pages project URL such as `/ytah-30-prototype/`.
- `.nojekyll` is included so GitHub serves the static files directly without Jekyll processing.
- The prototype currently includes `noindex,nofollow` so search engines should not treat this test build as the official YTAH site. Remove that meta tag only when deploying a production website.
- Links labelled as archive/current-site links intentionally open the existing `ytah.com.my` pages in a new tab.
- The YTAH header mark is still a prototype typographic mark rather than the final original-resolution logo.
- Do not point `www.ytah.com.my` at GitHub Pages yet. Test and approve the staging version first.

## Updating the prototype

Replace any file in the repository and commit the change. GitHub Pages republishes from the `main` branch automatically.
