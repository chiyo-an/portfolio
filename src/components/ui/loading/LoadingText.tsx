'use client';

import { useEffect, useState } from 'react';

export default function LoadingText() {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const fullText = 'LOADING...';

  useEffect(() => {
    // 초기 마운트 시 애니메이션 지연을 줄여 부드러운 시작
    const initialDelay = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;
      
      const typingAnimation = () => {
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex));
          currentIndex++;
          // requestAnimationFrame을 사용하여 브라우저 렌더링 최적화
          requestAnimationFrame(() => {
            setTimeout(typingAnimation, 100); // 간격을 늘려 부드러운 애니메이션
          });
        } else {
          setTimeout(() => {
            currentIndex = 0;
            setDisplayText('');
            setTimeout(typingAnimation, 200); // 재시작 간격 최적화
          }, 800);
        }
      };
      
      typingAnimation();
    }, 50); // 초기 지연 최소화

    return () => {
      clearTimeout(initialDelay);
    };
  }, []);

  return (
    <div className="font-korean text-xs font-bold text-sub-point mb-3 tracking-wider h-4 flex items-center justify-center">
      <span className={`transition-opacity duration-300 ${isTyping ? 'opacity-100' : 'opacity-0'}`}>
        {displayText}
      </span>
      <span 
        className="ml-0.5 animate-pulse" 
        style={{ 
          animationDuration: '1s',
          animationTimingFunction: 'ease-in-out'
        }}
      >
        |
      </span>
    </div>
  );
} 