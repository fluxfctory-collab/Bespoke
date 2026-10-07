"""Browser QA for the Asset Cleaning prototype (Python Playwright, per the webapp-testing skill).

Usage (server started by the skill's with_server.py helper, or `npm run serve`):
    python qa/qa.py --base http://127.0.0.1:4173/ --out qa/screenshots/<phase> [--export deliverables]

Writes a JSON report next to the screenshots and prints a summary. Every check here
observes the rendered page; nothing is inferred from the source files alone.
"""
import argparse
import json
import pathlib
import re
import sys

from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
WIDTHS = [1440, 1280, 1024, 768, 390, 360, 320]
ZOOM_WIDTHS = [720, 640]  # 1440 and 1280 at 200% zoom

# Strings that must appear on the page. Each is first verified against the PDF text,
# so this list cannot drift from the supplied copy without the check failing.
EXPECTED = [
    "Solutions", "Support", "Regulation", "Sectors", "About Us", "Contact", "Shop",
    "Facade and structure cleaning without access equipment.",
    "Drone cleaning removes the requirement for scaffolding, cradles, powered access or rope teams across a substantial proportion of facade, glazing, cladding and roof maintenance. The work is carried out from ground level, and setup is measured in minutes rather than days.",
    "It does not replace access equipment for every application. We identify where it does not before specifying a system.",
    "The ABZ Innovation C10 is the platform we have standardised on. It operates to over 60 metres, delivers up to 15 litres per minute at a working pressure around 170 bar at the nozzle, up to 255 bar at peak, and uses radar for collision avoidance and standoff control. Reverse osmosis water can be specified where surface finish, seals or painted surfaces require it.",
    "Maximum take-off mass is 29 kg. The sub 25 kg limit that applied under the earlier authorisation route is not required under UK SORA.",
    "Working height", "Over 60 metres", "Flow rate", "Up to 15 litres per minute",
    "Working pressure", "Around 170 bar at the nozzle, up to 255 bar at peak",
    "Collision avoidance", "Radar, with standoff control", "Maximum take-off mass", "29 kg",
    "Commercial and residential facades, and glass curtain walling",
    "Solar farms and rooftop arrays", "Wind turbine towers", "Industrial silos, tanks and cladding",
    "Heritage and listed structures", "Graffiti removal",
    "Surface coating and treatment, currently in development",
    "The drone, pressure system and nozzle set specified against your surfaces.",
    "Pilot training is available as an additional service, and we can advise on preparing the operations manual and supporting documentation required for CAA authorisation.",
    "Parts are held in the United Kingdom, repairs are carried out in our own workshop, and the enhanced warranty option provides priority servicing and maintenance, with loan equipment where parts are unavailable. We also offer white label services, arranged in advance, giving clients additional capacity.",
    "Cleaning operations at height adjacent to structures fall within the Specific Category, which requires an Operational Authorisation from the Civil Aviation Authority. Since April 2025 these are granted through UK SORA.",
    "The Operational Authorisation is held by the operator and not the supplier. The Bionic Eye assists clients in attaining their own, drawing on the UK SORA authorisation we hold for cleaning operations with our own PowerWash system, obtained in January 2026, and on the applications we have supported since. The first client Operational Authorisation for the C10 has now been granted, in the client's own name, with two further applications at final assessment.",
    "How authorisation works",
    "ABZ Innovation's case studies show what the C10 delivers in service. A factory facade was cleaned at around 300 square metres an hour using chemical-free reverse osmosis water. A roof carrying ten years of moss, about 550 square metres, was cleared in roughly three hours with no chemicals, and the system was set up and ready to fly in fifteen minutes.",
    "Figures are from ABZ Innovation case studies. Actual output varies with the surface, the level of soiling and site conditions.",
    "Send us the sites you intend to work on. We will identify which are straightforward under a standard authorisation, which require additional work, and which are unlikely to be viable, before any commitment is made.",
    "Name", "Company", "Email", "Telephone", "Sites or work involved",
    "Discuss a requirement",
    "The Bionic Eye, Bionic House, Hall Farm, Berry Lane, Chorleywood, WD3 5EX, United Kingdom.",
    "Telephone +44 1753 655886. Email info@thebioniceye.co.uk.",
    "Specialist brands:", "FarmingByDrone", "PowerWash", "CleaningByDrone",
    "The Operational Authorisation is held by the operator and not the supplier. The Bionic Eye assists clients in attaining their own.",
    "CAA approved since 2014. UK SORA authorisation held for cleaning operations with the PowerWash system since January 2026.",
    "The Bionic Eye Ltd. Registered in England and Wales, company number 09053005. Registered office: 22 Wycombe End, Beaconsfield HP9 1NB.",
]
# Section labels: in the PDF in capitals; on the page as sentence-case headings.
HEADINGS = ["The system", "Applications", "What we supply", "Regulatory position", "Proven in the field"]
# PDF text that is instruction or outline metadata, not page copy.
METADATA = [
    "Asset Cleaning page: contest copy",
    "The Bionic Eye Ltd. Design contest copy, October 2026.",
    "Use this text exactly as written. Do not rewrite it or add claims, figures, logos or testimonials. Text shown as Button: [ ] is a button or link label. You may choose the visual treatment of every section.",
    "HEADER NAVIGATION", "(links to our online store)", "1. HERO: HEADLINE", "HERO: OPENING",
    "Figures for the specification panel (taken from the text above):", "Enquiry form fields:",
    "7. CLOSING AND ENQUIRY", "FOOTER", "Button:",
]


