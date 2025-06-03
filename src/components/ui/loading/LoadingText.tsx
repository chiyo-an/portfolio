'use client';

import { useEffect, useState } from 'react';

export default function LoadingText() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'LOADING...';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setTimeout(() => {
          currentIndex = 0;
          setDisplayText('');
        }, 1000);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <p className="font-korean text-xs font-bold text-sub-point mb-3 tracking-wider h-4">
      {displayText}
      <span className="animate-pulse">|</span>
    </p>
  );
} 