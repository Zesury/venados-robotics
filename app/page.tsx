'use client';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
    if (e.currentTarget.nextElementSibling) {
      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
    }
  };

  return (
    <>
      {/* ─── HERO ─── */}
      <div className="hero">
        <div className="hero-grid-bg" />
        <div className="glow-orb orb-cyan orb-l" />
        <div className="glow-orb orb-orange orb-r" />

        <div className="hero-content">
          <div className="hero-logos-row hero-badge-anim">
            <div className="hero-logo-tessfp" data-tip="TESSFP">
              <img src="/images/logos/logo-tessfp.png" alt="TESSFP" onError={handleImageError} />
              <div className="hero-logo-ph" style={{ display: 'none' }}>
                <span className="ph-icon">🏫</span><span className="ph-txt">logo-tessfp<br />.png</span>
              </div>
            </div>
            <div className="hero-logo-sep">×</div>
            <div className="hero-logo-venados" data-tip="Venados Robotics">
              <img src="/images/logos/logo-venados.png" alt="Venados Robotics" onError={handleImageError} />
              <div className="hero-logo-ph" style={{ display: 'none' }}>
                <span className="ph-icon">🦌</span><span className="ph-txt">logo-venados<br />.png</span>
              </div>
            </div>
          </div>

          <div className="hero-badge hero-badge-anim">// ESTADO DE MÉXICO · CLUB DE ROBÓTICA · EST. 2024</div>
          <h1 className="hero-title hero-title-anim">
            <div className="t1 glitch" data-text="VENADOS ROBOTICS">VENADOS ROBOTICS</div>
            <div className="t2">INGENIERÍA INFORMATICA</div>
            <div className="t1" style={{ fontSize: '0.6em', opacity: 0.7, letterSpacing: '0.15em' }}>CONQUISTA GLOBAL</div>
          </h1>
          <p className="hero-sub hero-sub-anim">
            De un prototipo con motores amarillos a 3 medallas en el certamen Continental.<br />
            Tecnológico de Estudios Superiores de San Felipe del Progreso.
          </p>

          <div className="hero-stats-row hero-stats-anim">
            <div className="stat-box"><span className="stat-num counter-anim" data-count={6}>0</span><span className="stat-lbl">// COMPETENCIAS</span></div>
            <div className="stat-box"><span className="stat-num orange counter-anim" data-count={8} data-suffix="+">0</span><span className="stat-lbl">// MEDALLAS</span></div>
            <div className="stat-box"><span className="stat-num counter-anim" data-count={55} data-suffix="+">0</span><span className="stat-lbl">// RIVALES OAXACA</span></div>
            <div className="stat-box"><span className="stat-num gold counter-anim" data-count={3}>0</span><span className="stat-lbl">// FUNDADORES</span></div>
          </div>

          <div className="hero-cta hero-cta-anim">
            <Link href="/historia" className="btn btn-primary pulse-border"><span>⚡</span><span>NUESTRA HISTORIA</span></Link>
            <Link href="/robots" className="btn btn-accent"><span>🤖</span><span>VER ROBOTS</span></Link>
          </div>
        </div>

        <div className="scroll-hint"><div className="sh-line" /><div className="sh-dot" /></div>
      </div>

      {/* ─── EVENTOS PENDIENTES ─── */}
      <section className="section">
        <span className="section-tag reveal">// AGENDA</span>
        <h2 className="section-title reveal">EVENTOS <em>PENDIENTES</em></h2>
        <div className="section-line reveal" />

        <div className="grid-2" style={{ marginTop: '48px' }}>
          
          {/* EVENTO 1 */}
          <div className="card reveal" style={{ borderTop: '3px solid var(--orange)' }}>
            <div style={{ padding: '36px 32px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--cyan)', letterSpacing: '0.15em', marginBottom: '14px', fontWeight: 'bold' }}>
                // 10 DE ABRIL DE 2026
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', marginBottom: '14px', lineHeight: 1.3 }}>
                CRYDTEM X ANIVERSARIO
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--orange)', fontSize: '0.9rem', marginBottom: '22px', fontWeight: 600 }}>
                <span style={{ fontSize: '1.2rem' }}>📍</span> Universidad CUI, Ixtlahuaca Edo de México
              </div>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Decimo aniversario del CRYDTEM, un evento que celebra la innovación y el talento en la robótica competitiva. Venados Robotics se prepara para mostrar sus últimos avances y competir con los mejores equipos.
              </p>
            </div>
          </div>

          {/* EVENTO 2 */}
          <div className="card reveal delay-1" style={{ borderTop: '3px solid var(--orange)' }}>
            <div style={{ padding: '36px 32px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--cyan)', letterSpacing: '0.15em', marginBottom: '14px', fontWeight: 'bold' }}>
                // 14 DE ABRIL DE 2026
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', marginBottom: '14px', lineHeight: 1.3 }}>
                4TO CONCURSO DE ROBÓTICA TESVB MECHABOTS ACADEMY
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--orange)', fontSize: '0.9rem', marginBottom: '22px', fontWeight: 600 }}>
                <span style={{ fontSize: '1.2rem' }}>📍</span> TESVB, Valle de Bravo Edo de México
              </div>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Diseñando nuevas estrategias para el próximo reto.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ─── PALMARÉS OAXACA Y TABLA ─── */}
      <div className="section-full hex-bg">
        <div className="inner">
          <span className="section-tag reveal">//PALMARÉS</span>
          <h2 className="section-title reveal">ROBOMATRIX <em>CONTINENTAL</em></h2>
          <div className="section-line reveal" />

          <div className="oaxaca-box reveal">
            <div className="scan-line" />
            <div className="oaxaca-title">🏟️ U. LA SALLE OAXACA 2025</div>
            <div className="oaxaca-sub">// +55 INSTITUCIONES · BOLIVIA · COSTA RICA · MÉXICO</div>
            <div className="medals-row">
              <div className="medal-bubble"><span className="m-emoji">🥇</span><div className="m-title">1ER LUGAR</div><div className="m-cat">Sumo Autónomo</div></div>
              <div className="medal-bubble"><span className="m-emoji">🥈</span><div className="m-title">2DO LUGAR</div><div className="m-cat">RoboFut</div></div>
              <div className="medal-bubble"><span className="m-emoji">🥉</span><div className="m-title">3ER LUGAR</div><div className="m-cat">RoboFut</div></div>
              <div className="medal-bubble"><span className="m-emoji">🏎️</span><div className="m-title">TOP 5 ×2</div><div className="m-cat">Seguidor de Línea</div></div>
              <div className="medal-bubble"><span className="m-emoji">🏆</span><div className="m-title">3ER GENERAL</div><div className="m-cat">Medallero Global</div></div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── EQUIPO ─── */}
      <section id="equipo" className="section">
        <span className="section-tag reveal">//EQUIPO</span>
        <h2 className="section-title reveal">LOS <em>ARQUITECTOS</em></h2>
        <div className="section-line reveal" />
        
        <div className="team-grid">
          <div className="team-card reveal">
            <div className="team-photo-slot">
              <img src="/images/team/jared.png" alt="Jared López López" onError={handleImageError} />
              <div className="placeholder" style={{ display: 'none' }}><div className="ph-initials">JL</div><div className="ph-hint">jared.png</div></div>
            </div>
            <div className="team-name">Jared López López</div>
            <div className="team-role">// LÍDER DEL CLUB</div>
            <p className="team-desc">Fundador y cerebro estratégico. Responsable de arquitectura de sistemas, programación de control y toma de decisiones en competencia.</p>
          </div>

          <div className="team-card reveal delay-2">
            <div className="team-photo-slot" style={{ borderColor: 'var(--orange)', boxShadow: 'var(--glow-orange)' }}>
              <img src="/images/team/ivan.png" alt="Iván Felipe Nava" onError={handleImageError} />
              <div className="placeholder" style={{ background: 'rgba(255,107,0,0.05)', display: 'none' }}><div className="ph-initials" style={{ color: 'var(--orange)' }}>IF</div><div className="ph-hint">ivan.png</div></div>
            </div>
            <div className="team-name">Iván Felipe Nava</div>
            <div className="team-role orange">// PRIMER MIEMBRO · INGENIERÍA</div>
            <p className="team-desc">Co-fundador del proyecto. Pilar del desarrollo mecánico y electrónico. Su experiencia práctica en manufactura ha sido clave.</p>
          </div>

          <div className="team-card reveal delay-4">
            <div className="team-photo-slot" style={{ borderColor: 'var(--gold)', boxShadow: 'var(--glow-gold)' }}>
              <img src="/images/team/octavio.png" alt="Dr. Octavio Catarino Aguilar" onError={handleImageError} />
              <div className="placeholder" style={{ background: 'rgba(255,215,0,0.04)', display: 'none' }}><div className="ph-initials" style={{ color: 'var(--gold)' }}>OC</div><div className="ph-hint">octavio.png</div></div>
            </div>
            <div className="team-name">Dr. Octavio Catarino Aguilar</div>
            <div className="team-role gold">// MENTOR & ASESOR TÉCNICO</div>
            <p className="team-desc">Guía académico y técnico. Su mentoring transformó ideas en soluciones de ingeniería competitivas internacionalmente.</p>
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
    </>
  );
}
