def norm(s: str) -> str:
    s = s.replace(" ", " ").replace("•", " ")
    return re.sub(r"\s+", " ", s).strip()


def verify_expected_against_pdf():
    pdf = norm((ROOT / "sources/contest-copy.txt").read_text())
    not_in_pdf = [e for e in EXPECTED if norm(e) not in pdf]
    not_in_pdf += [h for h in HEADINGS if h.upper() not in pdf]
    residual = pdf
    for s in sorted(EXPECTED + METADATA, key=len, reverse=True):
        residual = residual.replace(norm(s), " ")
    for h in HEADINGS:
        residual = residual.replace(h.upper(), " ")
    residual = re.sub(r"\[[^\]]*\]", " ", residual)  # button labels already in EXPECTED
    leftover = [t for t in residual.split() if re.search(r"[A-Za-z]{2,}", t)]
    return not_in_pdf, leftover


def settle(page):
    page.wait_for_load_state("networkidle")
    page.evaluate("document.fonts.ready")
    height = page.evaluate("document.documentElement.scrollHeight")
    y = 0
    while y < height:
        page.evaluate(f"window.scrollTo(0, {y})")
        page.wait_for_timeout(60)
        y += 500
        height = page.evaluate("document.documentElement.scrollHeight")
    page.wait_for_function(
        "Array.from(document.images).every(i => i.complete && i.naturalWidth > 0)", timeout=15000
    )
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(150)


CONTRAST_JS = r"""
() => {
  const parse = c => { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null;
    const p = m[1].split(',').map(Number); return {r:p[0], g:p[1], b:p[2], a: p.length > 3 ? p[3] : 1}; };
  const lum = ({r,g,b}) => { const f = v => { v/=255; return v <= .03928 ? v/12.92 : ((v+.055)/1.055)**2.4; };
    return .2126*f(r) + .7152*f(g) + .0722*f(b); };
  const ratio = (a,b) => { const [x,y] = [lum(a), lum(b)].sort((p,q)=>q-p); return (x+.05)/(y+.05); };
  const bgOf = el => { for (let n = el; n; n = n.parentElement) { const c = parse(getComputedStyle(n).backgroundColor);
      if (c && c.a > 0.5) return c; } return {r:255,g:255,b:255,a:1}; };
  const out = []; const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const seen = new Set();
  while (walker.nextNode()) {
    const t = walker.currentNode; const el = t.parentElement;
    if (!t.textContent.trim() || seen.has(el)) continue; seen.add(el);
    const cs = getComputedStyle(el); const r = el.getBoundingClientRect();
    if (cs.visibility === 'hidden' || cs.display === 'none' || r.width < 2 || r.height < 2) continue;
    if (el.closest('.visually-hidden, .skip-link, script, style')) continue;
    const fg = parse(cs.color); const bg = bgOf(el); const size = parseFloat(cs.fontSize);
    const bold = parseInt(cs.fontWeight) >= 700; const large = size >= 24 || (size >= 18.66 && bold);
    const cr = ratio(fg, bg);
    out.push({text: t.textContent.trim().slice(0, 50), ratio: Math.round(cr*100)/100, size, large,
      pass: cr >= (large ? 3 : 4.5)});
  }
  return out;
}
"""

