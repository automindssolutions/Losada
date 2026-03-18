import { useEffect } from 'react';
import Lenis from 'lenis';
import { NavbarWix } from './components/taller/NavbarWix';
import { HeroWix } from './components/taller/HeroWix';
import { AboutWix } from './components/taller/AboutWix';
import { ServicesWix } from './components/taller/ServicesWix';
import { ReviewsWix } from './components/taller/ReviewsWix';
import { ContactWix } from './components/taller/ContactWix';
import { FooterWix } from './components/taller/FooterWix';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sora selection:bg-red-600 selection:text-white pb-0">
      <NavbarWix />
      
      <main className="overflow-hidden">
        <HeroWix />
        <AboutWix />
        <ServicesWix />
        <ReviewsWix />
        <ContactWix />
      </main>

      <FooterWix />
    </div>
  );
}

export default App;
