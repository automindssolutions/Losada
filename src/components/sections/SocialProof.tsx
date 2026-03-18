import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function SocialProof() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple infinite seamless loop for marquee
      gsap.to('.marquee-inner', {
        xPercent: -50,
        repeat: -1,
        duration: 30, // Slower for reading text
        ease: 'linear'
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const phrases = [
    "CONFIADO POR GRANDES NEGOCIOS",
    "ESCALA A CERO COSTE OPERATIVO",
    "INFRAESTRUCTURA DE ALTO RENDIMIENTO",
    "PROTOCOLOS DE AUTOMATIZACIÓN ACTIVOS",
    "PRECISIÓN CIBERNÉTICA"
  ];

  // We duplicate the array to create a seamless loop
  const duplicatedPhrases = [...phrases, ...phrases, ...phrases];

  return (
    <section className="py-8 border-y border-white/5 bg-gradient-to-b from-void to-white/[0.02] overflow-hidden">
      
      <div ref={wrapperRef} className="relative w-full flex align-center py-4 mask-edges">
        <div className="marquee-inner flex gap-12 md:gap-24 w-max px-8">
          {duplicatedPhrases.map((phrase, index) => (
            <div key={index} className="flex items-center justify-center opacity-40 hover:opacity-100 hover:text-plasma transition-all duration-300">
              <span className="font-fira-code text-lg md:text-xl font-medium tracking-[0.2em]">{phrase}</span>
              <span className="text-plasma ml-12 md:ml-24 opacity-50">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
