import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: 'Carlos R.',
    text: 'Impecable. Me arreglaron el embrague en tiempo récord y el precio fue muy justo. Se nota que son técnicos altamente preparados y el trato es inmejorable.',
  },
  {
    name: 'María F.',
    text: 'Entorno muy profesional. Pude pagar con mi móvil sin ningún problema. Me explicaron lo que le pasaba al coche paso a paso. Total transparencia.',
  },
  {
    name: 'Javier D.',
    text: 'Llevé mi coche por un problema eléctrico complejo, conectaron la diagnosis y dieron con el fallo enseguida. El mejor taller de Villaverde sin duda.',
  }
];

export function ReviewsWix() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.review-header',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 85%' } }
      );
      
      gsap.fromTo('.review-card',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.review-grid', start: 'top 85%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="opiniones" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-red-600/5"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
        
        <div className="review-header block">
          <h4 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-2">Testimonios</h4>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <div className="w-12 h-1 bg-red-600 mx-auto mb-16"></div>
        </div>

        <div className="review-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="review-card bg-white text-gray-900 p-8 shadow-2xl relative mt-8 hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <Quote size={20} className="text-white" />
              </div>
              
              <div className="flex justify-center gap-1 mb-6 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="fill-red-500 text-red-500" />
                ))}
              </div>
              
              <p className="text-gray-600 italic leading-relaxed mb-6 font-medium">
                "{review.text}"
              </p>
              
              <div className="w-8 h-[2px] bg-red-600 mx-auto mb-4"></div>
              <h4 className="font-black uppercase tracking-wider text-sm">{review.name}</h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
