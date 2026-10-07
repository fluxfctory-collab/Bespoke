# The Bionic Eye — Asset Cleaning

## Detailed design direction, implementation brief and Claude Code prompt

Prepared: 7 October 2026. Language of the website: British English.

**دليل الاستخدام:** ضع هذا الملف بجانب حزمة `bionics_` وملف `Asset_Cleaning_Contest_Copy` في مشروعك، ثم استخدم البرومبت الكامل في القسم 20. التفاصيل هنا باللغة الإنجليزية لتكون مباشرة وواضحة لـClaude Code.

**تنبيه:** شروط المسابقة الحالية تمنع التخطيطات المولّدة بالذكاء الاصطناعي. تنفيذ هذا التوجيه بواسطة Claude لإنشاء الواجهة ينتج نموذجًا بمساعدة الذكاء الاصطناعي، ولا يجوز وصفه بأنه مشاركة مطابقة لهذه الشروط دون إذن واضح من صاحب المسابقة. لن يُحلّ هذا التعارض بمجرد نقل التصميم إلى Figma.

---

## 1. Purpose and working status

Create an exceptional, original, responsive Asset Cleaning page for The Bionic Eye, presenting the ABZ Innovation C10 to professional cleaning businesses and facilities companies.

This document describes a proposed design direction. It is not evidence that the client's visual identity or photographs have already been inspected. The `bionics_` pack was not available to inspect when this document was prepared. The supplied two-page `Asset_Cleaning_Contest_Copy(1).pdf` was read in full.

The design should help a prospective operator answer five practical questions:

1. Does this system address the surfaces and sites we work on?
2. What are its capabilities and practical limitations?
3. What equipment, training and continuing support can the supplier provide?
4. What does the supplied copy say about operating authorisation?
5. How do we discuss our own sites before committing?

The page is an enquiry-led B2B product and service presentation. The header includes a link to the client's separate online shop; this page does not need a shopping cart, checkout or product pricing.

### Two distinct usage modes

| Mode | Permitted work within this brief | Status |
| --- | --- | --- |
| `internal_prototype` | Produce an AI-assisted local website prototype using this direction, inspect it, and document its provenance. This is the default mode for the requested Claude workflow. | Not compliant with the contest's current ban on AI-generated layouts. Do not submit or call it contest-ready. |
| `human_designed_contest` | Audit requirements and assets; inspect an independently human-designed Figma file; check copy, exports and accessibility. Do not have Claude originate or redesign the submission layout. | The human still needs to satisfy every contest rule and deliverable. |

A written allowance from the organiser can change the AI restriction. The user's request to create a prototype is not, by itself, the organiser's permission. Do not invent such permission, conceal AI involvement or describe an AI-generated layout as human-designed.

The current task authorises local prototype work and supporting documentation. It does not authorise entering the contest, publishing a website, contacting the client or deploying to production.

## 2. Source authority and unresolved differences

Read the actual PDF and all relevant files in `bionics_` before designing. If the user's local pack includes a newer copy file, compare it with the reference in this document and record differences. The actual supplied, confirmed source remains authoritative; this document does not replace it.

Three differences are already known:

| ID | Contest announcement | Supplied PDF | Treatment before organiser clarification |
| --- | --- | --- | --- |
| C-01 | Hero → Applications → The system | Hero → The system → Applications | For the internal draft, use the announcement's order. Keep ordering configurable and document the difference. |
| C-02 | Hero button: `Book a demonstration` | Hero button: `Discuss a requirement` | Internal draft: use `Book a demonstration` in the hero, because it is explicitly required by the announcement. Retain the PDF alternative in content configuration. This is a provisional choice, not a claim that the sources agree. |
| C-03 | Six main sections | Seven, including `PROVEN IN THE FIELD` between regulation and enquiry | Retain the additional PDF section in the internal draft so supplied content is not lost. Its inclusion needs confirmation for a final submission. |

The closing enquiry button remains `Discuss a requirement`, as written in the PDF. The regulatory link remains `How authorisation works`.

Use a simple documented configuration, adapted to the project's implementation:

```json
{
  "usage_mode": "internal_prototype",
  "submission_status": "not_submission_ready",
  "section_order": "announcement",
  "hero_cta": "Book a demonstration",
  "closing_cta": "Discuss a requirement",
  "include_proven_in_field": true,
  "brand_tokens": "derive_from_supplied_assets",
  "font_policy": "supplied_or_system"
}
```

Keep these decisions in project documentation. Do not display developer notes or conflict IDs in the visitor-facing page. Before any final submission, obtain the organiser's answers to C-01, C-02 and C-03 and update the configuration accordingly.

## 3. Content and asset rules

### Locked content

- Preserve the supplied wording, qualifications, dates, units and legal distinctions.
- Do not rewrite the hero, shorten its opening paragraph or remove the limitation paragraph.
- Do not add sales claims, pricing, discounts, awards, client logos, testimonials or invented certification badges.
- Do not create an FAQ, comparison table, benefits list or extra CTA copy from your own assumptions.
- Do not add promotional eyebrow labels such as “The future of cleaning” or “Industry-leading technology”.
- Do not turn `Over 60 metres` into `Up to 60 metres`, `Around 170 bar` into a guaranteed pressure, or a case-study result into a guaranteed cleaning rate.
- Keep `Surface coating and treatment, currently in development` intact.
- Keep the case-study qualification beside the case-study text. It must not disappear on mobile.
- Do not imply that purchasing the drone grants the purchaser the supplier's authorisation.
- Do not make pilot training or the enhanced warranty appear included in the base supply. The PDF describes additional services and an option.
- Do not add the “sole UK and Ireland dealer” statement to the page unless that wording is also present in the supplied pack or explicitly approved. Its presence in the contest background does not override the pack-only page-copy rule.

