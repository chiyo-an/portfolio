'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const [formData, setFormData] = useState({
    name: '',
    email: ''
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
    // 폼 제출 로직 추가
  };

  return (
    <section className="bg-yellow relative overflow-hidden min-h-screen flex flex-col justify-center" ref={ref}>
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
            animate={inView ? { scaleY: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: index * 0.12,
              ease: [0.4, 0.0, 0.2, 1]
            }}
          />
        ))}
      </div>
      
      <div className="pt-20 pb-16 px-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.4, 0.0, 0.2, 1] }}
            className="font-serif text-black leading-none font-normal"
            style={{ 
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              fontStyle: 'italic',
              letterSpacing: '-3px',
              lineHeight: '1.1'
            }}
          >
            Looking for<br />
            <span className="font-display font-bold" style={{ fontStyle: 'normal', display: 'inline-block', letterSpacing: '-1px' }}>
              {['N','E','W',' ','O','P','P','O','R','T','U','N','I','T','I','E','S'].map((char, i) => (
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

      <div className="flex-1 flex items-center justify-center px-12 relative z-10">
        <div className="max-w-md mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <div className="text-black text-xs font-medium uppercase tracking-wider mb-2">
              STAY IN THE KNOW
            </div>
            <h2 className="text-black text-lg font-medium">
              An Jeong Eun - Frontend Developer
            </h2>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-6 mb-12"
          >
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter name"
                className="w-full bg-transparent border-0 border-b-2 border-black text-black placeholder-black placeholder-opacity-70 py-3 px-0 text-lg focus:outline-none focus:border-black"
                style={{ 
                  fontFamily: 'inherit',
                  fontSize: '16px'
                }}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email"
                className="w-full bg-transparent border-0 border-b-2 border-black text-black placeholder-black placeholder-opacity-70 py-3 px-0 text-lg focus:outline-none focus:border-black"
                style={{ 
                  fontFamily: 'inherit',
                  fontSize: '16px'
                }}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 mx-auto mt-8"
            >
              <ArrowRight className="w-5 h-5 text-yellow" />
            </motion.button>
          </motion.form>

        </div>
      </div>

      <div className="pb-20 px-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-full"
        >
          <div className="grid grid-cols-4 text-black">
            <div className="text-center px-6">
              <div className="text-xs font-medium uppercase tracking-wider mb-3 opacity-70">
                ADDRESS
              </div>
              <div className="text-sm leading-relaxed whitespace-pre-wrap break-keep">
                Songdo International City<br />
                Yeonsu-gu, Incheon<br />
                South Korea
              </div>
            </div>
            <div className="text-center px-6">
              <div className="text-xs font-medium uppercase tracking-wider mb-3 opacity-70">
                CONTACT
              </div>
              <div className="text-sm leading-relaxed whitespace-pre-wrap break-keep">
                chiyoawesome@gmail.com<br />
                +82 10-5957-1288
              </div>
            </div>
            <div className="text-center px-6">
              <div className="text-xs font-medium uppercase tracking-wider mb-3 opacity-70">
                EXPERTISE
              </div>
              <div className="text-sm leading-relaxed whitespace-pre-wrap break-keep">
                Frontend Development<br />
                React & TypeScript<br />
                Web Publishing
              </div>
            </div>
            <div className="text-center px-6">
              <div className="text-xs font-medium uppercase tracking-wider mb-3 opacity-70">
                SOCIAL MEDIA
              </div>
              <div className="text-sm leading-relaxed">
                <div>GitHub</div>
                <div>Blog</div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
      <div className="bg-black text-yellow py-4 px-12">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm">
          <div>
            © 2025 AN JEONG EUN
          </div>
          <div>
            Made with in Incheon
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;