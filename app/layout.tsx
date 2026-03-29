import Script from 'next/script';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'Venados Robotics — TESSFP',
  description: 'De un prototipo con motores amarillos a 3 medallas en el certamen Continental.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="page-enter">
        {/* CANVAS FONDO & CURSOR */}
        <canvas id="bg-canvas" />
        <div className="cursor" id="cursor" />
        <div id="page-overlay" />

        <Navbar />
        
        <main style={{ paddingTop: '70px', position: 'relative', zIndex: 1 }}>
          {children}
        </main>

        <Footer />

        {/* SCRIPTS ORIGINALES */}
        <Script src="/js/particles.js" strategy="lazyOnload" />
        <Script src="/js/gallery.js" strategy="lazyOnload" />
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}