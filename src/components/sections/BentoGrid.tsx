import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bot, BarChart3, LayoutTemplate, Activity, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function BentoGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal cards on scroll
      gsap.from('.bento-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      // Micro-interaction: Chart Bars
      gsap.fromTo('.chart-bar',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          stagger: 0.1,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: '.chart-container',
            start: 'top 80%',
          }
        }
      );

      // Micro-interaction: Typing Indicator
      gsap.to('.typing-dot', {
        y: -4,
        duration: 0.4,
        stagger: 0.15,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut'
      });

      // Micro-interaction: Code Typing simulation (opacity reveal)
      gsap.fromTo('.code-line',
        { opacity: 0, x: -10 },
        {
          opacity: 1,
          x: 0,
          duration: 0.1,
          stagger: 0.2,
          ease: 'none',
          scrollTrigger: {
            trigger: '.code-container',
            start: 'top 80%',
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sora font-semibold text-white mb-4">
            Triada de <span className="text-plasma">Precisión</span>
          </h2>
          <p className="font-fira-code text-phantom/60 max-w-2xl mx-auto">
            No solo construimos software; forjamos ventajas competitivas desleales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Automatización y Bots */}
          <div className="bento-card col-span-1 md:col-span-2 rounded-2xl bg-void/60 backdrop-blur-md border border-white/10 p-8 flex flex-col md:flex-row gap-8 overflow-hidden relative group hover:-translate-y-1 transition-transform duration-300 hover:shadow-[0_20px_40px_rgba(123,97,255,0.1)] hover:border-plasma/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-plasma opacity-5 blur-[100px] group-hover:opacity-20 transition-opacity duration-500 rounded-full"></div>
            
            <div className="flex-1 flex flex-col justify-center z-10">
              <div className="w-12 h-12 rounded-xl bg-plasma/10 border border-plasma/30 flex items-center justify-center mb-6">
                <Bot className="text-plasma" size={24} />
              </div>
              <h3 className="text-2xl font-sora font-semibold text-white mb-3">
                Automatización y Bots con IA
              </h3>
              <p className="text-phantom/70 font-sora text-sm leading-relaxed mb-6">
                Reducimos tareas repetitivas a cero. Desplegamos agentes inteligentes en WhatsApp, Web y Canales Internos entrenados unicamente con los datos de tu empresa.
              </p>
              <ul className="flex flex-col gap-2 font-fira-code text-xs text-phantom/50">
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-plasma" /> Autopiloto Atencion 24/7</li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-plasma" /> Clasificación automática de leads</li>
              </ul>
            </div>

            {/* Micro-UI */}
            <div className="flex-1 min-h-[200px] rounded-xl bg-black/40 border border-white/5 p-4 flex flex-col justify-end relative z-10 w-full">
              
              <div className="flex gap-2 items-end justify-end mb-4">
                <div className="bg-white/10 rounded-2xl rounded-br-sm px-4 py-3 text-xs font-sora text-phantom/90 max-w-[80%] border border-white/5">
                  ¿Cuánto cuestan los brackets ligeros?
                </div>
              </div>

              <div className="flex gap-2 items-end mb-4">
                <div className="w-8 h-8 rounded-full bg-plasma/20 flex items-center justify-center shrink-0">
                  <Bot size={14} className="text-plasma" />
                </div>
                <div className="bg-plasma/20 rounded-2xl rounded-bl-sm px-4 py-3 text-xs font-sora text-plasma max-w-[80%] border border-plasma/20">
                  Varían de entre 1000 a 3000 euros. Agendemos una llamada y entremos en detalle.
                </div>
              </div>

              <div className="flex gap-2 items-end justify-end mb-4">
                <div className="bg-white/10 rounded-2xl rounded-br-sm px-4 py-3 text-xs font-sora text-phantom/90 max-w-[80%] border border-white/5">
                  Perfecto
                </div>
              </div>

              <div className="flex gap-2 items-end mb-4">
                <div className="w-8 h-8 rounded-full bg-plasma/20 flex items-center justify-center shrink-0">
                  <Bot size={14} className="text-plasma" />
                </div>
                <div className="bg-plasma/20 rounded-2xl rounded-bl-sm px-4 py-3 text-xs font-sora text-plasma max-w-[80%] border border-plasma/20 flex gap-1 items-center h-[36px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-plasma typing-dot"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-plasma typing-dot"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-plasma typing-dot"></div>
                </div>
              </div>

            </div>
          </div>

          {/* Card 2: Escalabilidad */}
          <div className="bento-card col-span-1 border border-white/10 rounded-2xl bg-void/60 backdrop-blur-md p-8 flex flex-col relative group hover:-translate-y-1 transition-transform duration-300 hover:shadow-[0_20px_40px_rgba(123,97,255,0.1)] hover:border-plasma/30">
            <div className="w-12 h-12 rounded-xl bg-plasma/10 border border-plasma/30 flex items-center justify-center mb-6">
              <BarChart3 className="text-plasma" size={24} />
            </div>
            <h3 className="text-2xl font-sora font-semibold text-white mb-3">
              Escalabilidad
            </h3>
            <p className="text-phantom/70 font-sora text-sm leading-relaxed mb-8 flex-1">
              Sistemas que crecen sin aumentar costes operativos. Ahorra cientos de horas mensuales.
            </p>
            
            {/* Micro-UI */}
            <div className="chart-container h-32 rounded-xl bg-black/40 border border-white/5 p-4 flex items-end gap-2 justify-between">
              {[40, 25, 45, 60, 35, 80, 100].map((height, i) => (
                <div key={i} className="w-full bg-plasma/20 rounded-sm relative chart-bar" style={{ height: `${height}%`, transformOrigin: 'bottom' }}>
                  <div className={`absolute top-0 left-0 w-full rounded-sm bg-plasma ${i === 6 ? 'h-full opacity-80 shadow-[0_0_15px_rgba(123,97,255,0.8)]' : 'h-1 opacity-50'}`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Alta Fidelidad */}
          <div className="bento-card col-span-1 md:col-span-3 border border-white/10 rounded-2xl bg-void/60 backdrop-blur-md p-8 flex flex-col md:flex-row items-center gap-10 relative group hover:-translate-y-1 transition-transform duration-300 hover:shadow-[0_20px_40px_rgba(123,97,255,0.1)] hover:border-plasma/30">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-plasma opacity-5 blur-[80px] group-hover:opacity-15 transition-opacity duration-500 rounded-full pointer-events-none"></div>

            <div className="flex-1 z-10">
              <div className="w-12 h-12 rounded-xl bg-plasma/10 border border-plasma/30 flex items-center justify-center mb-6">
                <LayoutTemplate className="text-plasma" size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl font-sora font-semibold text-white mb-3">
                Desarrollo de Alta Fidelidad
              </h3>
              <p className="text-phantom/70 font-sora text-sm leading-relaxed max-w-xl">
                Sitios web que no solo informan, sino que convierten. Creados pixel-perfect, con micro-interacciones inmersivas y un rendimiento excepcional.
              </p>
            </div>

            {/* Micro-UI */}
            <div className="flex-1 w-full grid grid-cols-2 gap-4 z-10">
              <div className="col-span-1 rounded-xl bg-black/40 border border-white/5 p-5 flex flex-col items-center justify-center gap-2">
                <div className="relative">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-white/10" />
                    <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="6" fill="transparent" strokeDasharray="226.2" strokeDashoffset="2.26" className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-fira-code text-xl font-bold text-emerald-400">99</span>
                  </div>
                </div>
                <span className="font-fira-code text-[10px] text-phantom/50 uppercase tracking-widest mt-2 flex items-center gap-1">
                  <Activity size={10} /> Performance
                </span>
              </div>
              
              <div className="col-span-1 rounded-xl bg-black/60 border border-white/5 p-4 code-container overflow-hidden flex flex-col justify-center">
                <div className="font-fira-code text-[10px] sm:text-xs text-white/40 mb-2 code-line">const <span className="text-plasma">initProtocol</span> = () {`=>`} {`{`}</div>
                <div className="font-fira-code text-[10px] sm:text-xs pl-4 text-white/70 mb-1 code-line"><span className="text-blue-400">gsap</span>.to(UI, {`{`}</div>
                <div className="font-fira-code text-[10px] sm:text-xs pl-8 text-emerald-300 mb-1 code-line">opacity: 1,</div>
                <div className="font-fira-code text-[10px] sm:text-xs pl-8 text-emerald-300 mb-1 code-line">y: 0,</div>
                <div className="font-fira-code text-[10px] sm:text-xs pl-8 text-emerald-300 mb-1 code-line">duration: 0.8,</div>
                <div className="font-fira-code text-[10px] sm:text-xs pl-8 text-yellow-300 mb-1 code-line">ease: <span className="text-orange-300">'power3.out'</span></div>
                <div className="font-fira-code text-[10px] sm:text-xs pl-4 text-white/70 mb-1 code-line">{`}`});</div>
                <div className="font-fira-code text-[10px] sm:text-xs text-white/40 code-line">{`}`};</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
