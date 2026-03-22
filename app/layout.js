import { Orbitron, Rajdhani } from 'next/font/google';
import './globals.css';

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });
const rajdhani = Rajdhani({ weight: ['400', '500', '700'], subsets: ['latin'], variable: '--font-rajdhani' });

export const metadata = {
  title: 'Venados Robotics Team',
  description: 'Equipo de robótica competitiva TESSFP - Potencia, Precisión, Pasión.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${rajdhani.variable} ${orbitron.variable} font-sans bg-[#0f1115] text-slate-200`}>
        {children}
      </body>
    </html>
  );
}