UI_CONTRAST_JS = r"""
() => {
  const parse = c => { const p = c.match(/rgba?\(([^)]+)\)/)[1].split(',').map(Number); return {r:p[0],g:p[1],b:p[2]}; };
  const lum = ({r,g,b}) => { const f = v => { v/=255; return v <= .03928 ? v/12.92 : ((v+.055)/1.055)**2.4; };
    return .2126*f(r) + .7152*f(g) + .0722*f(b); };
  const ratio = (a,b) => { const [x,y] = [lum(a), lum(b)].sort((p,q)=>q-p); return (x+.05)/(y+.05); };
  const input = document.querySelector('#name'); const section = input.closest('section');
  const border = parse(getComputedStyle(input).borderTopColor);
  return {
    input_border_vs_input_bg: Math.round(ratio(border, parse(getComputedStyle(input).backgroundColor))*100)/100,
    input_border_vs_section_bg: Math.round(ratio(border, parse(getComputedStyle(section).backgroundColor))*100)/100,
  };
}
"""


def audit_width(browser, base, width, outdir, report, full_checks):
    ctx = browser.new_context(viewport={"width": width, "height": 900}, device_scale_factor=1)
    page = ctx.new_page()
    console, errors, failed = [], [], []
    page.on("console", lambda m: console.append(f"{m.type}: {m.text}") if m.type in ("error", "warning") else None)
    page.on("pageerror", lambda e: errors.append(str(e)))
    page.on("requestfailed", lambda r: failed.append(f"{r.url} {r.failure}"))
    page.goto(base)
    settle(page)
    r = {"width": width}
    r["scroll_width"] = page.evaluate("document.documentElement.scrollWidth")
    r["client_width"] = page.evaluate("document.documentElement.clientWidth")
    r["horizontal_overflow"] = r["scroll_width"] > r["client_width"]
    if r["horizontal_overflow"]:
        r["overflowing"] = page.evaluate(
            """w => Array.from(document.querySelectorAll('body *')).filter(e => e.getBoundingClientRect().right > w + 1)
               .slice(0, 12).map(e => e.tagName + '.' + e.className + ' ' + Math.round(e.getBoundingClientRect().right))""",
            width,
        )
    body = norm(page.evaluate("document.body.textContent"))
    visible = norm(page.evaluate("document.body.innerText"))
    r["missing_copy"] = [e for e in EXPECTED if norm(e) not in body]
    r["not_rendered_visibly"] = [e for e in EXPECTED if norm(e) not in visible]
    r["console"] = console
    r["page_errors"] = errors
    r["failed_requests"] = failed
    r["page_height"] = page.evaluate("document.documentElement.scrollHeight")
    r["skip_link_hidden_unfocused"] = page.evaluate(
        "(() => { const r = document.querySelector('.skip-link').getBoundingClientRect(); return r.width <= 1 && r.height <= 1; })()"
    )
    contrast = page.evaluate(CONTRAST_JS)
    r["contrast_failures"] = [c for c in contrast if not c["pass"]]
    r["contrast_min"] = min(c["ratio"] for c in contrast) if contrast else None
    r["clipped_text"] = page.evaluate(
        """() => Array.from(document.querySelectorAll('h1,h2,p,li,dt,dd,label,a,button'))
            .filter(e => !e.closest('.visually-hidden, .skip-link'))
            .filter(e => e.scrollWidth > e.clientWidth + 1 && getComputedStyle(e).overflow !== 'visible')
            .map(e => e.tagName + ': ' + e.textContent.trim().slice(0, 40))"""
    )
    if width <= 390:
        r["small_targets"] = page.evaluate(
            """() => Array.from(document.querySelectorAll('a[href], button, input, textarea, video'))
                .filter(e => e.offsetParent !== null && !e.closest('.visually-hidden'))
                .map(e => ({t: (e.textContent || e.id || e.tagName).trim().slice(0, 30), w: Math.round(e.getBoundingClientRect().width), h: Math.round(e.getBoundingClientRect().height)}))
                .filter(o => o.w < 44 || o.h < 44)"""
        )
    page.screenshot(path=str(outdir / f"full-{width}.png"), full_page=True)
    page.screenshot(path=str(outdir / f"viewport-{width}.png"))
    if full_checks:
        r.update(deep_checks(page, width, outdir))
    report["widths"].append(r)
    ctx.close()


