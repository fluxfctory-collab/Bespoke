// Progressive enhancement only. Without this script the navigation stays visible
// as a plain list and every section remains readable.
(function () {
  'use strict';

  var root = document.documentElement;
  var header = document.querySelector('.site-header');
  var button = header && header.querySelector('.menu-button');
  var nav = document.getElementById('site-nav');
  if (!header || !button || !nav) return;

  var desktop = window.matchMedia('(min-width: 960px)');
  root.classList.add('js');
  button.hidden = false;

  function isOpen() {
    return button.getAttribute('aria-expanded') === 'true';
  }

  function setOpen(open, restoreFocus) {
    button.setAttribute('aria-expanded', String(open));
    nav.toggleAttribute('data-open', open);
    if (!open && restoreFocus) button.focus();
  }

  button.addEventListener('click', function () {
    setOpen(!isOpen(), false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false, true);
    }
  });

  // A followed link closes the menu so the destination is not covered.
  nav.addEventListener('click', function (event) {
    if (event.target.closest('a[href]')) setOpen(false, false);
  });

  // Non-modal disclosure: close when focus or a pointer moves elsewhere.
  header.addEventListener('focusout', function (event) {
    if (isOpen() && event.relatedTarget && !header.contains(event.relatedTarget)) {
      setOpen(false, false);
    }
  });
  document.addEventListener('pointerdown', function (event) {
    if (isOpen() && !header.contains(event.target)) setOpen(false, false);
  });

  desktop.addEventListener('change', function () {
    if (desktop.matches) setOpen(false, false);
  });

  // Prototype form: no endpoint exists yet, so nothing is sent anywhere and no
  // delivery is claimed. The production handler is out of scope (see docs).
  document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form[data-prototype]');
    if (!form) return;
    form.addEventListener('submit', function (event) {
      event.preventDefault();
    });
  });
})();
