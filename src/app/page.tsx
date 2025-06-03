import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CircularContactButton from '@/components/ui/CircularContactButton';
import Hero from '@/components/sections/Hero';
import Journey from '@/components/sections/Journey';
import Projects from '@/components/sections/Projects';
import ContactSection from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-main text-white">
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Journey />
        <Projects />
        <ContactSection />
      </main>
      <Footer />
      <CircularContactButton />
    </div>
  );
}