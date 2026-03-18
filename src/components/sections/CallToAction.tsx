import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';

gsap.registerPlugin(ScrollTrigger);

export function CallToAction() {
  const formRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    budget: '500-1000',
    contact: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-element', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
        }
      });
    }, formRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      // Intenta enviar a Supabase. Si las credenciales no están configuradas, esto fallará en consola pero está listo.
      const { error } = await supabase
        .from('leads')
        .insert([
          { 
            name: formData.name, 
            company: formData.company, 
            budget: formData.budget, 
            contact: formData.contact 
          }
        ]);

      if (error) {
        throw error;
      }
      
      setIsSuccess(true);
      setFormData({ name: '', company: '', budget: '500-1000', contact: '' });
      setTimeout(() => setIsSuccess(false), 5000);
      
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setErrorMsg('Error al enviar el formulario. ¿Están configuradas las variables de entorno de Supabase?');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={formRef}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-plasma opacity-5 blur-[120px] pointer-events-none rounded-full"></div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="cta-element bg-void/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-sora font-bold text-white mb-6">
              Inicia el <span className="text-plasma">Protocolo</span>
            </h2>
            <p className="text-phantom/70 font-fira-code text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              Agenda una llamada con nuestro equipo técnico. Analizaremos tu infraestructura y te ofreceremos un plan de despliegue personalizado.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-fira-code text-xs text-phantom/70 font-medium ml-1">NOMBRE*</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-sora focus:outline-none focus:border-plasma/50 focus:ring-1 focus:ring-plasma/50 transition-all font-light"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="font-fira-code text-xs text-phantom/70 font-medium ml-1">EMPRESA (OPCIONAL)</label>
                <input 
                  type="text" 
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-sora focus:outline-none focus:border-plasma/50 focus:ring-1 focus:ring-plasma/50 transition-all font-light"
                  placeholder="Acme Corp"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact" className="font-fira-code text-xs text-phantom/70 font-medium ml-1">CORREO / TELÉFONO*</label>
              <input 
                type="text" 
                id="contact"
                name="contact"
                required
                value={formData.contact}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-sora focus:outline-none focus:border-plasma/50 focus:ring-1 focus:ring-plasma/50 transition-all font-light"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end mb-1">
                <label htmlFor="budget" className="font-fira-code text-xs text-phantom/70 font-medium ml-1">PRESUPUESTO ESTIMADO</label>
                <span className="font-fira-code text-xs text-plasma bg-plasma/10 px-2 py-1 rounded">EUR {formData.budget}</span>
              </div>
              <input 
                type="range" 
                id="budget"
                name="budget"
                min="500" 
                max="10000" 
                step="500"
                value={formData.budget.split('-')[0]}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  setFormData({ ...formData, budget: `${val}-${val + 1000}+` });
                }}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-plasma hover:accent-plasma/80"
              />
              <div className="flex justify-between font-fira-code text-[10px] text-phantom/40 mt-1 px-1">
                <span>500€</span>
                <span>10.000€+</span>
              </div>
            </div>

            {errorMsg && <p className="text-red-400 font-fira-code text-xs text-center">{errorMsg}</p>}
            {isSuccess && <p className="text-emerald-400 font-fira-code text-sm text-center">Protocolo iniciado correctamente. Te contactaremos pronto.</p>}

            <div className="flex items-start gap-3 mt-4 px-2">
              <input 
                type="checkbox" 
                id="terms" 
                required 
                className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 accent-plasma cursor-pointer shrink-0" 
              />
              <label htmlFor="terms" className="font-fira-code text-[10px] text-phantom/60 leading-relaxed cursor-pointer select-none">
                He leído y acepto los <a href="/terminos.html" target="_blank" className="text-plasma hover:underline">Términos de Servicio</a>, la <a href="/privacidad.html" target="_blank" className="text-plasma hover:underline">Política de Privacidad</a> y la <a href="/cookies.html" target="_blank" className="text-plasma hover:underline">Política de Cookies</a>.
              </label>
            </div>

            <div className="flex justify-center w-full mt-2">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full sm:w-[320px] px-8 py-4 rounded-xl bg-plasma text-white font-sora font-medium text-lg flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(123,97,255,0.3)] hover:shadow-[0_0_50px_rgba(123,97,255,0.5)] transition-all duration-300 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : 'Confirmar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