Paragraph spacing, typography and emphasis may change. The displayed words may not, except for a documented organiser decision. Interface accessibility labels can describe their control, but must not introduce marketing claims.

### Allowed visual material

Use only the client's supplied logos, photographs and video. Do not use stock photography, AI-generated imagery, generative fill, invented drone renders, external partner logos or downloaded photographs from the company's website.

Ordinary resizing, responsive crops and format conversion are acceptable production operations when they preserve the actual content. Do not alter the product, add a spray jet, fabricate a before-and-after result, remove people with generative tools or composite a drone into a different location.

Do not start from a purchased template, theme demo or UI kit. Build original page structure and components. A skill's instructions are guidance; its sample layouts, templates and imagery are not approved client assets.

Default to no external icon set. If an icon set is used, obtain any needed clarification under the asset restriction and declare its exact name, version, source and licence. Preserve the supplied logos as files; do not redraw or recolour them.

## 4. Mandatory asset and brand discovery

Before visual implementation:

1. Locate the real `bionics_` directory or archive and `Asset_Cleaning_Contest_Copy` file. Use their actual paths, not invented filenames.
2. If an archive is present, extract it into a dedicated project directory while retaining the original. Avoid overwriting existing project files.
3. Inventory every usable image, SVG, logo, font and video. Record dimensions, orientation, file size and format.
4. Inspect every image visually. Produce a contact sheet with actual filenames if that makes selection easier. A filename alone is not enough to identify an image's subject.
5. Separate The Bionic Eye identity assets from ABZ Innovation identity assets and any specialist-brand files.
6. Identify the best approved photograph showing the C10 in real operation. Identify a second image showing the product or pressure system, and any relevant context images.
7. Inspect supplied logo variants and brand guidance. Extract flat brand colours from the correct logo or guide; prefer SVG colour definitions over compression-affected JPEG pixels.
8. Check which logo variant is intended for a light surface and which, if any, is supplied for a dark surface.
9. Check for supplied fonts, font licences, approved UI labels and actual link destinations.
10. Record the final asset choices and reasons before styling the page.

Create an `asset-manifest.md` containing:

| Field | Required detail |
| --- | --- |
| Source path | Actual file path and filename |
| Content | What was visually observed; use conservative descriptions |
| Dimensions | Original width and height or video dimensions |
| Intended use | Hero, system image, application context, case study or footer |
| Cropping | Desktop and mobile focal position, preserving the product and subject |
| Brand role | Main identity, product manufacturer or specialist brand |
| Treatment | Any resizing or format conversion, with original retained |

Never assume the pack contains seven different application photographs or a transparent C10 cutout. Use text-led layouts wherever the real asset inventory does not support a photograph.

If the pack is unavailable in Claude's environment, continue with source extraction, requirements and documentation. Do not call a placeholder-filled page the completed design. Report the exact missing input and request the actual pack from the user.

## 5. Recommended art direction

### Direction: practical engineering, shown through real operation

The memorable visual should be the supplied photograph of the equipment working on a real structure. Pair it with strong, readable typography and an orderly presentation of specifications and support.

The proposed page uses a light header, predominantly light reading surfaces, one visually distinct system section, and a structured closing enquiry area. Brand colour should guide actions and selected emphasis; it should not overwhelm the photographs or legal information.

The geometry comes from the subject: vertical building surfaces, equipment proportions and consistent alignment. Express that through the grid, image framing and specification rows. Do not invent technical drawings, radar readouts, targeting reticles or diagnostic status widgets. They would suggest information that the supplied material does not establish.

Aim for deliberate variation across sections:

- A generous hero with one convincing operational image.
- A clear applications list supported by selected real context imagery.
- A compact, distinctive system panel with excellent reading order.
- A service area that communicates continuity and practical support.
- A calm regulatory section that is easy to read.
- A case-study section with its qualification visible.
- A simple, usable enquiry form.

Avoid repeating the same three-card arrangement throughout the page. Distinctiveness should come from subject-specific composition and typography, rather than decorative effects.

### Alternative approaches considered

| Approach | Strength | Limitation |
| --- | --- | --- |
| Light, image-led engineering presentation — recommended | Logo clarity, readable supplied copy, strong real photography, straightforward WordPress construction | Requires disciplined image selection and typography to remain distinctive |
| Predominantly dark technical presentation | Can emphasise equipment and photography | Long text, legal information and form fields need more careful contrast treatment |
| Predominantly editorial text presentation | Strong for dense information and specifications | May underuse the photography that the client explicitly wants judged |

Use the recommended direction unless the actual supplied brand guide requires another approach. These are proposals, not statements about a verified existing brand palette.

## 6. Design tokens and typography

### Colour policy

Set the actual brand accent only after pack inspection. Do not assume it is red, green, blue or the colour of ABZ's logo. The Bionic Eye is the main brand on this page.

The following neutrals are proposed working UI colours, not claimed client brand values:

| Token | Working value | Use |
| --- | --- | --- |
| `surface-main` | `#FFFFFF` | Header, principal content and form surface |
| `surface-secondary` | `#F4F6F7` | Gentle section separation |
| `text-primary` | `#182126` | Headings and body text on light backgrounds |
| `text-secondary` | `#48545D` | Supporting text, still comfortably readable |
| `border-subtle` | `#D6DDE1` | Dividers and nonessential boundaries |
| `surface-system` | `#182126` | Optional dark system section |
| `brand-primary` | Derived from supplied identity | Primary actions and restrained highlights |
| `focus-ring` | Contrast-tested after brand extraction | Keyboard focus; not assumed identical to brand colour |

Test foreground/background combinations. If the extracted brand colour cannot support readable button text, change the button treatment while retaining the authentic colour in a suitable role. Input borders and interactive boundaries need stronger contrast than decorative dividers where necessary.

