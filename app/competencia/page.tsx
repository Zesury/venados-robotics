'use client';
import React, { useState } from 'react';

export default function Competencia() {
  const [enviado, setEnviado] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Estado para guardar todos los datos del formulario ordenadamente
  const [formData, setFormData] = useState({
    nombreEquipo: '',
    institucion: '',
    nombreAsesor: '',
    nombreCapitan: '',
    telefonoCapitan: '',
    correoCapitan: '',
    nombreRobot1: '',
    nombreCompanero: '',
    nombreRobot2: '',
  });

  // Manejador de cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      /* * =========================================================
       * AQUÍ IRÁ LA CONEXIÓN A SUPABASE EN EL FUTURO:
       * =========================================================
       * const { data, error } = await supabase
       * .from('inscripciones_robofut')
       * .insert([formData]);
       * * if (error) throw error;
       */

      // Simulamos que está enviando a la base de datos (1.5 segundos)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setEnviado(true);
    } catch (error) {
      console.error('Error al enviar el registro:', error);
      alert('Hubo un error al registrar el equipo. Intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ─── HERO DE LA COMPETENCIA ─── */}
      <div className="page-hero">
        <div className="hero-grid-bg" />
        <div className="glow-orb orb-orange orb-l" style={{ opacity: 0.6 }} />
        <div className="glow-orb orb-cyan orb-r" style={{ opacity: 0.4 }} />
        
        <span className="section-tag hero-badge-anim">// CONVOCATORIA OFICIAL ABIERTA</span>
        <h1 className="hero-title-anim glitch" data-text="TORNEO ROBOFUT">
          TORNEO <span>ROBOFUT</span>
        </h1>
        <p className="hero-sub-anim">
          Venados Robotics presenta su primer certamen de robótica competitiva.<br />
          Forma tu alianza, prepara tus motores y domina la cancha.
        </p>
      </div>

      <main>
        <section className="section">
          <div className="contact-layout">
            
            {/* ─── COLUMNA IZQUIERDA: INFO DEL TORNEO ─── */}
            <div className="reveal">
              <span className="section-tag">// FICHA TÉCNICA</span>
              <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '24px' }}>
                DATOS DEL <em>EVENTO</em>
              </h2>
              
              <div className="robot-showcase" style={{ padding: '24px', marginBottom: '32px' }}>
                <p style={{ color: 'var(--text-dim)', marginBottom: '20px', lineHeight: 1.6 }}>
                  Buscamos a los mejores ingenieros para enfrentarse en la arena. La categoría exclusiva será <strong>RoboFut (Radio Control / Bluetooth)</strong> en modalidad de alianzas.
                </p>
                
                <div className="robot-specs-title">// REGLAS DE EQUIPO</div>
                <ul className="spec-list" style={{ marginTop: '12px' }}>
                  <li className="spec-item"><span className="spec-dot">▸</span> <strong>Integrantes:</strong> Exactamente 2 jugadores por equipo.</li>
                  <li className="spec-item"><span className="spec-dot">▸</span> <strong>Robots:</strong> Cada jugador debe controlar su propio robot (2 robots por equipo).</li>
                  <li className="spec-item"><span className="spec-dot">▸</span> <strong>Asesor:</strong> Cada equipo puede registrar a un mentor/docente.</li>
                  <li className="spec-item"><span className="spec-dot">▸</span> <strong>Sede:</strong> TESSFP, Estado de México.</li>
                </ul>
              </div>

              <div className="alpha-box" style={{ padding: '24px' }}>
                <div className="alpha-box-title">🏆 PREMIACIÓN</div>
                <p style={{ fontSize: '0.9rem' }}>
                  Los equipos ganadores recibirán reconocimiento oficial, medallas de la edición y pases directos a nuestros próximos scrimmages (entrenamientos cerrados).
                </p>
              </div>
            </div>

            {/* ─── COLUMNA DERECHA: FORMULARIO ─── */}
            <div className="form-box reveal delay-1" style={{ position: 'relative' }}>
              <div className="form-title">
                <span style={{ fontSize: '1.4rem' }}>⚡</span> REGISTRO DE ALIANZA
              </div>
              
              {!enviado ? (
                <form onSubmit={handleSubmit}>
                  
                  {/* --- BLOQUE 1: EL EQUIPO --- */}
                  <div className="robot-specs-title" style={{ marginTop: '10px', marginBottom: '16px', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>
                    // 01. DATOS DE LA ALIANZA
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">// NOMBRE DEL EQUIPO</label>
                      <input type="text" name="nombreEquipo" value={formData.nombreEquipo} onChange={handleChange} className="form-input" placeholder="Ej. CyberVenados" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">// INSTITUCIÓN / ESCUELA</label>
                      <input type="text" name="institucion" value={formData.institucion} onChange={handleChange} className="form-input" placeholder="Tecnológico o Universidad" required />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">// NOMBRE DEL ASESOR / MENTOR (OPCIONAL)</label>
                    <input type="text" name="nombreAsesor" value={formData.nombreAsesor} onChange={handleChange} className="form-input" placeholder="Nombre completo del profesor o guía" />
                  </div>

                  {/* --- BLOQUE 2: JUGADOR 1 --- */}
                  <div className="robot-specs-title" style={{ marginTop: '30px', marginBottom: '16px', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>
                    // 02. JUGADOR 1 (CAPITÁN)
                  </div>

                  <div className="form-group">
                    <label className="form-label">// NOMBRE COMPLETO</label>
                    <input type="text" name="nombreCapitan" value={formData.nombreCapitan} onChange={handleChange} className="form-input" placeholder="Nombre del capitán" required />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">// TELÉFONO (WHATSAPP)</label>
                      <input type="tel" name="telefonoCapitan" value={formData.telefonoCapitan} onChange={handleChange} className="form-input" placeholder="A 10 dígitos" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">// CORREO ELECTRÓNICO</label>
                      <input type="email" name="correoCapitan" value={formData.correoCapitan} onChange={handleChange} className="form-input" placeholder="correo@ejemplo.com" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">// NOMBRE DEL ROBOT 1</label>
                    <input type="text" name="nombreRobot1" value={formData.nombreRobot1} onChange={handleChange} className="form-input" placeholder="Ej. Striker V1" required />
                  </div>

                  {/* --- BLOQUE 3: JUGADOR 2 --- */}
                  <div className="robot-specs-title" style={{ marginTop: '30px', marginBottom: '16px', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>
                    // 03. JUGADOR 2 (COMPAÑERO)
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">// NOMBRE COMPLETO</label>
                      <input type="text" name="nombreCompanero" value={formData.nombreCompanero} onChange={handleChange} className="form-input" placeholder="Nombre del jugador 2" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">// NOMBRE DEL ROBOT 2</label>
                      <input type="text" name="nombreRobot2" value={formData.nombreRobot2} onChange={handleChange} className="form-input" placeholder="Ej. Defender X" required />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-block pulse-border" 
                    style={{ marginTop: '20px' }}
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'PROCESANDO...' : 'ENVIAR REGISTRO'}</span> 
                    {!isSubmitting && <span>→</span>}
                  </button>
                </form>
              ) : (
                /* ─── MENSAJE DE ÉXITO ─── */
                <div className="form-success show" style={{ padding: '60px 20px' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--text)', marginBottom: '8px' }}>¡ALIANZA REGISTRADA!</h3>
                  <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem' }}>
                    Los datos han sido recibidos con éxito en nuestros servidores. Nos pondremos en contacto con el capitán a través de WhatsApp o Correo para enviarles el reglamento oficial.
                  </p>
                  <button 
                    onClick={() => {
                      setEnviado(false);
                      setFormData({
                        nombreEquipo: '', institucion: '', nombreAsesor: '',
                        nombreCapitan: '', telefonoCapitan: '', correoCapitan: '',
                        nombreRobot1: '', nombreCompanero: '', nombreRobot2: ''
                      });
                    }} 
                    className="btn btn-accent" 
                    style={{ marginTop: '24px' }}
                  >
                    <span>NUEVO REGISTRO</span>
                  </button>
                </div>
              )}
            </div>

          </div>
        </section>
      </main>
    </>
  );
}