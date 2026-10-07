# The Bionic Eye — Asset Cleaning / Redesign V2

**Art direction, responsive composition, implementation brief and Claude Code master prompt**  
Prepared 7 October 2026 · Website language: British English · Desktop reference: 1440 px · Mobile reference: 390 px

**طريقة الاستخدام:** ضع هذا الملف بجانب مجلد `bionics_` وملف `Asset_Cleaning_Contest_Copy` والتصميم السابق. استخدم البرومبت الكامل في القسم 20. هذه النسخة تستبدل التوجيه البصري السابق بالكامل؛ لا تطلب من Claude دمج التصميمين. المطلوب إعادة بناء التكوين البصري، وليس تحسين الألوان والهوامش فوق الواجهة القديمة.

**حدود الاستخدام:** المسابقة تمنع التخطيطات والصور المولّدة بالذكاء الاصطناعي. تنفيذ هذا الملف بواسطة Claude ينتج نموذجًا بمساعدة الذكاء الاصطناعي، ولا يصبح مطابقًا للمسابقة بمجرد نقله إلى Figma؛ يلزم سماح من المنظّم لاستخدامه كمشاركة. يمكن تنفيذ النموذج الداخلي ومراجعته الآن، مع وصف مصدره بصدق.

---

## 0. The decision: rebuild the composition

Create a premium industrial product page in which **real operational photography, the C10 itself, disciplined typography and the company's cyan/graphite identity** do the visual work.

This is a complete replacement for the visual direction in `BIONIC_EYE_ASSET_CLEANING_DESIGN_BRIEF.md`. Retain correct source content, useful asset processing and functioning infrastructure. Replace the previous page composition, type scale, monochrome treatment and generic component styling.

The scope is one complete Asset Cleaning page. The wider commission is ten bespoke page templates followed by approximately twenty-seven WordPress pages; do not invent or build those additional pages now. Make the page's foundations reusable for that later work.

### Ten decisions to implement before adding embellishment

1. **A photographic hero across the full viewport width.** Use the supplied operational image as the environment of the hero, with a controlled directional overlay. The drone, spray and structure must remain visible.
2. **Titillium Web as the primary typeface.** It is present on the existing company website. Use loaded, verified font files and deliberate weights; do not export the fallback font.
3. **Graphite `#29333C` and cyan `#00BFF3` as the observed brand baseline.** Use cyan for purposeful emphasis and dark text on cyan buttons.
4. **A 1296 px content grid at 1440 px.** Give photographs and product presentation meaningful scale; align all major sections to the same grid.
5. **A real mobile composition.** Show the headline, then an operational photograph, then the complete introduction and CTA. Do not squeeze the desktop background composition onto a phone.
6. **An applications matrix paired with a tall operational photograph.** The supplied seven entries remain complete. No stock illustrations or generic icon grid.
7. **A white product presentation surface.** Integrate the existing white-background C10 photography into that surface. Never paste a white product rectangle onto a black section again.
8. **Distinct hierarchy in the specification panel.** Make the important values easy to find while keeping every qualifier and unit intact.
9. **Different compositions for support, regulation, evidence and enquiry.** These sections must not all become a heading in the left half and a paragraph in the right half.
10. **Render, inspect and correct the hero and applications at both target widths before building the lower page.** A successful build command is not visual approval.

The internal art-direction name is **Operational precision**. Do not print this name as new marketing copy on the website.

## 1. Evidence and the failure to correct

### What was actually reviewed

| Material | Evidence available | Limits |
| --- | --- | --- |
| Rejected `desktop-1440-full-page.png` | Full supplied preview inspected visually | The accessible image is **505 × 2047 px**, despite its filename. It supports composition critique, not reliable measurement of the original CSS sizes. |
| Current `https://www.thebioniceye.co.uk/` | Live homepage inspected; rendered hero and computed styles checked | A brand benchmark, not an approved source of extra page copy, photographs, partner logos or claims. |
| `Asset_Cleaning_Contest_Copy(1).pdf` | Both pages read; wording and specification values extracted | The user's latest confirmed copy file takes precedence if it differs. |
| Asset contact sheet and supplied filename list | Subjects and likely roles inspected | Full-resolution individual assets were not available during preparation. Claude must inspect the originals before final crops. |
| Previous design brief | Its direction and defaults reviewed | Superseded by this document for visual decisions. |

### The visible problems and the required corrections

| Rejected result | Why it weakens this specific page | Required V2 correction |
| --- | --- | --- |
| Heading above a disconnected copy/photo split | The drone photograph looks supplementary; the first screen has no coherent focal composition | Put the operational scene behind a deliberately composed hero. Keep the text in a protected left reading zone and the equipment in the right scene. |
| Large unused space below a small black CTA | The spacing feels accidental rather than intentional | Compose the complete headline, introduction and cyan CTA as one vertical group with measured spacing. |
| Almost entirely white, grey and black | The company loses the cyan identity evident on its existing site | Carry the observed cyan and graphite through the CTA, selected rules, regulation panel and footer. |
| Generic-looking typography | It provides little continuity with the company's existing brand | Use Titillium Web, a strong display scale, controlled line lengths and clear weight differences. |
| White product image box on a dark background | It exposes the asset boundary and makes the product look pasted into the page | Put the product on a matching white presentation stage, sized generously, with specifications beside it. |
| Equally weighted, small specification rows | The reader cannot scan the system's capabilities quickly | Separate label, principal value, unit and qualifying text typographically without changing the full string. |
| Repeated half-and-half sections | The page reads as a sequence of generic layout blocks | Use an image-led hero, application matrix, product plate, asymmetric service section, contained regulation panel, evidence pair and designed form. |
| Native video controls visible in a static section | They introduce a heavy browser UI strip into the composition | Use a selected poster in the static design. Show video controls only when a real video interaction is implemented. |
| Plain form fields and compressed footer | The end of the page feels unfinished | Design field states, labels, spacing and legal information with the same care as the hero. |

The existing site's strongest observed cues are its immersive imagery, graphite surfaces, cyan emphasis and Titillium Web typography. V2 should carry those cues forward with clearer product hierarchy, more deliberate image use and better mobile treatment. Do not copy the homepage wholesale.

## 2. Visual character and brand decisions

The intended impression is an established engineering business showing a working system: assured, technically precise, modern and commercially credible. Visual impact must come from the real subject and typography.

Use the geometry already present in the photographs: straight facade lines, the horizontal span of the drone, the vertical hose and the directed water jet. Reinforce this with consistent alignment, a few fine rules and generous image scale. Do not draw fictitious telemetry, radar screens, engineering dimensions or certification graphics over the photographs.

### Observed identity versus proposed interface extensions

| Decision | Status | Use |
| --- | --- | --- |
| Titillium Web | Observed in computed typography on the current homepage | Proposed primary family throughout this page |
| `#29333C` | Observed header background on the current homepage | Brand graphite; regulation and footer surfaces |
| `#00BFF3` | Observed cyan heading colour on the current homepage | Primary accent and main CTA fill |
| White and black logo files in the pack | Supplied identity assets | Black on a light header, white on dark footer |
| `#112634`, `#F3F7F9`, `#54636F`, `#E0E8ED`, `#00758F`, `#7B8B98` | Proposed UI extensions | Text, subtle surfaces, dividers, links and control borders |

These observations are not a complete official brand manual. If the supplied pack contains a newer authorised guide, follow that guide and record the change. Do not treat the live site's wordmark as interchangeable with the supplied eye-logo artwork.

### Surface and decoration rules