Keep a concise `brand-decisions.md` with evidence for the selected logo, accent and typeface. If brand data is absent, mark the decision as a design proposal requiring confirmation.

### Typeface policy

1. Use a supplied, licensed brand typeface when available.
2. If no typeface is supplied, use `Arial, Helvetica, sans-serif` for a fully local first draft. Font selection is an explicit design decision, not an excuse to download unapproved material.
3. A licensed technical sans such as IBM Plex Sans can be considered if external typefaces are permitted or provided by the client. Do not silently treat a proposed font as the existing brand font.
4. Use one family with sufficient weights before considering a second family. A third decorative face is unnecessary.
5. Use tabular numerals for specification values where the chosen font supports them. Keep explanatory text in the normal reading family.

Starting type scale; adjust against screenshots and the actual font:

| Role | Desktop at 1440 | Mobile at 390 | Guidance |
| --- | --- | --- | --- |
| H1 | 62–68 px | 38–42 px | Strong but natural wrapping; approximately 1.04–1.10 line height |
| H2 | 38–44 px | 28–32 px | Clear separation without overpowering the content |
| Paragraphs | 18–19 px | 16–17 px | Approximately 1.55–1.65 line height |
| Navigation / buttons | 15–16 px | 16 px | Comfortable weight and clear labels |
| Specification values | 24–30 px | 21–26 px | Include every relevant qualifier and unit |
| Qualifications / footer | 14–15 px | 14–15 px | Readable; never reduced to illegible fine print |

Use a sensible line length of roughly 55–75 characters for long copy. Avoid justified paragraphs. Do not force hard line breaks that break at other widths. The exact hero wording should remain intact; emphasis is typographic, not a rewrite.

## 7. Grid, spacing and component character

### Desktop

- Required design frame width: 1440 px.
- Initial content width: 1280 px, giving 80 px outer margins at 1440.
- Use a 12-column grid with approximately 24–32 px gaps.
- Use 80–104 px section padding as an initial range; vary with content density.
- Align headings, text, photos and specification blocks to recurring grid lines.
- Let content determine height. Do not crop a section or hide copy to hit a fixed page length.

### Mobile

- Required design frame width: 390 px.
- Use 20 px horizontal gutters, leaving 350 px of usable content.
- Initial section spacing: 48–64 px.
- Use one coherent column and the same content hierarchy as desktop.
- Use at least 44 px touch targets as a practical interaction target, preferably 48–52 px for main controls.
- Support 360 and 320 px without horizontal overflow as additional robustness checks.

### Shared character

- Use a consistent spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96.
- Start with 6–10 px corner radii for controls and selected panels; photographs can use a separate restrained framing treatment.
- Use shadows only where they explain elevation or state. Most organisation can come from spacing, contrast and boundaries.
- Avoid pills for every label, decorative gradients, floating glass panels and large uniform card grids.
- Keep one primary action style and one secondary action style across the page.
- Do not create decorative numbered “steps”; the applications and service descriptions are not a sequential process.

## 8. Header and navigation

Use a light header to support clear display of the correct supplied logo variant. Do not place the logo on a dark surface and compensate by changing its colours.

Desktop starting height: approximately 88–96 px, adjusted for the real logo's proportions. Logo on the left, the supplied navigation labels on the right, with enough space to read them comfortably. Do not add a duplicate header CTA if that makes the seven links crowded or introduces unapproved text.

Use these labels exactly:

`Solutions | Support | Regulation | Sectors | About Us | Contact | Shop`

Use actual destinations from the pack or confirmed project configuration. Do not invent URLs for specialist brands or the online store. A single-page prototype can use a verified section anchor only when its meaning genuinely matches the label. Otherwise document the destination as unresolved rather than wiring it to an unrelated section.

On mobile, use the supplied logo and a simple menu control. Menu interactions must support keyboard access, a visible focus state, Escape to close, focus restoration and a logical reading order. If a menu is modal, manage focus accordingly.

An optional sticky header must not cover headings, fields or anchored sections. Do not add scroll-dependent header height changes that cause layout shifts.

## 9. Hero

### Copy

Display the supplied headline:

> Facade and structure cleaning without access equipment.

Keep both opening paragraphs exactly. The second paragraph, explaining the limits of the system, is part of the main introduction and must remain readily readable.

The hero button follows the documented C-02 configuration. It can take the visitor to the enquiry section in a local prototype. A booking calendar is not required and must not be invented.

### Desktop composition

- Begin with approximately five columns of text and seven columns of photography.
- Place the headline, full introduction and CTA in a single strong reading sequence.
- Let the chosen operation image occupy enough space to communicate the machine, target surface and scale of the operation.
- Prefer an image adjacent to the text rather than text superimposed over a busy spray or facade.
- Use content-driven height; a tall hero is acceptable if it preserves the complete opening text.
- If the best supplied asset is a wide landscape image, adapt the split or use a large image below the text. Do not sacrifice the product through an unsuitable portrait crop.
- Do not add specification badges, counters or a testimonial under the hero.

### Mobile composition

Use this reading order: headline → first paragraph → limitation paragraph → CTA → operation image.

Use a comfortably sized image, normally between 4:3 and 3:2 depending on its actual composition. Store a mobile focal position separately where needed. Do not hide the image, reduce body copy or collapse the limitation paragraph merely to fit one phone viewport. The mobile hero may naturally extend beyond the first screen.

## 10. Applications

Use the complete supplied application list. Prefer an original editorial arrangement over seven identical cards with fabricated icons or stock pictures.

Desktop proposal:

- A clear heading and a well-spaced text list occupy one side.
- One or two approved photographs occupy the other side if relevant assets exist.
- If several genuinely relevant photographs are supplied, use a restrained varied image arrangement with a common alignment system.
- Do not imply that a photo documents a wind turbine or heritage operation unless that was visually verified.
- Keep each complete application description together. Do not separate “currently in development” from surface treatment.

