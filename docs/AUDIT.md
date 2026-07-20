# Content audit (20 July 2026)

## Sources inspected

1. **Live site** `https://www.atreyadey.com/` — Google Sites (www CNAME →
   `ghs.googlehosted.com`), pages: Home, `/bio`, `/research`,
   `/interviews-media`.
2. **Old Hugo/Wowchemy site** `starter-academic/` — Edinburgh-era (PhD
   candidate bio, job-market 2024–25), superseded.
3. **CV PDF** (Dropbox link on the live site, downloaded 20 Jul 2026) — the
   most complete and current source; used as ground truth for titles,
   statuses, awards, presentations, and links (SSRN ids and the PRI YouTube
   URL were extracted from the PDF's embedded hyperlinks).
4. **Local files** — `PhD_Research/Biodiversity/Dey_BirdsEyeView.pdf` (draft
   dated 20 Jul 2026, source of the featured paper's abstract, figure, and
   presentation list), `Temperature_Volatility_Paper.pdf` (coauthors and
   abstract), `DEY_Firm-Operations-…pdf` (abstract), JMP PDF (abstract),
   CERF 2026 slide deck.
5. **Public pages** — Google Scholar profile, JBS profile, Edinburgh news
   article on the PRI award, GitHub profile (exists, no public repos).

## Inventory and disposition

| Content | Source | Disposition |
|---|---|---|
| Name, role, affiliations (JBS, CERF, Trinity Hall) | live site + CV | Migrated (hero, bio, contact, footer) |
| Bio paragraph | live site `/bio` | Rewritten shorter, homepage About |
| Education history | live site + CV | CV page "At a glance" summary |
| Moody's Analytics background | live site + CV | One sentence in bio + CV page |
| Rising Seas paper + SSRN link | live site + CV | Migrated, own page, JMP |
| Volatile Temperatures paper + coauthors | live site + CV + paper PDF | Migrated, own page |
| Firm Operations paper + SSRN link | CV + Scholar + paper PDF | Migrated, own page (was "Toxic Footprints…" on the live site's research page — old working title) |
| Bird's-eye view draft | local PDF (not on the live site yet) | New featured paper, own page, hosted draft |
| Wildfire / manager selection work | CV (Baillie Gifford placement) | Work-in-progress entry, needs confirmation |
| Awards (PRI 2024, GRASFI 2025, AFA/EFA grants, Best Data-Driven 2022, Baillie Gifford scholarship, Moody's Modeller) | CV | Paper-level awards shown on entries + news; the rest stay in the CV |
| PRI video interview | live site + CV YouTube link | Migrated (Rising Seas media link + news item) |
| Presentation lists | CV + paper acknowledgments | On individual paper pages |
| CV PDF | Dropbox link | Self-hosted at `/files/AtreyaDey_CV.pdf` |
| Headshot | old Hugo site `avatar.jpg` (high quality) | Migrated, optimized to WebP |
| Google Scholar / LinkedIn / GitHub / JBS links | live site + old site | Migrated (hero, contact, footer) |
| Twitter/X link | old Hugo site only | Not migrated — confirm (VERIFICATION.md) |
| Old talk pages, 2021–22 news, example widgets | old Hugo site | Archived (superseded; folder untouched) |
| Old URLs `/bio`, `/interviews-media`, `/home` | Google Sites | Redirects configured in `astro.config.mjs` |

## Broken/outdated items found

- Old Hugo site footer/social links and bio describe Edinburgh PhD status —
  outdated, replaced.
- Live site's footer Twitter/LinkedIn icons point at bare `twitter.com` /
  `linkedin.com` (broken template defaults) — fixed with real links.
- Live site apex domain `atreyadey.com` does not resolve (no A record) —
  fixed in the migration plan.
- "Toxic Footprints Near Havens" (live site) vs "Firm Operations, Biodiversity
  Loss, and Corporate Disclosure" (CV/SSRN): same line of work, old vs new
  title; the site uses the CV/SSRN title.

## Reference-site design takeaways applied

- **Maximilian Fuchs** (primary structure): research-first homepage, one
  clearly separated entry per paper with title → coauthors/status → summary →
  labelled links; featured paper with figure.
- **Matilde Faralli** (minimalism): single narrow column, hairline dividers,
  generous whitespace, restrained nav, header/footer symmetry.
- **María José Arteaga Garavito** (news): dated entries with embedded links,
  homepage shows recent items, archive grouped by year.
