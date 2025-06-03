'use client';

import { motion } from 'framer-motion';

const Ticker = () => {
  const items = ["Frontend Developer", "Pixel Perfect", "User Experience", "Modern Web"];
  const speed = 20;
  const separator = "✦";
  
  const repeatedItems = [...items, ...items, ...items];
  
  return (
    <div className="w-full bg-sub-point overflow-hidden py-3.5 relative z-20">
      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={{
          x: ['0%', '-33.333%']
        }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity
        }}
      >
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span 
              className={`text-black mx-8 ${
                index % 2 === 0 
                  ? 'font-serif font-normal' 
                  : 'font-display font-bold'
              }`}
              style={{
                fontSize: 'clamp(0.75rem, 1.8vw, 1.2rem)',
                fontStyle: index % 2 === 0 ? 'italic' : 'normal',
                letterSpacing: index % 2 === 0 ? '-0.5px' : '-1px'
              }}
            >
              {item}
            </span>
            {index < repeatedItems.length - 1 && (
              <span 
                className="text-black mx-8 font-bold"
                style={{
                  fontSize: 'clamp(0.6rem, 1.5vw, 0.9rem)',
                  opacity: 0.7
                }}
              >
                {separator}
              </span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Ticker;