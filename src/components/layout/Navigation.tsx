'use client';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/25 bg-transparent backdrop-blur-sm">
        <div className="w-full h-px bg-black opacity-30" />
        <nav className="relative flex justify-between items-center py-3 px-8">
          <div className="flex items-center justify-between w-full">
            <button 
              onClick={() => scrollToSection('hero')}
              className="font-english text-sm font-bold text-black hover:text-gray-700 transition-colors tracking-normal uppercase"
            >
              Portfolio ✦
            </button>
            <button 
              onClick={() => scrollToSection('journey')}
              className="font-english text-sm font-bold text-black hover:text-gray-700 transition-colors tracking-normal hidden md:block uppercase"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('journey')}
              className="font-english text-sm font-bold text-black hover:text-gray-700 transition-colors tracking-normal hidden md:block uppercase"
            >
              Journey
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="font-english text-sm font-bold text-black hover:text-gray-700 transition-colors tracking-normal hidden md:block uppercase"
            >
              [ Projects ]
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="font-english text-sm font-bold text-black hover:text-gray-700 transition-colors tracking-normal hidden md:block uppercase"
            >
              Contact
            </button>
            
            <button 
              onClick={toggleMenu}
              className="relative w-8 h-8 flex flex-col justify-center items-center group mr-2"
              style={{ 
                transform: 'translateZ(0)',
                letterSpacing: '0',
                backfaceVisibility: 'hidden',
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              <span 
                className={`block w-[60px] bg-black transition-all duration-300 ease-in-out ${
                  isMenuOpen 
                    ? 'rotate-45 translate-y-0' 
                    : 'group-hover:-translate-y-1'
                }`}
                style={{ 
                  height: '2px',
                  transform: isMenuOpen ? 'rotate(45deg) translateY(0px)' : 'translateY(-2px)',
                  transformOrigin: 'center',
                  backfaceVisibility: 'hidden'
                }}
              ></span>
              
              <span 
                className={`block w-[60px] bg-black transition-all duration-300 ease-in-out ${
                  isMenuOpen 
                    ? '-rotate-45 translate-y-0' 
                    : 'group-hover:translate-y-1'
                }`}
                style={{ 
                  height: '2px',
                  transform: isMenuOpen ? 'rotate(-45deg) translateY(0px)' : 'translateY(2px)',
                  transformOrigin: 'center',
                  backfaceVisibility: 'hidden'
                }}
              ></span>
            </button>
          </div>
        </nav>
      </header>

      <div className={`fixed inset-0 bg-black z-40 transition-transform duration-700 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="h-full flex flex-col justify-between">
          <div className="flex justify-end p-6">
            <div className="w-8 h-6"></div>
          </div>

          <nav className="flex-1 flex flex-col justify-center items-end pr-16 space-y-4">
            <button 
              onClick={() => scrollToSection('hero')}
              className="font-english font-light text-white hover:text-red-500 transition-colors duration-300 uppercase"
              style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', lineHeight: '0.9' }}
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('journey')}
              className="font-english font-light text-white hover:text-red-500 transition-colors duration-300 uppercase"
              style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', lineHeight: '0.9' }}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('journey')}
              className="font-english font-light text-white hover:text-red-500 transition-colors duration-300 uppercase"
              style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', lineHeight: '0.9' }}
            >
              Journey
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="font-english font-light text-white hover:text-red-500 transition-colors duration-300 uppercase"
              style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', lineHeight: '0.9' }}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="font-english font-light text-white hover:text-red-500 transition-colors duration-300 uppercase"
              style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', lineHeight: '0.9' }}
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;