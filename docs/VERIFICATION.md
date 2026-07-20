# Items that need Atreya's confirmation

Nothing here is invented — everything on the site comes from the CV, the
current website, the paper PDFs, or public pages. These are the points where
sources were ambiguous, or where a decision is yours to make.

## Decisions to make

1. **Bird's-eye view draft PDF is hosted on the site**
   (`public/files/Dey_BirdsEyeView.pdf`, copied from
   `PhD_Research/Biodiversity/Dey_BirdsEyeView.pdf`, dated 20 July 2026).
   You said the paper will be on SSRN; until then the site links this local
   PDF. If you don't want the draft public yet, delete the file and remove
   the `paper:` link in `src/content/research/birds-eye-view.md` — the page
   still works without it. When it's on SSRN, add
   `ssrn: https://papers.ssrn.com/...` under `links:`.
2. **CERF 2026 slides are hosted** for the Rising Seas paper
   (`public/files/slides/Dey_RisingSeas_CERF2026_Slides.pdf`, from
   `PhD_Research/Biodiversity/Dey_InattentionToTheComingStorm.pdf`). Remove
   the link if you'd rather not share slides.
3. **CV is self-hosted** at `/files/AtreyaDey_CV.pdf` (downloaded from your
   Dropbox link on 20 July 2026) instead of linking Dropbox. Confirm this is
   the current version; "Last updated: July 2026" on the CV page reflects the
   download date, not necessarily the CV's own date.
4. **Twitter/X** (`@atreyadey`, from the old Hugo site) was **not** carried
   over — the current Google Site doesn't link it. Add it to
   `src/data/profile.json` if you still use it. Same question for Bluesky.

## Facts to verify

5. **Volatile Temperatures SSRN link.** Your CV links SSRN id **4023755**;
   your current website's research page links id **5042936** (and Google
   Scholar lists a 2024 CESifo working-paper version). The site currently
   uses the CV's link (4023755). Confirm which is the canonical version.
6. **Wildfires / manager selection project.** Listed as "Work in progress"
   with a placeholder title ("Wildfires and institutional manager
   selection") and a summary based on the Baillie Gifford placement
   description in your CV. Confirm the working title, any coauthors, and the
   description — or hide it by setting `selected: false` / deleting the file.
7. **Approximate news dates** (files marked `approximate: true` show only
   month + year on the site):
   - CERF 25th Anniversary Conference presentation — dated June 2026 from the
     slide file's date; confirm.
   - Cambridge postdoc start — September 2025 (CV says "September, 2025").
   - GRASFI Best PhD Paper — August 2025 (CV says "August, 2025").
   - PhD completion — August 2025 (CV says "August, 2025").
   - AFA poster — early January 2025 (AFA San Francisco meetings).
   - PRI award — October 2024 (conference ran 7–10 Oct 2024, Toronto).
   - PRI interview — dated October 2024; confirm when it was recorded.
8. **"Firm operations, biodiversity loss, and corporate disclosure" has
   merged into the bird paper** (confirmed by Atreya, 20 Jul 2026). The
   standalone entry was removed; the GRASFI 2025 award and the old SSRN link
   (5147761) now appear on the bird paper's page as "earlier version". If
   SSRN ever hosts the new version under the same id, update the link. The
   bird paper's presentations list combines both papers' venues per the
   draft's acknowledgments and the CV.
9. **JFQA/Baruch Climate Finance Conference poster** is listed under Rising
   Seas presentations as "(poster, to be presented)" per the CV — update once
   presented, and consider a news item with the date.
10. **Google Scholar also lists** "Environmental risks in financial markets"
    (University of Edinburgh, 2025 — presumably your thesis). Not shown on
    the site; say the word if you'd like a thesis entry.

## Not migrated (accounted for, intentionally left out)

- Old Hugo site (`starter-academic/`): superseded content — Edinburgh PhD-era
  bio, 2021–22 talk pages, "Surging Seas" paper entry (now Rising Seas, noted
  on its page), demo/example widgets. Nothing else of substance was there.
  The folder is untouched; archive it whenever you like.
- Old site's Dropbox CV link (replaced by the self-hosted PDF).
- Research-assistantship, refereeing, teaching, and conference-organizing
  details: in the CV only, per the research-first design.
- LinkedIn returns HTTP 999 and SSRN HTTP 403 to automated checks — both are
  bot-blocking and load fine in a browser; verified manually where possible.
