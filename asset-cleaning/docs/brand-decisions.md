# Brand decisions

Status: internal AI-assisted prototype (`usage_mode: internal_prototype`). These are design proposals built on the supplied evidence; none has been confirmed by The Bionic Eye.

## 1. Logo

| Decision | Evidence |
| --- | --- |
| Light surfaces use `BionicEyeLogoLargeBlack2.ai`, dark surfaces use `BionicEyeLogoLargeWhite.ai` | The pack supplies exactly these two variants. The brochure (p14, p13) shows the same lockup in black and white. |
| Logo converted to SVG with `pdftocairo`; only the `viewBox` was trimmed to the artwork (+12 pt) | Paths, proportions and fill are unchanged. No redrawing, recolouring or separation of the tagline. |
| Header logo 72 px high at desktop, 54 px on mobile | The supplied lockup is stacked and wide-spaced; at these sizes the wordmark is legible but the tagline "UNMANNED & UNMATCHED" is only about 4 px high. **Needs client input:** a horizontal or small-size lockup for the header, or approval to omit the tagline at small sizes. |

## 2. Colour

**Finding:** The Bionic Eye identity, as supplied, is monochrome. Both logo files use one fill: CMYK 0/0/0/100 (black version) and 0/0/0/0 (white version). The Illustrator swatch list only contains Illustrator's default swatches. The SVG conversion renders the black through the file's colour profile as `rgb(29, 29, 27)` = **#1D1D1B**.

The orange in `C10 Brochure.pdf` and on the drone shell is **ABZ Innovation's** identity (the brochure's "ABZ INNOVATION – WE BUILD DRONES" pages). It is not used as a Bionic Eye colour. It appears on the page only where it exists in the photographs.

| Token | Value | Source | Use | Contrast (measured) |
| --- | --- | --- | --- | --- |
| `--ink` | `#1D1D1B` | **Brand**: logo ink, CMYK 0/0/0/100 | Headings, body text, primary button, system section and footer surfaces, focus ring on light surfaces | 16.88:1 on white; 14.93:1 on stone |
| `--paper` | `#FFFFFF` | Brand (white logo / knock-out) | Header, main surfaces, input fields, text on ink | 16.88:1 on ink |
| `--stone` | `#F1F1EF` | Working UI value (neutral, slightly warm to sit with the ink) | Alternate section surface | n/a |
| `--text-2` | `#5A5A57` | Working UI value | Case-study qualification | 6.92:1 on white, 6.12:1 on stone |
| `--on-ink-2` | `#BDBDB8` | Working UI value | Spec labels, footer text on ink | 8.95:1 on ink |
| `--rule` | `#D2D2CE` | Working UI value | Decorative dividers only | 1.52:1 (decorative, not a control boundary) |
| `--rule-strong` | `#767672` | Working UI value | Input borders | 4.56:1 on white field, 4.03:1 on stone section |
| `--ink-hover` | `#3D3D3A` | Working UI value | Primary button hover | white text 10.90:1 |
| `--focus` | `--ink` on light, `#FFFFFF` on ink | Contrast-tested | 3 px outline, 3 px offset | ≥14.9:1 against every surface used |

No chromatic accent was added. Introducing one would mean inventing a brand colour. If the client has a palette beyond the logo, it should replace this section.

## 3. Typeface

| Decision | Evidence and reasoning |
| --- | --- |
| `Arial, Helvetica, sans-serif` | No font files or licences were supplied. The brief's policy for that case is a local system stack. Nothing is downloaded. |
| Not used: Aileron | Aileron-Light is embedded as a subset inside both logo files (for the tagline), so it is part of the identity. It was not supplied as a font, and its licence for web use wasn't provided. **Proposal for the client:** confirm whether Aileron (or the wordmark face) should be the web typeface. |
| Rendering in this environment | The QA browser resolves Arial to **Liberation Sans** (metric-compatible). Screenshots therefore show Liberation Sans glyphs; on Windows/macOS the page renders in Arial/Helvetica with the same line breaks. |
| One family, two weights (400, 700) | Matches the brief: one family before considering a second. |
| Tabular numerals on spec values | `font-variant-numeric: tabular-nums` (Arial and Liberation Sans figures are tabular by default). |

