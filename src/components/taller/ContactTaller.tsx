import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function ContactTaller() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.contact-element', 
        { y: 60, opacity: 0 },
        { 
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 95%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="contacto" className="py-32 bg-[#05050A] relative overflow-hidden border-t border-white/5">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,black_10%,transparent_80%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-[#0A0A14] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] contact-element">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Info */}
            <div className="p-10 md:p-16 relative">
              <div className="absolute top-8 right-8 text-white/20 font-fira-code text-sm">+</div>
              <div className="absolute bottom-8 left-8 text-white/20 font-fira-code text-sm">+</div>
              
              <div className="font-fira-code text-xs text-blue-500 tracking-widest mb-6">INT.COM // 04</div>
              <h2 className="text-3xl md:text-5xl font-sora font-bold text-white mb-10 leading-tight">
                Inicia el protocolo <br/>de reparación.
              </h2>
              
              <div className="space-y-8">
                
                <div className="group flex items-start gap-6 border-b border-white/5 pb-8 hover:border-blue-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600/20 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all">
                    <MapPin className="w-5 h-5 text-slate-400 group-hover:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-sora font-semibold mb-2 flex items-center gap-2">
                      Sede Principal <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                    </h3>
                    <p className="text-slate-400 font-fira-code text-sm">Calle de la fundición<br/>Villaverde Bajo, Madrid</p>
                  </div>
                </div>

                <div className="group flex items-start gap-6 border-b border-white/5 pb-8 hover:border-blue-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600/20 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all">
                    <Phone className="w-5 h-5 text-slate-400 group-hover:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-sora font-semibold mb-2">Conexión Directa</h3>
                    <p className="text-slate-400 font-fira-code text-sm">+34 912 345 678</p>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600/20 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all">
                    <Clock className="w-5 h-5 text-slate-400 group-hover:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-sora font-semibold mb-2">Horario Operativo</h3>
                    <p className="text-slate-400 font-fira-code text-sm">L-V: 08:00 - 14:00 | 16:00 - 19:00</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Premium Terminal/Map Placeholder */}
            <div className="relative min-h-[500px] h-full bg-[#05050A] border-l border-white/5 flex flex-col pt-8">
              {/* Terminal Header */}
              <div className="absolute top-0 w-full h-10 border-b border-white/5 flex items-center px-6 gap-2 bg-[#101018] z-30">
                <div className="font-fira-code text-xs text-slate-500 flex-1">LOC.SYS // V_VERDE_01</div>
                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6] animate-pulse"></div>
              </div>

              <div className="flex-1 w-full h-full relative overflow-hidden flex items-center justify-center">
                {/* Tech Map Circles */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 overflow-hidden">
                  <div className="w-[300px] h-[300px] md:w-96 md:h-96 border border-blue-500 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
                  <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] border border-blue-500/50 rounded-full absolute"></div>
                  <div className="w-[550px] h-[550px] md:w-[700px] md:h-[700px] border border-blue-500/20 rounded-full absolute"></div>
                </div>

                <div className="text-center z-10 relative">
                  <div className="w-20 h-20 bg-[#0A0A14] border border-blue-500/50 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
                    <MapPin className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="font-fira-code text-sm text-blue-400 tracking-[0.2em] mb-2">PUNTO DE INTERCEPCIÓN</div>
                  <div className="font-sora text-white text-xl">Calle de la fundición</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
