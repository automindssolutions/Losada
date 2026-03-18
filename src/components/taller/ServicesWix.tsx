import { useEffect, useRef } from 'react';
import { Wrench, Settings, BatteryCharging } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Mecánica General',
    desc: 'Reparamos motores, transmisiones y frenos con los más altos estándares de calidad.',
    icon: Wrench
  },
  {
    title: 'Mantenimiento Preventivo',
    desc: 'Cambio de aceite, filtros y revisiones periódicas para evitar averías costosas.',
    icon: Settings
  },
  {
    title: 'Diagnóstico Computarizado',
    desc: 'Análisis electrónico avanzado para identificar fallas con total precisión.',
    icon: BatteryCharging
  }
];

export function ServicesWix() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.service-header',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 85%' } }
      );
      
      gsap.fromTo('.service-card',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.service-grid', start: 'top 85%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="servicios" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        
        <div className="service-header block">
          <h4 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2">Qué Hacemos</h4>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-6">
            Nuestros Servicios
          </h2>
          <div className="w-12 h-1 bg-gray-900 mx-auto mb-16"></div>
        </div>

        <div className="service-grid grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={i} className="service-card bg-white p-8 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-transform duration-300 border-t-4 border-transparent hover:border-red-600">
                <div className="w-16 h-16 bg-red-50 flex items-center justify-center text-red-600 mb-6 rounded-full">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 uppercase mb-4 tracking-tight">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <a href="#contacto" className="text-red-600 font-bold uppercase text-sm flex items-center gap-2 hover:text-gray-900 transition-colors">
                  Pedir Cita &rarr;
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <a href="#contacto" className="bg-gray-900 text-white font-bold uppercase px-10 py-5 hover:bg-red-600 transition-colors text-sm tracking-wider inline-block">
            Ver Todos los Servicios
          </a>
        </div>

      </div>
    </section>
  );
}
