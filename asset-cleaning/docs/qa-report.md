# QA report

Environment: headless Chromium 141.0.7390.37 (Playwright 1.56, Python), Node 22, Linux. Arial resolves to Liberation Sans in this environment (metric-compatible). Every result below comes from the rendered page.

## Commands actually run

```bash
npm run assets          # scripts/prepare-assets.sh: extract pack, resize/convert, strip metadata
npm run check           # node --check on scripts and page.js, then build
npm run build           # dist/index.html from content/page.json + config/prototype.json
python with_server.py --server "node scripts/serve.mjs" --port 4173 -- \
  python qa/qa.py --out qa/screenshots --export deliverables
```

`with_server.py` is the helper bundled with the `webapp-testing` skill. Raw output: `qa/last-run.log`; full machine-readable results: `qa/screenshots/report.json`.

## Final results (last run)

| Check | 1440 | 1280 | 1024 | 768 | 720* | 640* | 390 | 360 | 320 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Horizontal overflow | none | none | none | none | none | none | none | none | none |
| Supplied copy present in DOM | 53/53 | 53/53 | 53/53 | 53/53 | 53/53 | 53/53 | 53/53 | 53/53 | 53/53 |
| Copy hidden from view | 0 | 0 | 0 | 7† | 7† | 7† | 7† | 7† | 7† |
| Console errors/warnings | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Failed requests | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Text contrast failures | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Lowest text contrast | 6.92:1 | 6.92:1 | 6.92:1 | 6.92:1 | 6.92:1 | 6.92:1 | 6.92:1 | 6.92:1 | 6.92:1 |
| Clipped text | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Page height (px) | 5829 | 5647 | 5627 | 7441 | 7417 | 7266 | 7728 | 7865 | 8162 |

\* 720 and 640 stand in for 1440 and 1280 at 200% zoom. † The seven navigation labels sit in the collapsed mobile menu (one tap away); everything else is visible.

**Copy fidelity:** each of the 53 expected strings was first found verbatim in the PDF text; after removing them and the outline metadata, no PDF copy was left uncovered (`pdf_copy_not_covered: []`).

**Semantics:** one `h1`; six `h2` in reading order (Applications, The system, What we supply, Regulatory position, Proven in the field, Enquiry, the last visually hidden). `lang="en-GB"`.

**Images:** all have alt text and load (`naturalWidth > 0`). At 1440 the browser chose `hero-facade-1200.webp` for an 813 px slot. At 390 the content images render exactly 350 px wide (20 px gutters).

**Keyboard (1440 and 390):**
- The first Tab reaches "Skip to content", visible at the top (y = 8).
- Tab order follows the DOM: logo, then the four nav links with destinations, then the hero CTA, video, form fields, submit and footer links. At 390 the order is logo, Menu, hero CTA and onwards.
- Every focusable element shows a 3 px outline. The video's native controls draw their own UA focus indicator.

**Hero CTA:** "Book a demonstration" lands the enquiry section 16 px from the top (`scroll-margin-top`). The header is not sticky, so nothing covers anchors.

**Mobile menu (390):**
- Starts collapsed (`aria-expanded="false"`, nav hidden). Enter opens it, and Tab moves into the links.
- Escape closes it and returns focus to the button.
- Choosing "Regulation" closes the menu and lands the section at 16 px. Clicking outside closes it.

**Form:**
- All five labels are persistent `<label for>` elements; there are no placeholders.
- Types and autocomplete: `text/name`, `text/organization`, `email/email`, `tel/tel`, and a textarea. Controls are 52 px high; the textarea is 169 px.
- After filling and submitting: **0 network requests**, URL unchanged, values kept, no status message.
- Input border contrast: 4.56:1 against the field and 4.03:1 against the section.

**Video:** `controls`, `preload="none"`, no `autoplay`, paused, with an accessible label.

**Reduced motion:** with reduced motion emulated, button transitions compute to `0s` and `scroll-behavior` to `auto`.

**JavaScript disabled:** the navigation renders as a visible wrapped list, the menu button stays hidden, and all supplied copy is visible.

**Touch targets at 390/360/320:** no interactive element below 44 px in either dimension (footer phone and email links are 45 px high after the hit-area fix).

