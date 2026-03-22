export default function EventCard({ date, title, location, desc }) {
  return (
    <article className="group relative bg-[#1a1d23] p-8 rounded-b-xl border-t-4 border-amber-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-emerald-500">
      {/* Indicador de Fecha Estilo Terminal */}
      <span className="block font-title text-sm font-bold text-emerald-500 tracking-widest mb-4">
        {date}
      </span>
      
      <h3 className="text-2xl font-title text-white mb-3 group-hover:text-emerald-400 transition-colors">
        {title}
      </h3>
      
      {/* Ubicación con link simulado */}
      <div className="flex items-center gap-2 text-amber-500 mb-4 text-sm font-medium">
        <span>📍</span>
        <span className="hover:underline cursor-pointer">{location}</span>
      </div>
      
      <p className="text-slate-400 leading-relaxed">
        {desc}
      </p>

      {/* Decoración de esquina inferior (Efecto Circuito) */}
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-slate-700 group-hover:border-emerald-500 transition-colors"></div>
    </article>
  );
}