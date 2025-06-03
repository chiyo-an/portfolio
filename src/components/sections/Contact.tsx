'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Ticker from '@/components/ui/Ticker';
import { useState } from 'react';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" ref={ref} className="relative min-h-screen lg:h-screen w-screen bg-primary flex flex-col border-t border-black/50">
      <div className="absolute inset-0 pointer-events-none z-10">
        {[0, 25, 50, 75, 100].map((position, index) => (
          <motion.div
            key={index}
            className="absolute top-0 bottom-0 w-px bg-black opacity-15 hidden md:block"
            style={{ left: `${position}%`, transformOrigin: 'top' }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
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
            style={{ left: `${position}%`, transformOrigin: 'top' }}
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
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute rounded-full"
          style={{
            width: 'clamp(2.5rem, 6vw, 10rem)',
            height: 'clamp(2.5rem, 6vw, 10rem)',
            top: '8%',
            left: '10%',
            background: 'transparent',
            backdropFilter: 'blur(3px)'
          }}
        />
        <div 
          className="absolute rounded-full"
          style={{
            width: 'clamp(1.8rem, 4vw, 7rem)',
            height: 'clamp(1.8rem, 4vw, 7rem)',
            bottom: '25%',
            right: '15%',
            background: 'transparent',
            backdropFilter: 'blur(4px)'
          }}
        />
        <div 
          className="absolute rounded-full"
          style={{
            width: 'clamp(2rem, 5vw, 8rem)',
            height: 'clamp(2rem, 5vw, 8rem)',
            top: '50%',
            left: '5%',
            background: 'transparent',
            backdropFilter: 'blur(2px)'
          }}
        />
      </div>
      <Ticker />
      <div className="flex-1 flex flex-col">
        <div className="pt-10 md:pt-[8vh] lg:pt-[10vh] px-4 md:px-[5vw] relative z-10">
          <div className="max-w-[90vw] md:max-w-[80vw] mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.4, 0.0, 0.2, 1] }}
              className="font-serif text-black leading-none font-normal mobile-contact-title"
              style={{ 
                fontSize: 'clamp(1.6rem, 5vw, 4rem)',
                fontStyle: 'italic',
                letterSpacing: '-3px',
                lineHeight: '1.15'
              }}
            >
              Looking for<br />
              <span className="font-display font-bold mt-2 md:mt-4" style={{ fontStyle: 'normal', display: 'inline-block', letterSpacing: '-1px' }}>
                {['N','e','w',' ','O','p','p','o','r','t','u','n','i','t','i','e','s'].map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 60 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.4 + i * 0.05, ease: [0.4, 0.0, 0.2, 1] }}
                    style={{ display: 'inline-block' }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center px-4 md:px-[5vw] relative z-10">
          <div className="max-w-[90vw] md:max-w-[70vw] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-[4vh]"
            >
              <h2 className="text-black text-[1.8vh] font-medium">
              Stay In The Know
              </h2>
            </motion.div>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-[2vh] mb-[3vh]"
            >
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter name"
                  className="w-full bg-transparent border-0 border-b-7 border-black text-black py-[2vh] px-0 text-[2.5vh] focus:outline-none focus:border-black placeholder:text-black/50 placeholder:font-light placeholder:text-[1.8vh]"
                  style={{ fontFamily: 'inherit' }}
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email"
                  className="w-full bg-transparent border-0 border-b-7 border-black text-black py-[2vh] px-0 text-[2.5vh] focus:outline-none focus:border-black placeholder:text-black/50 placeholder:font-light placeholder:text-[1.8vh]"
                  style={{ fontFamily: 'inherit' }}
                />
              </div>
              <div className="pt-[2vh]">
                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    default: { type: "spring", stiffness: 400, damping: 25 },
                    opacity: { duration: 0.6, delay: 0.7 },
                    y: { duration: 0.6, delay: 0.7 }
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
                  }}
                  whileTap={{ 
                    scale: 0.98
                  }}
                  className="w-full bg-black text-primary py-[2vh] font-english font-bold uppercase tracking-wider text-[2vh] hover:bg-black/90 transition-colors duration-100 cursor-pointer"
                >
                  Send Message
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
        <div className="px-0 relative z-10 pb-4 md:pb-[4vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="w-full"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 text-black gap-6 md:gap-0">
              <div className="text-center px-[3vw]">
                <div className="text-[1.5vh] font-extrabold uppercase tracking-wider mb-[1vh] opacity-70" style={{ fontWeight: 900 }}>
                  ADDRESS
                </div>
                <div className="text-[1.2vh] leading-relaxed whitespace-pre-wrap break-keep">
                  Songdo International City<br />
                  Yeonsu-gu, Incheon<br />
                  South Korea
                </div>
              </div>
              <div className="text-center px-[3vw]">
                <div className="text-[1.5vh] font-extrabold uppercase tracking-wider mb-[1vh] opacity-70" style={{ fontWeight: 900 }}>
                  CONTACT
                </div>
                <div className="text-[1.2vh] leading-relaxed whitespace-pre-wrap break-keep">
                  chiyoawesome@gmail.com<br />
                  +82 10-5957-1288
                </div>
              </div>
              <div className="text-center px-[3vw]">
                <div className="text-[1.5vh] font-extrabold uppercase tracking-wider mb-[1vh] opacity-70" style={{ fontWeight: 900 }}>
                  EXPERTISE
                </div>
                <div className="text-[1.2vh] leading-relaxed whitespace-pre-wrap break-keep">
                  Frontend Development<br />
                  React & TypeScript<br />
                  Web Publishing
                </div>
              </div>
              <div className="text-center px-[3vw]">
                <div className="text-[1.5vh] font-extrabold uppercase tracking-wider mb-[1vh] opacity-70" style={{ fontWeight: 900 }}>
                  SOCIAL MEDIA
                </div>
                <div className="text-[1.2vh]">
                  <div>GitHub</div>
                  <div>Blog</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;