import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: 'Carlos R.',
    text: 'Impecable. Me arreglaron el embrague en tiempo récord y el precio fue muy justo. Se nota que son técnicos altamente preparados.',
    role: 'Cliente Verificado'
  },
  {
    name: 'María F.',
    text: 'Entorno muy profesional y adaptado. Pude pagar con mi móvil sin ningún problema. La atención de primer nivel.',
    role: 'Cliente Verificado'
  },
  {
    name: 'Javier D.',
    text: 'Llevé mi coche por un problema eléctrico complejo, conectaron la diagnosis y dieron con el fallo de latencia enseguida.',
    role: 'Cliente VIP'
  },
  {
    name: 'Lucía G.',
    text: 'Recomiendo muchísimo pedir cita. Tienen el taller operando con una precisión quirúrgica.',
    role: 'Cliente Verificado'
  },
  {
    name: 'Antonio L.',
    text: 'Honestidad absoluta. No llevo mis vehículos de empresa a otro sitio. Infraestructura técnica excelente.',
    role: 'Flota Comercial'
  },
  {
    name: 'Elena S.',
    text: 'Te explican la telemetría del coche y lo que le pasa con exactitud. Presupuesto transparente. Limpieza total.',
    role: 'Cliente Verificado'
  }
];

export function ReviewsTaller() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.review-card', 
        {
          y: 50,
          opacity: 0,
          rotationX: -15,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 95%', // Trigger slightly earlier and more reliably
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="resenas" className="py-32 bg-[#05050A] relative border-t border-white/5 perspective-[1000px]">
      
      {/* Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <div className="font-fira-code text-xs text-slate-500 tracking-widest mb-4">
              DATA // REVIEWS_SYS
            </div>
            <h2 className="text-4xl md:text-5xl font-sora font-bold text-white leading-tight">
              Testado en Producción.
            </h2>
          </div>
          <p className="text-slate-400 font-sora max-w-sm text-lg md:text-right">
            Nuestros clientes avalan la estabilidad, transparencia y calidad técnica de este taller.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {reviews.map((review, idx) => (
            <div 
              key={idx} 
              className="review-card flex flex-col justify-between bg-[#0A0A14] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.02] hover:border-blue-500/30 transition-all duration-500 group"
            >
              <div>
                <Quote className="w-8 h-8 text-white/10 mb-6 group-hover:text-blue-500/20 transition-colors" />
                <p className="text-slate-300 mb-8 font-sora text-sm leading-relaxed">
                  "{review.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                <div className="w-12 h-12 rounded-full bg-[#151520] border border-white/10 flex items-center justify-center font-sora font-bold text-white group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-colors">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-sora font-semibold text-white text-sm">{review.name}</h4>
                  <span className="font-fira-code text-[10px] text-blue-400">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
