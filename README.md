# atreyadey.com

Personal academic website of Atreya Dey, built with [Astro](https://astro.build).
Static, fast, no client-side JavaScript required (the only interactive elements
are native `<details>` abstract toggles, which work without JS).

## Running locally

Requires Node.js 20+ (installed on this machine via winget).

```bash
npm install       # first time only
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## How to update content

All content lives in three places. You never need to touch layout code.

### Add or edit a paper

Create or edit a Markdown file in `src/content/research/`. The file name
becomes the URL (`birds-eye-view.md` → `/research/birds-eye-view/`).

Frontmatter fields (see existing files for examples):

- `title`, `authors` (list of `{name, url?, affiliation?}`), `status`
  (`Working paper`, `Work in progress`, `Published`, …), `version` (free text,
  e.g. `"Draft: July 2026"`)
- `featured: true` puts the paper in the large homepage block (only one paper
  should be featured at a time)
- `selected: false` hides a paper from the homepage list (it stays on the
  Research page); `order` controls sort order (lower = higher)
- `summary` (short, always visible), `abstract` (behind a toggle)
- `links`: any of `paper`, `ssrn`, `slides`, `appendix`, `code`, `data`
- `awards`, `presentations` (lists), `media` (list of `{label, url}`)
- `image` / `imageAlt` / `imageCaption` for a figure (put the image in
  `src/assets/`; it is compressed and converted to WebP automatically)

The Markdown body below the frontmatter is the "Overview" section of the
paper's own page.

### Update presentations and awards

Edit `src/data/highlights.json` — each entry is `{"year": "...", "text":
"..."}` and items appear in the order listed. (The site had a dated news
system early on; it was removed in July 2026 — see git history if it's
ever wanted back.)

### Update the CV

The CV links point to a Dropbox file, set as `cv.file` in
`src/data/profile.json`. Replace the PDF in Dropbox without changing the
share link (upload a new version of the same file), and update the
`cv.updated` date in `profile.json`. If the share link ever changes, paste
the new URL into `cv.file`.

### Change homepage text, bio, links, email

Edit `src/data/profile.json`. It contains the hero statement, the short bio,
the email address, affiliations, and all profile links.

### Replace the profile photograph

Replace `src/assets/portrait.jpg` (roughly square, at least ~640 px wide).
Astro generates the compressed versions at build time.

### Papers, slides, and other downloadable files

Put PDFs in `public/files/` (slides in `public/files/slides/`) and link to
them as `/files/Whatever.pdf` from paper frontmatter or news items.

## Deployment

Pushing to the `main` branch on GitHub triggers
`.github/workflows/deploy.yml`, which builds the site and publishes it to
GitHub Pages. No manual build step is needed.

One-time setup (see `docs/DOMAIN-MIGRATION.md` for full details):

1. Create a GitHub repository (e.g. `atreyadey/atreyadey.com`) and push this
   folder to it.
2. In the repository: Settings → Pages → Source: **GitHub Actions**.
3. In Settings → Pages → Custom domain, enter `www.atreyadey.com` and enable
   **Enforce HTTPS** (the `public/CNAME` file keeps this setting across
   deploys).
4. Update DNS at Namecheap as described in `docs/DOMAIN-MIGRATION.md`.

## Rolling back a change

Every deploy corresponds to a git commit. To roll back:

```bash
git log --oneline          # find the last good commit
git revert <bad-commit>    # creates a new commit undoing it
git push                   # redeploys automatically
```

(Or use the "Revert" button on the pull request / commit in the GitHub UI.)

## Repository layout

```
src/
  content/research/   one .md file per paper
  content/news/       one .md file per news item
  data/profile.json   name, bio, links, email, CV date
  assets/             images optimized at build time (portrait, figures)
  components/         header, footer, paper entries, news list
  layouts/Base.astro  shared page shell + metadata
  pages/              one file per page/route
public/
  files/              CV, paper PDFs, slides (served as-is at /files/…)
  CNAME               custom-domain marker for GitHub Pages
docs/
  AUDIT.md            content inventory from the old sites
  DOMAIN-MIGRATION.md DNS/deployment runbook
  VERIFICATION.md     items that still need Atreya's confirmation
```
