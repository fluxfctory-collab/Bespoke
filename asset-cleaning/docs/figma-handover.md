# Figma handover (manual construction guide)

## Status: the mandatory Figma link has NOT been produced

- This session has no Figma integration. A tool search for Figma found none. The `DesignSync` tool only syncs claude.ai design-system projects and is not a Figma connector. No Figma file, file ID or view link exists, and none is quoted anywhere in this project.
- **Provenance:** this layout was originated with AI assistance. Rebuilding it in Figma does not change that: under the contest's current rules it would still be an AI-generated layout. Use this guide for an **internal** Figma reference only, unless the organiser gives written permission. A human entrant preparing a compliant submission should design independently, not trace this prototype.
- Do not import the PNG exports into Figma and present them as editable design. If they are placed in Figma for reference, label them "Screenshot of AI-assisted prototype".

## File structure

| Page | Contents |
| --- | --- |
| 0 Brief and decisions | Copy of `docs/source-decisions.md` C-01 to C-03 (marked unresolved), S-01 to S-04, unresolved links |
| 1 Foundations | Colour styles, text styles, grid styles, spacing variables, logo usage |
| 2 Components | The components listed below, with variants |
| 3 Desktop 1440 | One frame, full page |
| 4 Mobile 390 | Hero + Applications frame (required), plus optional full-page frame |
| 5 Notes | Interaction notes, responsive notes, production gaps |

## Foundations

**Colour styles** (from `docs/brand-decisions.md`):

| Style | Hex | Note |
| --- | --- | --- |
| Brand/Ink | #1D1D1B | Logo ink, CMYK 0/0/0/100 |
| Brand/Paper | #FFFFFF | |
| UI/Stone | #F1F1EF | Working value |
| UI/Text secondary | #5A5A57 | Working value |
| UI/On ink secondary | #BDBDB8 | Working value |
| UI/Rule | #D2D2CE | Decorative only |
| UI/Field border | #767672 | Control boundary |
| UI/Ink hover | #3D3D3A | Button hover |
| UI/On ink rule | #FFFFFF at 26% | On ink surfaces |

**Text styles.** Family: Arial (Helvetica on macOS). Do not substitute a downloaded font.

| Style | Desktop | Mobile |
| --- | --- | --- |
| Display/H1 | Bold 66 / 69, tracking −2.5% | Bold 40 / 42, −2.5% |
| Heading/H2 | Bold 42 / 45, −2% | Bold 30 / 32, −2% |
| Lead | Regular 27 / 37, −1% | Regular 21 / 29, −1% |
| Statement | Regular 30 / 42, −1% | Regular 22 / 31, −1% |
| Body | Regular 19 / 30 | Regular 17 / 27 |
| List item | Regular 22 / 29 | Regular 19 / 25 |
| Spec value | Regular 26 / 32.5 | Regular 21 / 26 |
| Label | Bold 15 / 19.5 (form); Regular 15 / 21 (spec) | same |
| Small | Regular 15–16 / 24 | Regular 15 / 23 |
| Button | Bold 16 / 19 | same |
| Nav | Regular 16 / 20 | Regular 18 / 22 (open menu) |

**Grids.**
- Desktop: 12 columns, width 1280, gutter 32, margin 80, centred.
- Mobile: 1 column, margin 20 (350 usable).
- Optional 768 grid: 1 column, margin ≈ 42 (fluid).

**Spacing variables:** 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 104. Section padding is 104 desktop and 56 mobile.

**Radius:** 6 on buttons, fields, video, photo frames and the product plate. **Effects:** one drop shadow, used only on the open mobile menu (y 12, blur 24, Ink at 12%).

**Logo:** place the supplied SVGs (`assets/logo/bionic-eye-logo-black.svg` on light, `-white.svg` on ink) as vectors. Do not recolour, outline-edit or separate the tagline.

## Components (Auto Layout)

