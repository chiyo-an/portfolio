'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import LoadingScreen from '@/components/ui/LoadingScreen';

interface ClientLayoutProps {
  children: React.ReactNode;
}

interface LoadingContextType {
  isLoadingComplete: boolean;
}

const LoadingContext = createContext<LoadingContextType>({ isLoadingComplete: false });

export const useLoadingContext = () => useContext(LoadingContext);

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // 로딩 화면이 사라진 직후 즉시 콘텐츠 표시하여 부드러운 전환
    requestAnimationFrame(() => {
      setShowContent(true);
      requestAnimationFrame(() => {
        setIsLoadingComplete(true);
      });
    });
  };

  useEffect(() => {
    const minLoadingTime = setTimeout(() => {
      if (document.readyState === 'complete') {
        return;
      }
    }, 2000);

    const handleLoad = () => {
      clearTimeout(minLoadingTime);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(minLoadingTime);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoadingComplete }}>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <div 
        className={`transition-opacity duration-400 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          willChange: showContent ? 'auto' : 'opacity',
          transform: 'translateZ(0)', // 하드웨어 가속
          backfaceVisibility: 'hidden'
        }}
      >
        {children}
      </div>
    </LoadingContext.Provider>
  );
} 