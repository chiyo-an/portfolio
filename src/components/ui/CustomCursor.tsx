'use client';
import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const hideCursor = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.classList.contains('cursor-hover') ||
          target.closest('a') ||
          target.closest('button') ||
          target.style.cursor === 'pointer' ||
          getComputedStyle(target).cursor === 'pointer') {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseleave', hideCursor);
    document.addEventListener('mouseenter', () => setIsVisible(true));
    document.addEventListener('mouseover', handleMouseOver);

    const style = document.createElement('style');
    style.innerHTML = `
      *, *::before, *::after {
        cursor: none !important;
      }
      a, button, [role="button"], input, textarea, select {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseleave', hideCursor);
      document.removeEventListener('mouseenter', () => setIsVisible(true));
      document.removeEventListener('mouseover', handleMouseOver);
      
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: `translate(${position.x - (isHovered ? 16 : 12)}px, ${position.y - (isHovered ? 16 : 12)}px)`,
          transition: 'none',
        }}
      >
        <div
          className={`bg-coral rounded-full ${
            isHovered ? 'w-8 h-8' : 'w-6 h-6'
          }`}
          style={{
            transition: 'width 0.15s ease, height 0.15s ease',
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;