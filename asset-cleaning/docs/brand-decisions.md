# Brand decisions (V2, "Operational precision")

Status: internal AI-assisted prototype. V2 (`sources/BIONIC_EYE_ASSET_CLEANING_REDESIGN_V2.md`) replaces the V1 monochrome direction entirely. V1 remains in git history (commit `7a1823a`).

## 1. Evidence for the brand baseline

| Decision | Source | Verified here? |
| --- | --- | --- |
| Graphite `#29333C`, cyan `#00BFF3`, Titillium Web | V2 brief §2: observed by the brief's author on the live homepage (computed styles) | **No.** `www.thebioniceye.co.uk` is blocked by this environment's egress policy (proxy 403, recorded in the proxy's failure log). The values are used as V2 instructs, as an observed baseline, not as an official brand manual. |
| `#112634`, `#F3F7F9`, `#54636F`, `#E0E8ED`, `#00758F`, `#7B8B98` | V2 §2 and §5: proposed interface extensions | n/a (proposals) |
| Logo artwork | Supplied `BionicEyeLogoLargeBlack2.ai` / `BionicEyeLogoLargeWhite.ai` → SVG (V1 process: only the `viewBox` trimmed to the artwork; fills untouched) | Yes |
| V1 finding still true | The supplied logo files are single-ink (CMYK 0/0/0/100 and white). The pack contains no colour guide; cyan and graphite come only from V2's website observation. | Yes |

V2 cautions that the live site's wordmark is not interchangeable with the supplied eye-logo artwork. Only the supplied artwork is used.

## 2. Typeface

| Item | Decision |
| --- | --- |
| Family | Titillium Web, self-hosted |
| Source | Official Google Fonts repository, `github.com/google/fonts`, path `ofl/titilliumweb`, commit `5e8a3ba899557829a76cfdac30fa512bda91d7ca` (7 Oct 2026), fetched by sparse `git clone` |
| Licence | SIL Open Font License 1.1 (`assets/fonts/titillium-web/OFL.txt`, shipped with the fonts); copyright Accademia di Belle Arti di Urbino; no Reserved Font Name declared |
| Weights shipped | 400, 600, 700 only (V2 §5). The TTF masters stay in the repository; the page loads lossless WOFF2 wrappers of the full glyph set (456 glyphs each, `fontTools`), and preloads 400 and 700. |
| Verification | QA checks `document.fonts` for all three faces as `loaded`, and `document.fonts.check()` at every tested width before any capture (V2 §16: "do not export the fallback font") |

Type scale (fluid between the 390 and 1440 references):

| Role | 1440 | 390 | Weight |
| --- | --- | --- | --- |
| Hero H1 | 72 / 75.6 | 40 / 42 (V2: 42; 2 px optical adjustment so the headline sets in three lines in 350 px) | 700, −0.02 em |
| H2 | 48 / 53 | 34 / 38 | 700, −0.01 em |
| Regulation panel H2 | 38 / 43 | 30 / 34 | 700 |
| Service lead, enquiry introduction | 28 / 37 | 24 / 32 | 600 |
| Body | 18 / 28 | 17 / 27 | 400 |
| Applications entry | 21 / 29 | 20 / 28 | 600 |
| Specification numeral | 48 / 52 | 38 / 41 | 700, tabular lining figures |
| Secondary figure (`255`, `Radar,`) | 34 | 28 | 700 |
| Qualifier and unit | 22 / 29 | 19 / 25 | 600 |
| Specification label | 15 / 21 | 15 / 21 | 600 |
| Navigation, form label | 16 / 22 | 16 / 22 | 600 |
| CTA | 17 / 22 | 17 / 22 | 600 |
| Evidence figure | 60 | 44 | 700 |
| Legal / qualification | 15 / 23 (company line 14 / 22) | same | 400 |

## 3. Colour roles and measured contrast

| Pair | Ratio | Use |
| --- | --- | --- |
| Ink `#112634` on cyan `#00BFF3` | 7.22:1 | All primary CTAs (never white on cyan, which is 2.15:1) |
| Ink on cyan hover `#5AD6F7` | 9.18:1 | CTA hover (a lighter cyan step; proposal) |
| White on graphite `#29333C` | 12.86:1 | Mobile hero, regulation panel, footer headings |
| `#C9D4DC` on graphite | 8.53:1 | Footer body text (proposal) |
| Cyan on graphite | 5.97:1 | Footer links, outline button on the regulation panel |
| Ink on white / on `#F3F7F9` | 15.55:1 / 14.42:1 | Body text |
| `#54636F` on white / on `#F3F7F9` | 6.19:1 / 5.75:1 | Labels, qualification |
| `#00758F` on white / on `#F3F7F9` | 5.33:1 / 4.94:1 | Focus ring and hover links on light surfaces |
| `#7B8B98` control border on white | 3.51:1 | Form field boundaries (WCAG 1.4.11 needs 3:1) |
| Cyan on white | 2.15:1 | Decorative rule only (top of the applications matrix) |

Hero text over the photograph is measured separately, from pixels: see `docs/qa-report.md`.

Cyan appears only in purposeful places: the CTAs, the applications matrix rule, the play control, the regulation panel's button, focus rings on dark surfaces and the footer links.

## 4. Grid

- `.wrap` = `min(1296px, 100% − 2 × gutter)`. Gutter tokens: 20 px (< 640), 28 (≥ 640), 32 (≥ 768), 40 (≥ 1024), 48 (≥ 1280). At 1440 the 1296 px cap leaves exactly 72 px either side; at 390 the content is 350 px.
- 12 columns with 24 px gaps at 1440 (column 86 px). Splits: applications 8 + 4 columns; system plate 58 % / 42 % with a 56 px gap; support 5 fr / 7 fr with 56 px; enquiry 5 fr / 7 fr with 64 px.
- Radii: 6 px buttons, 8 px inputs and the qualified applications entry, 16 px panels and contained photographs. The hero and full-width sections have square edges.

## 5. Image decisions

| Section | File | Crop | Why |
| --- | --- | --- | --- |
| Hero | `C10 3.jpg` (6000 × 3376) | Desktop ≥ 1200 px: full-bleed, image zoomed to 125 % and anchored top-left, so the drone (≈ 72 % across) and jet sit right of the 636 px text column from 1200 to 1920 px. Mobile/tablet: full-width in-flow photo 250–480 px tall, focal 58 % / 30 % | The only supplied image combining drone, jet and glazed facade. Below 1200 px the overlay composition would put the jet behind the text, so the stacked V2 mobile composition is used |
| Applications | Frame at 1.0 s of `5f69a5e2-….MP4` (720 × 1280) | 3:4 window, focal 50 % / 40 % | Chosen from 77 candidate frames by sharpness score and visual review: whole drone, visible jet, soiling and cleaned areas |
| The system | `C10-2.png` cropped to product bounds + 360 px (7704 × 3520) | Uncropped within the plate (`width: 100%`) | Whole silhouette; the crop removes empty studio space, the corner vignette and a thin grey line on the original's top and left edges, so the white ground matches the white plate |
| What we supply | `IMG_2240.JPG` (fallback named by V2; the van footage it prefers is not in the pack) | 3:2 desktop, 4:3 mobile, centred | Real operation from ground level; no caption, no claim about training or case studies |
