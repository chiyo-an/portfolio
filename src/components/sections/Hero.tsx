'use client';

import { useState } from 'react';

const Hero = () => {
  const [copied, setCopied] = useState(false);

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
    <div className="min-h-screen p-4 pt-20 bg-off-white">
      <div className="bg-off-white min-h-[calc(100vh-6rem)] p-20 relative overflow-hidden">
        <section id="home" className="h-full flex flex-col">
          <div className="flex-1 flex items-center">
            <div className="w-full">
              <h1 className="font-display text-coral leading-none" style={{ fontSize: 'clamp(4rem, 15vw, 10rem)', fontWeight: '900' }}>
                <span style={{ fontSize: 'clamp(4rem, 15vw, 14rem)' }}>AN</span><br />JEONG EUN®__
              </h1>
            </div>
          </div>

          <div className="absolute left-8 bottom-32 flex items-center gap-1">
            <span className="font-display text-pure-black text-2xl tracking-normal">chiyoawesome@gmail.com</span>
            <button 
              onClick={copyEmail}
              className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded transition-colors duration-200 group"
              title="이메일 주소 복사"
            >
              {copied ? (
                <svg className="w-8 h-8 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>

          <div className="absolute bottom-8 right-8 max-w-2xl text-right">
            <p className="text-pure-black text-xl font-semibold leading-7 tracking-wide">
              100+여 개의 웹사이트 구축 경험을 통해 쌓은 퍼블리싱 노하우와 <br />프론트엔드 개발 역량을 결합해 픽셀 퍼펙트한 웹을 만듭니다.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;