- Let the hero photograph occupy a large, uninterrupted area. Do not surround it with a dashboard frame, card border or floating badges.
- Use white for product photography so its background integrates naturally.
- Use pale blue-grey for one or two structural areas, not every alternating section.
- Use graphite decisively in the hero reading area, contained regulation section and footer.
- Use cyan in a few visible, purposeful locations. Do not colour every heading, border and paragraph cyan.
- Corners: 6 px for buttons, 8 px for inputs, 16 px for major contained panels. Hero and full-width sections have square outer edges.
- A restrained shadow is acceptable on the enquiry panel. Other separation should primarily come from colour, border and spacing.
- Avoid giant pill buttons, glass panels, gradient text, glowing outlines, floating decorative spheres and arbitrary diagonal section cuts.
- The only default gradient is a readability overlay on real photography. It is not a separate decorative graphic.

## 3. Content authority and page architecture

The exact copy is included in Appendix A for mapping, but Claude must read the actual local PDF. Do not transcribe from the reduced screenshot. Brochures and datasheets explain the equipment; they do not override the contest copy.

### Page order for the working prototype

| Order | Section | Visitor question | Dominant composition |
| --- | --- | --- | --- |
| 0 | Site header | Am I dealing with the right company? | Light, precise identity and navigation |
| 1 | Hero | What does this system do? | Immersive operating photograph and large headline |
| 2 | Applications | Is it relevant to my sites? | Six-entry matrix, qualified seventh entry, tall image |
| 3 | The system | What are its capabilities? | Large product stage and structured specification panel |
| 4 | What we supply | What support is available? | Service copy, authentic operational support photograph, continuation band |
| 5 | Regulatory position | Who holds the authorisation? | Contained graphite information panel |
| 6 | Proven in the field | What evidence is supplied? | Two carefully qualified case-study statements |
| 7 | Closing and enquiry | How do I discuss my own sites? | Strong invitation and fully designed short form |
| 8 | Footer | How do I contact and verify the business? | Clear identity, contact, brands and legal information |

### Known source differences: document once, keep out of the page UI

| Difference | Working decision |
| --- | --- |
| Announcement places Applications before The system; PDF reverses them | Follow the announcement's order for this prototype. |
| Announcement specifies `Book a demonstration` in the hero; PDF says `Discuss a requirement` | Use `Book a demonstration` in the hero and keep `Discuss a requirement` on the enquiry form. |
| PDF includes Proven in the field; announcement's six-section list omits it | Retain the supplied evidence section between regulation and enquiry so no copy is lost. |

These are explicit provisional reconciliations, not confirmation from the organiser. Keep them configurable and record them in handover notes. They do not block drafting the design.

Preserve all limitations: `Over`, `Up to`, `Around`, `at peak`, the development status, optional training and warranty, conditional loan equipment, operator-held authorisation, and the case-study qualification. Do not add pricing, testimonials, a logo wall, invented benefits, extra performance counters or unsupported badges.

## 4. Asset direction: select deliberately

Preserve the original asset pack. “Not displayed” does not mean “useless” and does not authorise deleting a source file. Keep production derivatives separate from originals.

### File-by-file use

| Supplied file | Priority and role | Instruction |
| --- | --- | --- |
| `Asset_Cleaning_Contest_Copy` | Essential content source | Extract the complete text; map each block to the page. |
| `BionicEyeLogoLargeBlack2.ai` | Essential header identity | Export the actual artwork to SVG if supported; otherwise a crisp transparent raster at sufficient resolution. Preserve proportions and artwork. |
| `BionicEyeLogoLargeWhite.ai` | Essential footer identity | Same process; inspect on graphite before using. |
| `C10 3.jpg` | Primary hero candidate | Wide operational scene visible in the contact sheet. Inspect full resolution and preserve drone, spray and facade. |
| `5f69a5e2-edb9-4dff-8bd8-14d3a8d570d0.MP4` | Primary applications-image source | Extract a sharp actual frame from the vertical operation footage. The default design uses a poster, not autoplay. |
| `865A0018.jpg` | Alternate operational photograph | Inspect as an alternative if the main hero or applications crop fails. The thumbnail is not evidence that a tall crop will work. |
| `C10-2.png` | Primary system-product candidate | Use the broad side/three-quarter view on a white stage. Preserve the entire equipment silhouette. |
| `C10-5.png` | Alternate system-product angle | Use instead of C10-2 only if the original angle or framing presents the product more clearly. Do not show both without a useful reason. |
| `C10-7.png` | Optional detail reference | Close detail; not a substitute for a complete product view. No invented annotations. |
| `C10.png` | Reserve product angle | Useful for visual inspection and possible alternate cropping; not necessary in the final page. |
| `TBE_Cleaning_Van-Compressed2.mp4` | Primary support-image source | Extract a frame showing the actual person, open van and equipment. Do not claim it depicts a service not established by the source. |
| `IMG_2240.JPG` | Support-image fallback | Operational field scene. Do not caption it as certified training or as one of the two documented case studies. |
| `IMG_2224.JPG` | Reference/reserve | Ground-level product context; use only if it adds a clearer view than the chosen product image. |
| `Screenshot 2026-05-10 at 20.11.03.png` | Reference/reserve | Check full-resolution quality; do not upscale a weak screenshot for the hero. |
| `IMG_2236.MOV` | Optional footage source | Inspect for useful real frames; do not ship the entire large file in the webpage. |
| `C10 Short Low bitrate.mp4` | Optional video source | Compression may be visible; compare with higher-quality footage before selecting. |
| `C10-Use-Case-Shorts-Final-Horizontal.mp4` | Optional video source | Possible short operational clip or sharp poster. Default page does not need a video carousel. |
| `C10_Introduction_short.mp4` | Reference/optional footage | Inspect content first; do not use a logo title frame as the main operational photograph. |
| `ABZ Clean Station _ Full Setup & Operation Guide.mp4` | Technical reference | Learn what the equipment actually is; no need to embed a long training video. |
| `C10 Academy.mp4` | Technical reference | Inspect if useful to understanding; exclude the large original from the web build. |
| `C10 Brochure.pdf` | Technical reference | Read for context; do not silently import additional claims or specifications. |
| `C10_Datasheet.pdf` | Technical reference | Resolve equipment identity; the contest copy governs displayed figures. |
| `README.md` in the supplied pack | Source instruction | Read before processing assets, even if short. |

### Inspect and record before implementation

For each selected asset record its actual path, dimensions, visible subject, intended section, crop at 1440 and 390, derivative filename and any conversion. A proposed crop is not verified until inspected in the rendered page.

Hero selection is successful only when all three elements remain understandable: **drone, water jet and target surface**. A large photograph of mostly sky is not a successful hero. On the desktop crop, keep the drone predominantly in the right-hand scene; on mobile, use a separate crop retaining the operation.

For video-frame selection, inspect several candidate frames around the operation. Reject motion blur, transitions, black frames, subtitles unrelated to the supplied page, and frames in which equipment is cut off. Extract a real frame; do not recreate it with AI. Keep the original video and record the selected timestamp.

Convert approved derivatives to appropriate web formats without changing their factual content. Prefer a sufficiently large hero source, roughly 2000–2800 px wide when the original supports it. Avoid upscaling. Provide responsive image sizes and intrinsic dimensions. Do not load the 0.6–0.9 GB video files as page backgrounds.

The default page needs **four principal visual assets**: hero scene, applications scene, system product, support scene, plus the two logo variants. More imagery is not automatically better.

## 5. Design system: measurable starting values

