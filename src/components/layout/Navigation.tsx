'use client';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-off-white">
        <nav className="relative flex justify-between items-center py-4 h-16 px-8">
          <div className="flex items-center justify-between w-full">
            <a href="#portfolio" className="font-display text-xl font-bold text-black hover:text-coral transition-colors tracking-normal">
              Portfolio
            </a>
            <a href="#about" className="font-display text-xl font-bold text-black hover:text-coral transition-colors tracking-normal">
              About
            </a>
            <a href="#journey" className="font-display text-xl font-bold text-black hover:text-coral transition-colors tracking-normal">
              Journey
            </a>
            <a href="#tech" className="font-display text-xl font-bold text-black hover:text-coral transition-colors tracking-normal">
              Tech
            </a>
            <a href="#projects" className="font-display text-xl font-bold text-black hover:text-coral transition-colors tracking-normal">
              Projects
            </a>
            
            <button 
              onClick={toggleMenu}
              className="relative w-15 h-8 flex flex-col justify-center items-end group"
            >
              <span className={`block w-15 h-0.5 bg-coral transition-all duration-300 ease-in-out ${
                isMenuOpen 
                  ? 'rotate-45 translate-y-0' 
                  : 'group-hover:-translate-y-3 -translate-y-0.5'
              }`}></span>
              
              <span className={`block w-15 h-0.5 bg-coral transition-all duration-300 ease-in-out ${
                isMenuOpen 
                  ? '-rotate-45 translate-y-0' 
                  : 'group-hover:translate-y-3 translate-y-0.5'
              }`}></span>
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
            <a 
              href="#portfolio" 
              onClick={toggleMenu}
              className="font-display font-light text-white hover:text-coral transition-colors duration-300"
              style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', lineHeight: '0.9' }}
            >
              Portfolio
            </a>
            <a 
              href="#about" 
              onClick={toggleMenu}
              className="font-display font-light text-white hover:text-coral transition-colors duration-300"
              style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', lineHeight: '0.9' }}
            >
              About
            </a>
            <a 
              href="#journey" 
              onClick={toggleMenu}
              className="font-display font-light text-white hover:text-coral transition-colors duration-300"
              style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', lineHeight: '0.9' }}
            >
              Journey
            </a>
            <a 
              href="#tech" 
              onClick={toggleMenu}
              className="font-display font-light text-white hover:text-coral transition-colors duration-300"
              style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', lineHeight: '0.9' }}
            >
              Tech
            </a>
            <a 
              href="#projects" 
              onClick={toggleMenu}
              className="font-display font-light text-white hover:text-coral transition-colors duration-300"
              style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', lineHeight: '0.9' }}
            >
              Projects
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;