import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { portfolioData, type PortfolioItem } from '@/lib/portfolio';
import { motion } from 'framer-motion';

interface PortfolioGalleryProps {
  activeCategory: string;
}

const PortfolioGallery = ({ activeCategory }: PortfolioGalleryProps) => {
  const filteredPortfolio = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter(item => item.category === activeCategory);

  return (
    <main className="w-full px-5 md:px-8 pb-20">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 w-full max-w-none">
        {filteredPortfolio.map((item, idx) => (
          <Link href={`/portfolio/${item.id}`} key={item.id} className="break-inside-avoid mb-12 block w-full">
            <motion.article
              className="w-full group cursor-pointer transition-all duration-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="relative w-full aspect-[4/3] bg-black mb-4 overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="100vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7+xvLSxt7K1SaCCGOKKJdqRxqFVVHYAAcADgAAAAAAAAAAAAAAAP/Z"
                />
              </div>
              <div className="space-y-2 px-2">
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
            </motion.article>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default PortfolioGallery; 