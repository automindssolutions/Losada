import { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ContactWix() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.contact-info',
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
      );
      gsap.fromTo('.contact-map',
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="contacto" className="bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[600px]">
        
        {/* Contact Info Side */}
        <div className="contact-info bg-gray-900 text-white flex-1 p-12 md:p-24 flex flex-col justify-center relative z-10 shadow-2xl">
          <h4 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-2">Ponte en Contacto</h4>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
            Visítanos
          </h2>
          <div className="w-12 h-1 bg-red-600 mb-12"></div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-red-500 mt-1" size={24} />
              <div>
                <h3 className="font-bold uppercase tracking-wider mb-1">Dirección</h3>
                <p className="text-gray-400">Calle de la Coalición<br/>Villaverde, 28021 Madrid</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-red-500 mt-1" size={24} />
              <div>
                <h3 className="font-bold uppercase tracking-wider mb-1">Teléfono</h3>
                <p className="text-gray-400">+34 912 345 678</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-red-500 mt-1" size={24} />
              <div>
                <h3 className="font-bold uppercase tracking-wider mb-1">Email</h3>
                <p className="text-gray-400">contacto@tallereslosada.es</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-red-500 mt-1" size={24} />
              <div>
                <h3 className="font-bold uppercase tracking-wider mb-1">Horarios</h3>
                <p className="text-gray-400">Lunes a Viernes<br/>08:00 - 14:00 | 16:00 - 19:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Real Google Map Embed using dynamic generic URL */}
        <div className="contact-map flex-1 bg-gray-200 relative min-h-[400px]">
          <iframe 
            src="https://maps.google.com/maps?q=Calle%20de%20la%20Coalici%C3%B3n,%20Villaverde,%20Madrid&t=&z=16&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, minHeight: '100%' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
