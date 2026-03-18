export function FooterWix() {
  return (
    <footer className="bg-black py-10 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-6xl text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm font-medium text-gray-500">
        
        <div className="mb-4 md:mb-0">
          <span className="text-white font-bold uppercase tracking-wider mr-2">Talleres Losada</span>
          &copy; {new Date().getFullYear()} Todos los derechos reservados.
        </div>

        <div className="flex gap-6 uppercase tracking-wider text-xs font-bold">
          <a href="#" className="hover:text-red-500 transition-colors">Términos</a>
          <a href="#" className="hover:text-red-500 transition-colors">Privacidad</a>
          <a href="#" className="hover:text-red-500 transition-colors">Aviso Legal</a>
        </div>

      </div>
    </footer>
  );
}
