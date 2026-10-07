# Requirements audit

**Provenance and eligibility.** This page layout was originated by Claude (AI) in `internal_prototype` mode. The contest's current rules prohibit AI-generated layouts, so **this prototype is not a compliant contest entry and is not contest-ready** (`submission_status: not_submission_ready`). No organiser permission has been given or assumed. Nothing has been submitted, published, deployed or sent to the client or organiser.

## A. Verified prototype outputs

| Output | Path | Verified how |
| --- | --- | --- |
| Static prototype (HTML/CSS + small progressive-enhancement JS) | `dist/` (build with `npm run build`; source in `src/`, `content/`, `config/`) | Built and loaded in Chromium 141 at nine widths |
| Desktop export, **exactly 1440 px wide**, full page | `deliverables/desktop-1440-full-page.png` (1440 × 5829) | `identify`; inspected visually; skip-link leak fixed and re-exported |
| Mobile export, **exactly 390 px wide**: hero + Applications (the next section in the configured order) | `deliverables/mobile-390-hero-and-applications.png` (390 × 2363) | `identify`; inspected; bottom-row bleed fixed |
| Higher-density extras (additional, not replacements) | `deliverables/*@2x.png` (2880 × 11658, 780 × 4726) | `identify` |
| QA evidence | `qa/screenshots/`, `qa/screenshots/report.json`, `qa/last-run.log`, `docs/qa-report.md` | Final run: all checks pass at all widths |
| Asset manifest | `docs/asset-manifest.md` | Every pack file opened and inspected |
| Brand decisions | `docs/brand-decisions.md` | Colour read from the logo's vector fill |
| Source decisions and conflicts | `docs/source-decisions.md` | PDF compared with the brief's appendix; pack discrepancies S-01 to S-04 |
| Skills status | `docs/skills-status.md` | `claude plugin list` after installation |
| Figma construction guide | `docs/figma-handover.md` | Measurements taken from the rendered page |
| Walkthrough outline | `docs/walkthrough-outline.md` | n/a (for the entrant) |
| Typeface/colour note (89 words) | `docs/typeface-colour-note.md` | `wc -w` |

## B. Unresolved organiser and client decisions

| ID | Question | Current provisional setting |
| --- | --- | --- |
| C-01 | Section order: Applications before or after The system? | Announcement order (Applications first) |
| C-02 | Hero button: "Book a demonstration" or "Discuss a requirement"? | "Book a demonstration" |
| C-03 | Keep "Proven in the field" (seventh section)? | Kept |
| AI rule | Will the organiser allow an AI-assisted layout? | Not asked; assume **no** |
| S-01 to S-04 | Spec differences between copy PDF, brochure and datasheet (notably MTOM 29 kg vs 24.9 kg) | Copy PDF followed |
| Links | Destinations for Solutions, Sectors, About Us, How authorisation works; production destination for Support | Unresolved / prototype anchors |
| Logo | Small-size or horizontal lockup for the header? | Supplied stacked lockup, tagline about 4 px |
| Typeface | Is Aileron (embedded in the logo) the brand face, and is it licensed for web? | Arial/Helvetica |
| Imagery | Usage rights and credits for ABZ-supplied photographs; whether captions are wanted | Used without captions |
| Form | Endpoint, validation wording, consent/privacy text, success and error copy | Not built (prototype sends nothing) |
| UI labels | "Skip to content", hidden "Menu" and "Enquiry", alt texts, video label, page title | Added for accessibility; need approval |

## C. Missing contest deliverables

| # | Deliverable | Status |
| --- | --- | --- |
| 1 | Full desktop page at 1440 px (PNG/PDF) | Produced **for the internal prototype only**; not eligible as a contest entry because the layout is AI-originated |
| 2 | Mobile hero + one further section at 390 px | Produced, same caveat |
| 3 | **Real view link to a Figma file** | **Missing.** No Figma integration in this session; none fabricated. The entrant must create it; for a compliant entry, from their own design |
| 4 | **2–3 minute screen recording in the entrant's own voice** | **Missing.** Only the entrant can make it; outline provided |
| 5 | Typeface/colour note (≤ 100 words) | Drafted (89 words) for this prototype; the entrant must rewrite it for their own design |

## D. Section 21 checklist, filled with evidence

