'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef, useEffect, useMemo } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image?: string;
  tech?: string;
  description?: string;
}

const defaultCardContents = [
  {
    title: '시니어내일',
    desc: '시니어를 위한 인재 채용 플랫폼',
    category: 'Frontend Development',
    techStack: ['Next.js', 'TypeScript', 'React Hook Form', 'Tailwind CSS'],
    role: 'Frontend Developer',
    achievements: [
      '복잡한 회원가입 폼 로직 구현',
      '이력서 관리 시스템 개발',
      '반응형 UI/UX 완벽 구현'
    ],
    troubleshooting: {
      problem: '복잡한 다단계 폼 상태 관리의 어려움',
      solution: 'React Hook Form과 TypeScript를 활용한 타입 안전한 폼 상태 관리 시스템 구축'
    },
    img: '/images/senior-tomorrow.jpg',
    period: '2024.09 - 현재',
    status: 'ONGOING PROJECT'
  },
  {
    title: '필로디 (Feelody)',
    desc: 'AI 감정분석 기반 음악추천 다이어리 서비스',
    category: 'Full-Stack Development',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API'],
    role: 'Full-Stack Developer',
    achievements: [
      'AI 감정분석 알고리즘 연동',
      '개인화된 음악 추천 시스템',
      '직관적인 다이어리 UI 설계'
    ],
    troubleshooting: {
      problem: 'AI API 응답 지연으로 인한 사용자 경험 저하',
      solution: '로딩 상태 최적화 및 백그라운드 처리를 통한 체감 속도 50% 개선'
    },
    img: '/images/feelody.jpg',
    period: '2024.07 - 2024.09',
    status: 'COMPLETED'
  },
  {
    title: '대우아이테크 플랫폼',
    desc: '기업용 통합 솔루션 웹사이트',
    category: 'Web Publishing',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'SCSS'],
    role: 'Web Publisher',
    achievements: [
      '웹접근성 인증 AA 등급 획득',
      '모든 브라우저 완벽 호환성',
      '사용자 유입률 35% 증가 기여'
    ],
    troubleshooting: {
      problem: 'IE11 호환성 문제 및 복잡한 레이아웃 깨짐',
      solution: 'CSS Flexbox 대신 Float 기반 레이아웃과 폴리필 적용으로 완벽 호환성 확보'
    },
    img: '/images/daewoo-itech.jpg',
    period: '2023.11 - 2024.02',
    status: 'AWARD WINNING'
  },
  {
    title: '한국보청기 청주점',
    desc: '의료기기 전문 쇼핑몰 및 예약 시스템',
    category: 'E-commerce Development',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    role: 'Frontend Developer & Publisher',
    achievements: [
      '온라인 예약 시스템 구축',
      '제품 상세 페이지 최적화',
      '모바일 전환율 40% 향상'
    ],
    troubleshooting: {
      problem: '복잡한 제품 필터링 기능의 성능 저하',
      solution: 'JavaScript 디바운싱과 가상 스크롤링 적용으로 검색 속도 3배 개선'
    },
    img: '/images/korea-hearing-aid.jpg',
    period: '2023.05 - 2023.08',
    status: 'CLIENT SUCCESS'
  },
  {
    title: '공주교육대학교 부설초등학교',
    desc: '교육기관 공식 웹사이트 리뉴얼',
    category: 'Institutional Website',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap'],
    role: 'Web Publisher & UX Designer',
    achievements: [
      '웹표준 및 웹접근성 완벽 준수',
      '사용자 중심 정보 구조 설계',
      '관리자 편의성 300% 향상'
    ],
    troubleshooting: {
      problem: '다양한 사용자층(학생, 학부모, 교사)의 서로 다른 요구사항',
      solution: '사용자 그룹별 맞춤형 네비게이션과 정보 우선순위 체계 구축'
    },
    img: '/images/gongju-elementary.jpg',
    period: '2022.09 - 2023.01',
    status: 'EXCELLENCE AWARD'
  }
];

