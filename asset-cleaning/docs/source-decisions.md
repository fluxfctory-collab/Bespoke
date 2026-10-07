# Source decisions and known conflicts

Authoritative visitor-facing copy: `sources/Asset_Cleaning_Contest_Copy.pdf` (The Bionic Eye Ltd, "Design contest copy, October 2026", 2 pages). Its full text is extracted to `sources/contest-copy.txt`; `content/page.json` holds the page copy with a source reference on each section.

**None of the choices below has been confirmed by the contest organiser or the client.** They are provisional settings for an internal draft, held in `config/prototype.json` so they can be changed without touching the templates.

## Comparison of the PDF with the brief's appendix

The PDF's text matches the brief's §22 appendix word for word. The only difference is layout: the PDF's text layer puts each specification label and value on separate lines, while the appendix sets them side by side. No newer copy file was found in the `bionics_` pack. I did not have the contest announcement itself, so C-01 to C-03 below come from the brief's summary of it.

## Known conflicts (from the brief)

| ID | Announcement (per brief) | Supplied PDF | Internal-draft setting | How to change |
| --- | --- | --- | --- | --- |
| C-01 | Hero → Applications → The system | Hero → The system → Applications | `section_order: "announcement"` | Set `"pdf"` in `config/prototype.json`, then `npm run build` |
| C-02 | Hero button "Book a demonstration" | Hero button "Discuss a requirement" | `hero_cta: "Book a demonstration"` | Set `"Discuss a requirement"`; the build refuses any other value |
| C-03 | Six main sections | Seven: adds "PROVEN IN THE FIELD" between regulation and enquiry | `include_proven_in_field: true` (supplied content kept) | Set `false` to drop the section |

Fixed by the PDF and not configurable: closing button "Discuss a requirement"; regulatory link "How authorisation works".

**Before any final submission:** obtain the organiser's written answers to C-01, C-02 and C-03.

## Discrepancies inside the supplied pack (new, found during inspection)

The brochure and datasheet are not page copy and were not used for wording. They do disagree with the copy PDF in places that the client should know about:

| ID | Item | Copy PDF (used on page) | `C10_Datasheet.pdf` | `C10 Brochure.pdf` |
| --- | --- | --- | --- | --- |
| S-01 | Maximum take-off mass | 29 kg | Max. take-off weight 29 kg | MTOM 24.9 kg (p8) |
| S-02 | Working height | Over 60 metres | not stated (optional hose 30 m / 60 m) | "Up to 60 meters"; "Max Height Reach: 60 meters" (pp4, 9) |
| S-03 | Pressure | Around 170 bar at the nozzle, up to 255 bar at peak | Working 170 bar, max 255 bar (optional Kärcher HD 7/17 M PLUS) | "Up to 200 bar" (pp4, 9) |
| S-04 | Flow rate | Up to 15 litres per minute | 11.6 l/min (Kärcher unit); the US column reads 30.6 gal/min, which does not match 11.6 l/min (≈ 3.06 gal/min) | 900 l/h (~15 l/min) |

The page follows the copy PDF exactly in every case. S-01 matters most: the brochure figure (24.9 kg) is consistent with the "sub 25 kg limit" that the copy says is no longer required, while the copy and datasheet give 29 kg.

## Copy handling rules applied

- Every visitor-facing string is verbatim. `qa/qa.py` first checks each expected string against the PDF text, then checks that nothing in the PDF (apart from outline metadata) is left uncovered, and finally checks that each string is present in the rendered page at all nine tested widths. Last run: no missing strings, no uncovered PDF copy.
- Outline labels were not displayed: "HEADER NAVIGATION", "1. HERO: HEADLINE", "HERO: OPENING", "Button: [ ]", "Figures for the specification panel (taken from the text above):", "Enquiry form fields:", "7. CLOSING AND ENQUIRY", "FOOTER", and "(links to our online store)".
- Section labels from the PDF are shown in sentence case: "Applications", "The system", "What we supply", "Regulatory position", "Proven in the field".
- The pipe separators in the navigation and the specialist-brands line are treated as separators. The brand names are listed under the supplied label "Specialist brands:".
- Typography only: non-breaking spaces keep numbers with their units and qualifiers ("around 170 bar", "29 kg", "UK SORA"). Bold is used once, on "The Operational Authorisation is held by the operator and not the supplier."
- Apostrophes are kept as the PDF's straight apostrophes.
- Not added: the "sole UK and Ireland dealer" statement, pricing, testimonials, logos of partners or regulators, certification badges, FAQ, benefits lists or extra calls to action.

## Interface text added for accessibility (not marketing copy)

| Text | Where | Visible? |
| --- | --- | --- |
| "Skip to content" | Skip link | Only on keyboard focus |
| "Menu" | Accessible name of the mobile menu button (three CSS bars, no icon set) | No |
| "Enquiry" | `h2` for the enquiry section, so the heading outline is complete | No (visually hidden) |
| "Primary" | `aria-label` of the navigation | No |
| Video label (see asset manifest) | `aria-label` on the video | No |
| Image alt text (see asset manifest) | `alt` attributes | No |
| "Asset Cleaning \| The Bionic Eye" | Document `<title>` | Browser tab only |

All of these need client approval before production.

## Link destinations

| Label | Destination | Status |
| --- | --- | --- |
| Shop | `https://shop.thebioniceye.co.uk` | **Verified in pack**: `C10 Brochure.pdf` p14 lists `shop.thebioniceye.co.uk`, and the PDF says Shop links to the online store |
| Support | `#supply` | Prototype anchor. "What we supply" covers parts, repairs, warranty and training. Production destination unconfirmed |
| Regulation | `#regulation` | Prototype anchor to "Regulatory position" |
| Contact | `#enquiry` | Prototype anchor to the enquiry form |
| Solutions, Sectors, About Us | none | **Unresolved**: no destination in the pack. Rendered without `href`, so they are not keyboard-focusable and cannot point anywhere wrong |
| How authorisation works | none | **Unresolved**: rendered without `href` |
| Book a demonstration (hero) | `#enquiry` | Prototype anchor; no booking calendar was invented |
| Telephone / email in footer | `tel:+441753655886`, `mailto:info@thebioniceye.co.uk` | From the footer copy |

## Enquiry form: prototype limits

- The form has no `action` and its fields have no `name` attributes, so even with JavaScript disabled, submitting cannot serialise or send personal data. With JavaScript, submit is cancelled.
- No success or error message is shown, so no delivery is claimed.
- No required-field rules, consent text or privacy statement were invented. The email field uses `type="email"`, but validation is switched off (`novalidate`) until the client approves validation wording.
- Production work still needed: submission endpoint, spam protection, privacy notice and consent, validation and confirmation copy (all needing client approval).
