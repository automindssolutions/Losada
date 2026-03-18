import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Network, Database, CloudFog, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function AutomationEngine() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Node entrance animations
      gsap.from('.engine-node', {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      });

      // SVG Path draw animation
      gsap.fromTo('.engine-path', 
        { strokeDasharray: 1000, strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
          }
        }
      );

      // Particle flow animation infinite
      gsap.to('.engine-particle', {
        strokeDashoffset: -20,
        duration: 0.5,
        ease: 'none',
        repeat: -1,
      });

      // Central core pulse
      gsap.to('.engine-core', {
        boxShadow: '0 0 40px 10px rgba(123,97,255,0.6)',
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-void border-y border-white/5">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-sora font-semibold text-white mb-4">
            Motor de <span className="text-plasma">Ingeniería</span>
          </h2>
          <p className="font-fira-code text-phantom/60">
            Conectamos ecosistemas fragmentados en una única entidad simbiótica orientada a la eficiencia absoluta.
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-video flex items-center justify-center mt-20">
          
          {/* SVG Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid meet">
            {/* Base Paths */}
            <path className="engine-path" d="M150,225 C250,225 300,225 400,225" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            <path className="engine-path" d="M400,225 C500,225 550,100 650,100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            <path className="engine-path" d="M400,225 C500,225 550,350 650,350" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            <path className="engine-path" d="M400,225 C400,100 550,225 650,225" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />

            {/* Glowing Particles Overlay */}
            <path className="engine-particle" d="M150,225 C250,225 300,225 400,225" fill="none" stroke="#7B61FF" strokeWidth="2" strokeDasharray="5 15" />
            <path className="engine-particle" d="M400,225 C500,225 550,100 650,100" fill="none" stroke="#7B61FF" strokeWidth="2" strokeDasharray="5 15" />
            <path className="engine-particle" d="M400,225 C500,225 550,350 650,350" fill="none" stroke="#7B61FF" strokeWidth="2" strokeDasharray="5 15" />
            <path className="engine-particle" d="M400,225 C400,100 550,225 650,225" fill="none" stroke="#7B61FF" strokeWidth="2" strokeDasharray="5 15" />
          </svg>

          {/* Nodes (HTML for easier styling/glows) */}
          <div className="absolute left-[10%] md:left-[15%] top-1/2 -translate-y-1/2 engine-node flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md relative">
              <Database className="text-phantom/70" size={28} />
            </div>
            <span className="font-fira-code text-xs text-phantom/50 uppercase">Data Input</span>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 engine-node z-20">
            <div className="engine-core w-24 h-24 rounded-full bg-gradient-to-br from-plasma to-void border border-plasma shadow-[0_0_30px_rgba(123,97,255,0.4)] flex items-center justify-center relative">
              <div className="absolute inset-2 bg-void rounded-full border border-plasma/30 flex items-center justify-center">
                <Network className="text-plasma" size={32} />
              </div>
            </div>
            <div className="absolute top-full lg:left-1/2 lg:-translate-x-1/2 mt-4 text-center w-max hidden lg:block">
              <span className="font-fira-code text-sm text-plasma block font-bold tracking-widest uppercase">Autominds Core</span>
            </div>
          </div>

          <div className="absolute right-[10%] md:right-[15%] top-[15%] engine-node flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
              <CloudFog className="text-phantom/70" size={22} />
            </div>
            <span className="font-fira-code text-xs text-phantom/50 uppercase hidden md:block">Cloud Sync</span>
          </div>

          <div className="absolute right-[10%] md:right-[15%] top-1/2 -translate-y-1/2 engine-node flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
              <Zap className="text-phantom/70" size={22} />
            </div>
            <span className="font-fira-code text-xs text-phantom/50 uppercase hidden md:block">Triggers</span>
          </div>

          <div className="absolute right-[10%] md:right-[15%] bottom-[15%] engine-node flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
              <div className="w-6 h-6 rounded bg-phantom/70 flex items-center justify-center px-1">
                <span className="text-[10px] font-bold text-void">CRM</span>
              </div>
            </div>
            <span className="font-fira-code text-xs text-phantom/50 uppercase hidden md:block">Client CRM</span>
          </div>

        </div>
      </div>
    </section>
  );
}
