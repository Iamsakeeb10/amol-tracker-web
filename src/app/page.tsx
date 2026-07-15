import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import Screenshots from '@/components/Screenshots';
import About from '@/components/About';
import Download from '@/components/Download';
import PrivacySection from '@/components/PrivacySection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Screenshots />
      <About />
      <Download />
      <PrivacySection />
      <Footer />
    </main>
  );
}
