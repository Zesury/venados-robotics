'use client';
import Link from 'next/link';
import React from 'react';
import Carousel from '../../components/carousel';

export default function Historia() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
    if (e.currentTarget.nextElementSibling) {
      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
    }
  };

  return (
    <>
      {/* ─── HERO DE HISTORIA ─── */}
      <div className="page-hero">
        <div className="hero-grid-bg" />
        <div className="glow-orb orb-cyan orb-l" style={{ opacity: 0.5 }} />
        <span className="section-tag hero-badge-anim">// 01 · ORIGEN Y TRAYECTORIA</span>
        <h1 className="hero-title-anim glitch" data-text="NUESTRA HISTORIA">
          NUESTRA <span>HISTORIA</span>
        </h1>
        <p className="hero-sub-anim">
          De un prototipo con motores amarillos a 3 medallas en el certamen Continental.<br />
          El código del éxito de Venados Robotics.
        </p>
      </div>

      <main>
        {/* ─── LÍNEA DE TIEMPO ─── */}
        <section className="section">
          <span className="section-tag reveal">// CRONOLOGÍA</span>
          <h2 className="section-title reveal">EL <em>CÓDIGO</em> DEL ÉXITO</h2>
          <div className="section-line reveal" />

          <p className="reveal" style={{ color: 'var(--text-dim)', maxWidth: '700px', marginBottom: '56px' }}>
            Hace dos años el proyecto inició con una sola pregunta: <em style={{ color: 'var(--cyan)', fontStyle: 'normal' }}>"¿Podemos construir tecnología de clase mundial desde cero?"</em> Lo que empezó con dos estudiantes y un mentor hoy es referente de la robótica en el Estado de México.
          </p>

          <div className="timeline">
            {/* EVENTO 1 */}
            <div className="timeline-item reveal">
              <div className="timeline-dot" />
              <div className="timeline-year">// 2024 · COMPETENCIA 01</div>
              <div className="timeline-event">CRYDTEM — UP ATLACOMULCO · BAUTIZO DE FUEGO</div>
              <p className="timeline-desc">Fundación del equipo: Jared López López, Iván Felipe Nava y el Dr. Octavio Catarino Aguilar. Primer prototipo: ESP32, motores amarillos, puente H L298N y baterías de litio 12V. Categoría RoboFut.</p>
              <div className="achievement-badges" style={{ marginTop: '12px' }}>
                <span className="badge badge-silver">🥈 2DO LUGAR ESTATAL · ROBOFUT</span>
              </div>
              <div className="achievement-gallery">
                <Carousel autoplay={4000}>
                  <div>
                    <div className="img-slot ratio-16-9" data-lightbox="true">
                      <img src="/images/achievements/crydtem-1/foto-1.png" alt="CRYDTEM UP Atlacomulco - Foto 1" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">🏆</span><p className="ph-name">foto-1.png</p><span className="ph-path">images/achievements/crydtem-1/</span></div>
                    </div>
                    <div className="gallery-caption">// CRYDTEM UP Atlacomulco 2024 — 2do Lugar RoboFut</div>
                  </div>
                  <div>
                    <div className="img-slot ratio-16-9" data-lightbox="true">
                      <img src="/images/achievements/crydtem-1/foto-2.png" alt="CRYDTEM UP Atlacomulco - Foto 2" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">📸</span><p className="ph-name">foto-2.png</p><span className="ph-path">images/achievements/crydtem-1/</span></div>
                    </div>
                    <div className="gallery-caption">// Primer prototipo — ESP32 + motores amarillos</div>
                  </div>
                  <div>
                    <div className="img-slot ratio-16-9" data-lightbox="true">
                      <img src="/images/achievements/crydtem-1/foto-3.png" alt="CRYDTEM UP Atlacomulco - Foto 3" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">🤖</span><p className="ph-name">foto-3.png</p><span className="ph-path">images/achievements/crydtem-1/</span></div>
                    </div>
                    <div className="gallery-caption">// Competencia en pista de RoboFut</div>
                  </div>
                </Carousel>
              </div>
            </div>

            {/* EVENTO 2 */}
            <div className="timeline-item reveal delay-1">
              <div className="timeline-dot" />
              <div className="timeline-year">// 2024 · COMPETENCIA 02</div>
              <div className="timeline-event">CRYDTEM — TECNOLÓGICO DE JOCOTITLÁN · LA EVOLUCIÓN</div>
              <p className="timeline-desc">Rediseño total: chasis 4WD en SolidWorks, pala impresa en 3D y control Xbox Series. Velocidad y precisión renovadas. 3 unidades en pista simultáneas.</p>
              <div style={{ marginTop: '12px' }}>
                <span className="badge badge-gold">🏆 1ER LUGAR</span>
                <span className="badge badge-cyan">⚙️ DISEÑO 4WD</span>
              </div>
              <div className="achievement-gallery">
                <Carousel autoplay={4500}>
                  <div>
                    <div className="img-slot ratio-16-9" data-lightbox="true">
                      <img src="/images/achievements/jocotitlan/foto-1.png" alt="Jocotitlán Foto 1" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">🏆</span><p className="ph-name">foto-1.png</p><span className="ph-path">images/achievements/jocotitlan/</span></div>
                    </div>
                    <div className="gallery-caption">// Jocotitlán — Robot 4WD v2.0</div>
                  </div>
                  <div>
                    <div className="img-slot ratio-16-9" data-lightbox="true">
                      <img src="/images/achievements/jocotitlan/foto-2.png" alt="Jocotitlán Foto 2" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">🖨️</span><p className="ph-name">foto-2.png</p><span className="ph-path">images/achievements/jocotitlan/</span></div>
                    </div>
                    <div className="gallery-caption">// Chasis impreso en 3D — SolidWorks</div>
                  </div>
                </Carousel>
              </div>
            </div>

            {/* EVENTO 3 */}
            <div className="timeline-item reveal delay-2">
              <div className="timeline-dot" />
              <div className="timeline-year">// 2024 · COMPETENCIA 03</div>
              <div className="timeline-event">ROBOMATRIX PUEBLA · CLASIFICACIÓN CONTINENTAL</div>
              <p className="timeline-desc">Dominio técnico y táctico. 1er lugar, acreditación directa para Robomatrix Continental. El salto al escenario nacional más importante.</p>
              <div style={{ marginTop: '12px' }}>
                <span className="badge badge-gold">🥇 1ER LUGAR · CLASIFICADO CONTINENTAL</span>
              </div>
              <div className="achievement-gallery">
                <Carousel autoplay={4000}>
                  <div>
                    <div className="img-slot ratio-16-9" data-lightbox="true">
                      <img src="/images/achievements/puebla/foto-1.png" alt="Puebla 1" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">🥇</span><p className="ph-name">foto-1.png</p><span className="ph-path">images/achievements/puebla/</span></div>
                    </div>
                    <div className="gallery-caption">// Robomatrix Puebla — Clasificación Continental</div>
                  </div>
                  <div>
                    <div className="img-slot ratio-16-9" data-lightbox="true">
                      <img src="/images/achievements/puebla/foto-2.png" alt="Puebla 2" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">📸</span><p className="ph-name">foto-2.png</p><span className="ph-path">images/achievements/puebla/</span></div>
                    </div>
                    <div className="gallery-caption">// Podio — 1er Lugar RoboFut Puebla</div>
                  </div>
                </Carousel>
              </div>
            </div>

            {/* EVENTO 4 */}
            <div className="timeline-item reveal delay-2">
              <div className="timeline-dot" />
              <div className="timeline-year">// 2025 · COMPETENCIA 04</div>
              <div className="timeline-event">JILOTEPEC · TRICAMPEONATO Y DIVERSIFICACIÓN</div>
              <p className="timeline-desc">Tricampeonato en RoboFut. Primera incursión en Sumo Amateur (2do lugar) y Sumo RC Profesional (cuartos de final). Expansión de categorías.</p>
              <div style={{ marginTop: '12px' }}>
                <span className="badge badge-gold">🥇 TRICAMPEONATO ROBOFUT</span>
                <span className="badge badge-silver">🥈 SUMO AMATEUR</span>
                <span className="badge badge-cyan">⚔️ CUARTOS SUMO RC</span>
              </div>
              <div className="achievement-gallery">
                <Carousel autoplay={4000}>
                  <div>
                    <div className="img-slot ratio-16-9" data-lightbox="true">
                      <img src="/images/achievements/jilotepec/foto-1.png" alt="Jilotepec 1" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">🏆</span><p className="ph-name">foto-1.png</p><span className="ph-path">images/achievements/jilotepec/</span></div>
                    </div>
                    <div className="gallery-caption">// Jilotepec — Tricampeonato RoboFut</div>
                  </div>
                  <div>
                    <div className="img-slot ratio-16-9" data-lightbox="true">
                      <img src="/images/achievements/jilotepec/foto-2.png" alt="Jilotepec 2" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">🤼</span><p className="ph-name">foto-2.png</p><span className="ph-path">images/achievements/jilotepec/</span></div>
                    </div>
                    <div className="gallery-caption">// Sumo Amateur — 2do Lugar</div>
                  </div>
                </Carousel>
              </div>
            </div>

            {/* EVENTO 5 */}
            <div className="timeline-item reveal delay-3">
              <div className="timeline-dot" />
              <div className="timeline-year">// 2025 · COMPETENCIA 05</div>
              <div className="timeline-event">MECAFLOW — JILOTEPEC · LA FORJA</div>
              <p className="timeline-desc">Sede más competitiva del circuito. Nuevos rivales, nuevas estrategias. Laboratorio de aprendizaje máximo. Foco en dominar la categoría Sumo.</p>
              <div style={{ marginTop: '12px' }}>
                <span className="badge badge-cyan">⚙️ LABORATORIO DE APRENDIZAJE</span>
              </div>
              <div className="achievement-gallery">
                <Carousel autoplay={4000}>
                  <div>
                    <div className="img-slot ratio-16-9" data-lightbox="true">
                      <img src="/images/achievements/mecaflow/foto-1.png" alt="Mecaflow 1" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">⚙️</span><p className="ph-name">foto-1.png</p><span className="ph-path">images/achievements/mecaflow/</span></div>
                    </div>
                    <div className="gallery-caption">// Mecaflow Jilotepec — Aprendizaje intenso</div>
                  </div>
                  <div>
                    <div className="img-slot ratio-16-9" data-lightbox="true">
                      <img src="/images/achievements/mecaflow/foto-2.png" alt="Mecaflow 2" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">🤖</span><p className="ph-name">foto-2.png</p><span className="ph-path">images/achievements/mecaflow/</span></div>
                    </div>
                    <div className="gallery-caption">// Robots en pista de Sumo</div>
                  </div>
                </Carousel>
              </div>
            </div>

            {/* EVENTO 6 */}
            <div className="timeline-item reveal delay-3">
              <div className="timeline-dot" />
              <div className="timeline-year">// 2025 · COMPETENCIA 06</div>
              <div className="timeline-event">ROBOMATRIX CONTINENTAL — U. LA SALLE OAXACA</div>
              <p className="timeline-desc">La cima. +55 instituciones de México, Bolivia y Costa Rica. 3 medallas. 3er Lugar General del Medallero entre todas las universidades.</p>
              <div style={{ marginTop: '12px' }}>
                <span className="badge badge-gold">🥇 SUMO AUTÓNOMO</span>
                <span className="badge badge-silver">🥈 ROBOFUT</span>
                <span className="badge badge-bronze">🥉 ROBOFUT</span>
                <span className="badge badge-cyan">🏎️ TOP 5 SEGUIDOR</span>
              </div>
              <div className="achievement-gallery">
                <Carousel autoplay={3800}>
                  <div>
                    <div className="img-slot ratio-16-9" data-lightbox="true">
                      <img src="/images/achievements/oaxaca/foto-1.png" alt="Oaxaca 1" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">🥇</span><p className="ph-name">foto-1.png</p><span className="ph-path">images/achievements/oaxaca/</span></div>
                    </div>
                    <div className="gallery-caption">// Continental Oaxaca — 1er Lugar Sumo Autónomo</div>
                  </div>
                  <div>
                    <div className="img-slot ratio-16-9" data-lightbox="true">
                      <img src="/images/achievements/oaxaca/foto-2.png" alt="Oaxaca 2" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">🥈</span><p className="ph-name">foto-2.png</p><span className="ph-path">images/achievements/oaxaca/</span></div>
                    </div>
                    <div className="gallery-caption">// 2do Lugar RoboFut Internacional</div>
                  </div>
                  <div>
                    <div className="img-slot ratio-16-9" data-lightbox="true">
                      <img src="/images/achievements/oaxaca/foto-3.png" alt="Oaxaca 3" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">🏆</span><p className="ph-name">foto-3.png</p><span className="ph-path">images/achievements/oaxaca/</span></div>
                    </div>
                    <div className="gallery-caption">// 3er Lugar General del Medallero</div>
                  </div>
                  <div>
                    <div className="img-slot ratio-16-9" data-lightbox="true">
                      <img src="/images/achievements/oaxaca/foto-4.png" alt="Oaxaca 4" onError={handleImageError} />
                      <div className="placeholder" style={{ display: 'none' }}><span className="ph-icon">📸</span><p className="ph-name">foto-4.png</p><span className="ph-path">images/achievements/oaxaca/</span></div>
                    </div>
                    <div className="gallery-caption">// Top 5 Tiempos — Seguidor de Línea Profesional</div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </section>


        {/* ─── NAV FOOTER ─── */}
        <div className="section-full" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="inner">
            <span className="section-tag reveal">//EXPLORA MÁS</span>
            <h2 className="section-title reveal">SECCIONES <em>DEL EQUIPO</em></h2>
            <div className="section-line reveal" />

            <div className="page-nav-grid">
              <Link href="/robots" className="page-nav-card reveal delay-1">
                <div className="page-nav-icon">🤖</div>
                <div className="page-nav-title">ROBOTS DESARROLLADOS</div>
                <p className="page-nav-desc">Todos nuestros robots: RoboFut, Sumo Autónomo, Sumo RC y Seguidor de Línea.</p>
                <span className="page-nav-arrow">// IR A ROBOTS →</span>
              </Link>
              <Link href="/tecnologia" className="page-nav-card reveal delay-2">
                <div className="page-nav-icon">⚙️</div>
                <div className="page-nav-title">NUESTRO ADN TECNOLÓGICO</div>
                <p className="page-nav-desc">Stack tecnológico completo: componentes, herramientas, PCBs y nuestra fórmula.</p>
                <span className="page-nav-arrow">// IR A TECNOLOGÍA →</span>
              </Link>
              <Link href="/contacto" className="page-nav-card reveal delay-3">
                <div className="page-nav-icon">📍</div>
                <div className="page-nav-title">CONTÁCTANOS</div>
                <p className="page-nav-desc">Ubícanos en el TESSFP, escríbenos o únete al equipo.</p>
                <span className="page-nav-arrow">// IR A CONTACTO →</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}