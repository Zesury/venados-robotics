'use client';
import React from 'react';
import Carousel from '../../components/carousel';

export default function Robots() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
    if (e.currentTarget.nextElementSibling) {
      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
    }
  };

  return (
    <>
      <div className="page-hero">
        <div className="hero-grid-bg" />
        <div className="glow-orb orb-orange orb-l" style={{ opacity: 0.7 }} />
        <span className="section-tag hero-badge-anim">// 03 · ARSENAL TECNOLÓGICO</span>
        <h1 className="hero-title-anim glitch" data-text="ROBOTS DESARROLLADOS">
          ROBOTS <span>DESARROLLADOS</span>
        </h1>
        <p className="hero-sub-anim">
          Cada robot es el resultado de iteración constante, diseño en SolidWorks,<br />
          impresión 3D y programación de precisión. Construidos para ganar.
        </p>
      </div>

      <main>
        <section className="section">

          {/* ═══════════════════════════════════════════════════════════════
               ROBOT 1 — ROBOFUT
          ═══════════════════════════════════════════════════════════════ */}
          <div className="robot-showcase reveal">
            <div className="robot-header">
              <div className="robot-icon-big">⚽</div>
              <div className="robot-header-info">
                <div className="robot-name-big">FAMILIA ROBOFUT</div>
                <div className="robot-version-tag">// CATEGORÍA ROBOFUT · MULTI-VERSIÓN · 4 EVOLUCIONES</div>
              </div>
              <div className="robot-achievements">
                <span className="badge badge-gold">🥇 TRICAMPEONATO</span>
                <span className="badge badge-silver">🥈 CONTINENTAL</span>
                <span className="badge badge-bronze">🥉 CONTINENTAL</span>
              </div>
            </div>

            <div className="robot-body">
              {/* Truco Grid: minWidth: 0 evita que el carrusel estire la columna */}
              <div className="robot-gallery-col" style={{ minWidth: 0 }}>
                <Carousel autoplay={3500}>
                  <div>
                    <div className="img-slot ratio-4-3" data-lightbox="true">
                      <img src="/images/robots/robofut/v1.png" alt="RoboFut v1.0" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">⚽</span><p className="ph-name">v1.png</p><span className="ph-path">images/robots/robofut/</span></div>
                    </div>
                    <div className="gallery-caption">// v1.0 — Prototipo inicial con motores amarillos</div>
                  </div>
                  <div>
                    <div className="img-slot ratio-4-3" data-lightbox="true">
                      <img src="/images/robots/robofut/v2.png" alt="RoboFut v2.0" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">🏎️</span><p className="ph-name">v2.png</p><span className="ph-path">images/robots/robofut/</span></div>
                    </div>
                    <div className="gallery-caption">// v2.0 — Tracción 4WD, chasis SolidWorks</div>
                  </div>
                  <div>
                    <div className="img-slot ratio-4-3" data-lightbox="true">
                      <img src="/images/robots/robofut/v3.png" alt="RoboFut v3.0" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">🚀</span><p className="ph-name">v3.png</p><span className="ph-path">images/robots/robofut/</span></div>
                    </div>
                    <div className="gallery-caption">// v3.0 — Tricampeón en Jilotepec</div>
                  </div>
                  <div>
                    <div className="img-slot ratio-4-3" data-lightbox="true">
                      <img src="/images/robots/robofut/v4.png" alt="RoboFut v4.0" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">🏆</span><p className="ph-name">v4.png</p><span className="ph-path">images/robots/robofut/</span></div>
                    </div>
                    <div className="gallery-caption">// v4.0 — Versión Continental Oaxaca</div>
                  </div>
                </Carousel>
              </div>

              <div className="robot-info-col">
                <p className="robot-desc">
                  La familia RoboFut es nuestra línea estrella. Desde el prototipo con motores amarillos que logró 2do lugar en Atlacomulco, hasta la versión que conquistó el podio continental en Oaxaca. Cada versión incorporó mejoras significativas en velocidad, maniobrabilidad y control.
                </p>
                <div className="robot-specs-title">// ESPECIFICACIONES TÉCNICAS</div>
                <ul className="spec-list">
                  <li className="spec-item"><span className="spec-dot">▸</span> Microcontrolador ESP32 (WiFi/Bluetooth)</li>
                  <li className="spec-item"><span className="spec-dot">▸</span> Motorreductores de alto torque</li>
                  <li className="spec-item"><span className="spec-dot">▸</span> Driver Puente H L298N / drivers avanzados</li>
                  <li className="spec-item"><span className="spec-dot">▸</span> Chasis 4WD diseñado en SolidWorks</li>
                  <li className="spec-item"><span className="spec-dot">▸</span> Control Xbox Series inalámbrico</li>
                  <li className="spec-item"><span className="spec-dot">▸</span> Neumáticos de caucho fórmula propia</li>
                </ul>
                <div className="tech-stats-row">
                  <div className="tech-stat"><div className="ts-val">4</div><div className="ts-lbl">// VERSIONES</div></div>
                  <div className="tech-stat"><div className="ts-val">5+</div><div className="ts-lbl">// MEDALLAS</div></div>
                  <div className="tech-stat"><div className="ts-val">3×</div><div className="ts-lbl">// TRICAMPEÓN</div></div>
                </div>
              </div>
            </div>

            <div style={{ padding: '0 32px 32px' }}>
              <div className="robot-specs-title" style={{ paddingTop: '28px', borderTop: '1px solid var(--border)' }}>// EVOLUCIÓN POR VERSIÓN</div>
              <div className="versions-grid">
                <div className="version-card">
                  <div className="version-num">// v1.0 · 2024</div>
                  <div className="version-name">Prototipo Base</div>
                  <p className="version-desc">ESP32 + motores amarillos + L298N. Primer debut. 2do Lugar UP Atlacomulco.</p>
                </div>
                <div className="version-card">
                  <div className="version-num">// v2.0 · 2024</div>
                  <div className="version-name">Tracción 4WD</div>
                  <p className="version-desc">Rediseño total SolidWorks. 4 ruedas, pala 3D, control Xbox Series. Jocotitlán.</p>
                </div>
                <div className="version-card">
                  <div className="version-num">// v3.0 · 2025</div>
                  <div className="version-name">Tricampeón</div>
                  <p className="version-desc">Optimización de velocidad y maniobrabilidad. Domina Jilotepec 3 veces consecutivas.</p>
                </div>
                <div className="version-card">
                  <div className="version-num">// v4.0 · 2025</div>
                  <div className="version-name">Continental</div>
                  <p className="version-desc">PCB propia + caucho personalizado. 2do y 3er lugar en Oaxaca vs Bolivia y Costa Rica.</p>
                </div>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
               ROBOT 2 — SUMO AUTÓNOMO
          ═══════════════════════════════════════════════════════════════ */}
          <div className="robot-showcase reveal delay-1">
            <div className="robot-header">
              <div className="robot-icon-big">🤖</div>
              <div className="robot-header-info">
                <div className="robot-name-big">SUMO-X AUTÓNOMO</div>
                <div className="robot-version-tag">// CATEGORÍA SUMO AUTÓNOMO · PRIMER LUGAR CONTINENTAL</div>
              </div>
              <div className="robot-achievements">
                <span className="badge badge-gold">🥇 1ER LUGAR CONTINENTAL</span>
              </div>
            </div>
            <div className="robot-body">
              <div className="robot-gallery-col" style={{ minWidth: 0 }}>
                <Carousel autoplay={4000}>
                  <div>
                    <div className="img-slot ratio-4-3" data-lightbox="true">
                      <img src="/images/robots/sumo-autonomo/foto-1.png" alt="Sumo Autónomo 1" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">🤖</span><p className="ph-name">foto-1.png</p><span className="ph-path">images/robots/sumo-autonomo/</span></div>
                    </div>
                    <div className="gallery-caption">// Sumo-X Autónomo — Vista frontal</div>
                  </div>
                  <div>
                    <div className="img-slot ratio-4-3" data-lightbox="true">
                      <img src="/images/robots/sumo-autonomo/foto-2.png" alt="Sumo Autónomo 2" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">⚡</span><p className="ph-name">foto-2.png</p><span className="ph-path">images/robots/sumo-autonomo/</span></div>
                    </div>
                    <div className="gallery-caption">// Sensores y PCB personalizada</div>
                  </div>
                  <div>
                    <div className="img-slot ratio-4-3" data-lightbox="true">
                      <img src="/images/robots/sumo-autonomo/foto-3.png" alt="Sumo Autónomo 3" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">🏆</span><p className="ph-name">foto-3.png</p><span className="ph-path">images/robots/sumo-autonomo/</span></div>
                    </div>
                    <div className="gallery-caption">// 1er Lugar Oaxaca — En acción</div>
                  </div>
                </Carousel>
              </div>
              <div className="robot-info-col">
                <p className="robot-desc">
                  Nuestro orgullo técnico más grande. El Sumo-X Autónomo opera sin intervención humana: detecta al oponente, calcula el ángulo de ataque óptimo y ejecuta estrategias de empuje con precisión milimétrica. Ganó el 1er Lugar Continental frente a más de 55 escuelas.
                </p>
                <div className="robot-specs-title">// ESPECIFICACIONES TÉCNICAS</div>
                <ul className="spec-list">
                  <li className="spec-item"><span className="spec-dot">▸</span> Algoritmos de búsqueda y detección autónoma</li>
                  <li className="spec-item"><span className="spec-dot">▸</span> Sensores infrarrojos de límite y proximidad</li>
                  <li className="spec-item"><span className="spec-dot">▸</span> PCB fabricada por transferencia térmica propia</li>
                  <li className="spec-item"><span className="spec-dot">▸</span> ESP32 con lógica de combate programada</li>
                </ul>
                <div className="tech-stats-row">
                  <div className="tech-stat"><div className="ts-val">100%</div><div className="ts-lbl">// AUTÓNOMO</div></div>
                  <div className="tech-stat"><div className="ts-val">🥇</div><div className="ts-lbl">// OAXACA</div></div>
                  <div className="tech-stat"><div className="ts-val">PCB</div><div className="ts-lbl">// FABRICACIÓN PROPIA</div></div>
                </div>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
               ROBOT 3 — SUMO RC PROFESIONAL
          ═══════════════════════════════════════════════════════════════ */}
          <div className="robot-showcase reveal delay-2">
            <div className="robot-header">
              <div className="robot-icon-big">🕹️</div>
              <div className="robot-header-info">
                <div className="robot-name-big">SUMO-RC PROFESIONAL</div>
                <div className="robot-version-tag">// CATEGORÍA SUMO RC · CUARTOS DE FINAL CONTINENTAL</div>
              </div>
              <div className="robot-achievements">
                <span className="badge badge-cyan">⚔️ CUARTOS CONTINENTAL</span>
              </div>
            </div>
            <div className="robot-body">
              <div className="robot-gallery-col" style={{ minWidth: 0 }}>
                <Carousel autoplay={4200}>
                  <div>
                    <div className="img-slot ratio-4-3" data-lightbox="true">
                      <img src="/images/robots/sumo-rc/foto-1.png" alt="Sumo RC 1" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">🕹️</span><p className="ph-name">foto-1.png</p><span className="ph-path">images/robots/sumo-rc/</span></div>
                    </div>
                    <div className="gallery-caption">// Sumo-RC Pro — Vista superior</div>
                  </div>
                  <div>
                    <div className="img-slot ratio-4-3" data-lightbox="true">
                      <img src="/images/robots/sumo-rc/foto-2.png" alt="Sumo RC 2" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">🎮</span><p className="ph-name">foto-2.png</p><span className="ph-path">images/robots/sumo-rc/</span></div>
                    </div>
                    <div className="gallery-caption">// Control Xbox Series — Interfaz RC</div>
                  </div>
                </Carousel>
              </div>
              <div className="robot-info-col">
                <p className="robot-desc">
                  El guerrero de combate RC. Diseñado para reaccionar a los reflejos del piloto con latencia mínima. Compitió en la categoría más exigente del circuito llegando a cuartos de final en el Continental de Oaxaca frente a universidades top del país.
                </p>
                <div className="robot-specs-title">// ESPECIFICACIONES TÉCNICAS</div>
                <ul className="spec-list">
                  <li className="spec-item"><span className="spec-dot">▸</span> Control Xbox Series (baja latencia)</li>
                  <li className="spec-item"><span className="spec-dot">▸</span> Diseño de cuña frontal para volteo</li>
                  <li className="spec-item"><span className="spec-dot">▸</span> Motores de alto torque y respuesta inmediata</li>
                  <li className="spec-item"><span className="spec-dot">▸</span> Chasis bajo perfil impreso en 3D</li>
                  <li className="spec-item"><span className="spec-dot">▸</span> Neumáticos caucho adherente fórmula propia</li>
                </ul>
                <div className="tech-stats-row">
                  <div className="tech-stat"><div className="ts-val">RC</div><div className="ts-lbl">// CONTROL</div></div>
                  <div className="tech-stat"><div className="ts-val">≤5ms</div><div className="ts-lbl">// LATENCIA</div></div>
                  <div className="tech-stat"><div className="ts-val">PRO</div><div className="ts-lbl">// CATEGORÍA</div></div>
                </div>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
               ROBOT 4 — SEGUIDOR DE LÍNEA
          ═══════════════════════════════════════════════════════════════ */}
          <div className="robot-showcase reveal delay-3">
            <div className="robot-header">
              <div className="robot-icon-big">🏎️</div>
              <div className="robot-header-info">
                <div className="robot-name-big">LINE-TRACK PRO</div>
                <div className="robot-version-tag">// SEGUIDOR DE LÍNEA PROFESIONAL · TOP 5 ×2 ENTRE 56 ESCUELAS</div>
              </div>
              <div className="robot-achievements">
                <span className="badge badge-cyan">🏎️ TOP 5 ×2 UNIDADES</span>
              </div>
            </div>
            <div className="robot-body">
              <div className="robot-gallery-col" style={{ minWidth: 0 }}>
                <Carousel autoplay={4000}>
                  <div>
                    <div className="img-slot ratio-4-3" data-lightbox="true">
                      <img src="/images/robots/seguidor-linea/foto-1.png" alt="Seguidor 1" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">🏎️</span><p className="ph-name">foto-1.png</p><span className="ph-path">images/robots/seguidor-linea/</span></div>
                    </div>
                    <div className="gallery-caption">// Line-Track Pro — Unidad A</div>
                  </div>
                  <div>
                    <div className="img-slot ratio-4-3" data-lightbox="true">
                      <img src="/images/robots/seguidor-linea/foto-2.png" alt="Seguidor 2" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">📡</span><p className="ph-name">foto-2.png</p><span className="ph-path">images/robots/seguidor-linea/</span></div>
                    </div>
                    <div className="gallery-caption">// Array de sensores IR — 8 canales</div>
                  </div>
                  <div>
                    <div className="img-slot ratio-4-3" data-lightbox="true">
                      <img src="/images/robots/seguidor-linea/foto-3.png" alt="Seguidor 3" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">⚡</span><p className="ph-name">foto-3.png</p><span className="ph-path">images/robots/seguidor-linea/</span></div>
                    </div>
                    <div className="gallery-caption">// En pista — Top 5 tiempo continental</div>
                  </div>
                </Carousel>
              </div>
              <div className="robot-info-col">
                <p className="robot-desc">
                  Velocidad y precisión extremas. Con control PID optimizado para trayectorias complejas, logramos que 2 de nuestras unidades quedaran entre los 5 mejores tiempos de 56 escuelas en Oaxaca Continental. Una hazaña única para un equipo de 2 años.
                </p>
                <div className="robot-specs-title">// ESPECIFICACIONES TÉCNICAS</div>
                <ul className="spec-list">
                  <li className="spec-item"><span className="spec-dot">▸</span> Control PID de alta precisión (ajuste fino)</li>
                  <li className="spec-item"><span className="spec-dot">▸</span> Array de 8 sensores IR de alta frecuencia</li>
                  <li className="spec-item"><span className="spec-dot">▸</span> Motores de alta RPM para velocidad máxima</li>
                  <li className="spec-item"><span className="spec-dot">▸</span> Diseño aerodinámico de bajo perfil impreso en 3D</li>
                  <li className="spec-item"><span className="spec-dot">▸</span> 2 unidades con tiempos Top 5 globales</li>
                </ul>
                <div className="tech-stats-row">
                  <div className="tech-stat"><div className="ts-val">PID</div><div className="ts-lbl">// CONTROL</div></div>
                  <div className="tech-stat"><div className="ts-val">Top5</div><div className="ts-lbl">// ×2 UNIDADES</div></div>
                  <div className="tech-stat"><div className="ts-val">56</div><div className="ts-lbl">// ESCUELAS RIVALES</div></div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </main>
    </>
  );
}