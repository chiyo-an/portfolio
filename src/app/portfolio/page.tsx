'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioData, categories, type PortfolioItem } from '@/lib/portfolio';
import { motion } from 'framer-motion';
import PortfolioSort from '../../components/portfolio/PortfolioSort';
import PortfolioGallery from '../../components/portfolio/PortfolioGallery';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const filteredPortfolio = activeCategory === 'All' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeCategory);

  const serif = 'font-serif italic';
  const sans = 'font-sans font-bold';
  const tight = 'tracking-tight';
  const caseText = 'Case';
  const studiesText = 'Studies';

  return (
    <div className="min-h-screen bg-primary w-full">
      <div className="w-full flex flex-col items-center justify-center pt-32 pb-8 px-5 md:px-8">
        <h1 className="flex items-end gap-4 text-[clamp(3rem,10vw,7rem)] leading-none">
          <span className={`${serif} ${tight} text-black`} style={{ fontStyle: 'italic' }}>
            {caseText.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                style={{ display: 'inline-block' }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          <span className={`${sans} ${tight} text-black`}>
            {studiesText.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                style={{ display: 'inline-block' }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h1>
        <p className="text-body-lg text-center max-w-2xl mx-auto mt-8 text-black/80">
          Welcome to my playground, my personal collection of random designs, explorations, rejected versions or anything that I could not find a place to show...
        </p>
      </div>
      <div className="w-full px-5 md:px-8">
        <PortfolioSort activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </div>
      <PortfolioGallery activeCategory={activeCategory} />
    </div>
  );
}

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

function PortfolioCard({ item, index, isHovered, onHover }: PortfolioCardProps) {
  return (
    <Link href={`/portfolio/${item.id}`}>
      <article 
        className={`group cursor-pointer hover:cursor-pointer transition-all duration-500 ${
          isHovered ? 'transform scale-105' : ''
        }`}
        style={{ cursor: 'pointer' }}
        onMouseEnter={() => onHover(item.id)}
        onMouseLeave={() => onHover(null)}
      >
        <div className="relative aspect-[4/3] bg-pure-black mb-4 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7+xvLSxt7K1SaCCGOKKJdqRxqFVVHYAAcADgAAAAAAAAAAAAAAAP/Z"
          />
          
          <div className="absolute inset-0 bg-pure-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-primary px-6">
              <h3 className="text-title-md font-english font-bold mb-2">{item.title}</h3>
              <p className="text-body-sm mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {item.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-primary text-pure-black text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-body-sm text-grey-dark">({item.year})</span>
            <span className="text-body-sm text-grey">{item.category}</span>
          </div>
          <h3 className="text-title-md font-english font-semibold group-hover:text-grey-dark transition-colors">
            {item.title}
          </h3>
          <p className="text-body-sm text-grey-dark line-clamp-2">
            {item.description}
          </p>
        </div>

        <div className="mt-4 flex items-center text-body-sm text-grey group-hover:text-pure-black transition-colors">
          <span>View Project</span>
          <svg 
            className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </article>
    </Link>
  );
}