def deep_checks(page, width, outdir):
    out = {}
    out["headings"] = page.evaluate(
        "Array.from(document.querySelectorAll('h1,h2,h3,h4')).map(h => h.tagName + ': ' + h.textContent.trim())"
    )
    out["images"] = page.evaluate(
        "Array.from(document.images).map(i => ({src: i.currentSrc.split('/').pop(), alt: i.getAttribute('alt'), w: i.naturalWidth, rendered: Math.round(i.getBoundingClientRect().width)}))"
    )
    out["form"] = page.evaluate(
        """() => Array.from(document.querySelectorAll('#enquiry-form input, #enquiry-form textarea')).map(f => ({
              id: f.id, type: f.type, autocomplete: f.autocomplete, name: f.getAttribute('name'),
              label: (document.querySelector(`label[for="${f.id}"]`) || {}).textContent || null,
              placeholder: f.getAttribute('placeholder'), height: Math.round(f.getBoundingClientRect().height)}))"""
    )
    out["ui_contrast"] = page.evaluate(UI_CONTRAST_JS)
    out["video"] = page.evaluate(
        """() => { const v = document.querySelector('video'); return v && {controls: v.controls, autoplay: v.autoplay,
              preload: v.preload, muted: v.muted, paused: v.paused, label: v.getAttribute('aria-label')}; }"""
    )
    # Keyboard: the first Tab reaches the skip link, which becomes visible.
    page.reload()
    page.wait_for_load_state("networkidle")
    page.keyboard.press("Tab")
    out["first_tab"] = page.evaluate(
        "(() => { const e = document.activeElement; const r = e.getBoundingClientRect(); return {text: e.textContent.trim(), top: Math.round(r.top), visible: r.top >= 0 && r.bottom <= innerHeight}; })()"
    )
    page.screenshot(path=str(outdir / f"focus-skip-{width}.png"), clip={"x": 0, "y": 0, "width": width, "height": 160})
    order = []
    for _ in range(12):
        page.keyboard.press("Tab")
        order.append(page.evaluate(
            "(() => { const e = document.activeElement; const s = getComputedStyle(e); return e.tagName + ' ' + (e.textContent.trim() || e.getAttribute('aria-label') || e.id).slice(0, 30) + ' | outline ' + s.outlineStyle + ' ' + s.outlineWidth; })()"
        ))
    out["tab_order"] = order
    page.keyboard.press("Escape")

    # Primary CTA lands on the enquiry section.
    page.evaluate("window.scrollTo(0,0)")
    page.click(".hero .button")
    page.wait_for_timeout(1200)
    out["hero_cta_enquiry_top"] = page.evaluate("Math.round(document.getElementById('enquiry').getBoundingClientRect().top)")
    out["url_after_cta"] = page.url

    # Form: fill and submit; nothing may be requested and no result may be claimed.
    requests = []
    page.on("request", lambda req: requests.append(req.url))
    page.fill("#name", "Test Person")
    page.fill("#company", "Test Ltd")
    page.fill("#email", "test@example.com")
    page.fill("#telephone", "01234 567890")
    page.fill("#sites", "Two warehouses")
    url_before = page.url
    page.click("#enquiry-form button[type=submit]")
    page.wait_for_timeout(800)
    out["form_submit"] = {
        "requests_after_submit": requests,
        "url_unchanged": page.url == url_before,
        "values_kept": page.input_value("#name") == "Test Person",
        "status_text_present": page.evaluate("!!document.querySelector('[role=status],[role=alert],[aria-live]')"),
    }
    page.focus("#email")
    page.screenshot(path=str(outdir / f"form-focus-{width}.png"))
    return out


