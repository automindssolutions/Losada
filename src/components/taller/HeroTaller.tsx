import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Wrench } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function HeroTaller() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Fade up cascade for text elements
      gsap.fromTo('.hero-element', 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.2
        }
      );

      // 3D rotation animation on scroll for the mockup
      gsap.fromTo(mockupRef.current,
        { 
          rotateX: 15, 
          y: 100,
          scale: 0.95,
          opacity: 0
        },
        {
          rotateX: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mockupRef.current,
            start: 'top 85%',
            end: 'top 30%',
            scrub: 1,
          }
        }
      );
      
      // Background Ambient Glows
      gsap.to('.ambient-glow', {
        scale: 1.1,
        opacity: 0.8,
        duration: 8,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        stagger: 2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden flex flex-col items-center bg-[#05050A] border-b border-white/5">
      
      {/* Premium Ambient Background Architecture */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Glows */}
        <div className="ambient-glow absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="ambient-glow absolute bottom-[0%] right-[10%] w-[800px] h-[800px] bg-indigo-500/10 blur-[180px] rounded-full mix-blend-screen"></div>

        {/* High-end Masked Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_40%,black_10%,transparent_80%)]"></div>

        {/* Framing & Data - Top Left */}
        <div className="absolute top-8 left-8 flex flex-col gap-2 opacity-0 md:opacity-100">
          <div className="text-white/30 font-fira-code text-sm leading-none">+</div>
          <div className="text-white/20 font-fira-code text-[9px] tracking-[0.3em] font-light mt-4">
            TS.MEC // 100%<br/>
            DIA.LAT // 12ms<br/>
            CORE // STABLE
          </div>
        </div>

        {/* Framing - Corners */}
        <div className="absolute top-8 right-8 text-white/30 font-fira-code text-sm leading-none opacity-0 md:opacity-100">+</div>
        <div className="absolute bottom-8 left-8 text-white/30 font-fira-code text-sm leading-none opacity-0 md:opacity-100">+</div>
        <div className="absolute bottom-8 right-8 flex flex-col items-end gap-2 opacity-0 md:opacity-100">
          <div className="text-white/30 font-fira-code text-sm leading-none">+</div>
          <div className="text-white/20 font-fira-code text-[9px] tracking-[0.3em] font-light mt-4 text-right">
            LSD.2.0.44<br/>
            AUTH.REQ
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-5xl">
        <div className="hero-element inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm self-center">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="font-fira-code text-xs font-medium text-slate-300 tracking-wide">TALLERES LOSADA ENG v2.0</span>
        </div>
        
        <h1 className="hero-element text-5xl md:text-7xl font-sora font-bold text-white tracking-tight leading-[1.1] mb-6 text-center mx-auto">
          Mecánica de precisión. <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Trato exclusivo.</span>
        </h1>
        
        <p className="hero-element text-lg md:text-xl font-sora text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed text-center">
          Restauramos, mejoramos y mantenemos tu vehículo con la máxima exigencia. Instalaciones premium adaptadas en Villaverde Bajo con un servicio técnico de élite.
        </p>
        
        <div className="hero-element flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a href="#contacto" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 text-white font-sora font-medium text-lg flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] transition-all duration-300 hover:-translate-y-1">
            Programar Diagnóstico <ArrowRight size={20} />
          </a>
          <a href="#servicios" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-sora font-medium text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md">
            Ver Estructura Técnica
          </a>
        </div>
      </div>

      {/* 3D Dashboard Mockup (Premium Scanner style) */}
      <div className="w-full max-w-6xl mx-auto px-6 relative z-20 perspective-[2000px]">
        <div className="mockup-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[60%] bg-blue-600 blur-[150px] opacity-20 pointer-events-none rounded-full"></div>
        
        <div 
          ref={mockupRef}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A14] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] transform-style-3d"
        >
          {/* Mac window controls */}
          <div className="absolute top-0 w-full h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-[#101018] z-30">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div className="ml-4 font-fira-code text-xs text-slate-400">Scanner Engine // Telemetry UI</div>
          </div>
          
          {/* Engine Telemetry UI */}
          <div className="absolute inset-0 pt-10 w-full h-full flex items-center justify-center bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] p-8">
            <div className="w-full h-full border border-white/10 rounded-xl bg-[#151520]/80 backdrop-blur flex overflow-hidden">
                {/* Side Nav */}
                <div className="w-16 border-r border-white/5 flex flex-col items-center py-4 gap-6 bg-[#101018]">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                        <Wrench size={16} />
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-white/5 text-slate-500 flex items-center justify-center">
                        <ArrowRight size={16} />
                    </div>
                </div>
                {/* Main Readout */}
                <div className="flex-1 p-8 flex flex-col">
                    <div className="flex justify-between items-end mb-8 border-b border-white/5 pb-4">
                        <div>
                            <div className="font-fira-code text-[10px] text-blue-500 tracking-widest mb-1">SYSTEM OK</div>
                            <div className="text-2xl font-sora text-white">Telemetría de Motor</div>
                        </div>
                        <div className="text-right">
                            <div className="font-fira-code text-[10px] text-slate-500 tracking-widest mb-1">LATENCIA</div>
                            <div className="text-xl font-fira-code text-emerald-400">12ms</div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
                        <div className="col-span-1 md:col-span-2 bg-[#1A1A24] border border-white/5 rounded-lg p-6 relative overflow-hidden">
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-600/10 to-transparent"></div>
                            {/* Abstract Graph */}
                            <svg className="w-full h-full min-h-[100px]" viewBox="0 0 100 50" preserveAspectRatio="none">
                                <path d="M0 40 Q 25 30 50 40 T 100 30 L 100 50 L 0 50 Z" fill="rgba(37,99,235,0.1)" />
                                <path d="M0 40 Q 25 30 50 40 T 100 30" fill="none" stroke="#3B82F6" strokeWidth="1" className="animate-[dash_5s_linear_infinite]" strokeDasharray="5 5" />
                                <path d="M0 35 Q 25 25 50 30 T 100 15" fill="none" stroke="#818CF8" strokeWidth="0.5" />
                            </svg>
                        </div>
                        <div className="col-span-1 flex flex-col sm:flex-row md:flex-col gap-6">
                            <div className="flex-1 bg-[#1A1A24] border border-white/5 rounded-lg p-4 flex flex-col justify-between">
                                <div className="font-fira-code text-[10px] text-slate-500">PRES. ACEITE</div>
                                <div className="text-3xl font-sora text-white">4.2 <span className="text-sm text-slate-500">bar</span></div>
                            </div>
                            <div className="flex-1 bg-[#1A1A24] border border-white/5 rounded-lg p-4 flex flex-col justify-between">
                                <div className="font-fira-code text-[10px] text-slate-500">TEMP. MOTOR</div>
                                <div className="text-3xl font-sora text-white">90 <span className="text-sm text-slate-500">°C</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
