import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Settings, Car, CreditCard, Clock, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function ServicesTaller() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Bento grid items reveal
      gsap.fromTo('.bento-item', 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.bento-grid',
            start: 'top 95%', // increased start to trigger earlier before scrolling too far
          }
        }
      );
      
      // Floating lines animation
      gsap.to('.energy-line', {
        strokeDashoffset: -100,
        duration: 4,
        ease: 'linear',
        repeat: -1,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="servicios" ref={containerRef} className="py-32 bg-[#05050A] relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20 bento-item">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 font-fira-code text-xs tracking-wider mb-6">
            // TALLER_SERVICES
          </div>
          <h2 className="text-4xl md:text-5xl font-sora font-bold text-white mb-6">
            Estructura Técnica.
          </h2>
          <p className="text-slate-400 text-lg font-sora">
            Sistemas, atención al detalle y flexibilidad para que tu vehículo siempre esté al 100%.
          </p>
        </div>

        <div className="bento-grid grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Main Feature: Reparación Avanzada */}
          <div className="bento-item md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden bg-[#0A0A14] border border-white/5 group hover:border-blue-500/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent z-0"></div>
            
            {/* Tech Decoration */}
            <div className="absolute top-6 right-6 font-fira-code text-[10px] text-slate-500 text-right leading-relaxed z-10">
              MOD.01<br/>
              MAINTENANCE<br/>
              ACTIVE
            </div>
            
            <div className="absolute bottom-10 left-10 z-20 max-w-md">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-sora font-semibold text-white mb-4">Mecánica General</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Diagnóstico preciso y reparación integral. Detectamos la raíz del problema para soluciones estables a largo plazo, sin parches temporales.
              </p>
            </div>
            
            {/* Decorative Vector */}
            <svg className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 400 400">
              <circle cx="350" cy="50" r="150" fill="none" stroke="#2563EB" strokeWidth="1" strokeDasharray="4 8" className="animate-[spin_60s_linear_infinite]" />
              <circle cx="350" cy="50" r="100" fill="none" stroke="#FFFFFF" strokeWidth="0.5" className="animate-[spin_40s_linear_infinite_reverse]" />
            </svg>
          </div>

          {/* Accesibilidad */}
          <div className="bento-item relative rounded-3xl overflow-hidden bg-[#0A0A14] border border-white/5 group hover:border-white/20 transition-colors duration-500 flex flex-col justify-end p-8">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] rounded-full group-hover:bg-white/10 transition-colors"></div>
            
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 mb-4 group-hover:scale-110 transition-transform duration-500">
              <Car className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-sora font-semibold text-white mb-2">Accesibilidad 100%</h3>
            <p className="text-slate-400 text-sm">
              Instalaciones completamente adaptadas para sillas de ruedas. Tratamos a cada cliente con la comodidad y respeto que merece.
            </p>
          </div>

          {/* Pagos / Financial */}
          <div className="bento-item relative rounded-3xl overflow-hidden bg-[#0A0A14] border border-white/5 group hover:border-blue-500/30 transition-colors duration-500 p-8 flex flex-col">
            <div className="absolute top-6 right-6 text-slate-600">
              <CreditCard className="w-8 h-8 opacity-50" />
            </div>
            <div className="font-fira-code text-xs text-blue-400 mb-auto tracking-widest">
              TX.GATEWAY // FLEX
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-sora font-semibold text-white mb-2">Pagos Flexibles</h3>
              <p className="text-slate-400 text-sm mb-4">
                Soporte total para pago por móvil (NFC), tarjetas de débito y crédito.
              </p>
              <div className="flex gap-2 text-xs font-fira-code text-slate-500">
                <span className="px-2 py-1 bg-white/5 rounded">NFC</span>
                <span className="px-2 py-1 bg-white/5 rounded">VISA</span>
                <span className="px-2 py-1 bg-white/5 rounded">MC</span>
              </div>
            </div>
            {/* Animated Edge Line */}
            <svg className="absolute bottom-0 left-0 w-full h-[1px]" preserveAspectRatio="none">
              <line x1="0" y1="0" x2="100%" y2="0" stroke="rgba(37,99,235,0.5)" strokeWidth="1" strokeDasharray="100" className="energy-line" />
            </svg>
          </div>

          {/* Planificación Estratégica */}
          <div className="bento-item md:col-span-3 relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0A0A14] to-[#0A0A14] border border-white/5 border-l-blue-500/50 group flex flex-col md:flex-row items-center p-8 md:p-12 gap-8">
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-[#05050A] border border-white/10 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(0,0,0,0.5)] z-10">
              <Clock className="w-8 h-8 text-blue-400" />
            </div>
            
            <div className="flex-1 z-10">
              <h3 className="text-2xl font-sora font-semibold text-white mb-2">Planificación y Puntualidad</h3>
              <p className="text-slate-400 max-w-2xl">
                Se recomienda pedir cita previa. Organizamos nuestro esquema de trabajo como un reloj suizo para asegurar que tu vehículo entre y salga en el plazo acordado.
              </p>
            </div>
            
            <div className="shrink-0 z-10 flex flex-col gap-3 font-fira-code text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Slot Reservado
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Control de Tiempos
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Estimación Clara
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
