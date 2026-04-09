'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  // Hook de Next.js para saber la ruta actual (ej: "/", "/robots", "/historia")
  const pathname = usePathname();
  
  // Estado de React para controlar el menú móvil (hamburguesa)
  const [isOpen, setIsOpen] = useState(false);

  // Efecto para darle el fondo difuminado al hacer scroll (reemplaza a main.js)
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
    if (e.currentTarget.nextElementSibling) {
      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
    }
  };

  // Función para cerrar el menú móvil al hacer clic en un enlace
  const closeMenu = () => setIsOpen(false);

  return (
    <nav style={{ borderBottomColor: scrolled ? 'rgba(0,212,255,0.25)' : 'rgba(0,212,255,0.12)' }}>
      <Link href="/" className="nav-brand" onClick={closeMenu}>
        <div className="nav-logo-slot">
          <img 
            src="/images/logos/logo-venados.png" 
            alt="Venados Robotics" 
            onError={handleImageError} 
          />
          <span style={{ display: 'none', fontSize: '1.2rem' }}>🦌</span>
        </div>
        <div>
          <div className="nav-title">VENADOS <span>ROBOTICS</span></div>
          <div className="nav-sub">// TESSFP · EST. 2024</div>
        </div>
      </Link>

      {/* Botón Hamburguesa */}
      <button 
        className="nav-menu-btn" 
        aria-label="Menú" 
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span style={isOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
        <span style={isOpen ? { opacity: 0 } : {}} />
        <span style={isOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
      </button>

      {/* Enlaces de Navegación */}
      <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="nav-links">
        <li>
          <Link 
            href="/" 
            className={`nav-link ${pathname === '/' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            INICIO
          </Link>
        </li>
        <li>
          <Link 
            href="/historia" 
            className={`nav-link ${pathname === '/historia' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            HISTORIA
          </Link>
        </li>
        <li>
          {/* Al ser un ancla hacia la página principal, marcamos activo si estamos en la home pero no obligamos al active puro */}
          <Link 
            href="/#equipo" 
            className="nav-link"
            onClick={closeMenu}
          >
            EQUIPO
          </Link>
        </li>
        <li>
          <Link 
            href="/robots" 
            className={`nav-link ${pathname === '/robots' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            ROBOTS
          </Link>
        </li>
        <li>
          <Link 
            href="/tecnologia" 
            className={`nav-link ${pathname === '/tecnologia' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            TECNOLOGÍA
          </Link>
        </li>
        <li>
          <Link 
            href="/contacto" 
            className={`nav-link ${pathname === '/contacto' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            CONTACTO
          </Link>
        </li>
        <li>
  <Link 
    href="/competencia" 
    className={`nav-link ${pathname === '/competencia' ? 'active' : ''}`}
    onClick={closeMenu}
  >
    TORNEO
  </Link>
</li>
      </ul>
    </nav>
  );
}