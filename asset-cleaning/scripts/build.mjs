// Renders dist/index.html from content/page.json and config/prototype.json.
// No dependencies: the output is plain HTML, CSS and a small progressive-enhancement script.
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
const order = config.section_orders[config.section_order];
if (!order) throw new Error(`Unknown section_order: ${config.section_order}`);

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Typography only: keep numbers with their units, and render **emphasis**.
// The displayed words are unchanged.
const text = (s) =>
  escapeHtml(s)
    .replace(/(\d) (kg|metres|bar|litres|square)\b/g, '$1&nbsp;$2')
    .replace(/\b(around|about|over|to) (\d)/gi, '$1&nbsp;$2')
    .replace(/\bUK SORA\b/g, 'UK&nbsp;SORA')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

const picture = (img, { sizes, loading = 'lazy', priority = false, className = '' }) => {
  const srcset = (ext) => img.widths.map((w) => `assets/images/${img.stem}-${w}.${ext} ${w}w`).join(', ');
  const fallback = `assets/images/${img.stem}-${img.widths[1] ?? img.widths[0]}.jpg`;
  return `<picture>
        <source type="image/webp" srcset="${srcset('webp')}" sizes="${sizes}">
        <img class="${className}" src="${fallback}" srcset="${srcset('jpg')}" sizes="${sizes}"
          width="${img.width}" height="${img.height}" alt="${escapeHtml(img.alt)}"
          loading="${loading}" decoding="async"${priority ? ' fetchpriority="high"' : ''}>
      </picture>`;
};

const navLink = (item, cls) =>
  item.href
    ? `<a class="${cls}" href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`
    : // Destination not supplied: rendered as text so it cannot point somewhere wrong.
      `<a class="${cls}" data-unresolved>${escapeHtml(item.label)}</a>`;

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
          ${content.nav.items.map((item) => `<li>${navLink(item, 'site-nav__link')}</li>`).join('\n          ')}
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
      <div class="wrap hero__grid">
        <h1 class="hero__title" id="hero-title">${text(h.headline)}</h1>
        <div class="hero__copy">
          ${h.paragraphs.map((p) => `<p>${text(p)}</p>`).join('\n          ')}
          <p class="hero__action"><a class="button button--primary" href="${h.cta_href}">${escapeHtml(config.hero_cta)}</a></p>
        </div>
        <figure class="hero__media" style="--focal-desktop: ${h.image.focal_desktop}; --focal-mobile: ${h.image.focal_mobile}">
          ${picture(h.image, {
            sizes: '(min-width: 960px) 62vw, 100vw',
            loading: 'eager',
            priority: true,
            className: 'hero__image',
          })}
        </figure>
      </div>
    </section>`;
  },

  applications: () => {
    const a = content.applications;
    return `
    <section class="applications surface-stone" id="applications" aria-labelledby="applications-title">
      <div class="wrap applications__grid">
        <div class="applications__text">
          <h2 id="applications-title">${text(a.heading)}</h2>
          <ul class="applications__list">
            ${a.items.map((i) => `<li>${text(i)}</li>`).join('\n            ')}
          </ul>
        </div>
        <div class="applications__media">
          <video class="applications__video" controls preload="none" playsinline
            width="${a.video.width}" height="${a.video.height}"
            poster="${a.video.poster}.jpg" aria-label="${escapeHtml(content._ui.video_label)}">
            <source src="${a.video.src}" type="video/mp4">
          </video>
        </div>
      </div>
    </section>`;
  },

  system: () => {
    const s = content.system;
    return `
    <section class="system surface-ink" id="system" aria-labelledby="system-title">
      <div class="wrap system__grid">
        <h2 class="system__title" id="system-title">${text(s.heading)}</h2>
        <div class="system__copy">
          ${s.paragraphs.map((p) => `<p>${text(p)}</p>`).join('\n          ')}
        </div>
        <figure class="system__plate">
          ${picture(s.image, { sizes: '(min-width: 960px) 56vw, 100vw', className: 'system__image' })}
        </figure>
        <dl class="specs">
          ${s.specs
            .map(
              (r) => `<div class="specs__row">
            <dt>${text(r.label)}</dt>
            <dd>${text(r.value)}</dd>
          </div>`
            )
            .join('\n          ')}
        </dl>
      </div>
    </section>`;
  },

  supply: () => {
    const s = content.supply;
    const [lead, ...rest] = s.paragraphs;
    return `
    <section class="supply" id="supply" aria-labelledby="supply-title">
      <div class="wrap supply__grid">
        <h2 class="supply__title" id="supply-title">${text(s.heading)}</h2>
        <div class="supply__copy">
          <p class="lead">${text(lead)}</p>
          ${rest.map((p) => `<p class="ruled">${text(p)}</p>`).join('\n          ')}
        </div>
        <figure class="supply__media">
          ${picture(s.image, { sizes: '(min-width: 960px) 40vw, 100vw', className: 'supply__image' })}
        </figure>
      </div>
    </section>`;
  },

  regulation: () => {
    const r = content.regulation;
    const link = r.link.href
      ? `<a class="button button--secondary" href="${escapeHtml(r.link.href)}">${escapeHtml(r.link.label)}</a>`
      : `<a class="button button--secondary" data-unresolved>${escapeHtml(r.link.label)}</a>`;
    return `
    <section class="regulation surface-stone" id="regulation" aria-labelledby="regulation-title">
      <div class="wrap regulation__grid">
        <h2 class="regulation__title" id="regulation-title">${text(r.heading)}</h2>
        <div class="regulation__copy">
          ${r.paragraphs.map((p) => `<p>${text(p)}</p>`).join('\n          ')}
          <p class="regulation__action">${link}</p>
        </div>
      </div>
    </section>`;
  },

  proven: () => {
    if (!config.include_proven_in_field) return '';
    const p = content.proven;
    return `
    <section class="proven" id="proven" aria-labelledby="proven-title">
      <div class="wrap proven__grid">
        <h2 class="proven__title" id="proven-title">${text(p.heading)}</h2>
        <div class="proven__copy">
          <p class="proven__statement">${text(p.paragraph)}</p>
          <p class="proven__qualification">${text(p.qualification)}</p>
        </div>
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
      return `<div class="field field--${f.type === 'textarea' ? 'wide' : 'half'}">
              <label for="${f.id}">${text(f.label)}</label>
              ${control}
            </div>`;
    };
    return `
    <section class="enquiry surface-stone" id="enquiry" aria-labelledby="enquiry-title">
      <div class="wrap enquiry__grid">
        <h2 class="visually-hidden" id="enquiry-title">${escapeHtml(content._ui.enquiry_heading_hidden)}</h2>
        <p class="enquiry__lead">${text(e.paragraph)}</p>
        <form class="enquiry__form" id="enquiry-form" novalidate data-prototype>
          <div class="enquiry__fields">
            ${e.fields.map(field).join('\n            ')}
          </div>
          <!-- Prototype: fields have no name attributes and the form has no action, so nothing is transmitted. -->
          <button class="button button--primary" type="submit">${escapeHtml(config.closing_cta)}</button>
        </form>
      </div>
    </section>`;
  },
};