### Grid and spacing

| Token or rule | Desktop 1440 | Mobile 390 |
| --- | --- | --- |
| Main content width | 1296 px | 350 px |
| Outer content gutter | 72 px | 20 px |
| Main grid | 12 columns, 24 px gaps | 4 conceptual columns; mostly one visible column |
| Standard section padding | 88–104 px vertically | 56–64 px vertically |
| H2 to principal content | 40 px | 28 px |
| Paragraph gap | 18–20 px | 16–18 px |
| Main split gap | 48–64 px when using free proportions | 28–36 px |
| Major panel padding | 40–56 px | 24 px; allow 20 where needed |
| Primary button | 54–56 px high | 54–56 px high, full available width in hero |
| Input height | 54 px | 54 px |

Use the spacing family 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96. Optical adjustments are allowed where real artwork demands them. Do not generate unrelated padding values for every component.

### Colour tokens

```css
:root {
  --brand-graphite: #29333c;
  --brand-cyan: #00bff3;
  --ink: #112634;
  --paper: #ffffff;
  --surface-soft: #f3f7f9;
  --text-secondary: #54636f;
  --rule: #e0e8ed;
  --link-on-light: #00758f;
  --control-border: #7b8b98;
  --radius-control: 8px;
  --radius-panel: 16px;
  --page-max: 1296px;
}
```

Calculated solid-colour contrast examples: ink on cyan approximately **7.22:1**; white on graphite **12.86:1**; secondary text on white **6.19:1**; dark cyan on white **5.33:1**; control border against white **3.51:1**. White on bright cyan is only about **2.15:1**, so do not use white text on the primary cyan button. These checks do not prove photograph-overlay contrast; inspect the actual image separately.

### Typography

Load **Titillium Web** weights 400, 600 and 700. Use 400 for paragraphs, 600 for navigation and labels, and 700 for the headline and dominant values. Do not simulate missing weights. Preserve the font licence with distributed font files. Use supplied font files if present; otherwise use the official font distribution for this prototype and record the source.

| Role | 1440 px reference | 390 px reference | Treatment |
| --- | --- | --- | --- |
| Hero H1 | 72 px / 75 px | 42 px / 45 px | 700; tracking about -0.02em; sentence case |
| Principal H2 | 48 px / 53 px | 34 px / 39 px | 700; tracking about -0.01em |
| Compact panel heading | 38 px / 43 px | 30 px / 35 px | 700 |
| Service lead / enquiry introduction | 28 px / 37 px | 24 px / 32 px | 600; limit line length |
| Main paragraph | 18 px / 28 px | 17 px / 27 px | 400 |
| Applications entry | 21 px / 29 px | 20 px / 28 px | 600 |
| Main specification numeral | 48 px / 52 px | 38 px / 43 px | 600 or 700 |
| Specification qualifier / unit | 20–24 px / 28 px | 18–20 px / 26 px | Close to its value, never omitted |
| Specification label | 15 px / 21 px | 15 px / 21 px | 600 |
| Navigation and form label | 16 px / 22 px | 16 px / 22 px | 600 |
| Qualification and legal copy | 15 px / 23 px | 14–15 px / 22 px | Legible, not pale microtext |
| CTA label | 17 px / 22 px | 17 px / 22 px | 600 |

Sizes are starting values for the loaded font, not permission to clip or remove copy. Inspect real wraps. A 2 px optical adjustment is preferable to a forced line break that breaks other widths. Do not shrink all text to make a preferred height work.

Use one H1. Preserve section labels from the copy, with title-case visual treatment if desired. No additional sales eyebrow, model badge, decorative oversized wordmark or invented subheading is needed.

## 6. Desktop composition map

At 1440 px, major content begins at x=72 and ends at x=1368. The hero image extends to the viewport edges. The header, lower content and footer share the principal alignment.

| Region | Initial vertical allocation | Composition and purpose |
| --- | --- | --- |
| Header | About 96 px | Calm white identity/navigation strip |
| Hero | About 800–860 px, content-driven | Full photographic scene; approximately six-column left reading zone |
| Applications | About 760–850 px | White; eight-column matrix and four-column portrait image |
| System | About 850–1000 px | Pale surround; one large white product/specification plate |
| Support | About 680–800 px | White; copy/image composition followed by a service continuation band |
| Regulation | About 420–520 px including surroundings | Contained graphite panel with useful readable copy |
| Evidence | About 460–560 px | White; two typographic case-study statements |
| Enquiry | About 620–740 px | Pale surround; introduction plus carefully designed white form |
| Footer | About 340–440 px | Graphite; readable grouped information |

These are planning ranges, not fixed section heights. The complete desktop page will likely be around 5.0–5.8k px tall after typography is fitted. Let real content determine the final height. Do not insert blank space to reach a target, and do not compress content to meet one.

## 7. Header and hero: the first-screen quality gate

### Header

- White background; approximately 96 px high on desktop, 76 px on mobile.
- Align the provided black logo to the left gutter. Start with a visible-artwork envelope near 150–170 px wide and up to 64 px high; final sizing follows the actual mark's proportions.
- Inspect the AI file's artboard bounds. Remove empty export margins if necessary; do not distort the artwork to fill a guessed logo box.
- Use the exact navigation labels in the supplied order: Solutions, Support, Regulation, Sectors, About Us, Contact, Shop.
- Desktop navigation: 16 px, weight 600, approximately 24–28 px gaps, vertically centred. Align the last label to the right content edge.
- Use a fine bottom divider only if needed. Do not add a second large CTA to crowd the navigation; the hero carries the primary action.
- At widths where the actual labels no longer fit comfortably, switch to a menu button. Start testing this near 1100 px rather than shrinking navigation to microtext.
- Mobile: authentic logo at a suitable smaller size; a 44 × 44 px menu control with accessible label. Keep the closed header visually quiet.

### Hero: desktop composition

Use the full-resolution `C10 3.jpg` as the first candidate. The source already contains the operation and architectural geometry needed for a distinctive hero.

1. The image covers the hero area. Keep the source's natural colour and visible equipment. No fake depth-of-field, added water, cloned architecture or generated sky.
2. Place the text group at the main left gutter, vertically centred within generous top and bottom padding. Start with 72–88 px vertical padding.
3. Give the H1 a maximum width near 636 px. Start at 72/75 px, white, weight 700.
4. Keep the drone and principal spray outside that text zone. Tune the image crop to the real asset. A starting focal point near the upper-right area may work; it is not a verified percentage.
5. Use a graphite/ink overlay strongest behind text and fading towards the operation. A starting desktop gradient can move from roughly 92% dark at the far left, through 75–80% around the text's middle, to 10–20% at the right edge. Inspect the result; do not mechanically darken the whole photograph.
6. The right side must retain visible sky, facade detail and spray. If the full headline intersects the drone or jet, adjust the crop or text width before reducing the font.

The headline stays exactly:

> Facade and structure cleaning without access equipment.

An intended desktop phrase rhythm is three balanced lines, approximately:

- Facade and structure
- cleaning without
- access equipment.

This is typographic guidance, not three separate text elements or universal hard-coded line breaks. Inspect the actual font. Avoid a final line containing only `equipment.` if a modest width adjustment solves it.

Below the H1:

- 28–32 px gap to the introduction.
- Body maximum width about 560 px; 18/28 px, readable white. Use the full opening paragraph.
- 18 px paragraph gap to the full limitation paragraph. It is part of the message, not a tiny footnote.
- 28 px gap to the CTA.
- Cyan button, dark ink label, about 54–56 px high, 24–28 px horizontal padding, 6 px radius. Label: `Book a demonstration` under the documented working decision.