Type scale (fluid between 390 and 1440 px):

| Role | 390 px | 1440 px | Line height |
| --- | --- | --- | --- |
| H1 | 40 px | 66 px | 1.05, −0.025 em |
| H2 | 30 px | 42 px | 1.08, −0.02 em |
| Lead (supply lead, enquiry paragraph) | 21 px | 27 px | 1.38 |
| Case-study statement | 22 px | 30 px | 1.4 |
| Body | 17 px | 19 px (18 px from 768) | 1.6 |
| Spec values | 21 px | 26 px | 1.25 |
| Labels, qualification, footer | 15 px | 15–16 px | 1.4–1.6 |

Measures are capped at about 36 em for body copy (≈ 65–72 characters).

## 4. Grid and spacing

- Content width 1280 px; gutter `clamp(20px, 5.714vw - 2.29px, 80px)`: 80 px at 1440 and 20 px at 390 (350 px usable).
- 12 columns, gap `clamp(16px, 2.25vw, 32px)` = 32 px at 1440.
- **One shared text line:** every right-hand text column starts at column 7 (x = 736 at 1440): Applications list, system copy and specs, supply copy, regulatory copy, enquiry form. The hero is the deliberate exception: its photograph starts at column 6 and bleeds to the right-hand viewport edge.
- Section padding `clamp(56px, 4.6vw + 38px, 104px)` = 104 px at 1440 and 56 px at 390.
- Radius 6 px on controls, image frames and the product plate; no shadows except the open mobile menu, where it shows elevation.
- Spacing values: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 104.

## 5. Image decisions

| Section | File | Why |
| --- | --- | --- |
| Hero | `C10 3.jpg` | The only supplied image that shows facade, glazing and the drone working together, matching the opening sentence about "facade, glazing, cladding". High resolution allows a right-bleed crop. |
| Applications | Video `5f69a5e2-….MP4` | Real footage of cladding being cleaned from the ground, with soiling and cleaned areas visible. It suits the list ("Industrial silos, tanks and cladding"; facades). It is not placed beside the case-study figures because nothing ties it to those case studies. |
| The system | `C10-2.png` | Clear side view of the product, lance and hose connector. Pure-white studio ground, shown as a white plate in the dark section. |
| What we supply | `IMG_2240.JPG` | Operation from ground level with crew on site; supports the equipment-and-support section without implying training or any specific service. |

## 6. Design plan and self-review (frontend-design skill, two passes)

**Plan.** Colour: ink #1D1D1B, paper #FFFFFF, stone #F1F1EF, text-2 #5A5A57, rule #D2D2CE. Type: one grotesque family, bold headlines with tight tracking, regular body. Layout: a strict 12-column grid with one shared text line; the operational photograph is the single bold move (full-height, bleeding off the right edge); the system section is the one dark panel, laid out like a datasheet beside a product plate. Principles: the photographs bring the colour; the type stays black and plain; structure (rules, label/value rows) appears only where the content is a list or a specification.

**Review against generic defaults, and what changed:**
- A "near-black background with one bright accent" was avoided: there is no accent at all, because the identity has none.
- No eyebrow labels, all-caps labels, numbered markers, arrows on buttons or card grids. The applications are a ruled list, not seven cards.
- First build: the right-hand text columns started on two different grid lines (columns 6 and 7). Changed to a single column-7 line across the page.
- First build: the case-study figures were bold. On screen the paragraph read patchy, and bolding "300 square metres an hour" without "around" risked making the figure look stronger than the source. Emphasis removed; the full statement stays at display size, with its qualification directly beneath.
- Regulatory paragraph: the operator/supplier sentence is bold, because it is the legal distinction the brief asks to keep explicit.
