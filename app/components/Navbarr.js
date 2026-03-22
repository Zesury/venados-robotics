export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0f1115]/80 backdrop-blur-md border-b border-amber-500/20 px-[5%] py-4 flex justify-between items-center">
      <div className="font-title text-xl font-black tracking-tighter">
        <span className="text-amber-500">VENADOS</span> <span className="text-emerald-500">ROBOTICS</span>
      </div>
      
      <nav className="hidden md:block">
        <ul className="flex gap-8 font-sans font-medium">
          <li><a href="#inicio" className="hover:text-emerald-500 transition-colors">Inicio</a></li>
          <li><a href="#eventos" className="hover:text-emerald-500 transition-colors">Eventos</a></li>
          <li><a href="#contacto" className="hover:text-emerald-500 transition-colors">Contacto</a></li>
        </ul>
      </nav>

      <a href="#contacto" className="hidden sm:block text-xs font-title border border-emerald-500 px-4 py-2 text-emerald-500 hover:bg-emerald-500 hover:text-black transition-all">
        UNIRSE AL TEAM
      </a>
    </header>
  );
}