Keep the complete group visually connected. No floating metrics, extra product badge, scroll hint, carousel dots, rotating headline or social-proof bar.

### Hero: mobile composition

At 390 px, intentionally rearrange the hero:

1. Graphite surface begins below the light header.
2. H1 in a 350 px reading width, 42/45 px, around 32–40 px top padding.
3. After 24 px, show a real operational image across the 390 px width, starting around 250–280 px tall. Use a crop that still shows the drone, spray and target surface.
4. Continue on graphite with the full two-paragraph introduction, 20 px side gutters and 24–28 px top spacing.
5. Place the full-width cyan CTA below the copy, then 40–48 px bottom padding.

This lets the user see the equipment early while retaining all required copy. The mobile hero is allowed to exceed one screen. Do not reduce the type or omit the second paragraph to force the CTA above an arbitrary fold.

Use one semantic copy of the headline and introduction. Change layout with CSS grid/normal flow rather than rendering duplicate desktop/mobile text for search engines and assistive technology. The photo can be a positioned visual layer on desktop and an in-flow picture on mobile.

### Hero acceptance

At actual-size 1440 and 390 screenshots, the company identity, headline, operation and CTA must all look deliberately related. The photograph must not feel like an inserted thumbnail. Text must remain readable over the actual image. If this fails, correct the hero before implementing the rest of the page.

## 8. Applications: useful matrix, real operation

White background. Use the supplied heading `Applications`, 48/53 px, at the main gutter. Allow about 40 px before the main composition.

### Desktop

- Use an eight-column text region and four-column portrait-media region, aligned at their top edges.
- The first six application entries form a two-column by three-row matrix. Each entry has comfortable padding, a fine bottom rule and 21/29 px semibold text.
- Let cells grow with their actual text. Start around 128–140 px per row. Do not truncate the long facades entry to match shorter entries.
- Place the seventh entry, `Surface coating and treatment, currently in development`, across the full width beneath the matrix, with a subtle pale surface and 20–24 px padding. Retain its full development qualification at the same readable scale.
- Avoid seven separate rounded cards. Shared alignment and understated rules should make this feel like one designed information surface.
- At right, use a clean real poster from the supplied vertical MP4, with a starting aspect near 3:4, approximately 416 × 555 px. Select a frame in which the drone and water jet are recognisable.
- No native video-control strip appears in the static design. If optional playback is implemented, its poster must be the selected image and playback must work.

No invented individual subheadings such as “Eco-friendly”, “High efficiency” or “Zero downtime”. No photographs of solar farms, turbines or heritage buildings from outside the pack.

### Mobile

Use a full-width heading and single-column list. Entries retain 20/28 px type with 22–26 px vertical spacing and clear rules. Put the operational image after the complete list, with a crop that fits the available width and preserves its subject. Keep the qualified seventh entry fully visible.

This is the second section to include in the required 390 px contest-format preview. It should demonstrate intentional mobile typography and composition, not merely the removal of a grid column.

## 9. The system: product presentation and specifications

Use a pale blue-grey outer surface and a single substantial white inner plate. Place `The system` above the plate, aligned to the main content grid.

### Plate composition at 1440

- Width 1296 px; 16 px corner radius; subtle 1 px structural border.
- Approximately 40–48 px internal padding.
- Left product/content region roughly 58%; right specification region roughly 42%, adjusted for a 48–56 px internal gap.
- Product image at top-left, typically 620–680 px wide when the available grid allows; the complete drone should occupy most of that stage without touching its edges.
- Use `C10-2.png` first, with `object-fit: contain`. The image's white background and plate background must visually match. If the original is slightly off-white, inspect a faithful conversion or adjust the stage to match; never fake transparency with a destructive blend mode.
- Show propellers, landing gear, hose/nozzle attachment and the entire equipment silhouette. Do not crop the drone to create artificial scale.
- Beneath the product, place both complete system paragraphs at 18/28 px, with an 18 px paragraph gap. Keep line length comfortable.
- On the right, use a genuine five-row specification panel. A fine vertical divider may separate it from the product area; no heavy inner card stack.

### Specification hierarchy

Use a semantic definition list or equivalent accessible structure. The labels and values below are locked:

| Label | Complete value | Visual emphasis |
| --- | --- | --- |
| Working height | Over 60 metres | Emphasise `60`; keep `Over` and `metres` adjacent and readable |
| Flow rate | Up to 15 litres per minute | Emphasise `15`; retain `Up to` and the written unit |
| Working pressure | Around 170 bar at the nozzle, up to 255 bar at peak | Emphasise working `170`; the `255` peak must remain visibly qualified |
| Collision avoidance | Radar, with standoff control | Emphasise `Radar` at a smaller display size; keep the full phrase |
| Maximum take-off mass | 29 kg | Emphasise `29` with `kg` directly associated |

Labels: 15/21 px semibold. Main numerals: about 48/52 px. Qualifiers and units: 20–24 px, not tiny superscripts. Give the pressure row extra height because its meaning requires more text. Use thin rules between rows and generous spacing around the value.

Do not replace words with shorthand such as `60m+`, `15 L/min`, `255 BAR` or `29KG`. Do not present the peak pressure as the normal working pressure. Do not add flight duration, battery time, hose length or productivity specifications from other material.

The left and right columns need not have identical heights. Align their start and balance the overall mass; do not create a huge empty top-left heading area as in the rejected result.

### Mobile

Sequence: heading → full product image → both system paragraphs → specification panel. Use the entire 350 px content width. The product remains on a matching white surface; reduce plate padding to about 20–24 px. If this makes the image too small, allow the product stage to use the plate's full internal width with copy padding maintained separately.

Specifications stack. Keep labels above their values, retain all five rows and allow the pressure row to wrap naturally. No horizontal scroll and no two-column numeric grid that separates a qualifier from its number.

## 10. What we supply: make support tangible

White section, approximately 88–104 px vertical padding. Use `What we supply` as the heading.

### Desktop composition

The first part is an asymmetric editorial layout: about five columns of copy and seven columns of photography, with a 56 px gap where the grid permits.

- Left: heading, then the first supplied sentence at 28/37 px semibold. It should read as a confident, useful statement rather than another small paragraph.
- Below: the complete pilot-training and documentation paragraph at 18/28 px. Keep “available as an additional service” visible.
- Right: a wide still from `TBE_Cleaning_Van-Compressed2.mp4`, around a 4:3 or 3:2 crop based on the real frame. Show the person and relevant equipment together. Use natural framing and no invented captions.
- If a usable frame cannot be extracted, use the actual `IMG_2240.JPG` with an honest generic operational role.

Below this pair, after about 40 px, place the full third paragraph in a lightly tinted continuation band with 32–40 px padding. Use a broad readable measure around 850–980 px inside the band rather than stretching a paragraph across 1296 px.

Selective semibold emphasis may highlight the exact phrases concerning UK parts, the workshop, enhanced warranty and white label services. Preserve the full sentence structure and conditions. Do not split this into five invented service cards with rewritten descriptions.

### Mobile

Heading → first sentence → second paragraph → support photograph → third-paragraph band. Use 28–32 px gaps between major elements. Do not shrink the continuation text or turn it into a closed accordion merely to shorten the page.

## 11. Regulatory position: clear, designed and readable

This is a contained graphite panel within the principal page grid, not another full-width grey two-column stripe.