Mobile proposal:

- Keep the complete list visible in one column, with comfortable spacing between entries.
- Use photographs in the normal document flow; no horizontal carousel is needed to access required information.
- Retain the complete application qualification and readable image treatment.

Applications is the recommended second section for the required mobile submission export, subject to the final confirmed order.

## 11. The system and specification panel

This is the principal information anchor after the applications section. It should feel precise and well organised.

Desktop proposal:

- Use a visually distinct section surface. The optional dark treatment works only if all copy and any supplied logo remain readable and authentic.
- Pair the complete two-paragraph system description with a substantial specification panel.
- If a genuine product or equipment image exists, place it in a dedicated area without crowding the specs. A missing product cutout is not a reason to generate one.
- Keep the reverse-osmosis water statement and mass/authorisation paragraph intact.

The five specification rows are locked:

| Label | Value |
| --- | --- |
| Working height | Over 60 metres |
| Flow rate | Up to 15 litres per minute |
| Working pressure | Around 170 bar at the nozzle, up to 255 bar at peak |
| Collision avoidance | Radar, with standoff control |
| Maximum take-off mass | 29 kg |

Use clear label/value relationships, shared alignment and natural wrapping. The pressure row deserves sufficient height; it must not be compressed into an ambiguous `170 / 255` graphic.

On mobile, each row can place the label above the value. Keep all five rows in the ordinary document flow with no horizontal scrolling. A semantic definition list or an appropriately structured table can implement this relationship.

Do not animate these values as counters, gauges or live telemetry. They are specifications from the supplied copy.

## 12. What we supply / full service support

Retain the supplied heading and all three paragraphs. This section should communicate an ongoing supplier relationship: specified equipment, additional training and authorisation support, and practical maintenance capacity.

Desktop proposal:

- Use a heading column paired with a wider content column.
- Treat the three original paragraphs as distinct reading groups, with spacing and optional rules.
- A verified workshop or equipment image can support the section if present in the pack.
- Do not invent five card headings or promotional summaries. If subheadings are required, obtain approved wording first.

The text already supplies the important details: UK-held parts, repairs in the company's workshop, priority servicing under the enhanced option, loan equipment when parts are unavailable, and white label capacity arranged in advance.

On mobile, present these in their original order as readable paragraphs. Do not use an accordion to hide the required service information.

## 13. Regulatory position / operating legally

The announcement calls for a short note, but the supplied PDF contains two substantive paragraphs. Preserve that supplied wording unless the organiser provides an approved shorter version.

Use a calm light surface, readable text width and the original `How authorisation works` link. The regulatory content should have comparable body text size to the rest of the page.

Maintain the key relationship explicitly stated in the source: the operator holds its own Operational Authorisation. The Bionic Eye assists; its own PowerWash authorisation does not automatically become the purchaser's authorisation.

Treat the PDF's regulation-related statements as supplied client copy. Do not expand them into new legal advice or add guarantees about approval, timescales or eligibility.

Do not add a CAA logo, an approval seal or a generic “CAA certified C10” badge unless that exact asset and usage are supplied and authorised.

## 14. Proven in the field

This section is retained provisionally because it is in the PDF. Keep it after regulation and before enquiry in the internal draft.

Use the complete supplied paragraph and the qualification beneath it. The paragraph describes factory-facade, roof-cleaning and setup results from ABZ Innovation case studies. Those results are not promises of output for every site.

Emphasise the exact figures within their sentences if helpful; do not rewrite them into stronger claims. Do not use an invented before-and-after slider. Use case-study photography or video only where the pack actually includes relevant, verifiable material.

If the supplied video is useful, use a lightweight, user-initiated player with an authentic poster frame. Do not autoplay audio. Avoid adding a new “Watch case study” label if no such label is supplied; a standard accessible media control is sufficient for the prototype.

## 15. Closing enquiry and footer

### Enquiry

Preserve the closing paragraph. It explains that the company will assess which intended sites are straightforward, need further work or may be unviable before a commitment.

Desktop proposal: closing text on one side, form on the other. Mobile: closing text first, followed by a single-column form.

Use exactly these visible field labels:

- Name
- Company
- Email
- Telephone
- Sites or work involved

The first four fields can form two columns on desktop if labels and field widths remain comfortable. The final field should be a full-width textarea. Every field stacks on mobile. Initial control height: 50–54 px; initial textarea height: 140–180 px.

Use persistent labels, not labels replaced by placeholders. Use semantic input types and relevant autocomplete values. Do not invent required-field rules, consent statements or privacy promises; those are production decisions to confirm. Essential validation behaviour must be accurate, and any new visible validation or confirmation wording must be documented for client approval.

Button label: `Discuss a requirement`.

The prototype must not send personal data to an external service or display a false “message sent” result. A real submission endpoint, spam protection, privacy handling and success/error copy belong to the later production scope. Keep prototype limitations in project notes rather than injecting implementation details into the marketing layout.

### Footer

Retain all source content:

- The Bionic Eye contact address.
- Telephone and email.
- FarmingByDrone, PowerWash and CleaningByDrone names.
- The operator/supplier authorisation distinction.
- The two supplied authorisation/approval statements.
- Company registration information and registered office.

Use a structured multi-column desktop footer and a clearly stacked mobile footer. Keep technical and company details readable. Specialist brand names should appear as supplied text unless their actual supplied logos and destinations are verified. Do not download substitutes.

## 16. Responsive behaviour, interaction and accessibility

Inspect at 1440, 1280, 1024, 768, 390, 360 and 320 px. The client's required outputs remain 1440 and 390 px.

