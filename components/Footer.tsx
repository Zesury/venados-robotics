import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-name">VENADOS <span>ROBOTICS</span></div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.12em', marginTop: '4px' }}>
            // TESSFP · ESTADO DE MÉXICO
          </div>
          <p>Tecnológico de Estudios Superiores de San Felipe del Progreso. Construyendo tecnología de clase mundial desde cero.</p>
        </div>
        <div className="footer-col">
          <h4>// NAVEGACIÓN</h4>
          <ul>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/#historia">Historia</Link></li>
            <li><Link href="/#equipo">Equipo</Link></li>
            <li><Link href="/robots">Robots</Link></li>
            <li><Link href="/tecnologia">Tecnología</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>// LOGROS</h4>
          <ul>
            <li><a href="#">🥇 Sumo Autónomo Oaxaca</a></li>
            <li><a href="#">🥈 RoboFut Continental</a></li>
            <li><a href="#">🏆 Tricampeonato Jilotepec</a></li>
            <li><a href="#">🏎️ Top 5 Seguidor de Línea</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Venados Robotics · TESSFP · Estado de México · Todos los derechos reservados</p>
        <p>// EST. 2024 · INGENIERÍA MEXICANA · CONQUISTA GLOBAL</p>
      </div>
    </footer>
  );
}