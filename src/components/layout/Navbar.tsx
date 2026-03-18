import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-void/70 backdrop-blur-md border-b border-white/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer z-50">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-plasma to-void border border-plasma/50 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
          </div>
          <span className="font-sora font-semibold text-lg tracking-tight text-phantom">
            Autominds Solutions
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-fira-code text-phantom/70">
          <a href="#features" className="hover:text-plasma transition-colors">Features</a>
          <a href="#integrations" className="hover:text-plasma transition-colors">Integrations</a>
          <a href="#pricing" className="hover:text-plasma transition-colors">Pricing</a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#login" className="text-sm font-sora font-medium text-phantom/80 hover:text-white transition-colors">
            Log in
          </a>
          <a 
            href="#contact" 
            className="px-5 py-2.5 rounded-xl bg-plasma text-white text-sm font-sora font-medium shadow-[0_0_20px_rgba(123,97,255,0.3)] hover:shadow-[0_0_30px_rgba(123,97,255,0.5)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-phantom z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-void/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-sora text-phantom hover:text-plasma transition-colors">Features</a>
          <a href="#integrations" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-sora text-phantom hover:text-plasma transition-colors">Integrations</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-sora text-phantom hover:text-plasma transition-colors">Pricing</a>
          <div className="flex flex-col items-center gap-4 mt-8">
            <a href="#login" onClick={() => setMobileMenuOpen(false)} className="text-lg font-sora text-phantom/80">Log in</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-8 py-3 rounded-xl bg-plasma text-white text-lg font-sora font-medium shadow-[0_0_20px_rgba(123,97,255,0.3)]">Get Started</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
