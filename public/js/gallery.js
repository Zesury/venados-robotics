/* =====================================================================
   VENADOS ROBOTICS — GALERÍA / CARRUSEL
   gallery.js
   ===================================================================== */

(function () {
  'use strict';

  /* ─── AUTO-AJUSTE DE IMÁGENES ──────────────────────────────────────
   * Detecta si la imagen existe y marca el slot como cargado.
   * Si NO existe, el placeholder CSS permanece visible.
   * ─────────────────────────────────────────────────────────────── */
  function initImgSlots() {
    document.querySelectorAll('.img-slot img').forEach(img => {
      // Intento de carga
      if (img.complete && img.naturalWidth > 0) {
        img.classList.add('loaded');
        img.parentElement.classList.add('has-image');
      } else {
        img.addEventListener('load', () => {
          img.classList.add('loaded');
          img.parentElement.classList.add('has-image');
        });
        img.addEventListener('error', () => {
          // Imagen no encontrada → placeholder visible
          img.style.display = 'none';
        });
      }
    });
  }

  /* ─── CARRUSEL ────────────────────────────────────────────────────
   * Uso: <div class="carousel" data-autoplay="4000">
   *        <div class="carousel-track">
   *          <div class="carousel-slide">…</div>
   *          …
   *        </div>
   *        <button class="carousel-btn prev">‹</button>
   *        <button class="carousel-btn next">›</button>
   *        <div class="carousel-controls"></div>
   *      </div>
   * ─────────────────────────────────────────────────────────────── */
  function initCarousels() {
    document.querySelectorAll('.carousel').forEach(carousel => {
      const track    = carousel.querySelector('.carousel-track');
      const slides   = carousel.querySelectorAll('.carousel-slide');
      const dotsWrap = carousel.querySelector('.carousel-controls');
      const btnPrev  = carousel.querySelector('.carousel-btn.prev');
      const btnNext  = carousel.querySelector('.carousel-btn.next');
      const autoDelay = parseInt(carousel.dataset.autoplay) || 0;

      if (!track || slides.length === 0) return;

      let current  = 0;
      let timer    = null;
      let touching = false;
      let touchStartX = 0;

      // Crear dots
      if (dotsWrap) {
        slides.forEach((_, i) => {
          const dot = document.createElement('button');
          dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
          dot.setAttribute('aria-label', `Slide ${i + 1}`);
          dot.addEventListener('click', () => goTo(i));
          dotsWrap.appendChild(dot);
        });
      }

      function updateDots() {
        if (!dotsWrap) return;
        dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) => {
          d.classList.toggle('active', i === current);
        });
      }

      function goTo(index) {
        current = ((index % slides.length) + slides.length) % slides.length;
        track.style.transform = `translateX(-${current * 100}%)`;
        updateDots();
      }

      function next() { goTo(current + 1); }
      function prev() { goTo(current - 1); }

      if (btnNext) btnNext.addEventListener('click', () => { resetTimer(); next(); });
      if (btnPrev) btnPrev.addEventListener('click', () => { resetTimer(); prev(); });

      // Teclado
      carousel.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft')  { resetTimer(); prev(); }
        if (e.key === 'ArrowRight') { resetTimer(); next(); }
      });
      carousel.setAttribute('tabindex', '0');

      // Touch swipe
      carousel.addEventListener('touchstart', e => {
        touching = true;
        touchStartX = e.touches[0].clientX;
      }, { passive: true });
      carousel.addEventListener('touchend', e => {
        if (!touching) return;
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); resetTimer(); }
        touching = false;
      }, { passive: true });

      // Auto-play
      function startTimer() {
        if (!autoDelay) return;
        timer = setInterval(next, autoDelay);
      }
      function resetTimer() {
        clearInterval(timer);
        startTimer();
      }

      startTimer();
    });
  }

  /* ─── LIGHTBOX ────────────────────────────────────────────────────
   * Añade data-lightbox a cualquier .img-slot para abrir en modal.
   * ─────────────────────────────────────────────────────────────── */
  function initLightbox() {
    // Crear overlay
    const overlay = document.createElement('div');
    overlay.id = 'lightbox';
    overlay.style.cssText = `
      display:none; position:fixed; inset:0; z-index:9800;
      background:rgba(3,8,15,0.96); align-items:center; justify-content:center;
      cursor:zoom-out;
    `;
    const lbImg = document.createElement('img');
    lbImg.style.cssText = 'max-width:90vw; max-height:90vh; object-fit:contain; border:1px solid rgba(0,212,255,0.2);';
    overlay.appendChild(lbImg);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { overlay.style.display = 'none'; document.body.style.overflow = ''; }
    });

    document.querySelectorAll('[data-lightbox] img.loaded').forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', e => {
        e.stopPropagation();
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      });
    });
  }

  /* ─── INIT ──────────────────────────────────────────────────────── */
  function init() {
    initImgSlots();
    initCarousels();
    // Lightbox se init después de que las imágenes carguen
    setTimeout(initLightbox, 600);
  }

  // Exportar
  window.VenadosGallery = { init };
})();
