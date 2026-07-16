import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Screenshots from '@/components/Screenshots';
import About from '@/components/About';
import Download from '@/components/Download';
import Footer from '@/components/Footer';

const Features = dynamic(() => import('@/components/Features'), {
  loading: () => <div style={{ minHeight: 400 }} />,
});

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
      <Footer />
    </main>
  );
}