def menu_checks(browser, base, outdir):
    ctx = browser.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=1)
    page = ctx.new_page()
    page.goto(base)
    page.wait_for_load_state("networkidle")
    btn = page.locator(".menu-button")
    res = {"button_visible": btn.is_visible(), "expanded_initial": btn.get_attribute("aria-expanded"),
           "nav_visible_initial": page.locator("#site-nav").is_visible()}
    btn.focus()
    page.keyboard.press("Enter")
    page.wait_for_timeout(200)
    res["expanded_after_enter"] = btn.get_attribute("aria-expanded")
    res["nav_visible_after_enter"] = page.locator("#site-nav").is_visible()
    page.screenshot(path=str(outdir / "menu-open-390.png"))
    page.keyboard.press("Tab")
    res["focus_after_tab"] = page.evaluate("document.activeElement.textContent.trim()")
    page.keyboard.press("Escape")
    page.wait_for_timeout(150)
    res["expanded_after_escape"] = btn.get_attribute("aria-expanded")
    res["focus_after_escape"] = page.evaluate("document.activeElement.className")
    btn.click()
    page.click("#site-nav >> text=Regulation")
    page.wait_for_timeout(1200)
    res["expanded_after_link"] = btn.get_attribute("aria-expanded")
    res["regulation_top_after_link"] = page.evaluate("Math.round(document.getElementById('regulation').getBoundingClientRect().top)")
    btn.click()
    page.mouse.click(200, 700)
    page.wait_for_timeout(150)
    res["expanded_after_outside_click"] = btn.get_attribute("aria-expanded")
    ctx.close()

    # Reduced motion and JavaScript disabled.
    ctx = browser.new_context(viewport={"width": 390, "height": 844}, reduced_motion="reduce")
    page = ctx.new_page()
    page.goto(base)
    res["reduced_motion_button_transition"] = page.evaluate("getComputedStyle(document.querySelector('.button')).transitionDuration")
    res["reduced_motion_scroll_behavior"] = page.evaluate("getComputedStyle(document.documentElement).scrollBehavior")
    ctx.close()
    ctx = browser.new_context(viewport={"width": 390, "height": 844}, java_script_enabled=False)
    page = ctx.new_page()
    page.goto(base)
    page.wait_for_load_state("networkidle")
    res["nojs_nav_visible"] = page.locator("#site-nav").is_visible()
    res["nojs_menu_button_visible"] = page.locator(".menu-button").is_visible()
    body = norm(page.evaluate("document.body.innerText"))
    res["nojs_missing_copy"] = [e for e in EXPECTED if norm(e) not in body]
    page.screenshot(path=str(outdir / "nojs-390.png"))
    ctx.close()
    return res


def export(browser, base, dest):
    dest.mkdir(parents=True, exist_ok=True)
    made = {}
    for scale, suffix in ((1, ""), (2, "@2x")):
        ctx = browser.new_context(viewport={"width": 1440, "height": 900}, device_scale_factor=scale)
        page = ctx.new_page()
        page.goto(base)
        settle(page)
        p = dest / f"desktop-1440-full-page{suffix}.png"
        page.screenshot(path=str(p), full_page=True)
        made[p.name] = None
        ctx.close()
        ctx = browser.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=scale)
        page = ctx.new_page()
        page.goto(base)
        settle(page)
        bottom = page.evaluate("Math.floor(document.getElementById('applications').getBoundingClientRect().bottom + scrollY)")
        p = dest / f"mobile-390-hero-and-applications{suffix}.png"
        page.screenshot(path=str(p), full_page=True, clip={"x": 0, "y": 0, "width": 390, "height": bottom})
        made[p.name] = None
        ctx.close()
    return list(made)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--base", default="http://127.0.0.1:4173/")
    ap.add_argument("--out", required=True)
    ap.add_argument("--export")
    a = ap.parse_args()
    outdir = pathlib.Path(a.out)
    outdir.mkdir(parents=True, exist_ok=True)
    not_in_pdf, leftover = verify_expected_against_pdf()
    report = {"expected_not_in_pdf": not_in_pdf, "pdf_copy_not_covered": leftover, "widths": []}
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        report["chromium"] = browser.version
        for w in WIDTHS + ZOOM_WIDTHS:
            audit_width(browser, a.base, w, outdir, report, full_checks=w in (1440, 390))
        report["menu"] = menu_checks(browser, a.base, outdir)
        if a.export:
            report["exports"] = export(browser, a.base, pathlib.Path(a.export))
        browser.close()
    (outdir / "report.json").write_text(json.dumps(report, indent=2))
    print(json.dumps({k: v for k, v in report.items() if k != "widths"}, indent=2))
    for r in report["widths"]:
        summary = {k: r[k] for k in ("width", "horizontal_overflow", "page_height", "contrast_min") if k in r}
        summary["missing_copy"] = len(r["missing_copy"])
        summary["not_rendered_visibly"] = r["not_rendered_visibly"]
        summary["console"] = r["console"]
        summary["errors"] = r["page_errors"] + r["failed_requests"]
        summary["contrast_failures"] = r["contrast_failures"][:5]
        summary["clipped_text"] = r["clipped_text"][:5]
        if "small_targets" in r:
            summary["small_targets"] = r["small_targets"]
        if "overflowing" in r:
            summary["overflowing"] = r["overflowing"]
        print(json.dumps(summary))
    for w in report["widths"]:
        if "headings" in w:
            print(json.dumps({k: w[k] for k in ("width", "headings", "first_tab", "tab_order", "hero_cta_enquiry_top", "form_submit", "form", "ui_contrast", "video", "images")}, indent=1))
    return 0


if __name__ == "__main__":
    sys.exit(main())
