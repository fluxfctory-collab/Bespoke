// Progressive enhancement only. Without this script the navigation stays visible as a
// plain list, the applications poster stays a still image and every section is readable.
(function () {
  'use strict';

  var root = document.documentElement;
  var header = document.querySelector('.site-header');
  var button = header && header.querySelector('.menu-button');
  var nav = document.getElementById('site-nav');

  if (header && button && nav) {
    var desktop = window.matchMedia('(min-width: 1024px)');
    root.classList.add('js');
    button.hidden = false;

    var isOpen = function () {
      return button.getAttribute('aria-expanded') === 'true';
    };
    var setOpen = function (open, restoreFocus) {
      button.setAttribute('aria-expanded', String(open));
      nav.toggleAttribute('data-open', open);
      if (!open && restoreFocus) button.focus();
    };

    button.addEventListener('click', function () {
      setOpen(!isOpen(), false);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isOpen()) setOpen(false, true);
    });
    // A followed link closes the menu so the destination is not covered.
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a[href]')) setOpen(false, false);
    });
    // Non-modal disclosure: close when focus or a pointer moves elsewhere.
    header.addEventListener('focusout', function (event) {
      if (isOpen() && event.relatedTarget && !header.contains(event.relatedTarget)) setOpen(false, false);
    });
    document.addEventListener('pointerdown', function (event) {
      if (isOpen() && !header.contains(event.target)) setOpen(false, false);
    });
    desktop.addEventListener('change', function () {
      if (desktop.matches) setOpen(false, false);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Applications footage: the poster is a real frame; playback starts only on request.
    var media = document.querySelector('.applications__media[data-video-sources]');
    var play = media && media.querySelector('.play-button');
    if (media && play) {
      play.hidden = false;
      var original = Array.prototype.slice.call(media.childNodes);
      play.addEventListener('click', function () {
        var poster = media.querySelector('img');
        var video = document.createElement('video');
        video.className = 'applications__video';
        // WebM (VP9) first, MP4 (H.264) second; each browser skips what it cannot decode.
        JSON.parse(media.getAttribute('data-video-sources')).forEach(function (s) {
          var source = document.createElement('source');
          source.src = s.src;
          source.type = s.type;
          video.appendChild(source);
        });
        video.width = Number(media.getAttribute('data-video-width'));
        video.height = Number(media.getAttribute('data-video-height'));
        video.poster = poster ? poster.currentSrc || poster.src : '';
        video.controls = true;
        video.playsInline = true;
        video.setAttribute('aria-label', poster ? poster.alt : '');
        // If no source can be decoded, put the still frame back rather than leave a dead player.
        var sources = video.querySelectorAll('source');
        sources[sources.length - 1].addEventListener('error', function () {
          media.replaceChildren.apply(media, original);
          media.classList.remove('is-playing');
          play.hidden = true;
        });
        media.replaceChildren(video);
        media.classList.add('is-playing');
        video.focus();
        video.play().catch(function () {
          // Autoplay with sound can be refused; the native controls remain available.
        });
      });
    }

    // Prototype form: no endpoint exists yet, so nothing is sent anywhere and no
    // delivery is claimed. The production handler is out of scope (see docs).
    var form = document.querySelector('form[data-prototype]');
    if (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
      });
    }
  });
})();
