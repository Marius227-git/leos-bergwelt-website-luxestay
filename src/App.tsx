import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ReviewsBanner from './components/ReviewsBanner';
import ImageGallery from './components/ImageGallery';
import RoomsList from './components/RoomsList';
import AmenitiesGrid from './components/AmenitiesGrid';
import ExperienceSections from './components/ExperienceSections';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

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
    <main>
      <Navbar />
      <Hero />
      <ReviewsBanner />
      <ImageGallery />
      <RoomsList />
      <AmenitiesGrid />
      <ExperienceSections />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
