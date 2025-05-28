import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import CustomCursor from '@/components/ui/CustomCursor';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-main text-white">
      <CustomCursor />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        {/* 추후 다른 섹션들이 여기에 추가됩니다 */}
        {/* <About /> */}
        {/* <Skills /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
      </main>
    </div>
  );
}