### Sources and content
- [x] Actual copy PDF inspected; differences from the brief recorded: none in wording, spec-table layout only (`source-decisions.md`).
- [x] Actual `bionics_` assets inspected (PART1 and PART2) and manifest completed (`asset-manifest.md`).
- [x] Main brand logo and colour source verified: `BionicEyeLogoLargeBlack2.ai`, single fill CMYK 0/0/0/100 → #1D1D1B.
- [x] No invented image filename, external photography or AI-generated visual asset. All images trace to pack files; derivatives are resize/convert only.
- [x] Hero and limitation paragraph complete and verbatim (automated check at nine widths).
- [x] All seven supplied application items present.
- [x] Both system paragraphs and five specification rows present, with "Over", "Up to", "Around" intact.
- [x] Additional training and optional enhanced warranty presented as written (no "included" framing, no extra headings).
- [x] All regulatory copy and the operator/supplier distinction preserved (that sentence in bold).
- [x] Case-study source and output qualification visible directly beneath the statement at every width.
- [x] All five enquiry labels and the complete footer present.
- [x] C-01, C-02, C-03 recorded, with no claim of confirmation.

### Design and interaction
- [x] Desktop inspected at 1440 and mobile at 390 (screenshots reviewed section by section).
- [x] Additional widths (1280, 1024, 768, 720, 640, 360, 320) checked: no overflow, no clipping.
- [x] Photo focal points verified in desktop and mobile crops (hero 64%/40% desktop, 62%/35% mobile; drone, spray and glazing kept).
- [x] Type, measures and section spacing coherent; one shared column-7 text line.
- [x] Specifications readable without horizontal scrolling at 320.
- [x] Navigation and CTA destinations accurate (anchors tested) or explicitly unresolved (`source-decisions.md`).
- [x] Mobile menu usable with keyboard; Escape closes it and focus returns to the button.
- [x] Form labels, input types, autocomplete and focus states correct.
- [x] No false delivery message; no data transmitted (0 requests on submit; no field names, no action).
- [x] Contrast (lowest text 6.92:1), 200% zoom (720/640), reduced motion (0 s transitions, no smooth scroll) checked.
- [x] Build/check results and console findings recorded (0 errors, 0 warnings, 0 failed requests).

### Deliverables and provenance
- [x] Exact-width 1440 desktop export produced and inspected.
- [x] Exact-width 390 mobile hero + one further section export produced and inspected.
- [ ] Editable Figma source and real view link: **reported missing**.
- [ ] Human-voice walkthrough recorded by the entrant: **reported missing**.
- [x] Typeface/colour note reflects actual choices; 89 words.
- [x] Icon set: **none used.** The menu bars and X are CSS; there are no icon fonts or SVG icon libraries.
- [x] AI involvement and current contest ineligibility stated (here, in the HTML comment and in the README).
- [x] WordPress feasibility reviewed (below) without building the wider site.
- [x] No publication, submission or client message performed.

## E. WordPress feasibility (later build; nothing built here)

| Page element | Prototype source | Practical WordPress approach |
| --- | --- | --- |
| Header / footer | `header()`, `footer()` in `scripts/build.mjs` | Theme template parts; menus from Appearance → Menus once destinations are confirmed; footer address and statements as editable fields or a synced pattern |
| Hero | `content.hero` | Group block: Heading (H1), two Paragraphs, Buttons; Image with focal point set (block editor "focal point" matches `object-position`) |
| Applications | `content.applications` | List block (7 items) styled as ruled rows; Video block with poster and no autoplay |
| The system | `content.system` | Paragraph group plus a five-row label/value structure: a Details/Definition-list pattern or ACF repeater (label, value) rendered as `<dl>` |
| What we supply / Regulatory / Proven | `content.supply`, `content.regulation`, `content.proven` | Columns blocks with locked patterns so editors change text but not structure |
| Enquiry | `content.enquiry` | Form plugin with the five labels, `autocomplete` attributes, approved validation and confirmation copy, spam protection and privacy notice |
| Design tokens | `:root` in `src/styles.css` | `theme.json` palette (Ink, Paper, Stone, …), font family, fluid font sizes and spacing scale |
| Section order (C-01) | `config/prototype.json` | Reorder blocks in the page; no code change |

The CSS uses no framework and no build step beyond copying files, so it ports to a block theme's stylesheet directly. Template count and the other 26 pages are out of scope.
