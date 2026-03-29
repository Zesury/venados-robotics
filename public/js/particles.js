/* =====================================================================
   VENADOS ROBOTICS — PARTÍCULAS / FONDO ANIMADO
   particles.js — Efecto de red de circuito
   ===================================================================== */

(function () {
  'use strict';

  function initParticles(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, nodes = [], animId;

    const CONFIG = {
      color: '#00d4ff',
      nodeCount: () => Math.min(80, Math.floor((W * H) / 16000)),
      maxDist: 160,
      nodeSpeed: 0.3,
      nodeSize: { min: 1, max: 2.5 },
    };

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      nodes = [];
      const n = CONFIG.nodeCount();
      for (let i = 0; i < n; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * CONFIG.nodeSpeed,
          vy: (Math.random() - 0.5) * CONFIG.nodeSpeed,
          r: CONFIG.nodeSize.min + Math.random() * (CONFIG.nodeSize.max - CONFIG.nodeSize.min),
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Actualizar posición
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });

      // Líneas entre nodos cercanos
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < CONFIG.maxDist) {
            const alpha = (1 - d / CONFIG.maxDist) * 0.55;
            ctx.beginPath();
            ctx.globalAlpha = alpha;
            ctx.strokeStyle = CONFIG.color;
            ctx.lineWidth   = 0.6;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Nodos
      nodes.forEach(n => {
        ctx.globalAlpha = 0.85;
        ctx.fillStyle   = CONFIG.color;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    }

    function stop()  { cancelAnimationFrame(animId); }
    function start() { animId = requestAnimationFrame(draw); }

    resize();
    start();

    window.addEventListener('resize', () => { stop(); resize(); start(); });

    // Pausa cuando la pestaña no es visible (ahorro de recursos)
    document.addEventListener('visibilitychange', () => {
      document.hidden ? stop() : start();
    });
  }

  // Exportar
  window.VenadosParticles = { init: initParticles };
})();
