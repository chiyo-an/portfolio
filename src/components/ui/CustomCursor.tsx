'use client';
import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const cursorText = document.createElement('span');
    cursorText.className = 'custom-cursor-text';
    cursorText.textContent = 'CLICK';
    cursor.appendChild(cursorText);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const addHover = (e: Event) => {
      const target = e.target as HTMLElement;
      cursor.classList.add('hover');
      
      // 버튼에만 텍스트 표시 (링크는 제외)
      if (target.tagName === 'BUTTON' || 
          (target.tagName === 'INPUT' && (target as HTMLInputElement).type === 'submit')) {
        cursor.classList.add('show-text');
      }
    };

    const removeHover = () => {
      cursor.classList.remove('hover');
      cursor.classList.remove('show-text');
    };

    document.addEventListener('mousemove', moveCursor);

    // 모든 interactive 요소에 hover 효과 적용
    const hoverElements = document.querySelectorAll('a, button, [role="button"]');
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', addHover);
      element.addEventListener('mouseleave', removeHover);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      hoverElements.forEach(element => {
        element.removeEventListener('mouseenter', addHover);
        element.removeEventListener('mouseleave', removeHover);
      });
      cursor.remove();
    };
  }, []);

  return null;
}