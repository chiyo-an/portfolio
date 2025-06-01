'use client';

import { useState } from 'react';
import { Copy, Check, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

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
    <div ref={ref} className="min-h-screen bg-yellow relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-10">
        {[0, 16.67, 33.33, 50, 66.67, 83.33, 100].map((position, index) => (
          <motion.div
            key={index}
            className="absolute top-0 bottom-0 w-px bg-black opacity-30"
            style={{ 
              left: `${position}%`,
              transformOrigin: "top"
            }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.12,
              ease: [0.4, 0.0, 0.2, 1]
            }}
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-8 z-20">
        <button className="bg-black text-yellow px-6 py-3 text-sm font-medium hover:bg-gray-900 transition-colors tracking-wider uppercase">
          Contact Me
        </button>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-between p-12">
        <div className="pt-20 flex justify-between items-start">
          <div className="text-black text-sm font-medium tracking-wider uppercase">
            FRONTEND DEVELOPER
          </div>
          <div className="text-black text-sm font-medium">
            2025 ©
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.4, 0.0, 0.2, 1] }}
              className="font-serif text-black leading-none font-normal"
              style={{ 
                fontSize: 'clamp(8rem, 20vw, 16rem)',
                fontStyle: 'italic',
                letterSpacing: '-3px'
              }}
            >
              An<br />
              <span className="font-display font-bold" style={{ fontStyle: 'normal', display: 'inline-block', letterSpacing: '-1px' }}>
                {['J','E','O','N','G',' ','E','U','N'].map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 60 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                    transition={{ duration: 0.7, delay: 0.4 + i * 0.07, ease: [0.4, 0.0, 0.2, 1] }}
                    style={{ display: 'inline-block' }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 1.1, delay: 0.7, ease: [0.4, 0.0, 0.2, 1] }}
              className="font-display text-black font-bold mt-4"
              style={{ 
                fontSize: 'clamp(2rem, 8vw, 4rem)',
                letterSpacing: '-1px'
              }}
            >
              PORTFOLIO
            </motion.div>
          </div>
        </div>

        <div className="pb-16">
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-4">
              <div className="mb-4">
                <div className="text-black text-xs font-medium tracking-wider uppercase mb-2">
                  INTRODUCTION
                </div>
                <p className="font-bold text-black text-sm leading-relaxed">
                  100여 개의 웹사이트 구축 경험을 통해 쌓은<br />
                  퍼블리싱 노하우와 프론트엔드 개발 역량을<br />
                  결합해 픽셀 퍼펙트한 웹을 만듭니다.
                </p>
              </div>

              <div className="flex items-center gap-2">
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
            </div>

            <div className="col-span-4 flex justify-center">
              <div className="text-center">
                <div className="mb-8">
                  <motion.div
                    className="w-8 h-8 border border-black rounded-full flex items-center justify-center mx-auto bg-black mb-8"
                    animate={{ y: [0, 16, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ArrowDown className="w-4 h-4 text-yellow" />
                  </motion.div>
                </div>
                <div className="text-black text-xs font-medium tracking-wider uppercase">
                  SCROLL DOWN
                </div>
              </div>
            </div>

            <div className="col-span-4"></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;