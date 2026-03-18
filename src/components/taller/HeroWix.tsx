import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function HeroWix() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.hero-anim',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.1 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="inicio" className="relative h-[85vh] flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image with natural colors and requested blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 blur-[4px] scale-[1.02]"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
      ></div>
      
      {/* Simple, lighter dark overlay to ensure text is readable but keeping the photo highly visible */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <div className="hero-anim w-16 h-1 bg-red-600 mb-8"></div>
        
        <h1 className="hero-anim text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-[1.1]">
          Tu coche merece <br />
          <span className="text-red-600">Lo Mejor</span>
        </h1>
        
        <p className="hero-anim text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-medium">
          Servicio mecánico integral en Villaverde Bajo. Diagnóstico experto, reparaciones garantizadas y atención de primera.
        </p>
        
        <div className="hero-anim flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <a href="#servicios" className="w-full sm:w-auto bg-red-600 text-white font-bold uppercase px-10 py-5 hover:bg-white hover:text-red-600 transition-colors text-sm tracking-wider">
            Nuestros Servicios
          </a>
          <a href="#contacto" className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold uppercase px-10 py-5 hover:bg-white hover:text-gray-900 transition-colors text-sm tracking-wider">
            Reserva Online
          </a>
        </div>
      </div>
    </section>
  );
}
