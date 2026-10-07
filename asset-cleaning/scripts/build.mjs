// Renders dist/index.html from content/page.json and config/prototype.json (V2 composition).
// No dependencies: the output is plain HTML, CSS, self-hosted fonts and a small
// progressive-enhancement script. STAGE=b renders only header, hero and applications.
import { readFile, writeFile, mkdir, cp, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

const content = JSON.parse(await readFile(path.join(root, 'content/page.json'), 'utf8'));
const config = JSON.parse(await readFile(path.join(root, 'config/prototype.json'), 'utf8'));

const ALLOWED_CTAS = Object.keys(content.hero.cta_options);
if (!ALLOWED_CTAS.includes(config.hero_cta)) {
  throw new Error(`hero_cta must be one of: ${ALLOWED_CTAS.join(', ')}`);
}
if (config.closing_cta !== 'Discuss a requirement') {
  throw new Error('closing_cta is fixed by the supplied PDF: "Discuss a requirement"');
}
let order = config.section_orders[config.section_order];
if (!order) throw new Error(`Unknown section_order: ${config.section_order}`);
if (process.env.STAGE === 'b') order = order.filter((k) => ['hero', 'applications'].includes(k));

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Presentation markers (see content/page.json _source). Removing them must give the copy.
const stripMarkers = (s) => s.replace(/\*\*|\(\(|\)\)|\[\[|\]\]|\{\{|\}\}/g, '');

for (const spec of content.system.specs) {
  if (stripMarkers(spec.display) !== spec.value) {
    throw new Error(`Spec display for "${spec.label}" does not reproduce its value`);
  }
}

// Typography only: keep numbers with their units, and render the markers.
const rich = (s) =>
  escapeHtml(s)
    .replace(/(\d) (kg|metres|bar|litres|square)\b/g, '$1&nbsp;$2')
    .replace(/\b(around|about|over|to) (\d)/gi, '$1&nbsp;$2')
    .replace(/\bUK SORA\b/g, 'UK&nbsp;SORA')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\(\((.+?)\)\)/g, '<span class="line">$1</span>')
    .replace(/\[\[(.+?)\]\]/g, '<span class="fig">$1</span>')
    .replace(/\{\{(.+?)\}\}/g, '<span class="fig fig--minor">$1</span>');

const srcset = (img, ext) => img.widths.map((w) => `assets/images/${img.stem}-${w}.${ext} ${w}w`).join(', ');

const picture = (img, { sizes, loading = 'lazy', priority = false, className = '' }) => {
  const fallback = `assets/images/${img.stem}-${img.widths[Math.min(1, img.widths.length - 1)]}.jpg`;
  return `<picture>
          <source type="image/webp" srcset="${srcset(img, 'webp')}" sizes="${sizes}">
          <img class="${className}" src="${fallback}" srcset="${srcset(img, 'jpg')}" sizes="${sizes}"
            width="${img.width}" height="${img.height}" alt="${escapeHtml(img.alt)}"
            loading="${loading}" decoding="async"${priority ? ' fetchpriority="high"' : ''}>
        </picture>`;
};

const unresolvedAttr = 'data-unresolved';
const link = (item, cls) =>
  item.href
    ? `<a class="${cls}" href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`
    : // Destination not supplied: rendered as text so it cannot point somewhere wrong.
      `<a class="${cls}" ${unresolvedAttr}>${escapeHtml(item.label)}</a>`;

const header = () => `
  <a class="skip-link" href="#main">${escapeHtml(content._ui.skip_link)}</a>
  <header class="site-header">
    <div class="wrap site-header__inner">
      <a class="site-header__logo" href="#top">
        <img src="assets/logo/bionic-eye-logo-black.svg" width="2273" height="1400" alt="The Bionic Eye">
      </a>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="site-nav" hidden>
        <span class="visually-hidden">${escapeHtml(content._ui.menu_button_label)}</span>
        <span class="menu-button__bars" aria-hidden="true"></span>
      </button>
      <nav class="site-nav" id="site-nav" aria-label="${escapeHtml(content._ui.primary_nav_label)}">
        <ul class="site-nav__list">
          ${content.nav.items.map((item) => `<li>${link(item, 'site-nav__link')}</li>`).join('\n          ')}
        </ul>
      </nav>
    </div>
  </header>
  <script src="page.js"></script>`;

