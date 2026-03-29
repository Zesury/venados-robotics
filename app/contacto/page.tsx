'use client';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Contacto() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío (reemplaza con tu backend/EmailJS/Formspree)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <>
      <div className="page-hero">
        <div className="hero-grid-bg" />
        <div className="glow-orb orb-cyan orb-l" style={{ opacity: 0.5 }} />
        <span className="section-tag hero-badge-anim">// 06 · CONECTA CON NOSOTROS</span>
        <h1 className="hero-title-anim glitch" data-text="CONTÁCTANOS">
          <span>CONTÁCTANOS</span>
        </h1>
        <p className="hero-sub-anim">
          ¿Quieres colaborar, patrocinarnos o unirte al equipo?<br />
          Estamos abiertos a nuevas alianzas y proyectos de innovación.
        </p>
      </div>

      <section className="section">
        <div className="contact-layout">
          {/* INFO */}
          <div className="contact-info-box reveal">
            <div className="info-title">Información del Equipo</div>
            <p className="info-desc">
              Somos el Club de Robótica Venados del Tecnológico de Estudios Superiores de San Felipe del Progreso. Competimos a nivel estatal, nacional e internacional.
            </p>

            <div className="info-item">
              <div className="info-icon">🏫</div>
              <div>
                <div className="info-lbl">// INSTITUCIÓN</div>
                <div className="info-val">Tecnológico de Estudios Superiores de San Felipe del Progreso (TESSFP)</div>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <div className="info-lbl">// UBICACIÓN</div>
                <div className="info-val">San Felipe del Progreso, Estado de México, México</div>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🦌</div>
              <div>
                <div className="info-lbl">// EQUIPO</div>
                <div className="info-val">Venados Robotics — Club de Robótica TESSFP</div>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">👤</div>
              <div>
                <div className="info-lbl">// LÍDER DEL EQUIPO</div>
                <div className="info-val">Jared López López</div>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🎓</div>
              <div>
                <div className="info-lbl">// ASESOR</div>
                <div className="info-val">Dr. Octavio Catarino Aguilar</div>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🏆</div>
              <div>
                <div className="info-lbl">// ESPECIALIDADES</div>
                <div className="info-val">RoboFut · Sumo Autónomo · Sumo RC · Seguidor de Línea</div>
              </div>
            </div>

            <div className="social-row">
              <a href="#" className="social-btn"><span>📘</span> FACEBOOK</a>
              <a href="#" className="social-btn"><span>📸</span> INSTAGRAM</a>
              <a href="#" className="social-btn"><span>🎬</span> YOUTUBE</a>
            </div>
          </div>

          {/* FORMULARIO */}
          <div className="form-box reveal delay-2">
            <div className="form-title">
              <span>⚡</span> ENVÍANOS UN MENSAJE
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">// NOMBRE</label>
                  <input type="text" className="form-input" id="f-name" placeholder="Tu nombre" required />
                </div>
                <div className="form-group">
                  <label className="form-label">// APELLIDO</label>
                  <input type="text" className="form-input" id="f-lastname" placeholder="Tu apellido" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">// CORREO ELECTRÓNICO</label>
                <input type="email" className="form-input" id="f-email" placeholder="correo@ejemplo.com" required />
              </div>

              <div className="form-group">
                <label className="form-label">// ASUNTO</label>
                <select className="form-select" id="f-subject" required>
                  <option value="">— Selecciona el motivo —</option>
                  <option value="patrocinio">Patrocinio / Apoyo al equipo</option>
                  <option value="colaboracion">Colaboración académica</option>
                  <option value="unirse">Quiero unirme al equipo</option>
                  <option value="competencia">Información sobre competencias</option>
                  <option value="media">Prensa / Medios</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">// INSTITUCIÓN / EMPRESA (OPCIONAL)</label>
                <input type="text" className="form-input" id="f-org" placeholder="Nombre de tu institución o empresa" />
              </div>

              <div className="form-group">
                <label className="form-label">// MENSAJE</label>
                <textarea className="form-textarea" id="f-message" placeholder="Cuéntanos sobre tu propuesta, pregunta o interés en unirte..." required />
              </div>

              {!isSuccess && (
                <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <><span>⏳</span><span>ENVIANDO...</span></>
                  ) : (
                    <><span>🚀</span><span>ENVIAR MENSAJE</span></>
                  )}
                </button>
              )}

              {isSuccess && (
                <div className="form-success show">
                  <p>✅ // MENSAJE ENVIADO CORRECTAMENTE</p>
                  <p style={{ marginTop: '8px', color: 'var(--text-dim)' }}>Nos pondremos en contacto contigo pronto.</p>
                </div>
              )}
            </form>

            <p style={{ marginTop: '18px', fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
              // TU INFORMACIÓN ES CONFIDENCIAL Y SOLO SE USARÁ PARA CONTACTARTE
            </p>
          </div>
        </div>

        {/* MAPA */}
        <div className="map-section reveal">
          <span className="section-tag">// UBÍCANOS</span>
          <h2 className="section-title">DÓNDE ENCONTRARNOS</h2>
          <div className="section-line" />

          <div className="map-wrapper">
            <iframe
              src="https://maps.google.com/maps?q=Tecnologico+de+Estudios+Superiores+de+San+Felipe+del+Progreso,+Mexico&output=embed&hl=es&z=15"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del TESSFP — Venados Robotics"
            />
            <div className="map-overlay-bar">
              <div>
                <div className="map-label">// TECNOLÓGICO DE ESTUDIOS SUPERIORES DE SAN FELIPE DEL PROGRESO</div>
                <div className="map-address">San Felipe del Progreso, Estado de México, C.P. 50640</div>
              </div>
              <a href="https://maps.google.com/maps?q=Tecnologico+de+Estudios+Superiores+de+San+Felipe+del+Progreso" target="_blank" rel="noopener noreferrer" className="map-btn">
                📍 VER EN GOOGLE MAPS
              </a>
            </div>
          </div>
        </div>

        {/* ÚNETE */}
        <div className="join-box reveal">
          <div className="scan-line" />
          <div className="join-title">¿Quieres ser un <em>Venado</em>?</div>
          <p className="join-desc">
            Buscamos estudiantes del TESSFP con pasión por la tecnología, la ingeniería y los retos. No necesitas experiencia previa — solo ganas de aprender y competir al máximo nivel.
          </p>
          <div className="join-req">
            <div className="req-chip"><span>🏫</span> Estudiante TESSFP</div>
            <div className="req-chip"><span>💡</span> Curiosidad tecnológica</div>
            <div className="req-chip"><span>🔥</span> Actitud competitiva</div>
            <div className="req-chip"><span>⏰</span> Disponibilidad de práctica</div>
          </div>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              className="btn btn-primary pulse-border" 
              onClick={() => {
                const select = document.getElementById('f-subject') as HTMLSelectElement;
                if (select) {
                  select.value = 'unirse';
                  document.querySelector('.form-box')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span>🦌</span><span>QUIERO UNIRME</span>
            </button>
            <Link href="/#equipo" className="btn btn-accent">
              <span>👥</span><span>VER EL EQUIPO</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}