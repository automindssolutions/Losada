import { Instagram, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-void border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-neon-glow opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Status */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-plasma to-void border border-plasma/50 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </div>
              <span className="font-sora font-semibold text-lg tracking-tight text-white">
                Autominds Solutions
              </span>
            </div>
            <p className="font-fira-code text-sm text-phantom/50 leading-relaxed">
              Desbloqueamos el potencial oculto de los negocios con IA e infraestructuras tecnológicas.
            </p>
            <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10 w-fit mt-4">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </div>
              <span className="font-fira-code text-xs text-phantom/70 uppercase tracking-wider">All systems operational</span>
            </div>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sora font-medium text-white mb-2">Producto</h4>
            <a href="#features" className="font-sora text-sm text-phantom/60 hover:text-plasma transition-colors flex items-center gap-1 group">
              Agentes IA <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#web" className="font-sora text-sm text-phantom/60 hover:text-plasma transition-colors flex items-center gap-1 group">
              Webs Customizables <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#integrations" className="font-sora text-sm text-phantom/60 hover:text-plasma transition-colors flex items-center gap-1 group">
              Integraciones <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sora font-medium text-white mb-2">Legal</h4>
            <a href="#" className="font-sora text-sm text-phantom/60 hover:text-plasma transition-colors">Privacidad</a>
            <a href="#" className="font-sora text-sm text-phantom/60 hover:text-plasma transition-colors">Términos de Servicio</a>
            <a href="#" className="font-sora text-sm text-phantom/60 hover:text-plasma transition-colors">Política de Cookies</a>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sora font-medium text-white mb-2">Conectar</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/automindssolutions" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-phantom hover:text-plasma hover:border-plasma/50 transition-all hover:-translate-y-1">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/in/autominds-solutions-807392392/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-phantom hover:text-plasma hover:border-plasma/50 transition-all hover:-translate-y-1">
                <Linkedin size={18} />
              </a>
              <a href="https://wa.me/34624272870" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-phantom hover:text-plasma hover:border-plasma/50 transition-all hover:-translate-y-1">
                <MessageCircle size={18} />
              </a>
            </div>
            <a href="mailto:info@automindssolutions.com" className="font-fira-code text-xs text-phantom/50 hover:text-plasma transition-colors mt-2">
              info@automindssolutions.com
            </a>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-fira-code text-xs text-phantom/40">
            &copy; {new Date().getFullYear()} Autominds Solutions. Todos los derechos reservados.
          </p>
          <div className="font-fira-code text-xs text-phantom/30 flex items-center gap-2">
            <span>Designed with</span>
            <span className="text-plasma/50">✦</span>
            <span>Zero-Gravity Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
