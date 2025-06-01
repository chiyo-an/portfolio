'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutJourney = () => {
  // 각 섹션별로 개별 ref 설정
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
    <section className="relative min-h-screen bg-[url('/images/project-img.jpg')] bg-cover bg-center bg-fixed py-32">
      <div className="absolute inset-0 bg-yellow opacity-90 pointer-events-none z-0" />
      <div className="relative z-10">
        <div className="pt-20 pb-16 px-12" ref={headerRef}>
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-black text-xs font-medium tracking-wider uppercase mb-6"
            >
              WHO I AM & MY STORY
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-black mb-4"
              style={{ 
                fontSize: 'clamp(3rem, 10vw, 6rem)',
                fontStyle: 'italic',
                letterSpacing: '-2px',
                lineHeight: '1.1'
              }}
            >
              About Me &<br />
              <span className="font-display font-bold" style={{ fontStyle: 'normal' }}>
                MY JOURNEY
              </span>
            </motion.h2>
          </div>
        </div>
        <div className="px-12 pb-20" ref={introRef}>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={introInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-black text-yellow p-12 mb-20"
            >
              <div className="space-y-6 text-sm leading-relaxed whitespace-pre-wrap break-keep">
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
        <div className="px-12 pb-32" ref={timelineRef}>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center mb-16"
            >
              <h3 className="font-serif text-black text-4xl font-bold mb-4" style={{ letterSpacing: '-1px' }}>
                Evolution Timeline
              </h3>
              <p className="text-black text-lg opacity-80">
                From design thinking to development mastery
              </p>
            </motion.div>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-black opacity-20 transform -translate-x-1/2" />
              <motion.div
                initial={{ scaleY: 0 }}
                animate={timelineInView ? { scaleY: 1 } : {}}
                transition={{ duration: 2, delay: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
                className="absolute left-1/2 top-0 bottom-0 w-1 bg-black transform -translate-x-1/2 origin-top"
              />
              <div className="space-y-20">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, x: event.side === 'left' ? -60 : 60 }}
                    animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.7 + index * 0.3,
                      ease: [0.4, 0.0, 0.2, 1]
                    }}
                    className={`relative flex items-center ${
                      event.side === 'left' ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={timelineInView ? { scale: 1 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.9 + index * 0.3,
                        ease: [0.4, 0.0, 0.2, 1]
                      }}
                      className="absolute left-1/2 w-6 h-6 bg-black rounded-full transform -translate-x-1/2 z-10"
                    />
                    <div className={`w-5/12 ${event.side === 'left' ? 'pr-12' : 'pl-12'}`}>
                      <div className="bg-black text-yellow p-6 group hover:scale-105 transition-transform duration-300">
                        <div className="text-xs font-medium uppercase tracking-wider mb-2 opacity-70">
                          {event.year}
                        </div>
                        <h4 className="font-display text-xl font-bold mb-3">
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
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJourney;