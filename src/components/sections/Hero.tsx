'use client';

import { useState } from 'react';
import { Copy, Check, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLoadingContext } from '@/components/layout/ClientLayout';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });
  const { isLoadingComplete } = useLoadingContext();

  const shouldAnimate = isLoadingComplete && inView;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('chiyoawesome@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('복사 실패:', err);
    }
  };

  return (
    <div id="hero" ref={ref} className="min-h-screen lg:h-screen w-screen bg-primary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-10">
        {[0, 25, 50, 75, 100].map((position, index) => (
          <motion.div
            key={index}
            className="absolute top-0 bottom-0 w-px bg-black opacity-15 hidden md:block"
            style={{ 
              left: `${position}%`,
              transformOrigin: "top"
            }}
            initial={{ scaleY: 0 }}
            animate={shouldAnimate ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.12,
              ease: [0.4, 0.0, 0.2, 1]
            }}
          />
        ))}
        {[0, 33.33, 66.66, 100].map((position, index) => (
          <motion.div
            key={`mobile-${index}`}
            className="absolute top-0 bottom-0 w-px bg-black opacity-20 md:hidden"
            style={{ 
              left: `${position}%`,
              transformOrigin: "top"
            }}
            initial={{ scaleY: 0 }}
            animate={shouldAnimate ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.12,
              ease: [0.4, 0.0, 0.2, 1]
            }}
          />
        ))}
      </div>

      <div className="relative z-10 h-full w-full flex flex-col justify-between 
                      px-8 md:px-8 
                      pt-20 md:pt-24 pb-8 md:pb-12 mobile-hero-content">
        
        <div className="flex justify-between items-center mb-4 md:mb-0">
          <div className="text-black text-xs font-normal tracking-wider uppercase">
            FRONTEND DEVELOPER 
          </div>
          <div className="text-black text-lg md:text-xl font-bold mr-2">
            ©2025
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center 
                        py-4 md:py-0 
                        min-h-[45vh] md:min-h-0">
          <div className="text-center w-full px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 60 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.4, 0.0, 0.2, 1] }}
              className="font-serif text-black leading-relaxed font-normal mobile-hero-title"
              style={{ 
                fontSize: 'clamp(2.2rem, 8vw, 15rem)',
                fontStyle: 'italic',
                letterSpacing: '-3px',
                wordBreak: 'keep-all',
                lineHeight: '1.2'
              }}
            >
              <motion.span 
                initial={{ opacity: 0, y: 60 }}
                animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 1.1, delay: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
                className="relative inline-block mobile-hero-name"
                style={{ 
                  transform: 'translateY(-2px)',
                  fontSize: 'clamp(2.6rem, 9vw, 17rem)',
                  fontWeight: 800
                }}
              >
                An
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.8, delay: 1.0, ease: [0.4, 0.0, 0.2, 1] }}
                  className="absolute rounded-full z-10 hero-blur-minimal"
                  style={{ 
                    width: 'clamp(4.4rem, 8vw, 15rem)',
                    height: 'clamp(4.4rem, 8vw, 15rem)',
                    top: 'clamp(-2.2rem, -4vw, -7.5rem)',
                    right: 'clamp(-2.2rem, -4vw, -7.5rem)',
                    transform: 'translate(30%, 20%)',
                    background: 'transparent',
                    backdropFilter: 'blur(6px)'
                  }}
                />
              </motion.span>
              <div style={{ height: '0.05em' }} />
              <motion.span 
                initial={{ opacity: 0, y: 60 }}
                animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 1.1, delay: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                className="font-display font-bold relative inline-block mobile-hero-name" 
                style={{ fontStyle: 'normal', letterSpacing: '-3px' }}
              >
                JEONG EUN
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.8, delay: 1.1, ease: [0.4, 0.0, 0.2, 1] }}
                  className="absolute rounded-full z-20 hero-blur-accent"
                  style={{ 
                    width: 'clamp(5.9rem, 10vw, 19rem)',
                    height: 'clamp(5.9rem, 10vw, 19rem)',
                    top: 'clamp(-2.9rem, -5vw, -11rem)',
                    left: 'clamp(-3.7rem, -6.5vw, -13rem)',
                    transform: 'translate(20%, 30%)',
                    background: 'transparent',
                    backdropFilter: 'blur(5px)'
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: [0.4, 0.0, 0.2, 1] }}
                  className="absolute rounded-full z-10"
                  style={{ 
                    width: 'clamp(3.7rem, 6.5vw, 13rem)',
                    height: 'clamp(3.7rem, 6.5vw, 13rem)',
                    top: 'clamp(1.1rem, 2vw, 4rem)',
                    left: 'clamp(0rem, 0.8vw, 1.5rem)',
                    transform: 'translate(-10%, -20%)',
                    background: 'transparent',
                    backdropFilter: 'blur(7px)'
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.8, delay: 1.3, ease: [0.4, 0.0, 0.2, 1] }}
                  className="absolute rounded-full z-20"
                  style={{ 
                    width: 'clamp(3.3rem, 5.5vw, 11rem)',
                    height: 'clamp(3.3rem, 5.5vw, 11rem)',
                    top: 'clamp(-1.5rem, -3vw, -6rem)',
                    left: '38%',
                    transform: 'translate(-50%, -20%)',
                    background: 'transparent',
                    backdropFilter: 'blur(6px)'
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.8, delay: 1.4, ease: [0.4, 0.0, 0.2, 1] }}
                  className="absolute rounded-full z-10"
                  style={{ 
                    width: 'clamp(3.3rem, 5.5vw, 11rem)',
                    height: 'clamp(3.3rem, 5.5vw, 11rem)',
                    top: 'clamp(2.9rem, 3.5vw, 6rem)',
                    left: '70%',
                    transform: 'translate(-50%, 10%)',
                    background: 'transparent',
                    backdropFilter: 'blur(8px)'
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.8, delay: 1.5, ease: [0.4, 0.0, 0.2, 1] }}
                  className="absolute rounded-full z-20 hero-blur-accent"
                  style={{ 
                    width: 'clamp(6.6rem, 11vw, 22rem)',
                    height: 'clamp(6.6rem, 11vw, 22rem)',
                    top: 'clamp(-4.4rem, -7.5vw, -15rem)',
                    right: 'clamp(-4.4rem, -7.5vw, -15rem)',
                    transform: 'translate(40%, 50%)',
                    background: 'transparent',
                    backdropFilter: 'blur(4px)'
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.8, delay: 1.6, ease: [0.4, 0.0, 0.2, 1] }}
                  className="absolute rounded-full z-10"
                  style={{ 
                    width: 'clamp(2.2rem, 3.5vw, 7rem)',
                    height: 'clamp(2.2rem, 3.5vw, 7rem)',
                    top: 'clamp(0.6rem, 1.2vw, 2rem)',
                    left: '20%',
                    transform: 'translate(0%, 50%)',
                    background: 'transparent',
                    backdropFilter: 'blur(5px)'
                  }}
                />
              </motion.span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 1.1, delay: 0.7, ease: [0.4, 0.0, 0.2, 1] }}
              className="font-display text-black font-bold mt-6 mobile-hero-subtitle"
              style={{ 
                fontSize: 'clamp(1rem, 3vw, 3.5rem)',
                letterSpacing: '-1px'
              }}
            >
              PORTFOLIO
            </motion.div>
          </div>
        </div>

        <div className="space-y-4 px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="mb-3 md:mb-4">
              <div className="text-black text-sm font-bold tracking-wider uppercase mb-2">
                INTRODUCTION
              </div>
              <p className="font-bold text-black text-xs leading-relaxed 
                           max-w-[320px] mx-auto md:mx-0 md:text-left" 
                style={{ wordBreak: 'keep-all' }}>
                100여 개의 웹사이트 구축 경험을 통해 쌓은 퍼블리싱 노하우와 프론트엔드 개발 역량을 결합해 픽셀 퍼펙트한 웹을 만듭니다.
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <span className="text-black text-xs font-medium">chiyoawesome@gmail.com</span>
              <button 
                onClick={copyEmail}
                className="flex items-center justify-center w-5 h-5 hover:bg-black/10 rounded transition-colors duration-200"
                title="이메일 주소 복사"
              >
                {copied ? (
                  <Check className="w-3 h-3 text-black" />
                ) : (
                  <Copy className="w-3 h-3 text-black/70 hover:text-black transition-colors" />
                )}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center mobile-scroll-indicator"
          >
            <div className="text-center">
              <motion.div
                className="w-8 h-8 border border-black rounded-full flex items-center justify-center mx-auto bg-black mb-3"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowDown className="w-4 h-4 text-primary" />
              </motion.div>
              <div className="text-black text-xs font-medium tracking-wider uppercase">
                SCROLL DOWN
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;