const footer = () => {
  const f = content.footer;
  return `
  <footer class="site-footer surface-ink">
    <div class="wrap site-footer__grid">
      <img class="site-footer__logo" src="assets/logo/bionic-eye-logo-white.svg" width="2273" height="1400" alt="The Bionic Eye" loading="lazy">
      <div class="site-footer__contact">
        <p>${text(f.address)}</p>
        <p>${escapeHtml(f.telephone_label)} <a href="${f.telephone_href}">${escapeHtml(f.telephone)}</a>. ${escapeHtml(
    f.email_label
  )} <a href="mailto:${escapeHtml(f.email)}">${escapeHtml(f.email)}</a>.</p>
      </div>
      <div class="site-footer__brands">
        <p>${escapeHtml(f.specialist_brands_label)}</p>
        <ul>
          ${f.specialist_brands.map((b) => `<li>${escapeHtml(b)}</li>`).join('\n          ')}
        </ul>
      </div>
      <div class="site-footer__authorisation">
        <p>${text(f.authorisation)}</p>
        <p>${text(f.approvals)}</p>
      </div>
      <p class="site-footer__company">${text(f.company)}</p>
    </div>
  </footer>`;
};

const html = `<!doctype html>
<!--
  The Bionic Eye: Asset Cleaning page.
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
  <link rel="preload" as="image" type="image/webp"
    imagesrcset="${content.hero.image.widths.map((w) => `assets/images/hero-facade-${w}.webp ${w}w`).join(', ')}"
    imagesizes="(min-width: 960px) 62vw, 100vw">
  <link rel="stylesheet" href="styles.css">
</head>
<body id="top">
${header()}
  <main id="main" tabindex="-1">
${order.map((key) => sections[key]()).join('\n')}
  </main>
${footer()}
</body>
</html>
`;

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await writeFile(path.join(dist, 'index.html'), html);
await cp(path.join(root, 'src/styles.css'), path.join(dist, 'styles.css'));
await cp(path.join(root, 'src/page.js'), path.join(dist, 'page.js'));
await cp(path.join(root, 'assets'), path.join(dist, 'assets'), { recursive: true });
console.log(`Built dist/index.html (order: ${config.section_order}; hero CTA: ${config.hero_cta}; proven: ${config.include_proven_in_field})`);
