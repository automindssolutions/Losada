import { Wrench } from 'lucide-react';

export function FooterTaller() {
  return (
    <footer className="bg-[#020205] py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-12 border-b border-white/5">
          
          <div className="flex items-center gap-3 mb-8 md:mb-0">
            <div className="w-8 h-8 border border-white/10 rounded-lg flex items-center justify-center bg-[#0A0A14]">
              <Wrench className="w-4 h-4 text-slate-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-sora font-semibold text-white tracking-widest text-sm leading-none uppercase">Talleres Losada</span>
              <span className="font-fira-code text-[8px] text-slate-600 tracking-[0.2em] mt-1">V_VERDE.MAD</span>
            </div>
          </div>

          <div className="flex gap-8 font-fira-code text-xs uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-blue-400 transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Docs</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Seguridad</a>
          </div>

        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center font-fira-code text-[10px] text-slate-600 tracking-wider">
          <span>&copy; {new Date().getFullYear()} TALLERES LOSADA. AUTHENTICATED.</span>
          <span className="mt-4 md:mt-0 flex items-center gap-2">
            SYS.DEV // <span className="text-white">AUTOMINDS SOLUTIONS</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
