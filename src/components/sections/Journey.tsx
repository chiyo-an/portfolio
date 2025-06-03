'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutJourney = () => {
  const [headerRef, headerInView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const [introRef, introInView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const [timelineRef, timelineInView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const timelineEvents = [
    {
      year: '2019',
      title: 'Design Foundation',
      description: 'UI/UX 디자인의 기초를 다지며 사용자 중심 사고의 출발점',
      side: 'left'
    },
    {
      year: '2020-2023',
      title: 'Publishing Mastery',
      description: '100+ 웹사이트 구축하며 웹표준과 접근성 전문성 확보',
      side: 'right'
    },
    {
      year: '2024',
      title: 'Developer Transition',
      description: 'React & TypeScript 도입, 인터랙션의 본질 탐구 시작',
      side: 'left'
    },
    {
      year: 'NOW',
      title: 'Frontend Specialist',
      description: '디자인과 코드의 완벽한 조화를 추구하는 개발자',
      side: 'right'
    }
  ];

  return (
    <section id="journey" className="relative min-h-screen w-screen bg-[url('/images/project-img.jpg')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-primary opacity-90 pointer-events-none z-0" />
      <div className="relative z-10 h-full w-full">
        <div className="pt-20 md:pt-24 pb-4 md:pb-[6vh] px-4 md:px-[5vw]" ref={headerRef}>
          <div className="max-w-[90vw] md:max-w-[80vw] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-black text-xs md:text-[1.5vh] font-medium tracking-wider uppercase mb-2 md:mb-[2vh]"
            >
              WHO I AM & MY STORY
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-black mb-2 md:mb-[2vh] mobile-journey-title"
              style={{ 
                fontSize: 'clamp(1.8rem, 6vw, 5rem)',
                fontStyle: 'italic',
                letterSpacing: '-2px',
                lineHeight: '1.15'
              }}
            >
              About Me &<br />
              <span className="font-display font-bold" style={{ fontStyle: 'normal' }}>
                MY JOURNEY
              </span>
            </motion.h2>
          </div>
        </div>
        <div className="px-4 md:px-[5vw] pb-4 md:pb-[6vh]" ref={introRef}>
          <div className="max-w-[95vw] md:max-w-[60vw] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={introInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-black text-primary p-[4vh] mb-[6vh]"
            >
              <div className="space-y-[2vh] text-[1.6vh] leading-relaxed whitespace-pre-wrap break-keep">
                <p>
                  퍼블리셔 경험을 바탕으로 사용자 중심 디자인의 본질을 체득하고, 디자인의 감성과 코드의 논리를 연결하는 개발자입니다. 
                  디자인과 마크업을 구현하던 중 "왜 이 인터랙션은 이렇게만 구현해야 하는가?"라는 질문이 프론트엔드 개발자로 전향하게 된 계기가 되었고, 
                  이는 자연스럽게 React와 TypeScript 학습으로 이어졌습니다.
                </p>
                <p>
                  이제는 단순히 시각적으로 보이는 부분을 넘어, 사용자 경험의 핵심을 지탱하는 로직과 데이터 흐름을 설계합니다. 
                  퍼블리셔로서 쌓은 웹 표준과 접근성에 대한 이해를 바탕으로 모든 사용자가 편리하게 사용할 수 있는 견고한 컴포넌트를 구현하고, 
                  개발자로서 재사용성과 확장성을 고려한 구조적 설계에 강점이 있습니다.
                </p>
                <p>
                  디자인 시스템의 가치를 깊이 이해하며, 디자인과 개발 사이의 간극을 메우는 일관된 사용자 경험을 코드로 구현합니다. 
                  이러한 배경을 통해 다양한 직군 사이에서 소통 가교 역할을 해왔으며, 기술 트렌드를 따라가면서도 본질적인 사용자 경험 가치를 놓치지 않는 
                  균형 잡힌 프론트엔드 개발자로 성장하고 있습니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="px-4 md:px-[5vw] pb-8 md:pb-16 lg:pb-20" ref={timelineRef}>
          <div className="max-w-[95vw] md:max-w-[60vw] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center mb-[4vh]"
            >
              <h3 className="font-serif text-black text-[3vh] font-bold mb-[1vh]" style={{ letterSpacing: '-1px' }}>
                Evolution Timeline
              </h3>
              <p className="text-black text-[1.8vh] opacity-80">
                From design thinking to development mastery
              </p>
            </motion.div>
            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-sub-point opacity-20 transform -translate-y-1/2" />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={timelineInView ? { scaleX: 1 } : {}}
                transition={{ duration: 2, delay: 2.2, ease: [0.4, 0.0, 0.2, 1] }}
                className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-sub-point transform -translate-y-1/2 origin-left"
              />
              <div className="hidden lg:grid lg:grid-cols-4 gap-6 xl:gap-8 relative">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, y: 60 }}
                    animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.7 + index * 0.2,
                      ease: [0.4, 0.0, 0.2, 1]
                    }}
                    className="relative"
                  >
                    <div className={`${index % 2 === 0 ? 'mb-8 xl:mb-10' : 'mt-8 xl:mt-10'}`}>
                      <div className="bg-black text-primary p-4 xl:p-5 group hover:scale-105 transition-transform duration-300">
                        <div className="text-xs font-medium uppercase tracking-wider mb-2 opacity-70">
                          {event.year}
                        </div>
                        <h4 className="font-serif text-sm xl:text-base font-bold mb-3">
                          {event.title}
                        </h4>
                        <p className="text-xs xl:text-sm leading-relaxed opacity-90 break-keep">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-8 relative">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, y: 40 }}
                    animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.7 + index * 0.15,
                      ease: [0.4, 0.0, 0.2, 1]
                    }}
                    className="relative"
                  >
                    <div className={`${Math.floor(index / 2) % 2 === 0 ? 'mb-8' : 'mt-8'}`}>
                      <div className="bg-black text-primary p-5 group hover:scale-105 transition-transform duration-300">
                        <div className="text-sm font-medium uppercase tracking-wider mb-3 opacity-70">
                          {event.year}
                        </div>
                        <h4 className="font-serif text-lg font-bold mb-4">
                          {event.title}
                        </h4>
                        <p className="text-sm leading-relaxed opacity-90 break-keep">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="md:hidden space-y-6">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, x: -30 }}
                    animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.7 + index * 0.15,
                      ease: [0.4, 0.0, 0.2, 1]
                    }}
                    className="relative"
                  >
                    <div className="max-w-[85vw] mx-auto">
                      <div className="bg-black text-primary p-[2.5vh] group hover:scale-105 transition-transform duration-300">
                        <div className="text-[1.3vh] font-medium uppercase tracking-wider mb-[0.8vh] opacity-70">
                          {event.year}
                        </div>
                        <h4 className="font-serif text-[2.2vh] font-bold mb-[1.2vh]">
                          {event.title}
                        </h4>
                        <p className="text-[1.6vh] leading-relaxed opacity-90 break-keep">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute rounded-full"
          style={{
            width: 'clamp(2.2rem, 5vw, 8rem)',
            height: 'clamp(2.2rem, 5vw, 8rem)',
            top: '15%',
            left: '8%',
            background: 'transparent',
            backdropFilter: 'blur(3px)'
          }}
        />
        <div 
          className="absolute rounded-full"
          style={{
            width: 'clamp(1.8rem, 4vw, 6rem)',
            height: 'clamp(1.8rem, 4vw, 6rem)',
            top: '70%',
            right: '12%',
            background: 'transparent',
            backdropFilter: 'blur(4px)'
          }}
        />
        <div 
          className="absolute rounded-full"
          style={{
            width: 'clamp(2.5rem, 6vw, 10rem)',
            height: 'clamp(2.5rem, 6vw, 10rem)',
            bottom: '20%',
            left: '15%',
            background: 'transparent',
            backdropFilter: 'blur(2px)'
          }}
        />
      </div>
    </section>
  );
};

export default AboutJourney;