Content determines breakpoints: switch navigation before it collides, switch split sections before either side becomes too narrow, and allow all legal text and specifications to wrap naturally.

Interaction should serve the enquiry flow:

- Clear button hover, focus and pressed states.
- Menu opening and closing with correct keyboard behaviour.
- Accurate CTA anchors with header offset accounted for.
- Clear form focus and input states.
- Accessible user-triggered media controls if video is used.

No scroll hijacking, pinned cinematic narrative, 3D scene, cursor trail or recurring section animation is required. The design must read well in static PNG/PDF exports.

Use CSS for simple state changes. GSAP is optional only if the project needs a justified animation beyond that. If used, keep motion restrained, scoped and reversible; respect `prefers-reduced-motion`, clean up on unmount and ensure content is visible without animation scripts. Do not add GSAP solely because its skill is installed.

Quality checks:

- One semantic H1 and a meaningful heading hierarchy.
- Logical DOM order matching the intended mobile reading order.
- Normal text contrast at least 4.5:1; large text at least 3:1; appropriate contrast for interactive components.
- Visible keyboard focus and no focus trapped outside an active modal menu.
- Labels associated with their fields; no placeholder-only form.
- Accurate, concise alt text based on inspected images; empty alt for genuinely decorative imagery.
- Readable at 200% zoom and no avoidable horizontal scrolling.
- No content hidden permanently if JavaScript, fonts or motion fail.

These are implementation acceptance criteria, not customer-facing badges or claims of certified accessibility.

## 17. Implementation scope and WordPress feasibility

Inspect the existing project before selecting a stack. Preserve its framework, package manager, scripts and routing when sensible. Do not replace an existing app just to use a preferred tool.

For a new local prototype, a small React/TypeScript build with plain authored CSS is a reasonable option. A static HTML/CSS implementation is also sufficient if it meets the same requirements. Do not introduce Next.js, a database or a headless CMS solely for this single page.

Build original components such as header, hero, application list, specification panel, copy section, enquiry form and footer. These are component responsibilities, not a demand to create a component for every text span.

Keep content separate from presentation. Preserve paragraph boundaries and source references. Keep the three conflict choices configurable. Asset references must map to inspected files.

Do not use theme demos, shadcn-style page starters, ready-made landing sections or purchased UI kits as the design starting point. Avoid broad refactoring outside this page.

The later WordPress build should be feasible with ordinary editable sections and styles:

| Page element | Later WordPress approach |
| --- | --- |
| Header / footer | Theme templates with confirmed menus and contact fields |
| Hero | Editable text, supplied image and CTA destination |
| Applications | Structured list and selected media fields |
| Specifications | Five structured label/value entries |
| Support / regulation / case study | Editable copy groups with controlled formatting |
| Enquiry | Accessible form with an approved production handler |

This is feasibility guidance only. Do not build all ten templates or all 27 pages during the contest-page prototype task.

## 18. Figma and required contest deliverables

The actual required deliverables are:

1. Full desktop page at **1440 px wide**, exported as PNG or PDF.
2. Mobile hero and at least one further section at **390 px wide**.
3. A real **view link to a Figma file**.
4. A **2–3 minute screen recording in the entrant's own voice**, showing the Figma file and explaining decisions.
5. A note of **up to 100 words** about the actual typeface and colour choices.

Both the Figma link and recorded walkthrough are mandatory for consideration. A browser prototype does not substitute for either. The human must record their own voice; do not fabricate a recording or use a synthetic voice as though it were theirs.

The AI-layout rule still applies to a layout rebuilt inside Figma. Do not label an imported screenshot as an editable, original Figma design.

### Suggested Figma organisation

- Brief and confirmed source decisions.
- Foundations: actual colours, typography, spacing and grids.
- Original components: header, buttons, menu states, specifications, form fields and footer.
- Desktop frame at 1440 px.
- Mobile frame at 390 px, including hero and the confirmed next section.
- Interaction notes and any additional responsive examples needed for handover.

Use editable text, original component instances, Auto Layout where useful and native constraints. Do not flatten the whole page into a single image.

Claude should first check whether an already connected Figma integration actually supports the requested operations. A read-only integration cannot create an editable file. If creation is unavailable, supply a precise manual Figma handover and list the missing Figma deliverable honestly. Never fabricate a view URL, file ID or claimed export.

### Walkthrough outline for the human entrant

| Time | Show and explain |
| --- | --- |
| 0:00–0:20 | The target audience and the page's enquiry purpose |
| 0:20–0:55 | Hero composition, supplied image choice and typography |
| 0:55–1:30 | Applications, specification reading order and support hierarchy |
| 1:30–1:55 | Regulatory clarity, case-study qualification and enquiry form |
| 1:55–2:30 | Mobile decisions, components and practical WordPress construction |
| 2:30–2:50 | A concise account of the actual choices and any confirmed source resolutions |

Adapt to the real design. The explanatory recording and typeface/colour note are deliverable commentary, not new copy to add to the web page.

Draft the under-100-word note only after actual fonts and colours are selected. Do not claim a supplied brand colour or custom font that was never verified.

## 19. Skills and installation instructions

The sources below were checked on 7 October 2026. Claude must still inspect the installed version and actual repository manifests before installation. Only relevant skills need to be invoked; installing a bundle is not a reason to load every skill.

### Recommended skills

| Source | Skill | Role in this project |
| --- | --- | --- |
| Anthropic `anthropics/skills` | `frontend-design` | Intentional composition, type and original visual decisions; only in the permitted prototype mode |
| Anthropic `anthropics/skills` | `webapp-testing` | Browser inspection, responsive checks and evidence screenshots |
| `nextlevelbuilder/ui-ux-pro-max-skill` | `ui-ux-pro-max` | Interface hierarchy, layout consistency, form usability and accessibility review |
| `addyosmani/agent-skills` | `frontend-ui-engineering` | Responsive component structure, semantics and implementation quality |
| `addyosmani/agent-skills` | `browser-testing-with-devtools` and `code-review-and-quality` | Runtime inspection and focused final review, if available in the installed bundle |
| Official `greensock/gsap-skills` | `gsap-core`, `gsap-react` when relevant, and `gsap-performance` | Optional: only for a justified motion requirement |