const sections = {
  hero: () => {
    const h = content.hero;
    return `
    <section class="hero" aria-labelledby="hero-title">
      <div class="wrap hero__inner">
        <h1 class="hero__title" id="hero-title">${rich(h.headline)}</h1>
        <figure class="hero__media">
          ${picture(h.image, {
            sizes: '(min-width: 1200px) 125vw, 100vw',
            loading: 'eager',
            priority: true,
            className: 'hero__image',
          })}
        </figure>
        <div class="hero__copy">
          ${h.paragraphs.map((p) => `<p>${rich(p)}</p>`).join('\n          ')}
          <p class="hero__action"><a class="button button--cyan" href="${h.cta_href}">${escapeHtml(config.hero_cta)}</a></p>
        </div>
      </div>
    </section>`;
  },

  applications: () => {
    const a = content.applications;
    const last = a.items.length - 1;
    return `
    <section class="applications" id="applications" aria-labelledby="applications-title">
      <div class="wrap">
        <h2 class="section-title" id="applications-title">${rich(a.heading)}</h2>
        <div class="applications__grid">
          <ul class="matrix">
            ${a.items
              .map((item, i) => `<li class="matrix__item${i === last ? ' matrix__item--wide' : ''}">${rich(item)}</li>`)
              .join('\n            ')}
          </ul>
          <figure class="applications__media" data-video-sources="${escapeHtml(JSON.stringify(a.video.sources))}" data-video-width="${a.video.width}" data-video-height="${a.video.height}">
            ${picture(a.poster, { sizes: '(min-width: 1024px) 416px, (min-width: 640px) 360px, 100vw', className: 'applications__poster' })}
            <button class="play-button" type="button" hidden>
              <span class="visually-hidden">${escapeHtml(content._ui.play_video_label)}</span>
              <span class="play-button__icon" aria-hidden="true"></span>
            </button>
          </figure>
        </div>
      </div>
    </section>`;
  },

  system: () => {
    const s = content.system;
    return `
    <section class="system surface-soft" id="system" aria-labelledby="system-title">
      <div class="wrap">
        <h2 class="section-title" id="system-title">${rich(s.heading)}</h2>
        <div class="plate">
          <div class="plate__product">
            <figure class="plate__image">
              ${picture(s.image, { sizes: '(min-width: 1024px) 680px, 100vw', className: 'plate__img' })}
            </figure>
            <div class="plate__copy">
              ${s.paragraphs.map((p) => `<p>${rich(p)}</p>`).join('\n              ')}
            </div>
          </div>
          <dl class="specs">
            ${s.specs
              .map(
                (r) => `<div class="specs__row">
              <dt>${rich(r.label)}</dt>
              <dd>${rich(r.display)}</dd>
            </div>`
              )
              .join('\n            ')}
          </dl>
        </div>
      </div>
    </section>`;
  },

  supply: () => {
    const s = content.supply;
    const [lead, second, third] = s.paragraphs;
    return `
    <section class="supply" id="supply" aria-labelledby="supply-title">
      <div class="wrap">
        <div class="supply__grid">
          <div class="supply__text">
            <h2 class="section-title" id="supply-title">${rich(s.heading)}</h2>
            <p class="supply__lead">${rich(lead)}</p>
            <p>${rich(second)}</p>
          </div>
          <figure class="supply__media">
            ${picture(s.image, { sizes: '(min-width: 1024px) 740px, 100vw', className: 'supply__img' })}
          </figure>
        </div>
        <div class="supply__band">
          <p>${rich(third)}</p>
        </div>
      </div>
    </section>`;
  },

  regulation: () => {
    const r = content.regulation;
    const action = r.link.href
      ? `<a class="button button--outline-cyan" href="${escapeHtml(r.link.href)}">${escapeHtml(r.link.label)}</a>`
      : `<a class="button button--outline-cyan" ${unresolvedAttr}>${escapeHtml(r.link.label)}</a>`;
    return `
    <section class="regulation" id="regulation" aria-labelledby="regulation-title">
      <div class="wrap">
        <div class="reg-panel">
          <h2 class="reg-panel__title" id="regulation-title">${rich(r.heading)}</h2>
          <div class="reg-panel__copy">
            ${r.paragraphs.map((p) => `<p>${rich(p)}</p>`).join('\n            ')}
            <p class="reg-panel__action">${action}</p>
          </div>
        </div>
      </div>
    </section>`;
  },

  proven: () => {
    if (!config.include_proven_in_field) return '';
    const p = content.proven;
    return `
    <section class="evidence" id="proven" aria-labelledby="proven-title">
      <div class="wrap">
        <h2 class="section-title" id="proven-title">${rich(p.heading)}</h2>
        <p class="evidence__intro">${rich(p.intro)}</p>
        <div class="evidence__pair">
          ${p.articles.map((a) => `<div class="evidence__item"><p>${rich(a)}</p></div>`).join('\n          ')}
        </div>
        <p class="evidence__qualification">${rich(p.qualification)}</p>
      </div>
    </section>`;
  },

  enquiry: () => {
    const e = content.enquiry;
    const field = (f) => {
      const control =
        f.type === 'textarea'
          ? `<textarea id="${f.id}" rows="6" autocomplete="${f.autocomplete}"></textarea>`
          : `<input id="${f.id}" type="${f.type}" autocomplete="${f.autocomplete}"${
              f.type === 'email' ? ' spellcheck="false"' : ''
            }>`;
      return `<div class="field${f.type === 'textarea' ? ' field--wide' : ''}">
                <label for="${f.id}">${rich(f.label)}</label>
                ${control}
              </div>`;
    };
    return `
    <section class="enquiry surface-soft" id="enquiry" aria-labelledby="enquiry-title">
      <div class="wrap enquiry__grid">
        <h2 class="visually-hidden" id="enquiry-title">${escapeHtml(content._ui.enquiry_heading_hidden)}</h2>
        <p class="enquiry__intro">${rich(e.paragraph)}</p>
        <form class="enquiry__panel" id="enquiry-form" novalidate data-prototype>
          <div class="enquiry__fields">
            ${e.fields.map(field).join('\n            ')}
          </div>
          <!-- Prototype: fields have no name attributes and the form has no action, so nothing is transmitted. -->
          <button class="button button--cyan enquiry__submit" type="submit">${escapeHtml(config.closing_cta)}</button>
        </form>
      </div>
    </section>`;
  },
};

