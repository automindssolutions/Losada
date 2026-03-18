import { useEffect, useState } from 'react';
import { Wrench } from 'lucide-react';

export function NavbarTaller() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#05050A]/90 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-white/20 rounded-xl flex items-center justify-center bg-white/5 backdrop-blur-sm">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-sora font-bold text-white tracking-wide text-lg leading-none">TALLERES LOSADA</span>
              <span className="font-fira-code text-[10px] text-blue-500 tracking-[0.2em] mt-1">SYS.ENG</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 bg-[#0A0A14]/80 px-8 py-3 rounded-full border border-white/10 backdrop-blur-md">
            <a href="#inicio" className="font-fira-code text-xs text-slate-400 hover:text-white transition-colors">01. INICIO</a>
            <a href="#servicios" className="font-fira-code text-xs text-slate-400 hover:text-white transition-colors">02. ESTRUCTURA</a>
            <a href="#resenas" className="font-fira-code text-xs text-slate-400 hover:text-white transition-colors">03. DATA</a>
            <a href="#contacto" className="font-fira-code text-xs text-slate-400 hover:text-white transition-colors">04. CONTACTO</a>
          </div>

          <div className="flex items-center">
            <a href="#contacto" className="group relative px-4 py-2 md:px-6 md:py-3 bg-white/5 text-white border border-white/10 rounded-xl overflow-hidden font-sora font-semibold text-xs md:text-sm hover:border-blue-500/50 transition-colors whitespace-nowrap">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              <span className="relative z-10">Agendar <span className="hidden sm:inline">Intervención</span></span>
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}
