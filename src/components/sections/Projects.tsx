'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Project {
  id: number;
  title: string;
  tech: string[];
  role: string;
  description: string;
  image: string;
  imageColor: string;
}

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "시니어내일",
      tech: ["Next.js", "TypeScript", "React Query", "Tailwind CSS"],
      role: "Frontend",
      description: "Modern e-commerce platform with seamless user experience and responsive design implementation.",
      image: "/images/portfolio/work01.gif",
      imageColor: "/images/portfolio/work01.gif"
    },
    {
      id: 2,
      title: "필로디 Feelody",
      tech: ["React", "TypeScript", "Zustand", "Tailwind CSS"],
      role: "Frontend",
      description: "Creative portfolio website with advanced animations and interactive elements for enhanced user engagement.",
      image: "/images/portfolio/work03.gif",
      imageColor: "/images/portfolio/work03.gif"
    },
    {
      id: 3,
      title: "개인 포트폴리오 웹사이트",
      tech: ["Next.js", "TypeScript", "framer-motion", "Tailwind CSS"],
      role: "UI/UX & Frontend",
      description: "디자인과 개발의 조화를 추구하며, 창의적인 애니메이션과 인터랙티브 요소로 사용자 경험을 극대화한 개인의 개발 여정을 담은 포트폴리오 웹사이트",
      image: "/images/portfolio/work02.gif",
      imageColor: "/images/portfolio/work02.gif"
    }
  ];

  return (
    <div id="projects" ref={ref} className="min-h-screen lg:h-screen w-screen bg-primary overflow-hidden">
      <div className="w-full h-full pl-8 pr-8 md:pl-8 md:pr-10 py-4 md:py-[5vh] flex flex-col">
        <div className="flex-1 flex flex-col justify-center">
          <div className="w-full mb-4 md:mb-[5vh] mt-4 md:mt-[6vh]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2vh] w-full">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 80 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
                  transition={{ 
                    duration: 0.9, 
                    delay: index * 0.15,
                    ease: [0.4, 0.0, 0.2, 1] 
                  }}
                  className="relative group cursor-pointer w-full"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onTouchStart={() => setHoveredProject(project.id)}
                  onTouchEnd={() => setHoveredProject(null)}
                >
                  <div className="relative overflow-hidden mb-[3vh] w-full">
                    <motion.div
                      className="w-full relative aspect-[4/2.8] sm:aspect-[16/9.5]"
                      style={{ maxHeight: 'calc(100% - 10px)' }}
                      animate={{
                        scale: hoveredProject === project.id ? 1.08 : 1,
                      }}
                      transition={{ 
                        duration: 0.6, 
                        ease: [0.25, 0.46, 0.45, 0.94] 
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        style={{
                          filter: hoveredProject === project.id ? 'grayscale(0%) contrast(1.1)' : 'grayscale(100%) contrast(0.8)',
                          transition: 'filter 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                        }}
                      />
                      <div 
                        className="absolute inset-0"
                        style={{
                          background: hoveredProject === project.id 
                            ? 'rgba(0, 0, 0, 0.05)' 
                            : 'rgba(0, 0, 0, 0.15)',
                          transition: 'background 0.6s ease'
                        }}
                      />
                    </motion.div>

                    <div className="absolute top-[1vh] right-[1vh] z-20">
                      <span className="bg-sub-point text-black font-bold px-[1vw] py-[0.5vh] rounded-full tracking-wider uppercase shadow-lg text-[1.2vh]">
                        {project.role}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-[1.5vh] px-[0.5vw]">
                    <h3 className="font-english text-black font-bold text-[2vh] tracking-tight leading-tight" style={{ wordBreak: 'keep-all' }}>
                      {project.title.toUpperCase()}
                    </h3>
                    <div className="flex flex-wrap gap-[0.5vh]">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="font-semibold text-black/60 bg-black/8 px-[1vw] py-[0.5vh] tracking-wider uppercase text-[1.2vh]"
                          style={{ 
                            letterSpacing: '0.5px',
                            wordBreak: 'keep-all'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-[1.8vh] text-black/75 leading-relaxed font-medium" style={{ wordBreak: 'keep-all' }}>
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-row items-baseline gap-[2vh] flex-wrap">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ 
                duration: 1.2,
                delay: 0.6,
                ease: [0.4, 0.0, 0.2, 1] 
              }}
              className="font-serif text-black leading-none font-normal mobile-section-title whitespace-nowrap"
              style={{ 
                fontSize: 'clamp(2rem, 8vw, 12rem)',
                fontStyle: 'italic',
                letterSpacing: 'clamp(-2px, -0.5vw, -4px)',
                lineHeight: '1.1'
              }}
            >
              Recent
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ 
                duration: 1.2,
                delay: 0.8,
                ease: [0.4, 0.0, 0.2, 1] 
              }}
              className="font-display text-black font-bold mobile-section-title whitespace-nowrap"
              style={{ 
                fontSize: 'clamp(1.8rem, 7.5vw, 11rem)',
                letterSpacing: 'clamp(-2px, -0.5vw, -4px)',
                fontStyle: 'normal',
                lineHeight: '1.1'
              }}
            >
              WORK
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;