# Items that need Atreya's confirmation

Nothing here is invented — everything on the site comes from the CV, the
current website, the paper PDFs, or public pages. These are the points where
sources were ambiguous, or where a decision is yours to make.

## Decisions to make

1. ~~Bird's-eye view draft PDF~~ **Resolved (20 Jul 2026): not linked.** The
   draft PDF was removed from the site and from git history; the paper page
   says the draft is available on request. When it's on SSRN, add
   `ssrn: https://papers.ssrn.com/...` under `links:` in
   `src/content/research/birds-eye-view.md`.
2. ~~CERF 2026 slides~~ **Resolved (20 Jul 2026): not included.** Removed
   from the site and git history.
3. ~~CV hosting~~ **Resolved (20 Jul 2026):** CV links to Atreya's Dropbox
   (set in `src/data/profile.json`); the local copy was removed.
4. ~~Twitter/X~~ **Resolved (20 Jul 2026): not linked.**

## Facts to verify

5. ~~Volatile Temperatures SSRN link~~ **Resolved (20 Jul 2026):** Atreya
   confirmed https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4023755,
   which is what the site uses.
6. ~~Wildfires / manager selection project~~ **Resolved (20 Jul 2026): not
   shown on the site yet** per Atreya. The entry was removed; recreate
   `src/content/research/wildfires-manager-selection.md` when the project is
   ready to announce.
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
