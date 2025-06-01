import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import Journey from '@/components/sections/Journey';
import Projects from '@/components/sections/Projects';
import ContactSection from '@/components/sections/Contact';
import CustomCursor from '@/components/ui/CustomCursor';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-main text-white">
      <CustomCursor />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Journey />
        <Projects />
        <ContactSection />
      </main>
    </div>
  );
}