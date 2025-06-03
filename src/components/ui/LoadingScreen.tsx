'use client';

import { useEffect, useState } from 'react';
import ProgressBar from './loading/ProgressBar';
import LoadingText from './loading/LoadingText';
import LoadingBackground from './loading/LoadingBackground';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1000; 
    const intervalTime = 20;
    const increment = 100 / (duration / intervalTime);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              onLoadingComplete();
            }, 800);
          }, 200);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, intervalTime);

    return () => clearInterval(progressInterval);
  }, [onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-primary transition-opacity duration-800 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center">
        <LoadingText />
        <ProgressBar progress={progress} />
      </div>

      <LoadingBackground />
    </div>
  );
} 