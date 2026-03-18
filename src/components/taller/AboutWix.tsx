import { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function AboutWix() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.about-text',
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
      );
      gsap.fromTo('.about-img',
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="nosotros" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="about-text flex-1">
            <h4 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2">Sobre Nosotros</h4>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-6">
              Expertos en <br/> Mecánica Automotriz
            </h2>
            <div className="w-12 h-1 bg-gray-900 mb-8"></div>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              En Talleres Losada nos enorgullece ofrecer un servicio técnico y humano insuperable. Llevamos años reparando vehículos en Villaverde Bajo con un objetivo claro: que salgas a la carretera con total seguridad.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-gray-800 font-semibold">
                <CheckCircle2 className="text-red-600 flex-shrink-0" size={24} />
                <span>Instalaciones 100% Accesibles</span>
              </li>
              <li className="flex items-center gap-3 text-gray-800 font-semibold">
                <CheckCircle2 className="text-red-600 flex-shrink-0" size={24} />
                <span>Pagos Móviles y con Tarjeta</span>
              </li>
              <li className="flex items-center gap-3 text-gray-800 font-semibold">
                <CheckCircle2 className="text-red-600 flex-shrink-0" size={24} />
                <span>Trato Cercano y Transparente</span>
              </li>
            </ul>

            <a href="#contacto" className="inline-block border-b-2 border-red-600 text-gray-900 font-bold uppercase pb-1 hover:text-red-600 transition-colors tracking-wider text-sm">
              Saber Más
            </a>
          </div>

          {/* Image Grid Placeholder */}
          <div className="about-img flex-1 relative w-full">
            <div className="w-full bg-gray-200 aspect-square overflow-hidden shadow-2xl relative">
              <img 
                src="/mechanic_working.png" 
                alt="Mecánico trabajando" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-red-600 text-white p-6 font-bold text-xl sm:text-2xl uppercase shadow-lg">
                Calidad <br/>Garantizada
              </div>
            </div>
            {/* Decals */}
            <div className="absolute -z-10 -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-full h-full bg-gray-100"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