## Defects found by inspecting screenshots, and fixes

| # | Observed defect | Fix | Verified |
| --- | --- | --- | --- |
| 1 | Right-hand text columns started on two grid lines (627 px and 736 px at 1440) | All moved to column 7; product plate and specs re-gridded to 6 + 6 columns | Screenshot pass 2 |
| 2 | Pressure spec value wrapped with a widow ("at peak") | `text-wrap: balance` on values; wider column now holds it on one line at 1440 | Pass 2 |
| 3 | Case-study figures in bold made the paragraph patchy; "about / 550" split across lines | Emphasis removed; non-breaking space between qualifier and number | Pass 2 (1440 and 390) |
| 4 | At 768 the headline was forced into four lines by `max-width: 17ch`; hero paragraphs ran about 80 characters | Removed the cap; 36 em measure on hero copy at every width | Pass 2 |
| 5 | Large void between the Applications video and list after re-gridding | Video moved to columns 2–5 (right edge aligns with the Supply photo) | Pass 3 |
| 6 | Footer phone and email links only 17 px high on mobile | 14 px vertical padding on footer links (hit area only; line box unchanged) | Pass 3: 45 px |
| 7 | Skip link off-screen when focus started mid-page (−844 px) | `position: fixed` | Pass 4: y = 8 |
| 8 | **"Skip to content" appeared mid-page in the full-page desktop export** (Chromium's beyond-viewport capture moved the transform-hidden fixed link) | Unfocused skip link is now clipped to 1 × 1 px instead of translated; QA asserts this at every width | Pass 4 |
| 9 | Mobile gutter was 21.8 px, not 20 px (346 px content) | Gutter formula now gives exactly 20 px at 390 and 80 px at 1440 | Final: 350 px images |
| 10 | Mobile export included one row of the next (black) section | Crop height uses `Math.floor` | Final: last rows #F1F1EF |
| 11 | Local server: path check accepted sibling `dist-*` folders; suffix ranges served from byte 0 | Strict `root + sep` prefix; correct suffix and 416 handling | curl: 206 / 206 (500 bytes) / 416 / 404 |

QA-script corrections (test bugs, not page bugs): the first keyboard test clicked the page before pressing Tab, which moved the focus start point; the clipped-text check flagged intentionally hidden elements.

## Known limitations (not fixed)

- The header logo is the supplied stacked lockup; its tagline is about 4 px high at header size (see brand decisions).
- `C10-2.png` has a faint studio vignette in its corners (RGB 252 against 255), just visible on the white plate at its left corners. It is in the original and was not retouched.
- Native video controls appear in static exports as Chromium draws them. Other browsers draw different controls.
- Three nav items and "How authorisation works" have no destination (unresolved, documented). Because they render without `href`, they are not keyboard-focusable.
- Checks are automated plus visual review of screenshots. No screen-reader session was run (no screen reader in this environment), and no real-device testing was done.

## Code review (code-review-and-quality, five axes)

- **Correctness:** build validates the CTA value and section order; copy check passes; Range and traversal bugs in `serve.mjs` fixed (#11).
- **Readability:** content, configuration, templates, styles and behaviour are in separate files; one CSS file grouped by section.
- **Architecture:** zero runtime dependencies; static HTML output; no framework introduced.
- **Security:** no third-party requests; the server binds 127.0.0.1 only; form cannot transmit data; EXIF GPS stripped from published images.
- **Performance:** responsive WebP/JPEG `srcset`, hero preloaded with `fetchpriority="high"`, lazy loading below the fold, video `preload="none"`. Everything loaded at 1440 once the page is scrolled through (HTML, CSS, JS, logos, three images, video poster) totals 0.32 MB; the 4.3 MB video loads only on play.

## Evidence files

- `qa/screenshots/full-{1440,1280,1024,768,720,640,390,360,320}.png`: full pages.
- `qa/screenshots/viewport-*.png`: first screen at each width.
- `qa/screenshots/focus-skip-{1440,390}.png`, `form-focus-{1440,390}.png`, `menu-open-390.png`, `nojs-390.png`.
- `qa/screenshots/report.json`, `qa/last-run.log`.