| Component | Structure | Variants / states |
| --- | --- | --- |
| Button | Horizontal Auto Layout, padding 0 × 28, height 52, radius 6, stroke 2 | Primary (Ink fill, Paper text) / Secondary (no fill, Ink stroke and text) × Default / Hover (Ink hover; secondary fills Ink) / Focus (3 px Ink outline, 3 px offset; Paper outline on ink) / Pressed (y + 1) |
| Nav link | Text only, padding 12 vertical | Default / Hover (underline) / Focus / Unresolved (same look, annotated "no destination") |
| Header / Desktop | Frame 1440 × 104 + 1 px bottom Rule; logo 117 × 72 at x 80; nav gap 32, right edge at 1360 | n/a |
| Header / Mobile | Frame 390 × 76 + 1 px Rule; logo 88 × 54 at x 20; menu button 48 × 48 (three 24 × 2 bars, 8 apart) | Closed / Open (bars become X) |
| Mobile menu panel | Full-width Paper panel under the header, rows 52 high, 18 px text, Rule between rows, shadow | Closed (hidden) / Open |
| Application row | Text, padding 22 vertical (16 mobile), top Rule | n/a |
| Spec row | Vertical stack: label (On-ink secondary 15) + value (Paper 26), padding 18 vertical, top On-ink rule; first row's rule in Paper | n/a |
| Form field | Label (Bold 15) 8 above a field 52 high (textarea 168), Paper fill, Field-border stroke 1, radius 6, padding 12 × 14 | Default / Hover (Ink stroke) / Focus (Ink stroke + 3 px Ink outline, 1 px offset) / Filled |
| Footer | Ink surface; 12-column layout as below | Desktop / Mobile |

## Desktop frame 1440 (measured from the prototype)

Total height 5829. Positions are x, y, w × h.

| Section | Frame | Contents |
| --- | --- | --- |
| Header | 0, 0, 1440 × 105 | as component |
| Hero (Paper) | 0, 105, 1440 × 854 | H1 at 80, 176, 989 × 139 (two lines, balanced). Copy at 80, 365, 515 wide (cols 1–5). Primary button at 80, 629. Photo `hero-facade` at 627, 365, 813 × 490 (cols 6–12, bleeds to the right edge), fill crop centred on 64% / 40%, left corners radius 6 |
| Applications (Stone) | 0, 959, 1440 × 929 | Video poster 189, 1063, 405 × 721 (cols 2–5, 9:16, radius 6). H2 at 736, 1063; list rows 624 wide from y 1148, each 74 high |
| The system (Ink) | 0, 1887, 1440 × 996 | H2 80, 1991; copy 736, 1991, 624 wide (Paper text); product plate (Paper fill, radius 6) 80, 2309, 624 × 416 containing `c10-side` uncropped; specs 736, 2309, 624 × 470 (five rows) |
| What we supply (Paper) | 0, 2883, 1440 × 687 | H2 80, 2987; photo `field-cladding` 80, 3080, 515 × 386 (4:3, radius 6); lead 736, 2987; paragraphs 2 and 3 each with a top Rule, 24 above and below |
| Regulatory position (Stone) | 0, 3570, 1440 × 615 | H2 80, 3674; copy 736, 3674, 624 wide; first sentence of paragraph 2 in Bold; secondary button 736, 4029 |
| Proven in the field (Paper) | 0, 4185, 1440 × 573 | H2 80, 4289; statement 80, 4375, 1019 wide; qualification 80, 4604, 640 wide, directly beneath |
| Enquiry (Stone) | 0, 4758, 1440 × 683 | Lead 80, 4862, 515 wide; form 736, 4862, 624 wide: two 300-wide fields per row (gap 24 × 20), textarea full width, button 736, 5285 |
| Footer (Ink) | 0, 5441, 1440 × 388 | Logo 80, 5521, 143 × 88; contact 408 (cols 4–6); brands 736 (cols 7–8); authorisation 955 (cols 9–12); company line 80, 5724 with top On-ink rule |

## Mobile frame 390: hero + Applications (the required export)

Height 2363.

| Element | Frame |
| --- | --- |
| Header | 0, 0, 390 × 77 |
| H1 | 20, 117, 350 wide (four lines) |
| Hero copy | 20, 309, 350 wide; button 20, 630, 229 × 52 |
| Hero photo | 0, 722, 390 × 293 (4:3, full bleed, crop centred on 62% / 35%) |
| Applications (Stone) | 0, 1070, 390 × 1293; H2 20, 1126; rows from 1191; video 20, 1685, 350 × 622 |

The remaining mobile sections stack in DOM order with 56 padding; positions are in `docs/qa-report.md` and `qa/screenshots/full-390.png`.

## Interaction notes to annotate

- Hero button scrolls to the enquiry section (C-02: label provisional).
- Mobile menu: disclosure, Escape closes, focus returns to the button, link click closes.
- Video: user-started only, native controls, no autoplay.
- Form: prototype does not submit. Production needs an endpoint, validation, success/error copy and privacy text, all client-approved.
- Unresolved destinations: Solutions, Sectors, About Us, How authorisation works.

## Still missing for the contest

1. A real Figma file and view link, which only the entrant can create (and under the AI rule it should be their own design).
2. The entrant's own 2–3 minute voice walkthrough (outline in `docs/walkthrough-outline.md`).