- Maximum width 1296 px; 16 px radius; 48–56 px desktop padding, 24 px mobile padding.
- Use `Regulatory position` as a white 38/43 px heading.
- Keep both complete paragraphs on a comfortable reading measure, roughly 900–980 px, with 18/28 px type. At this width the text will occupy several lines; let the panel grow.
- Use white or sufficiently light text. Emphasise the exact sentence “The Operational Authorisation is held by the operator and not the supplier.” with weight, not a separate invented warning label.
- Add the supplied `How authorisation works` control beneath the copy with about 28 px spacing. Use a clear outlined or cyan-accented treatment suited to the graphite background.
- Do not insert a CAA logo, approval stamp, shield icon or newly written legal advice.
- Keep the supplied dates and C10 application status unchanged. This page reproduces client copy; the design workflow is not a regulatory update service.

Link behaviour: use a verified destination from the project or client's actual navigation. If no destination is known, record the missing URL as a handover issue; do not invent a `/regulation` route and claim it works.

## 12. Proven in the field: evidence with its context intact

Keep the supplied section because the PDF includes it. White background, principal grid, 48 px heading.

Use the first sentence as a normal introductory paragraph:

> ABZ Innovation's case studies show what the C10 delivers in service.

Then present the two subsequent complete sentences as two side-by-side typographic case-study articles. This is a change in paragraph presentation, not a rewrite.

- Use a clear dividing rule and substantial internal spacing; do not add a coloured metric dashboard.
- Emphasise `300` within the factory-facade sentence and `550` within the roof sentence, at approximately 56–64 px on desktop and 42–48 px on mobile.
- Keep `around`, `about`, the units, chemical statements, timing and site context in the same article and normal reading order.
- Avoid pulling out “three hours” or “fifteen minutes” as separate universal promises.
- Place the full qualification directly below both articles at 15/23 px. It belongs with the evidence, not in the footer.
- Do not attach a generic supplied photograph to either statement in a way that falsely identifies it as the documented factory or roof.

On mobile, stack the two articles, then the complete qualification. Maintain the same semantic text in DOM order; styled spans must not join words accidentally or duplicate numbers for accessibility.

## 13. Enquiry and footer: complete the visual standard

### Enquiry

Use a pale blue-grey section with generous outer padding. Build an approximately five-column introduction and seven-column form composition, with a 64 px gap where space allows.

The full closing paragraph is the introduction. Set it around 28/37 px, weight 600, with a maximum width near 460 px. Do not replace it with a new heading such as “Ready to transform your cleaning?” The supplied wording is specific and credible.

The form is a designed white panel with 32–40 px padding, 16 px radius and a very restrained shadow or border. It must not resemble unstyled browser inputs.

| Field | Desktop placement | Control |
| --- | --- | --- |
| Name | Row 1, left | Text input, persistent visible label |
| Company | Row 1, right | Text input, persistent visible label |
| Email | Row 2, left | Email input, relevant autocomplete |
| Telephone | Row 2, right | Telephone input; accept international formatting |
| Sites or work involved | Full-width row | Textarea, approximately 150–170 px initial height |

Use 24 px gaps between rows and 20–24 px between columns. Labels are 16/22 px semibold with 8 px spacing above their controls. Inputs are 54 px high with 16–18 px entered text, 14–16 px horizontal padding and an 8 px radius. Empty inputs do not need invented placeholder text.

Normal borders must be visible. Focus uses a clear outline with contrast on white; do not rely solely on a subtle cyan shadow. Define empty, focus, filled, error and disabled/loading styles. Required/optional status and final validation messages need an actual product decision; do not invent business rules from the field list.

Use `Discuss a requirement` on the cyan submit control with dark ink text. Keep the label on one line where it naturally fits. The form may use a full-width CTA within its panel if it improves balance.

For a local visual prototype without an authorised submission endpoint, prevent network submission and document the form as a prototype. Do not display a fake “Message sent” success state. Real success belongs to a confirmed backend response. Do not add a newsletter opt-in, marketing consent copy or privacy claims that were not supplied.

On 390 px, stack the introduction above the form. Stack all five fields in one column; do not keep Name/Company squeezed side by side. Use 20–24 px panel padding and maintain 54 px controls.

### Footer

Use graphite with the supplied white logo. Give the footer enough space to read comfortably.

Desktop upper layout: an identity area plus grouped contact information, specialist-brand text and authorisation information. Use an intentional grid such as 3/4/5 columns, adjusting to the actual logo and text lengths.

- The company address remains complete.
- Telephone and email remain distinct, readable links using the supplied values.
- Show `Specialist brands:` and the three supplied names as text. Do not fetch or invent their logos.
- Include both supplied authorisation statements and the CAA/PowerWash statement in full.
- Place registered-company information below a quiet separator, at 14–15 px, retaining the registered-office address.
- Keep the operating address and registered office distinct; they are not duplicates to deduplicate.

Mobile: stack these groups in a clear reading order with 28–32 px gaps and 14–15/22 px text. Do not compress the footer into four tiny columns or hide legal copy in an accordion.

## 14. Responsive rules beyond the two exports

The required exports are 1440 and 390 px. The page must also behave between them.

| Width | Intended adaptation |
| --- | --- |
| 1920 | Content remains capped at 1296 px; hero photo still fills the viewport; no uncontrolled text stretching |
| 1440 | Reference composition as specified |
| 1280 | Reduce outer gutters to about 48 px; reduce display type slightly only if the actual crop/wrap requires it |
| 1100–1024 | Switch crowded navigation to menu; inspect hero overlap; reduce split gaps; stack product/spec panel if either becomes cramped |
| 900 and below | Use the stacked hero composition; lower sections move towards one-column layouts |
| 768 | Maintain comfortable gutters around 28–32 px; no residual fixed desktop widths |
| 390 | Reference mobile composition, 20 px content gutters |
| 360 | Preserve all content and controls without horizontal overflow or tiny text |

Choose final breakpoints from observed wrapping rather than device names alone. A useful maximum-width container is `min(1296px, calc(100% - 2 * var(--gutter)))`, with responsive gutter tokens. Set children that contain long text or form controls to shrink appropriately; do not solve overflow by hiding the body horizontally.

Do not lock sections to viewport height. Do not use absolute positioning for the main text flow. Avoid hard-coded desktop line breaks on mobile. Keep image focal choices separately adjustable by breakpoint.

## 15. Interaction, accessibility and motion

### Interaction

- Hero CTA scrolls to the enquiry form when that is the defined local interaction. Account for the header in scroll positioning and move focus appropriately when useful.
- Menu opens and closes predictably, exposes state to assistive technology, supports Escape and returns focus to its trigger.
- Header links use verified destinations. In-page links are only used where they genuinely match the label's intended destination; do not invent empty pages.
- Phone and email use the exact supplied values in `tel:` and `mailto:` links.
- Do not make application entries appear clickable unless they actually navigate to supplied, relevant destinations.
- If optional video is implemented, provide real playback/pause behaviour and a good poster. No sound autoplay and no decorative play button without a player.

### Accessibility baseline

- Logical landmarks, one H1 and a coherent heading sequence.
- Real buttons and links, labelled inputs, useful autocomplete and keyboard navigation.
- Meaningful alternative text for operational/product images; decorative overlays are ignored by assistive technology.
- Normal text contrast target at least 4.5:1; large text at least 3:1; visible control boundaries and focus indicators.
- Controls have comfortable pointer targets, generally at least 44 × 44 px in this design.
- At 200% zoom, copy stays available and controls remain usable. Check reflow and narrow widths.
- Content does not depend on hover, motion, colour alone or a video loading successfully.

