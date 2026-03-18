import { MapPin, Phone, Clock, Menu } from 'lucide-react';
import { useState } from 'react';

export function NavbarWix() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar - Typical Wix mechanic template feature */}
      <div className="hidden md:flex bg-gray-900 text-gray-300 py-2 px-6 justify-between items-center text-xs font-semibold tracking-wide">
        <div className="flex gap-6">
          <span className="flex items-center gap-2"><MapPin size={14} className="text-red-500" /> Calle de la Coalición, Villaverde</span>
          <span className="flex items-center gap-2"><Clock size={14} className="text-red-500" /> Lun-Vie: 8:00 - 19:00</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={14} className="text-red-500" /> <span className="text-white">+34 912 345 678</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          
          <div className="flex flex-col">
            <h1 className="text-2xl font-black text-gray-900 tracking-tighter uppercase leading-none">
              Talleres <span className="text-red-600">Losada</span>
            </h1>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
              Centro de Automotores
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm font-bold text-gray-900 hover:text-red-600 uppercase transition-colors">Inicio</a>
            <a href="#nosotros" className="text-sm font-bold text-gray-900 hover:text-red-600 uppercase transition-colors">Nosotros</a>
            <a href="#servicios" className="text-sm font-bold text-gray-900 hover:text-red-600 uppercase transition-colors">Servicios</a>
            <a href="#opiniones" className="text-sm font-bold text-gray-900 hover:text-red-600 uppercase transition-colors">Opiniones</a>
            <a href="#contacto" className="bg-red-600 text-white px-6 py-3 font-bold uppercase text-sm hover:bg-black transition-colors rounded-sm">
              Reservar Cita
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg">
            <a href="#inicio" className="text-sm font-bold text-gray-900 uppercase">Inicio</a>
            <a href="#nosotros" className="text-sm font-bold text-gray-900 uppercase">Nosotros</a>
            <a href="#servicios" className="text-sm font-bold text-gray-900 uppercase">Servicios</a>
            <a href="#opiniones" className="text-sm font-bold text-gray-900 uppercase">Opiniones</a>
            <a href="#contacto" className="bg-red-600 text-white px-4 py-3 font-bold uppercase text-center mt-2 rounded-sm">
              Reservar Cita
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
