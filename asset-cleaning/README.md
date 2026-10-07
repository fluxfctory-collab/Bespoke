# The Bionic Eye: Asset Cleaning page (internal prototype)

> **AI-assisted internal prototype. Not a contest submission.** The layout was originated with Claude. The contest currently prohibits AI-generated layouts, so this work must not be entered, or described as human-designed, without the organiser's written permission. Nothing has been published or submitted.

A responsive, enquiry-led page presenting the ABZ Innovation C10 for The Bionic Eye. It uses only the supplied `bionics_` pack and the verbatim copy from `sources/Asset_Cleaning_Contest_Copy.pdf`.

## Run it

```bash
cd asset-cleaning
npm run assets   # optional: rebuild web images and video from ../Nouveau dossier/bionics_PART*.zip
npm run build    # writes dist/
npm run serve    # http://127.0.0.1:4173/
```

No dependencies to install (Node ≥ 20). QA uses Python Playwright: `python qa/qa.py --out qa/screenshots --export deliverables` with the server running.

## Change the provisional decisions

Edit `config/prototype.json`, then `npm run build`:

- `section_order`: `"announcement"` (Applications before The system) or `"pdf"` (C-01)
- `hero_cta`: `"Book a demonstration"` or `"Discuss a requirement"` (C-02)
- `include_proven_in_field`: `true` / `false` (C-03)

## Layout of this folder

| Path | What |
| --- | --- |
| `content/page.json` | Page copy (verbatim, with source references) and image metadata |
| `config/prototype.json` | Usage mode and the C-01 to C-03 switches |
| `src/` | `styles.css`, `page.js` (menu and form guard only) |
| `scripts/` | `build.mjs`, `serve.mjs`, `prepare-assets.sh` |
| `assets/` | Web derivatives of supplied files (logos as SVG, resized photos, re-encoded video) |
| `sources/` | The copy PDF, its extracted text, and the design brief |
| `deliverables/` | 1440 px full-page and 390 px hero + Applications PNG exports (plus @2x extras) |
| `qa/` | QA script, screenshots at nine widths, JSON report, last run log |
| `docs/` | Asset manifest, brand decisions, source decisions, skills status, QA report, Figma guide, walkthrough outline, typeface/colour note, requirements audit |

`source-pack/` (extracted originals) and `dist/` are git-ignored.

## What is still missing for the contest

The Figma file and view link, and the entrant's own voice walkthrough. See `docs/requirements-audit.md`.