### Motion

Default to a strong static composition. If motion is added, keep it restrained: button colour transition around 160–200 ms, menu transition around 200–240 ms, optional small opacity transition for a loaded image.

No scroll hijacking, pinned multi-screen product scenes, cursor effects, typewriter headlines, parallax that moves the drone independently of its photograph, or count-up animations on factual values. Do not hide whole sections until an intersection observer fires; full-page exports and reduced-motion visitors must see all content.

GSAP is not required for this page. Do not install an animation library as a substitute for solving composition. Honour reduced-motion preferences and disable decorative animation in capture mode.

## 16. Implementation and WordPress readiness

Inspect the current project before changing its stack. Reuse a working development environment, existing routing and useful image processing. Do not reinstall the application or erase unrelated work simply because the visual direction is changing.

For a new local prototype, use a small, appropriate front-end setup. Framework choice is secondary to the rendered result. Build custom components from the specified composition; do not start from a theme demo, purchased template or UI kit.

Suggested component boundaries: Header, Hero, Applications, SystemPanel, Support, Regulation, Evidence, EnquiryForm, Footer. Keep exact content in a clearly structured source rather than scattering rewritten strings through components.

Each principal section should map to a manageable WordPress block or template component later. Define text, image and link fields separately; use shared design tokens and reusable control styles. Editors should be able to update content without positioning text manually over arbitrary absolute coordinates.

| Design element | Later WordPress implementation principle |
| --- | --- |
| Header/footer | Shared template parts with genuine navigation and contact settings |
| Hero | Controlled image, focal points, exact title/body and CTA fields |
| Applications | Repeater/list of supplied entries plus one contextual image |
| Product/specifications | Product image, two content paragraphs and a semantic specification collection |
| Support | Copy fields and one image with a continuation block |
| Regulation/evidence | Structured text preserving qualifications and link destination |
| Form | Accessible form integration connected to an actual submission workflow |

Do not promise a completed WordPress backend from an HTML prototype. Do not implement the later twenty-seven pages within this task.

### Performance and export readiness

- Load the hero image promptly; lazy-load lower imagery. Supply intrinsic sizes to reduce layout shifts.
- Use responsive derivatives; do not serve all images at their multi-megabyte source size.
- Load only the font weights actually used. Verify them before capture.
- Keep animation and component dependencies modest.
- Render important content without waiting for scroll-triggered effects.
- Before screenshots, wait for fonts and images to finish loading and verify that no fallback font, broken asset or skeleton is visible.
- Capture at actual CSS viewport sizes. A file called `desktop-1440` must actually be 1440 px wide at the required 1× export; provide a separate 2× export only as an additional option.

## 17. Build stages and visual verification

### Stage A — inspect and map

Read this entire document, the PDF, the existing project and the actual images. Create a brief content/asset map. Record observed facts and unresolved source conflicts. Check which skills are actually installed. This stage should prepare execution, not turn into an open-ended redesign questionnaire.

### Stage B — render only the header, hero and applications

Implement the primary font, tokens, header, hero and applications. Capture at 1440 and 390. Inspect the rendered images at full size and in an overview.

Check the four focal priorities: brand identity, headline, visible operation, primary action. Then inspect the applications matrix and mobile flow. Fix specific problems in image crop, heading wrap, line length and spacing before continuing.

This is a self-review checkpoint within the authorised work, not a requirement to stop and ask for routine permission. If a necessary asset is genuinely missing, report the specific gap and continue independent work that does not require it.

### Stage C — finish the lower page

Build the product/specification plate, support composition, regulation panel, evidence, form and footer. Reuse the established tokens without reusing the same section composition everywhere.

### Stage D — complete content and interaction checks

Compare rendered text to the confirmed PDF with whitespace normalised. Treat intentional duplication in the footer and specification panel separately; do not let a simplistic deduplication routine remove it. Preserve punctuation and all factual qualifiers. Verify every source block is present exactly where intended.

Test CTA navigation, menu focus, keyboard access, field labelling, responsive overflow, link destinations and image loading. Run the project's build/lint checks when available. Do not write tests that only restate CSS values.

### Stage E — inspect fresh exports and correct remaining defects

Capture fresh 1440, 390 and one intermediate-width view after the last visual change. Inspect them, not merely their filenames. If a defect remains, fix it and recapture the affected views. Avoid endless arbitrary redesign once the specified requirements and visual quality checks pass.

### Design review questions that require visible evidence

| Check | Passing evidence | Failure requiring correction |
| --- | --- | --- |
| Identity | Supplied logo is legible; cyan/graphite and Titillium form a coherent system | Default black buttons, tiny logo and anonymous font |
| Hero | Drone, jet and facade are visible; headline and copy read comfortably | Obscured subject, largely empty sky, competing text/photo boundaries |
| Hierarchy | H1, H2, body, data and qualification have distinct readable roles | Everything looks like the same size and weight |
| Product | Whole C10 is large and naturally integrated on white | Small product inside an obvious pasted white box |
| Rhythm | Section silhouettes and emphasis vary while sharing alignment | Repeated left heading/right paragraph strips |
| Mobile | Headline/image/copy order is purposeful; no collisions or tiny controls | Desktop composition compressed into 390 px |
| Enquiry | Inputs, labels, button and spacing look designed and work by keyboard | Default fields, hidden labels or fake submission success |
| Completeness | Every supplied block and qualification is present | Copy removed to make the layout fit |

### Optional internal scorecard

Score honestly out of 100: first-screen composition 25, brand continuity 15, typography 15, product/specification clarity 15, mobile design 15, lower-page consistency 10, technical readiness 5. Use 85 as an internal target, not a guarantee of the client's judgement. Any missing source content, broken mobile view, wrong imagery or missing export invalidates a flattering score.

For each claimed improvement, cite a concrete visible change in the review note. “Premium”, “beautiful” and “professional” are not evidence by themselves.

## 18. Skills for Claude Code: a focused set

Skills support judgement and verification; they do not replace this art direction. If a skill suggests a different palette, generic SaaS layout or unrelated type pairing, this page-specific brief remains the visual authority.

| Skill | Maintainer/source | Use in this task |
| --- | --- | --- |
| `frontend-design` | Anthropic skills repository | Main visual implementation: composition, typography, spacing and deliberate custom styling |
| `webapp-testing` | Anthropic skills repository | Browser inspection, responsive screenshots and functional interaction checks |
| `ui-ux-pro-max` | nextlevelbuilder | Targeted review of forms, contrast, touch interaction, responsive typography and hierarchy; do not ask it to replace the chosen brand system |
| `frontend-ui-engineering` | Addy Osmani agent-skills | Optional support for semantic, maintainable, responsive implementation |
| `browser-testing-with-devtools` | Addy Osmani agent-skills | Optional alternative/complement when actual DevTools tooling is available |
| `code-review-and-quality` | Addy Osmani agent-skills | Final focused review of implementation quality |

### Inspect existing installation first

These are shell commands for a local Claude Code installation, not messages to paste as ordinary chat text:

```bash
claude plugin list
claude plugin marketplace list
```

Check the actual project-local skills as well. Install only missing capabilities. Inspect a plugin's components before installing; preserve existing project settings. Do not claim that naming a skill in a prompt means it was loaded.

### Primary installation

```bash
claude plugin marketplace add https://github.com/anthropics/skills.git
claude plugin install example-skills@anthropic-agent-skills --scope local
```

Use the installed `frontend-design` and `webapp-testing` skills at their relevant stages. Verify the actual namespaced skill names exposed by that installation.

