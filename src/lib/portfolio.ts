export interface PortfolioItem {
  id: string;
  title: string;
  year: string;
  category: 'UI Design' | 'Web Development' | 'Poster' | 'Brand Identity';
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  details: {
    client?: string;
    duration?: string;
    role: string;
    technologies?: string[];
    challenges?: string[];
    solutions?: string[];
  };
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 'soravia-concept-2',
    title: 'Soravia Concept #2',
    year: '2024',
    category: 'UI Design',
    description: 'All Projects portfolio interface design with modern grid layout',
    image: '/images/portfolio/soravia-concept-2.jpg',
    tags: ['UI/UX', 'Portfolio', 'Grid Layout'],
    liveUrl: 'https://example.com',
    details: {
      client: 'Soravia',
      duration: '2 weeks',
      role: 'UI/UX Designer',
      technologies: ['Figma', 'Principle'],
      challenges: ['Complex grid system', 'Image optimization'],
      solutions: ['Responsive grid framework', 'WebP format adoption']
    }
  },
  {
    id: 'soravia-concept-3',
    title: 'Soravia Concept #3',
    year: '2024',
    category: 'UI Design',
    description: 'Real Estate Development website with property listings',
    image: '/images/portfolio/soravia-concept-3.jpg',
    tags: ['Real Estate', 'Property', 'Listings'],
    details: {
      client: 'Soravia',
      duration: '3 weeks',
      role: 'Frontend Developer',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      challenges: ['Property data visualization', 'Mobile optimization'],
      solutions: ['Custom data grid component', 'Progressive enhancement']
    }
  },
  {
    id: 'soravia-concept-4',
    title: 'Soravia Concept #4',
    year: '2024',
    category: 'UI Design',
    description: 'Holistic approach to real estate with architectural focus',
    image: '/images/portfolio/soravia-concept-4.jpg',
    tags: ['Architecture', 'Real Estate', 'Holistic'],
    details: {
      client: 'Soravia',
      duration: '4 weeks',
      role: 'Full-stack Developer',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
      challenges: ['3D model integration', 'Performance optimization'],
      solutions: ['WebGL optimization', 'Image lazy loading']
    }
  },
  {
    id: 'online-sneaker-store-vol2',
    title: 'Online Sneaker Store Vol.2',
    year: '2023',
    category: 'UI Design',
    description: 'E-commerce platform for sneaker enthusiasts',
    image: '/images/portfolio/sneaker-store-vol2.jpg',
    tags: ['E-commerce', 'Sneakers', 'Shopping'],
    details: {
      role: 'UI/UX Designer & Developer',
      technologies: ['React', 'Node.js', 'MongoDB'],
      challenges: ['Inventory management', 'Payment integration'],
      solutions: ['Real-time stock updates', 'Stripe integration']
    }
  },
  {
    id: 'online-sneaker-store-vol3',
    title: 'Online Sneaker Store Vol.3',
    year: '2023',
    category: 'UI Design',
    description: 'Enhanced sneaker store with improved UX',
    image: '/images/portfolio/sneaker-store-vol3.jpg',
    tags: ['E-commerce', 'UX Enhancement', 'Mobile'],
    details: {
      role: 'Frontend Developer',
      technologies: ['Next.js', 'Framer Motion', 'Stripe'],
      challenges: ['Mobile performance', 'Animation optimization'],
      solutions: ['Code splitting', 'Optimized animations']
    }
  },
  {
    id: 'fortress-gardens',
    title: 'Fortress Gardens',
    year: '2022',
    category: 'UI Design',
    description: 'Landscape architecture portfolio website',
    image: '/images/portfolio/fortress-gardens.jpg',
    tags: ['Landscape', 'Architecture', 'Portfolio'],
    details: {
      role: 'Web Developer',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      challenges: ['Image gallery optimization', 'SEO implementation'],
      solutions: ['Intersection Observer API', 'Structured data markup']
    }
  },
  {
    id: 'ergo-pro-page',
    title: 'Ergo Pro Page Concept',
    year: '2021',
    category: 'UI Design',
    description: 'Ergonomic workspace solutions landing page',
    image: '/images/portfolio/ergo-pro-page.jpg',
    tags: ['Landing Page', 'Ergonomics', 'Workspace'],
    details: {
      role: 'Web Publisher',
      technologies: ['HTML5', 'SCSS', 'jQuery'],
      challenges: ['Cross-browser compatibility', 'Accessibility'],
      solutions: ['Progressive enhancement', 'ARIA implementation']
    }
  },
  {
    id: 'gabigoal-poster',
    title: 'GabiGoal',
    year: '2020',
    category: 'Poster',
    description: 'Sports poster design with dynamic typography',
    image: '/images/portfolio/gabigoal-poster.jpg',
    tags: ['Sports', 'Typography', 'Poster'],
    details: {
      role: 'Graphic Designer',
      technologies: ['Adobe Illustrator', 'Photoshop'],
      challenges: ['Dynamic composition', 'Print optimization'],
      solutions: ['Vector-based design', 'CMYK color profile']
    }
  },
  {
    id: 'esr-poster',
    title: 'ESR #10',
    year: '2022',
    category: 'Poster',
    description: 'Editorial sports magazine cover design',
    image: '/images/portfolio/esr-poster.jpg',
    tags: ['Editorial', 'Sports', 'Magazine'],
    details: {
      role: 'Art Director',
      technologies: ['InDesign', 'Photoshop'],
      challenges: ['Typography hierarchy', 'Color contrast'],
      solutions: ['Modular typography system', 'Accessibility guidelines']
    }
  },
  {
    id: 'eat-populo',
    title: 'Eat Populo Direction',
    year: '2022',
    category: 'UI Design',
    description: 'Restaurant chain digital experience',
    image: '/images/portfolio/eat-populo.jpg',
    tags: ['Restaurant', 'Digital Experience', 'Branding'],
    details: {
      role: 'Digital Designer',
      technologies: ['Figma', 'Principle', 'After Effects'],
      challenges: ['Multi-platform consistency', 'Order flow optimization'],
      solutions: ['Design system creation', 'User journey mapping']
    }
  },
  {
    id: 'the-gods-child',
    title: 'The Gods Child',
    year: '2022',
    category: 'UI Design',
    description: 'Art gallery exhibition digital catalog',
    image: '/images/portfolio/the-gods-child.jpg',
    tags: ['Art Gallery', 'Exhibition', 'Digital Catalog'],
    details: {
      role: 'Web Designer',
      technologies: ['Vue.js', 'Three.js', 'GSAP'],
      challenges: ['3D artwork preview', 'Loading optimization'],
      solutions: ['Progressive image loading', 'WebGL optimization']
    }
  }
];

// 카테고리별 필터링
export const getPortfolioByCategory = (category?: string): PortfolioItem[] => {
  if (!category) return portfolioData;
  return portfolioData.filter(item => item.category === category);
};

// 단일 포트폴리오 아이템 가져오기
export const getPortfolioItem = (id: string): PortfolioItem | undefined => {
  return portfolioData.find(item => item.item === id);
};

// 연도별 정렬
export const getPortfolioByYear = (): Record<string, PortfolioItem[]> => {
  return portfolioData.reduce((acc, item) => {
    const year = item.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(item);
    return acc;
  }, {} as Record<string, PortfolioItem[]>);
};

// 카테고리 목록
export const categories = [
  'All',
  'UI Design',
  'Web Development', 
  'Poster',
  'Brand Identity'
] as const;