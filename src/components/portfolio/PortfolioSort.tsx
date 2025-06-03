import React from 'react';
import { categories } from '@/lib/portfolio';

interface PortfolioSortProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const PortfolioSort = ({ activeCategory, setActiveCategory }: PortfolioSortProps) => {
  return (
    <nav className="w-full flex flex-wrap gap-4 justify-center mb-16">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-8 py-3 text-lg font-medium border-2 rounded-full transition-all duration-300
            ${activeCategory === category
              ? 'bg-black text-primary border-black'
              : 'bg-transparent text-black border-black hover:bg-black hover:text-primary'}
          `}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default PortfolioSort; 