### Targeted UX review skill

```bash
claude plugin marketplace add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git
claude plugin install ui-ux-pro-max@ui-ux-pro-max-skill --scope local
```

If that installation route fails and the project's settings have been inspected, the maintainer also documents:

```bash
npx ui-ux-pro-max-cli init --ai claude
```

Use one successful installation route, not both unnecessarily. Read its actual local instructions and dependencies. Do not run broad automated design-system generation that overwrites the tokens in this brief.

### Optional engineering/review bundle

```bash
claude plugin marketplace add https://github.com/addyosmani/agent-skills.git
claude plugin install agent-skills@addy-agent-skills --scope local
```

Use a supported full-bundle installation so shared references remain available; copying an isolated `SKILL.md` may omit required resources. Invoke only the relevant skills for this page, not every workflow in the bundle.

After installation, inspect the actual result and verify skill availability. In an already-running interactive Claude Code session, use `/reload-plugins` if the installation reports that a reload is needed. That slash command belongs inside Claude Code, not in PowerShell or Bash. Cloud and non-interactive environments may differ; report the actual environment limitation instead of inventing successful installation.

Record skill source, installed version when available, and whether it was actually used. If downloads are blocked, state that and continue useful work with available capabilities. Do not bypass platform permissions or pretend unavailable browser/Figma tools exist.

## 19. Deliverables and honest completion

### Local design prototype and review package

- Completed responsive Asset Cleaning prototype using the selected real assets and exact copy.
- Actual 1440 px full-page PNG, and PDF if the environment can create it reliably.
- Actual 390 px export including the hero and applications. A full mobile export is also useful for internal review.
- Short content/asset map and a brief verification note identifying what was checked and what remains unresolved.
- Reusable tokens and clearly structured components suitable for a later WordPress implementation.

### The contest also requires

1. A real, viewable Figma file link.
2. A two-to-three-minute screen recording in the entrant's own voice, walking through the Figma file and design decisions.
3. A note of no more than 100 words on typeface and colour choices.

A coded page and screenshots do not supply those requirements by themselves. If Figma editing is available, create genuinely editable text, components and Auto Layout frames at the correct sizes. Do not paste a screenshot into a single frame and describe it as a completed design file. Never invent a Figma URL.

Suggested Figma pages: `01 Foundations`, `02 Desktop`, `03 Mobile`, `04 Components`, `05 Notes`. Use meaningful component names and explicit default/hover/focus/error states where applicable. Keep source-conflict and asset notes outside the customer-facing frames.

### Typeface and colour note — use only if the design actually follows it

> Titillium Web continues the company's existing typographic identity, with a stronger display scale and clear specification hierarchy. Graphite and cyan retain the website's recognisable palette, while white product surfaces integrate the supplied photography. Dark text on cyan keeps primary actions legible. Pale blue-grey separates supporting content, and restrained rules and spacing give the page a precise, technical character.

### Walkthrough outline for the entrant's own recording

- 0:00–0:25: Explain the Asset Cleaning audience and the page's central visual decision.
- 0:25–0:55: Show the hero, real operation and relationship to the existing brand.
- 0:55–1:25: Show applications and the complete product/specification composition.
- 1:25–1:55: Explain support, regulatory clarity and evidence qualifications.
- 1:55–2:25: Show the 390 px design, image treatment and form.
- 2:25–2:50: Show reusable Figma components and the intended WordPress structure.

Prepare notes, but the entrant records their own voice and demonstrates the real file. Report incomplete deliverables plainly.

## 20. Master prompt for Claude Code

Copy the following prompt into Claude Code with this MD and the real assets in the project. This prompt intentionally asks for execution and visual verification, not another generic design proposal.

```text
You are rebuilding The Bionic Eye's Asset Cleaning page after a rejected first design.
Act as a senior digital art director and front-end engineer. Execute the work in the
existing project; do not stop after presenting a plan.

Read BIONIC_EYE_ASSET_CLEANING_REDESIGN_V2.md completely before changing the UI.
This V2 brief replaces the previous visual direction. Do not merge its composition
with the rejected layout or merely recolour the old page. Preserve useful technical
infrastructure, exact content and original assets, but rebuild the page composition.

INPUTS
- This V2 MD.
- The real bionics_ asset folder or archive.
- The actual Asset_Cleaning_Contest_Copy PDF/document.
- The rejected desktop screenshot, if available.
- The existing company website: https://www.thebioniceye.co.uk/

Inspect the actual files and project. Read the supplied copy in full. View the original
images at sufficient resolution. Use the current website only as a brand benchmark;
do not import its extra copy, photography, partner logos or claims. The reduced
rejected preview may not be a true 1440 px export, so inspect file dimensions.

DESIGN COMMITMENTS
1. Use Titillium Web with verified loaded 400/600/700 weights. Start from the observed
   graphite #29333C and cyan #00BFF3, plus the V2 interface tokens. Dark text on cyan CTAs.
2. Use the authentic supplied black/white logos without distortion or invented redraws.
3. Desktop 1440: 1296 px content width, 72 px gutters. Light header around 96 px.
4. Build a full-width photographic hero, beginning with C10 3.jpg. Keep the drone,
   water jet and target surface visible. Protect the left text with a directional
   dark overlay while retaining clear detail on the right. H1 starts around 72/75 px.
5. Keep the exact headline, both introduction paragraphs and the required CTA.
   Compose them as one deliberate group. No floating statistics or extra slogan.
6. Mobile 390: use 20 px text gutters and an intentional sequence of headline,
   operational image, complete introduction and CTA on a unified graphite hero.
   Start H1 at 42/45 px. Do not squeeze desktop text over a tiny cropped background.
7. Applications: six complete entries in a two-column desktop matrix, the qualified
   seventh beneath, and a tall actual operational poster alongside. Single-column
   mobile layout. No stock icons or invented application photographs.
8. System: large complete C10 product on a matching white stage, full system copy,
   and five properly designed specification rows. Make qualifiers and units readable.
   Never put a small white product-image rectangle on a black background again.
9. Give support, regulation, evidence, enquiry and footer their distinct V2 compositions.
   Do not repeat a heading-left/paragraph-right section pattern down the page.
10. Design the form controls and their real interaction states. Do not fake submission.

CONTENT AND SOURCE DISCIPLINE
Use the supplied wording exactly, preserving every condition and qualification.
Follow the V2 documented working decisions for section order, hero CTA and the extra
Proven in the field section. Do not silently resolve source conflicts differently.
Do not add claims, rewritten benefits, testimonials, prices, logos or technical values.
No stock/AI-generated imagery, generative fill, purchased templates or UI-kit starting
layouts. This is an internal AI-assisted prototype under the provenance note in V2;
do not label it a compliant contest submission or fabricate missing deliverables.

SKILLS
Inspect installed skills first. Use Anthropic frontend-design for visual execution
and webapp-testing for browser verification. Use ui-ux-pro-max only for targeted UX,
contrast, responsive and form review within the chosen brand system. Use the relevant
Addy Osmani engineering/review skills if available and useful. Install missing skills
from the official maintainer sources using section 18, inspect results, and load their
actual instructions. Do not claim successful installation or use without evidence.
Do not let a generic skill-generated palette or template override the V2 composition.

WORKFLOW
A. Inspect project, copy, logos and photographs. Create a concise source/asset map.
B. Implement only the header, hero and applications first. Render at 1440 and 390.
   Open and inspect screenshots. Correct image focal points, headline wraps, copy
   widths, spacing and contrast. Continue only when the first-screen composition
   clearly meets the V2 acceptance checks; do not substitute build success for review.
C. Complete the system, support, regulation, evidence, enquiry and footer.
D. Verify exact copy coverage, five specifications, seven applications, full footer,
   CTA/menu/keyboard behaviour, image loading, responsive layout and actual links.
E. Inspect fresh full-page screenshots at 1440, 390 and an intermediate width.
   Correct visible defects and recapture affected views. Check actual export dimensions.

Work autonomously on reversible implementation and routine design decisions already
specified here. Do not ask me to choose a style again. If a necessary input is genuinely
missing, identify it precisely and continue work that does not depend on it. Do not
invent assets, browser access, functioning forms, Figma files or successful tests.

OUTPUT
Deliver the completed local prototype, real target-size exports, concise source/asset
notes and evidence of checks performed. Create an editable Figma file only if actual
authorised Figma capabilities are available; otherwise state that it remains outstanding.
Include the <=100-word type/colour note if accurate. The entrant's own-voice recording
remains a separate real deliverable. Do not publish, enter the contest or contact the
client unless separately instructed.

Your completion report must identify concrete visual changes and remaining blockers.
The result should demonstrate the V2 composition in rendered screenshots, not merely
describe itself as premium, beautiful or professional.
```

