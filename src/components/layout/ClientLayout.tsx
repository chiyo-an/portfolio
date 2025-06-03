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
    // 로딩 화면이 사라진 후 컨텐츠 표시
    setTimeout(() => {
      setShowContent(true);
      // 컨텐츠가 나타난 후 애니메이션 시작 허용
      setTimeout(() => {
        setIsLoadingComplete(true);
      }, 100);
    }, 100);
  };

  // 페이지 리소스가 로드되었는지 확인
  useEffect(() => {
    // 최소 로딩 시간 보장 (2초)
    const minLoadingTime = setTimeout(() => {
      if (document.readyState === 'complete') {
        // 이미 로드 완료된 경우 바로 처리
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
        className={`transition-opacity duration-500 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {children}
      </div>
    </LoadingContext.Provider>
  );
} 