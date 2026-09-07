# Commit notes — production launch candidate

Recommended commit message:

`Prepare YTAH redesign for production launch`

## What this commit contains

- Legacy-page editorial rule for references to Tun Abdul Hamid.
- Governance terminology updated to **Directors & Trustees** and removal of visitor-facing Voting Members copy.
- Site-wide editorial, accessibility, responsive and usability refinements.
- Production canonical/social metadata, robots and sitemap files.
- GitHub Pages custom-domain `CNAME`.
- Compatibility routes for selected legacy WordPress URLs.
- Reconciled production documentation and launch checklist.

## Suggested local Git workflow

```bash
git checkout main
git pull origin main
# Copy the contents of this package into the repository root, preserving .git
git status
git diff --check
git add -A
git commit -m "Prepare YTAH redesign for production launch"
git push origin main
```

Do not delete the existing `.git` directory when copying the package into a local clone.