const Projects = () => {
  const cardContents = defaultCardContents;
  const CARD_COUNT = cardContents.length;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ 
    target: containerRef, 
    offset: ["start start", "end end"] 
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [vh, setVh] = useState(1000);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setVh(window.innerHeight);
    }
  }, []);

  const transformRanges = useMemo(() => {
    try {
      return cardContents.map((_, i) => {
        const start = i / CARD_COUNT;
        const end = (i + 1) / CARD_COUNT;
        const mid = start + (end - start) * 0.5;
        
        return {
          yRange: [start, end],
          opacityRange: [start, mid, end],
          opacityValues: [1, 1, 0],
          scaleRange: [start, end],
          scaleValues: [1, 0.95],
        };
      });
    } catch (error) {
      console.error('Transform ranges calculation error:', error);
      return [];
    }
  }, [cardContents, CARD_COUNT]);

  // Projects 섹션이 뷰포트에 들어왔는지 감지
  const { ref: inViewRef, inView } = useInView({ threshold: 0.1 });
  const setRefs = (el: HTMLDivElement | null) => {
    if (el) containerRef.current = el;
    inViewRef(el);
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset';
    }
  };

  // 안전성 체크
  if (!cardContents || cardContents.length === 0) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <div className="text-white text-2xl">프로젝트 로딩 중...</div>
      </div>
    );
  }

  return (
    <div ref={setRefs} style={{ height: `${CARD_COUNT * 100}vh`, position: 'relative' }} className="border-b border-black/80">
      <div className="sticky top-0 left-0 w-full h-screen">
        {cardContents.map((card, i) => {
          const ranges = transformRanges[i];
          if (!ranges) return null;

          const { yRange, opacityRange, opacityValues, scaleRange, scaleValues } = ranges;

          const y = useTransform(scrollYProgress, yRange, [0, vh]);
          const opacity = useTransform(scrollYProgress, opacityRange, opacityValues);
          const scale = useTransform(scrollYProgress, scaleRange, scaleValues);

          const zIndex = CARD_COUNT - i;

          return (
            <motion.div
              key={`project-card-${i}`}
              className="absolute top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-black"
              style={{
                zIndex,
                y,
                opacity,
                scale
              }}
            >
              <div className="w-full h-full flex flex-col lg:flex-row">
                <div className="w-full lg:w-[40%] h-[50vh] lg:h-full bg-yellow flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-8 lg:py-16">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4 lg:mb-6">
                    <span className="text-black text-xs sm:text-sm font-medium tracking-wider">
                      {card.category}
                    </span>
                    <span className="px-2 sm:px-3 py-1 bg-black text-yellow text-xs font-bold rounded-full w-fit">
                      {card.status}
                    </span>
                  </div>
                  <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4 leading-tight">
                    {card.title}
                  </h2>
                  <div className="text-black/70 text-sm lg:text-base mb-4 lg:mb-6">
                    {card.period}
                  </div>
                  <div className="w-full h-0.5 bg-black/60 mb-4 lg:mb-6" />
                  <div className="text-black text-base lg:text-lg font-medium mb-6 lg:mb-8">
                    {card.desc}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6 mb-4 lg:mb-6">
                    <div>
                      <h4 className="text-black text-xs lg:text-sm font-semibold mb-2 lg:mb-3 tracking-wider">
                        TECH STACK
                      </h4>
                      <div className="flex flex-wrap gap-1.5 lg:gap-2">
                        {(card.techStack || []).map((tech, idx) => (
                          <span 
                            key={`tech-${i}-${idx}`}
                            className="px-1.5 lg:px-2 py-0.5 lg:py-1 bg-black/10 text-black text-xs rounded border border-black/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-black text-xs lg:text-sm font-semibold mb-2 tracking-wider">
                        MY ROLE
                      </h4>
                      <div className="text-black text-xs lg:text-sm font-medium">
                        {card.role}
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 lg:mb-6">
                    <h4 className="text-black text-xs lg:text-sm font-semibold mb-2 lg:mb-3 tracking-wider">
                      KEY ACHIEVEMENTS
                    </h4>
                    <div className="space-y-1.5 lg:space-y-2">
                      {(card.achievements || []).map((achievement, idx) => (
                        <div key={`achievement-${i}-${idx}`} className="flex items-start text-black text-xs lg:text-sm">
                          <span className="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-black rounded-full mr-2 mt-1.5 lg:mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {card.troubleshooting && (
                    <div className="p-3 lg:p-4 bg-black/10 rounded-lg border border-black/20">
                      <h4 className="text-black text-xs lg:text-sm font-semibold mb-2 tracking-wider">
                        PROBLEM SOLVING
                      </h4>
                      <div className="space-y-2">
                        <div>
                          <span className="text-red-600 text-xs font-medium">CHALLENGE:</span>
                          <p className="text-black/90 text-xs lg:text-sm mt-1 leading-relaxed">{card.troubleshooting.problem}</p>
                        </div>
                        <div>
                          <span className="text-green-600 text-xs font-medium">SOLUTION:</span>
                          <p className="text-black/90 text-xs lg:text-sm mt-1 leading-relaxed">{card.troubleshooting.solution}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full lg:w-[60%] h-[50vh] lg:h-full relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=center" 
                    alt={card.title} 
                    className="w-full h-full object-cover grayscale" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent via-transparent to-black/10" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white p-8 rounded-lg max-w-2xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <button 
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-black text-white rounded"
            >
              닫기
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;