---

## Appendix A. Exact source-copy map

Reference: supplied `Asset_Cleaning_Contest_Copy(1).pdf`. Copy below preserves wording while removing PDF line wrapping. Source section labels and field definitions are identified separately from paragraph content. Compare with the actual local version before implementation.

### A1. Header navigation

Solutions | Support | Regulation | Sectors | About Us | Contact | Shop

Source instruction for Shop: links to our online store. This instruction is not extra visible navigation text.

### A2. Hero

Headline:

> Facade and structure cleaning without access equipment.

Opening paragraph 1:

> Drone cleaning removes the requirement for scaffolding, cradles, powered access or rope teams across a substantial proportion of facade, glazing, cladding and roof maintenance. The work is carried out from ground level, and setup is measured in minutes rather than days.

Opening paragraph 2:

> It does not replace access equipment for every application. We identify where it does not before specifying a system.

PDF button: `Discuss a requirement`. Announcement's required hero button: `Book a demonstration`. Apply the documented working decision in section 3.

### A3. The system

Paragraph 1:

> The ABZ Innovation C10 is the platform we have standardised on. It operates to over 60 metres, delivers up to 15 litres per minute at a working pressure around 170 bar at the nozzle, up to 255 bar at peak, and uses radar for collision avoidance and standoff control. Reverse osmosis water can be specified where surface finish, seals or painted surfaces require it.

Paragraph 2:

> Maximum take-off mass is 29 kg. The sub 25 kg limit that applied under the earlier authorisation route is not required under UK SORA.

| Specification | Value |
| --- | --- |
| Working height | Over 60 metres |
| Flow rate | Up to 15 litres per minute |
| Working pressure | Around 170 bar at the nozzle, up to 255 bar at peak |
| Collision avoidance | Radar, with standoff control |
| Maximum take-off mass | 29 kg |

### A4. Applications

- Commercial and residential facades, and glass curtain walling
- Solar farms and rooftop arrays
- Wind turbine towers
- Industrial silos, tanks and cladding
- Heritage and listed structures
- Graffiti removal
- Surface coating and treatment, currently in development

### A5. What we supply

Paragraph 1:

> The drone, pressure system and nozzle set specified against your surfaces.

Paragraph 2:

> Pilot training is available as an additional service, and we can advise on preparing the operations manual and supporting documentation required for CAA authorisation.

Paragraph 3:

> Parts are held in the United Kingdom, repairs are carried out in our own workshop, and the enhanced warranty option provides priority servicing and maintenance, with loan equipment where parts are unavailable. We also offer white label services, arranged in advance, giving clients additional capacity.

### A6. Regulatory position

Paragraph 1:

> Cleaning operations at height adjacent to structures fall within the Specific Category, which requires an Operational Authorisation from the Civil Aviation Authority. Since April 2025 these are granted through UK SORA.

Paragraph 2:

> The Operational Authorisation is held by the operator and not the supplier. The Bionic Eye assists clients in attaining their own, drawing on the UK SORA authorisation we hold for cleaning operations with our own PowerWash system, obtained in January 2026, and on the applications we have supported since. The first client Operational Authorisation for the C10 has now been granted, in the client's own name, with two further applications at final assessment.

Button: `How authorisation works`

### A7. Proven in the field

Main paragraph, which may be presented as its three complete sentences:

> ABZ Innovation's case studies show what the C10 delivers in service. A factory facade was cleaned at around 300 square metres an hour using chemical-free reverse osmosis water. A roof carrying ten years of moss, about 550 square metres, was cleared in roughly three hours with no chemicals, and the system was set up and ready to fly in fifteen minutes.

Qualification:

> Figures are from ABZ Innovation case studies. Actual output varies with the surface, the level of soiling and site conditions.

### A8. Closing and enquiry

> Send us the sites you intend to work on. We will identify which are straightforward under a standard authorisation, which require additional work, and which are unlikely to be viable, before any commitment is made.

Form fields: `Name`, `Company`, `Email`, `Telephone`, `Sites or work involved`.

Button: `Discuss a requirement`

### A9. Footer

> The Bionic Eye, Bionic House, Hall Farm, Berry Lane, Chorleywood, WD3 5EX, United Kingdom.

> Telephone +44 1753 655886. Email info@thebioniceye.co.uk.

> Specialist brands: FarmingByDrone | PowerWash | CleaningByDrone

> The Operational Authorisation is held by the operator and not the supplier. The Bionic Eye assists clients in attaining their own.

> CAA approved since 2014. UK SORA authorisation held for cleaning operations with the PowerWash system since January 2026.

> The Bionic Eye Ltd. Registered in England and Wales, company number 09053005. Registered office: 22 Wycombe End, Beaconsfield HP9 1NB.

## Appendix B. Reference sources and scope

Reviewed 7 October 2026. External links below support brand observation, font sourcing or tooling instructions. They do not authorise importing extra website content into the contest page.

- [The Bionic Eye current website](https://www.thebioniceye.co.uk/) — visual brand benchmark; live computed font and colours observed during review.
- Supplied `Asset_Cleaning_Contest_Copy(1).pdf` — exact page text, fields, specifications and footer.
- Supplied asset contact sheet and original-file list — preliminary image-role selection; full originals still require inspection in Claude's project.
- [Titillium Web licence in the Google Fonts repository](https://github.com/google/fonts/blob/main/ofl/titilliumweb/OFL.txt) — font-distribution licence reference.
- [Anthropic skills repository](https://github.com/anthropics/skills) — maintainer installation source.
- [Anthropic frontend-design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md) — visual implementation skill.
- [Anthropic webapp-testing](https://github.com/anthropics/skills/blob/main/skills/webapp-testing/SKILL.md) — browser testing skill.
- [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) — targeted UX review skill and installation instructions.
- [Addy Osmani agent-skills](https://github.com/addyosmani/agent-skills) — optional engineering/review skill bundle and shared references.
- [Claude Code plugin installation](https://code.claude.com/docs/en/discover-plugins) and [plugin commands reference](https://code.claude.com/docs/en/plugins/cli-reference) — environment and installation guidance.

The proposed design is ready to guide a new implementation. Its visual quality must be demonstrated by the rendered result and review workflow; this document does not claim that the rebuilt website, Figma file or recording already exists.
