import Navbar from './components/Navbarr';
import EventCard from './components/EventCard';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      
      {/* HERO SECTION */}
      <section id="inicio" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="relative w-64 h-64 mb-8 animate-bounce-slow">
          <img src="/assets/escudoo.png" alt="Venados Logo" className="object-contain drop-shadow-[0_0_25px_rgba(16,185,129,0.4)]" />
        </div>
        <h1 className="font-title text-4xl md:text-6xl font-black tracking-tighter mb-4">
          POTENCIA. PRECISIÓN. <span className="text-amber-500">PASIÓN.</span>
        </h1>
        <p className="max-w-2xl text-lg text-slate-400 mb-10">
          Un equipo en crecimiento desafiando los límites de la robótica competitiva. 
          Expertos en seguidores de líneas y desarrollo tecnológico.
        </p>
        <a href="#eventos" className="venado-btn">Ver Eventos</a>
      </section>

      {/* EVENTOS */}
      <section id="eventos" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="font-title text-3xl text-center mb-16 after:content-[''] after:block after:w-24 after:h-1 after:bg-emerald-500 after:mx-auto after:mt-4 after:shadow-[0_0_10px_#10b981]">
          Eventos Pendientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <EventCard 
            date="12 y 13 DE FEBRERO"
            title="Robomatrix Continental Master"
            location="Universidad La Salle, Oaxaca"
            desc="Competencia internacional de alto nivel."
          />
          <EventCard 
            date="PRÓXIMAMENTE"
            title="CRYDTEM"
            location="Sede Pendiente"
            desc="Diseñando nuevas estrategias para el próximo reto."
          />
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 bg-gradient-to-t from-black to-transparent text-center border-t border-slate-800">
        <h2 className="font-title text-3xl mb-6">Contáctanos</h2>
        <p className="text-slate-400 mb-10">¿Interesado en patrocinar o colaborar con el equipo?</p>
        <a href="mailto:venadosrobotics@gmail.com" className="venado-btn text-lg py-4 px-10">
          Enviar Correo
        </a>
      </section>

      <footer className="py-10 text-center text-xs font-title text-slate-500 border-t border-slate-900">
        VENADOS ROBOTICS © 2026. TESSFP.
      </footer>
    </main>
  );
}