import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade up cascade for text elements
      gsap.from('.hero-element', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });

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
    <section ref={containerRef} className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden flex flex-col items-center bg-[#05050A]">
      
      {/* Premium Ambient Background Architecture */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Glows */}
        <div className="ambient-glow absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-plasma/10 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="ambient-glow absolute bottom-[0%] right-[10%] w-[800px] h-[800px] bg-indigo-600/10 blur-[180px] rounded-full mix-blend-screen"></div>

        {/* High-end Masked Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_40%,black_10%,transparent_80%)]"></div>

        {/* Framing & Data - Top Left */}
        <div className="absolute top-8 left-8 flex flex-col gap-2 opacity-0 md:opacity-100">
          <div className="text-white/30 font-fira-code text-sm leading-none">+</div>
          <div className="text-white/20 font-fira-code text-[9px] tracking-[0.3em] font-light mt-4">
            SYS.OP // 100%<br/>
            NET.LAT // 12ms<br/>
            CORE // STABLE
          </div>
        </div>

        {/* Framing - Corners */}
        <div className="absolute top-8 right-8 text-white/30 font-fira-code text-sm leading-none opacity-0 md:opacity-100">+</div>
        <div className="absolute bottom-8 left-8 text-white/30 font-fira-code text-sm leading-none opacity-0 md:opacity-100">+</div>
        <div className="absolute bottom-8 right-8 flex flex-col items-end gap-2 opacity-0 md:opacity-100">
          <div className="text-white/30 font-fira-code text-sm leading-none">+</div>
          <div className="text-white/20 font-fira-code text-[9px] tracking-[0.3em] font-light mt-4 text-right">
            V.2.0.44<br/>
            AUTH.REQ
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-5xl">
        <div className="hero-element inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm self-center">
          <span className="w-2 h-2 rounded-full bg-plasma animate-pulse"></span>
          <span className="font-fira-code text-xs font-medium text-phantom/80 tracking-wide">VAPOR CLINIC ARCHITECTURE v2.0</span>
        </div>
        
        <h1 className="hero-element text-5xl md:text-7xl font-sora font-bold text-white tracking-tight leading-[1.1] mb-6 text-center mx-auto">
          Desbloqueamos el <span className="bg-clip-text text-transparent bg-gradient-to-r from-plasma to-indigo-400">potencial oculto</span> de los negocios con IA.
        </h1>
        
        <p className="hero-element text-lg md:text-xl font-sora text-phantom/60 mb-10 max-w-2xl mx-auto leading-relaxed text-center">
          Infraestructuras tecnológicas diseñadas para escalar. Automatizamos procesos, implementamos agentes inteligentes y construimos ecosistemas digitales de élite.
        </p>
        
        <div className="hero-element flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-plasma text-white font-sora font-medium text-lg flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(123,97,255,0.4)] hover:shadow-[0_0_50px_rgba(123,97,255,0.6)] transition-all duration-300 hover:-translate-y-1">
            Agenda una llamada <ArrowRight size={20} />
          </a>
          <a href="#demo" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-phantom font-sora font-medium text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md">
            <Play size={20} className="fill-phantom/50 text-phantom/50" /> Ver Demo
          </a>
        </div>
      </div>

      {/* 3D Dashboard Mockup (n8n workflow style) */}
      <div className="w-full max-w-6xl mx-auto px-6 relative z-20 perspective-[2000px]">
        <div className="mockup-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[60%] bg-plasma blur-[150px] opacity-20 pointer-events-none rounded-full"></div>
        
        <div 
          ref={mockupRef}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A14] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] transform-style-3d"
        >
          {/* Mac window controls */}
          <div className="absolute top-0 w-full h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-[#1A1A24] z-30">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div className="ml-4 font-fira-code text-xs text-phantom/40">n8n - Lead Processing Workflow</div>
          </div>
          
          {/* n8n Workflow Visualization */}
          <div className="absolute inset-0 pt-10 w-full h-full flex flex-col items-center justify-center overflow-hidden bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]">
            <div className="w-[800px] h-[400px] relative scale-[0.45] sm:scale-75 md:scale-90 lg:scale-100 flex-shrink-0 origin-center top-6 md:top-0">
              {/* Connection Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 800 400">
                <path d="M 180 200 C 250 200 250 130 320 130" fill="none" stroke="#FF6D5A" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                <path d="M 180 200 C 250 200 250 270 320 270" fill="none" stroke="#FF6D5A" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                <path d="M 480 130 C 550 130 550 200 620 200" fill="none" stroke="#FF6D5A" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                <path d="M 480 270 C 550 270 550 200 620 200" fill="none" stroke="#FF6D5A" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
              </svg>

              {/* Nodes */}
              <div className="relative w-full h-full z-20">
                {/* Trigger Node (Webhook) */}
                <div className="absolute left-[20px] top-[170px] w-40 bg-[#1E1E28] border border-white/10 rounded-lg p-3 shadow-lg flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#FF6D5A]/20 flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#FF6D5A] rounded-sm mask-webhook"></div>
                  </div>
                  <div>
                    <div className="font-sora text-sm text-white">Webhook</div>
                    <div className="font-fira-code text-[10px] text-phantom/50">Lead Received</div>
                  </div>
                </div>

                {/* Action Node 1 (OpenAI/Filter) */}
                <div className="absolute left-[320px] top-[100px] w-40 bg-[#1E1E28] border border-[#7B61FF]/30 rounded-lg p-3 shadow-[0_0_15px_rgba(123,97,255,0.1)] flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#7B61FF]/20 flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#7B61FF] rounded-sm mask-ai"></div>
                  </div>
                  <div>
                    <div className="font-sora text-sm text-white">OpenAI</div>
                    <div className="font-fira-code text-[10px] text-phantom/50">Qualify Lead</div>
                  </div>
                </div>

                {/* Action Node 2 (Supabase) */}
                <div className="absolute left-[320px] top-[240px] w-40 bg-[#1E1E28] border border-emerald-500/30 rounded-lg p-3 shadow-[0_0_15px_rgba(16,185,129,0.1)] flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-emerald-500/20 flex items-center justify-center">
                    <div className="w-4 h-4 bg-emerald-500 rounded-sm mask-db"></div>
                  </div>
                  <div>
                    <div className="font-sora text-sm text-white">Supabase</div>
                    <div className="font-fira-code text-[10px] text-phantom/50">Upsert Record</div>
                  </div>
                </div>

                {/* Action Node 3 (Slack/Email) */}
                <div className="absolute left-[620px] top-[170px] w-40 bg-[#1E1E28] border border-white/10 rounded-lg p-3 shadow-lg flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-sm mask-msg"></div>
                  </div>
                  <div>
                    <div className="font-sora text-sm text-white">Slack</div>
                    <div className="font-fira-code text-[10px] text-phantom/50">Notify Team</div>
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
