/*
 * Site behaviour: theme toggle, mobile navigation, scroll reveal.
 * Vanilla and dependency-free — runs alongside the theme's jQuery bundle.
 */
(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------------------------------------------------------------- theme */

  var toggle = document.getElementById('theme-toggle');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
    if (toggle) {
      toggle.setAttribute('aria-label',
        theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
  }

  if (toggle) {
    applyTheme(root.getAttribute('data-theme') || 'light');
    toggle.addEventListener('click', function () {
      applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  // Follow the OS preference until the visitor makes an explicit choice.
  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    var onChange = function (e) {
      var stored = null;
      try { stored = localStorage.getItem('theme'); } catch (err) {}
      if (!stored) { root.setAttribute('data-theme', e.matches ? 'dark' : 'light'); }
    };
    if (mq.addEventListener) { mq.addEventListener('change', onChange); }
    else if (mq.addListener) { mq.addListener(onChange); }
  }

  /* ------------------------------------------------------------ mobile nav */

  var navToggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');

  if (navToggle && nav) {
    // aria-expanded also drives the icon swap in CSS.
    var setNav = function (open) {
      nav.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.style.overflow = open ? 'hidden' : '';
    };

    navToggle.addEventListener('click', function () {
      setNav(!nav.classList.contains('is-open'));
    });

    // Close after choosing a destination, or on Escape.
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { setNav(false); }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setNav(false);
        navToggle.focus();
      }
    });

    // The drawer is a mobile-only affordance; drop it if the viewport grows.
    window.addEventListener('resize', function () {
      if (window.innerWidth > 880 && nav.classList.contains('is-open')) { setNav(false); }
    });
  }

  /* --------------------------------------------------------- scroll reveal */

  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var targets = document.querySelectorAll(
    '.signal-card, .timeline__item, .cv-entry, .research-panel, ' +
    '.section-heading, .list__item, .grid__item'
  );

  if (!reduceMotion && 'IntersectionObserver' in window && targets.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    Array.prototype.forEach.call(targets, function (el, i) {
      el.classList.add('reveal');
      // Stagger neighbours slightly; cap it so long lists never feel slow.
      el.style.transitionDelay = Math.min(i % 6, 5) * 55 + 'ms';
      observer.observe(el);
    });
  }
})();