const footer = () => {
  const f = content.footer;
  return `
  <footer class="site-footer">
    <div class="wrap">
      <div class="site-footer__top">
        <img class="site-footer__logo" src="assets/logo/bionic-eye-logo-white.svg" width="2273" height="1400" alt="The Bionic Eye" loading="lazy">
        <div class="site-footer__contact">
          <p>${rich(f.address)}</p>
          <p>${escapeHtml(f.telephone_label)} <a href="${f.telephone_href}">${escapeHtml(f.telephone)}</a>. ${escapeHtml(
    f.email_label
  )} <a href="mailto:${escapeHtml(f.email)}">${escapeHtml(f.email)}</a>.</p>
        </div>
        <div class="site-footer__statements">
          <div class="site-footer__brands">
            <p>${escapeHtml(f.specialist_brands_label)}</p>
            <ul>
              ${f.specialist_brands.map((b) => `<li>${escapeHtml(b)}</li>`).join('\n              ')}
            </ul>
          </div>
          <p>${rich(f.authorisation)}</p>
          <p>${rich(f.approvals)}</p>
        </div>
      </div>
      <p class="site-footer__company">${rich(f.company)}</p>
    </div>
  </footer>`;
};

const fontPreload = ['Regular', 'Bold']
  .map((w) => `<link rel="preload" href="assets/fonts/titillium-web/TitilliumWeb-${w}.woff2" as="font" type="font/woff2" crossorigin>`)
  .join('\n  ');

const html = `<!doctype html>
<!--
  The Bionic Eye: Asset Cleaning page (V2 "Operational precision" composition).
  INTERNAL AI-ASSISTED PROTOTYPE (usage_mode: ${config.usage_mode}; submission_status: ${config.submission_status}).
  Layout originated with AI assistance. It is not a contest submission and does not comply with the
  contest's current ban on AI-generated layouts. See docs/requirements-audit.md.
-->
<html lang="${content.meta.lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title>${escapeHtml(content.meta.title)}</title>
  ${fontPreload}
  <link rel="preload" as="image" type="image/webp"
    imagesrcset="${srcset(content.hero.image, 'webp')}"
    imagesizes="(min-width: 1200px) 125vw, 100vw">
  <link rel="stylesheet" href="styles.css">
</head>
<body id="top">
${header()}
  <main id="main" tabindex="-1">
${order.map((key) => sections[key]()).join('\n')}
  </main>
${process.env.STAGE === 'b' ? '' : footer()}
</body>
</html>
`;

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await writeFile(path.join(dist, 'index.html'), html);
await cp(path.join(root, 'src/styles.css'), path.join(dist, 'styles.css'));
await cp(path.join(root, 'src/page.js'), path.join(dist, 'page.js'));
await cp(path.join(root, 'assets'), path.join(dist, 'assets'), {
  recursive: true,
  // TTF masters stay in the repository with the licence; the page loads WOFF2 only.
  filter: (src) => !src.endsWith('.ttf'),
});
console.log(
  `Built dist/index.html (stage: ${process.env.STAGE || 'full'}; order: ${config.section_order}; hero CTA: ${config.hero_cta}; proven: ${config.include_proven_in_field})`
);