Use these as instructions and review criteria. Do not import their sample UI kits or let a generic design-system suggestion replace the supplied brand evidence. The locked source copy overrides a skill's suggestion to rewrite content.

### First inspect what is already installed

From a shell where Claude Code is installed, inspect CLI help as needed, then list existing plugins and marketplaces:

```bash
claude plugin list
claude plugin marketplace list
```

Also check project-local skills and the running session's available skills. Avoid duplicate installation. Log actual availability in `skills-status.md`.

### Shell installation path for missing bundles

Use the project's local scope for enablement where supported. Run only the missing marketplace/install pairs, in order, checking each result. The marketplace catalog may be cached at user level by Claude Code; this is normal and does not justify changing unrelated global configuration.

```bash
claude plugin marketplace add https://github.com/anthropics/skills.git
claude plugin install example-skills@anthropic-agent-skills --scope local

claude plugin marketplace add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git
claude plugin install ui-ux-pro-max@ui-ux-pro-max-skill --scope local

claude plugin marketplace add https://github.com/addyosmani/agent-skills.git
claude plugin install agent-skills@addy-agent-skills --scope local
```

Only if GSAP is genuinely needed:

```bash
claude plugin marketplace add https://github.com/greensock/gsap-skills.git
claude plugin install gsap-skills@gsap-skills --scope local
```

These are shell commands, not `/plugin` slash commands passed to Bash. Use supported CLI help if the installed version has different options. Do not invent plugin IDs; inspect the repository's `.claude-plugin/marketplace.json` to confirm them if a name no longer resolves.

### Interactive Claude Code equivalent

In an interactive Claude Code session, the repository-documented commands are:

```text
/plugin marketplace add anthropics/skills
/plugin install example-skills@anthropic-agent-skills

/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill

/plugin marketplace add addyosmani/agent-skills
/plugin install agent-skills@addy-agent-skills

# Optional only when GSAP is needed:
/plugin marketplace add greensock/gsap-skills
/plugin install gsap-skills@gsap-skills
```

Choose the appropriate local/project scope in the plugin interface. The session may need `/reload-plugins` or a restart to activate a shell-installed plugin. Follow the actual install summary. Do not claim a newly downloaded skill is active until it appears and can be read or invoked. If the environment cannot reload its own session, report the exact required user action.

### If plugin installation is unavailable

- Use a supported, project-local standalone-skill route from the verified repository documentation.
- For UI/UX Pro Max, its repository documents `npx ui-ux-pro-max-cli init --ai claude` as an alternative. Inspect existing project files and the command's help before it writes anything.
- A repository-copy route must preserve complete selected skill directories, scripts and licences. Keep source repositories separate from product assets and do not overwrite existing skills.
- The Addy bundle uses shared references outside individual skill folders; preserve the documented shared resources rather than copying an isolated `SKILL.md` and calling it complete.
- If access is denied or the network is unavailable, report the specific failed source and continue independent work with available guidance. Do not download a similarly named fork or bypass a managed restriction.
- Installing a skill does not install its runtime dependencies or prove that Figma-writing or browser-testing tools exist.

### Primary sources

