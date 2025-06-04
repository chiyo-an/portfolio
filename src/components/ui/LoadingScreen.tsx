'use client';

import { useEffect, useState, useRef } from 'react';
import ProgressBar from './loading/ProgressBar';
import LoadingText from './loading/LoadingText';
import LoadingBackground from './loading/LoadingBackground';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    // 컴포넌트가 완전히 마운트된 후 애니메이션 시작
    const readyTimeout = setTimeout(() => {
      setIsReady(true);
    }, 100);

    return () => clearTimeout(readyTimeout);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const duration = 1200; // 약간 더 길게 설정하여 부드러운 진행
    const startTime = performance.now();

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progressPercent = Math.min((elapsed / duration) * 100, 100);

      setProgress(progressPercent);

      if (progressPercent < 100) {
        animationRef.current = requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            onLoadingComplete();
          }, 600); // 페이드아웃 시간 단축
        }, 300); // 완료 후 대기 시간 단축
      }
    };

    animationRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isReady, onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-primary transition-opacity duration-600 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${isReady ? 'will-change-auto' : 'will-change-opacity'}`}
      style={{
        // 하드웨어 가속 활성화로 부드러운 애니메이션
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    >
      <div className="text-center">
        <LoadingText />
        <ProgressBar progress={progress} />
      </div>

      <LoadingBackground />
    </div>
  );
} 