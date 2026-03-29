/* =====================================================================
   VENADOS ROBOTICS — JAVASCRIPT PRINCIPAL
   main.js
   ===================================================================== */

(function () {
  'use strict';

  /* ─── CURSOR ──────────────────────────────────────────────────────── */
  function initCursor() {
    const cursor = document.getElementById('cursor');
    if (!cursor || window.matchMedia('(pointer:coarse)').matches) {
      if (cursor) cursor.style.display = 'none';
      return;
    }
    let mx = 0, my = 0;
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top  = my + 'px';
    });
    document.querySelectorAll('a, button, .carousel-btn, .medal-bubble, .card, .team-card').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  }

  /* ─── NAVEGACIÓN MOBILE ───────────────────────────────────────────── */
  function initNav() {
    const btn   = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');
    if (!btn || !links) return;

    btn.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
      // Animación hamburguesa → X
      const spans = btn.querySelectorAll('span');
      if (open) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      }
    });

    // Cerrar al hacer clic en un link
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        btn.setAttribute('aria-expanded', false);
      });
    });
  }

  /* ─── TRANSICIÓN ENTRE PÁGINAS ────────────────────────────────────── */
  function initPageTransitions() {
    const overlay = document.getElementById('page-overlay');
    if (!overlay) return;

    // Salida suave al hacer clic en links externos
    document.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      // Solo links internos .html que no sean hash
      if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return;

      a.addEventListener('click', e => {
        e.preventDefault();
        overlay.classList.add('active');
        setTimeout(() => {
          window.location.href = href;
        }, 350);
      });
    });

    // Entrada: remover overlay al cargar
    window.addEventListener('load', () => {
      overlay.classList.remove('active');
    });
  }

  /* ─── SCROLL REVEAL ───────────────────────────────────────────────── */
  function initReveal() {
    const els = document.querySelectorAll('.reveal, .timeline-item');
    if (!els.length) return;

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          // Una vez visible, no necesitamos seguir observando
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => obs.observe(el));
  }

  /* ─── CONTADORES ──────────────────────────────────────────────────── */
  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el     = e.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || '';
        const dur    = parseInt(el.dataset.dur, 10) || 1500;
        const steps  = 50;
        const step   = dur / steps;
        let current  = 0;
        const inc    = target / steps;

        const timer = setInterval(() => {
          current += inc;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = Math.floor(current) + suffix;
        }, step);

        obs.unobserve(el);
      });
    }, { threshold: 0.5 });

    counters.forEach(c => obs.observe(c));
  }

  /* ─── SMOOTH SCROLL PARA ANCLAS ───────────────────────────────────── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (!el) return;
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ─── NAVBAR SCROLL EFFECT ────────────────────────────────────────── */
  function initNavScroll() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
      nav.style.borderBottomColor = window.scrollY > 60
        ? 'rgba(0,212,255,0.25)'
        : 'rgba(0,212,255,0.12)';
    }, { passive: true });
  }

  /* ─── TOOLTIP DATA-ATTR ───────────────────────────────────────────── */
  function initTooltips() {
    document.querySelectorAll('[data-tip]').forEach(el => {
      const tip = document.createElement('span');
      tip.className = 'tooltip';
      tip.textContent = el.dataset.tip;
      tip.style.cssText = `
        position:absolute; bottom:110%; left:50%; transform:translateX(-50%);
        background:rgba(3,8,15,0.95); border:1px solid rgba(0,212,255,0.2);
        color:#d8eeff; font-family:var(--font-mono); font-size:0.65rem;
        letter-spacing:0.1em; padding:6px 12px; white-space:nowrap;
        pointer-events:none; opacity:0; transition:opacity 0.2s ease;
        z-index:100;
      `;
      el.style.position = 'relative';
      el.appendChild(tip);
      el.addEventListener('mouseenter', () => { tip.style.opacity = '1'; });
      el.addEventListener('mouseleave', () => { tip.style.opacity = '0'; });
    });
  }

  /* ─── LOADER HIDE ─────────────────────────────────────────────────── */
  function hideLoader() {
    const loader = document.getElementById('page-loader');
    if (!loader) return;
    window.addEventListener('load', () => {
      loader.classList.add('hide');
      setTimeout(() => loader.remove(), 500);
    });
  }

  /* ─── INIT ALL ────────────────────────────────────────────────────── */
  function initAll() {
    hideLoader();
    initCursor();
    initNav();
    initPageTransitions();
    initReveal();
    initCounters();
    initSmoothScroll();
    initNavScroll();
    initTooltips();

    // Añadir clase de entrada
    document.body.classList.add('page-enter');

    // Iniciar partículas si el módulo está cargado
    if (window.VenadosParticles) {
      VenadosParticles.init('bg-canvas');
    }
    // Iniciar galería si el módulo está cargado
    if (window.VenadosGallery) {
      VenadosGallery.init();
    }
  }

  // EL TRUCO PARA NEXT.JS:
  // Si la página ya cargó, ejecuta todo de inmediato. Si no, espera.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

})();