- [Anthropic skills and installation](https://github.com/anthropics/skills)
- [Anthropic frontend-design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md)
- [Anthropic webapp-testing](https://github.com/anthropics/skills/blob/main/skills/webapp-testing/SKILL.md)
- [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
- [Addy Osmani Agent Skills](https://github.com/addyosmani/agent-skills)
- [Official GSAP skills](https://github.com/greensock/gsap-skills)
- [Claude Code plugin installation](https://code.claude.com/docs/en/discover-plugins)
- [Claude Code plugin commands](https://code.claude.com/docs/en/plugins/cli-reference)

## 20. Complete Claude Code prompt

Copy the following prompt into Claude Code after placing this MD, the actual `bionics_` pack and the actual copy PDF in the project:

```text
Act as a senior web designer and frontend engineer working on The Bionic Eye's Asset Cleaning page for the ABZ Innovation C10.

Read BIONIC_EYE_ASSET_CLEANING_DESIGN_BRIEF.md completely, including its source rules, known conflicts, skills instructions, acceptance criteria and PDF-copy appendix. Locate and inspect the real bionics_ asset pack and Asset_Cleaning_Contest_Copy file. Do not infer the contents of an image from its filename. This request authorises local preparation, installation of missing relevant skills and implementation of an internal prototype; it does not authorise publication, contest submission or messages to the client.

Begin by recording the usage mode. The default for this request is internal_prototype. The contest explicitly prohibits AI-generated layouts. An AI-designed page must be identified as an AI-assisted internal prototype, not a compliant contest submission. If the user switches to human_designed_contest mode, work on requirements, source checks and review of their independently human-created Figma only; do not originate or redesign the submission layout. Do not invent organiser permission or conceal the provenance by rebuilding an AI layout in Figma.

First inspect the project, its existing instructions, framework, scripts and current changes. Preserve unrelated work. Reuse the existing stack when sensible; do not rebuild an existing project unnecessarily. For an empty project, use the smallest appropriate frontend implementation. Build original components and authored styling; do not use a landing-page template, theme demo or UI kit as the starting point.

Check relevant available skills before implementation. Use Anthropic frontend-design and webapp-testing, UI/UX Pro Max, and the relevant Addy Osmani frontend engineering, browser inspection and quality review skills. Use GSAP skills only if an actual motion requirement justifies GSAP. If a relevant skill is missing, install it from the verified original repository using section 19's supported local-scope commands or documented standalone-skill route. Inspect CLI help and manifests where necessary, check every result, preserve shared resources and report whether a reload is required. Do not merely list skill names and pretend they were used. Read the relevant SKILL.md and follow it where it is consistent with this project's constraints.

Extract the full PDF copy, preserving paragraphs, headings, qualifiers, dates and units. Create an asset manifest and inspect all supplied images, logos, fonts and video. Select real files for the hero and supporting sections. Derive the actual brand colour and logo treatment from the supplied Bionic Eye identity, not ABZ's identity or an assumed palette. If the pack is missing, complete the independent requirements work and state the exact missing input; do not generate replacement photography or claim the design is finished.

Create a short brand-decisions note with the exact asset paths, verified brand colours, font source, grid, image crops and reasons. Use section 5's recommended direction: a light, image-led, technically credible corporate presentation, a strong operational photograph, readable original copy, a distinct specification panel and a clear enquiry flow. Adapt it to any actual supplied brand guide. Keep visual choices subject-specific; do not apply generic colourful SaaS cards or decorative sci-fi graphics.

Resolve the three known source conflicts only provisionally for the internal draft: announcement section order; Book a demonstration in the hero; Discuss a requirement in the closing form; and retain Proven in the field before the enquiry. Record C-01, C-02 and C-03 in documentation and make them easy to change. Do not say the organiser approved these choices. If a newer supplied source or written clarification exists, inspect it and update the decisions explicitly.

Implement all required page content: supplied header navigation; hero with both opening paragraphs; complete applications list; complete system text and all five specification rows; all support copy; full supplied regulatory wording and its link; the provisional case-study section with its qualification; enquiry paragraph and five labelled fields; and the complete supplied footer. Use only approved pack material for visitor-facing copy and imagery. No stock or AI imagery, extra claims, testimonials, copied partner logos, invented certifications, invented page URLs or rewritten technical text. Keep “currently in development”, “Over”, “Up to” and “Around” where the source uses them.

Implement a polished full desktop composition at 1440 px and mobile at 390 px, with robust behaviour at 1280, 1024, 768, 360 and 320. Follow the brief's typography, spacing, natural content height, photo focal points, specification wrapping, menu behaviour and form accessibility. Preserve every paragraph on mobile. Do not shrink legal qualifications to illegible fine print, hide required copy in sliders, or force the whole hero into one viewport.

Make CTA navigation and the mobile menu work accurately. The enquiry prototype must not send personal data or fake a successful delivery. Keep unavailable production integrations in handover notes. Prefer CSS for simple interactions; motion must respect reduced-motion settings and must never keep required content invisible. The page must look excellent as a static export.

Run the project's appropriate build and checks. Launch the local page and inspect real browser screenshots at the required widths. Wait for fonts and images, check the console, navigation, full source-copy coverage, clipping, overflow, keyboard focus, contrast, mobile menu and form labels. Fix observed defects, take fresh screenshots after meaningful changes, and check again. Do not stop at a successful build or say the visual design is polished without inspecting it.

Prepare a full-page desktop PNG with actual width 1440 px and a mobile hero-plus-confirmed-next-section PNG with actual width 390 px. Use final static states; do not export missing lazy images or half-finished animation. A higher-density export can be additional, but it does not replace the requested exact-width file. Use clear filenames and report what was actually produced.

Check whether any existing Figma capability can genuinely create or edit native design content. A read-only connector is insufficient. If suitable authorised access exists, prepare the appropriate editable Figma handover, respecting the chosen provenance mode. If it does not, create a precise manual Figma construction guide with grids, tokens, components and frame dimensions; explicitly report that the mandatory Figma link has not been produced. Never fabricate a Figma link or pass off a screenshot imported into Figma as editable source design.

Prepare a 2–3 minute walkthrough outline for the human entrant to record in their own voice. Do not generate a fake recording. Draft a maximum-100-word typeface-and-colour note based on the actual verified design choices, and count its words. Keep these explanatory deliverables separate from the locked web-page copy.

Finish with a requirements audit separating verified prototype outputs, unresolved organiser decisions, and missing actual contest deliverables. Include the skills actually available and used, sources and assets selected, commands and browser checks actually run, screenshot paths, and practical WordPress feasibility notes. Do not call an internal prototype contest-ready, do not conceal blocked outputs, and do not publish or submit anything.

Work carefully through these stages and continue autonomously on authorised local work. Ask only when a missing source, identity ambiguity or essential external access blocks the next dependent action. Do not ask for confirmation about routine reversible implementation choices already covered by this brief.
```

## 21. Verification and completion checklist

Claude must fill this checklist with evidence from actual work, rather than treating it as already passed.

### Sources and content

- [ ] Actual copy PDF inspected; any differences from this document recorded.
- [ ] Actual `bionics_` assets inspected and manifest completed.
- [ ] Main brand logo and colour source verified.
- [ ] No invented image filename, external photography or AI-generated visual asset.
- [ ] Hero and limitation paragraph complete and verbatim.
- [ ] All seven supplied application items present.
- [ ] All system paragraphs and five specification rows present.
- [ ] Additional training and optional enhanced warranty accurately presented.
- [ ] All regulatory copy and operator/supplier distinction preserved.
- [ ] Case-study source and output qualification visible.
- [ ] All five enquiry labels and complete footer present.
- [ ] C-01, C-02 and C-03 recorded, with no false claim of confirmation.

### Design and interaction

- [ ] Desktop inspected at 1440 px and mobile at 390 px.
- [ ] Additional widths checked for overflow and awkward wrapping.
- [ ] Photograph focal points verified in desktop and mobile crops.
- [ ] Type, paragraph widths and section spacing coherent.
- [ ] Specifications readable without horizontal scrolling.
- [ ] Navigation and CTA destinations accurate or explicitly unresolved in documentation.
- [ ] Mobile menu usable with keyboard and focus restored after closing.
- [ ] Form labels, input types and focus states correct.
- [ ] No false form-delivery result or unauthorised data transmission.
- [ ] Contrast, zoom and reduced-motion behaviour checked.
- [ ] Build/check results and browser console findings recorded.

### Deliverables and provenance

- [ ] Exact-width 1440 desktop export produced and inspected.
- [ ] Exact-width 390 mobile hero plus one further section export produced and inspected.
- [ ] Editable Figma source and real view link produced, or reported missing.
- [ ] Human-voice walkthrough recorded by the entrant, or reported missing.
- [ ] Typeface/colour note reflects actual choices and is at most 100 words.
- [ ] Any icon set declared; otherwise record that none was used.
- [ ] AI involvement and current contest eligibility stated accurately.
- [ ] WordPress feasibility reviewed without expanding to the entire website build.
- [ ] No publication, submission or client message performed without instruction.

## 22. Source-copy appendix

The following appendix reproduces the supplied PDF text, with PDF page separators removed only. Outline labels such as `HERO: OPENING`, `Button: [ ]` and the instructions are content metadata: they are not all intended to appear literally on the website. The actual supplied PDF remains the reference for verification.

```text
Asset Cleaning page: contest copy
The Bionic Eye Ltd. Design contest copy, October 2026.

Use this text exactly as written. Do not rewrite it or add claims, figures, logos or testimonials. Text shown
as Button: [ ] is a button or link label. You may choose the visual treatment of every section.

HEADER NAVIGATION

Solutions | Support | Regulation | Sectors | About Us | Contact | Shop (links to our online store)

1. HERO: HEADLINE

Facade and structure cleaning without access equipment.
HERO: OPENING

Drone cleaning removes the requirement for scaffolding, cradles, powered access or rope teams across a
substantial proportion of facade, glazing, cladding and roof maintenance. The work is carried out from
ground level, and setup is measured in minutes rather than days.

It does not replace access equipment for every application. We identify where it does not before specifying
a system.

Button: [Discuss a requirement]

2. THE SYSTEM

The ABZ Innovation C10 is the platform we have standardised on. It operates to over 60 metres, delivers
up to 15 litres per minute at a working pressure around 170 bar at the nozzle, up to 255 bar at peak, and
uses radar for collision avoidance and standoff control. Reverse osmosis water can be specified where
surface finish, seals or painted surfaces require it.

Maximum take-off mass is 29 kg. The sub 25 kg limit that applied under the earlier authorisation route is
not required under UK SORA.
Figures for the specification panel (taken from the text above):

 Working height                     Over 60 metres

 Flow rate                          Up to 15 litres per minute

 Working pressure                   Around 170 bar at the nozzle, up to 255 bar at peak

 Collision avoidance                Radar, with standoff control

 Maximum take-off mass              29 kg

3. APPLICATIONS

• Commercial and residential facades, and glass curtain walling
• Solar farms and rooftop arrays
• Wind turbine towers
• Industrial silos, tanks and cladding
• Heritage and listed structures
• Graffiti removal
• Surface coating and treatment, currently in development
4. WHAT WE SUPPLY

The drone, pressure system and nozzle set specified against your surfaces.

Pilot training is available as an additional service, and we can advise on preparing the operations manual
and supporting documentation required for CAA authorisation.

Parts are held in the United Kingdom, repairs are carried out in our own workshop, and the enhanced
warranty option provides priority servicing and maintenance, with loan equipment where parts are
unavailable. We also offer white label services, arranged in advance, giving clients additional capacity.

5. REGULATORY POSITION

Cleaning operations at height adjacent to structures fall within the Specific Category, which requires an
Operational Authorisation from the Civil Aviation Authority. Since April 2025 these are granted through UK
SORA.

The Operational Authorisation is held by the operator and not the supplier. The Bionic Eye assists clients
in attaining their own, drawing on the UK SORA authorisation we hold for cleaning operations with our own
PowerWash system, obtained in January 2026, and on the applications we have supported since. The first
client Operational Authorisation for the C10 has now been granted, in the client's own name, with two
further applications at final assessment.

Button: [How authorisation works]

6. PROVEN IN THE FIELD

ABZ Innovation's case studies show what the C10 delivers in service. A factory facade was cleaned at
around 300 square metres an hour using chemical-free reverse osmosis water. A roof carrying ten years of
moss, about 550 square metres, was cleared in roughly three hours with no chemicals, and the system
was set up and ready to fly in fifteen minutes.
Figures are from ABZ Innovation case studies. Actual output varies with the surface, the level of soiling and site conditions.

7. CLOSING AND ENQUIRY

Send us the sites you intend to work on. We will identify which are straightforward under a standard
authorisation, which require additional work, and which are unlikely to be viable, before any commitment is
made.
Enquiry form fields: Name, Company, Email, Telephone, Sites or work involved.

Button: [Discuss a requirement]

FOOTER

The Bionic Eye, Bionic House, Hall Farm, Berry Lane, Chorleywood, WD3 5EX, United Kingdom.
Telephone +44 1753 655886. Email info@thebioniceye.co.uk.

Specialist brands: FarmingByDrone | PowerWash | CleaningByDrone

The Operational Authorisation is held by the operator and not the supplier. The Bionic Eye assists clients
in attaining their own.

CAA approved since 2014. UK SORA authorisation held for cleaning operations with the PowerWash
system since January 2026.

The Bionic Eye Ltd. Registered in England and Wales, company number 09053005. Registered office: 22
Wycombe End, Beaconsfield HP9 1NB.
```
