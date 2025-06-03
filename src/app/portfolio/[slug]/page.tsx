import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioData } from '@/lib/portfolio';
import type { Metadata } from 'next';

interface PortfolioDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PortfolioDetailPageProps): Promise<Metadata> {
  const item = portfolioData.find(item => item.id === params.slug);
  
  if (!item) {
    return {
      title: 'Portfolio Not Found',
    };
  }

  return {
    title: `${item.title} - 안정은 Portfolio`,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      images: [item.image],
    },
  };
}

export async function generateStaticParams() {
  return portfolioData.map((item) => ({
    slug: item.id,
  }));
}

export default function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const item = portfolioData.find(item => item.id === params.slug);

  if (!item) {
    notFound();
  }

  const currentIndex = portfolioData.findIndex(p => p.id === params.slug);
  const nextProject = portfolioData[currentIndex + 1];
  const prevProject = portfolioData[currentIndex - 1];

  return (
    <div className="min-h-screen bg-primary">
      <header className="container-custom py-8">
        <div className="flex items-center justify-between">
          <Link href="/portfolio" className="flex items-center gap-2 text-body-sm hover:underline">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>
          <Link href="/" className="text-sm font-english font-bold uppercase">
            PORTFOLIO©
          </Link>
          <div className="text-body-sm">
            <span>({item.year})</span>
          </div>
        </div>
      </header>

      <section className="container-custom py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-body-sm text-grey-dark mb-2 block">{item.category}</span>
              <h1 className="text-hero font-display font-bold mb-4">{item.title}</h1>
              <p className="text-body-lg text-grey-dark">{item.description}</p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-body-md font-semibold mb-2">연도</h3>
                  <p className="text-body-sm text-grey-dark">{item.year}</p>
                </div>
                <div>
                  <h3 className="text-body-md font-semibold mb-2">역할</h3>
                  <p className="text-body-sm text-grey-dark">{item.details.role}</p>
                </div>
                {item.details.client && (
                  <div>
                    <h3 className="text-body-md font-semibold mb-2">클라이언트</h3>
                    <p className="text-body-sm text-grey-dark">{item.details.client}</p>
                  </div>
                )}
                {item.details.duration && (
                  <div>
                    <h3 className="text-body-md font-semibold mb-2">기간</h3>
                    <p className="text-body-sm text-grey-dark">{item.details.duration}</p>
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-body-md font-semibold mb-3">태그</h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-pure-black text-primary text-body-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {item.details.technologies && (
                <div>
                  <h3 className="text-body-md font-semibold mb-3">기술 스택</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.details.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 border-2 border-pure-black text-pure-black text-body-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-4 pt-4">
                {item.liveUrl && (
                  <a 
                    href={item.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Live Demo
                  </a>
                )}
                {item.githubUrl && (
                  <a 
                    href={item.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] bg-pure-black overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {(item.details.challenges || item.details.solutions) && (
        <section className="container-custom py-16">
          <div className="grid lg:grid-cols-2 gap-16">
            {item.details.challenges && (
              <div>
                <h2 className="text-title-lg font-english font-bold mb-8">도전 과제</h2>
                <ul className="space-y-4">
                  {item.details.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary-dark rounded-full mt-3 flex-shrink-0"></span>
                      <p className="text-body-md text-grey-dark">{challenge}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.details.solutions && (
              <div>
                <h2 className="text-title-lg font-english font-bold mb-8">해결 방안</h2>
                <ul className="space-y-4">
                  {item.details.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary-dark rounded-full mt-3 flex-shrink-0"></span>
                      <p className="text-body-md text-grey-dark">{solution}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="container-custom py-16">
        <div className="border-t-2 border-pure-black pt-16">
          <div className="grid md:grid-cols-2 gap-8">
            {prevProject && (
              <Link href={`/portfolio/${prevProject.id}`} className="group">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-body-sm text-grey">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous Project
                  </div>
                  <div className="relative aspect-[3/2] bg-pure-black overflow-hidden">
                    <Image
                      src={prevProject.image}
                      alt={prevProject.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div>
                    <h3 className="text-title-md font-english font-semibold group-hover:text-grey-dark transition-colors">
                      {prevProject.title}
                    </h3>
                    <p className="text-body-sm text-grey-dark">({prevProject.year})</p>
                  </div>
                </div>
              </Link>
            )}

            {nextProject && (
              <Link href={`/portfolio/${nextProject.id}`} className="group">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-body-sm text-grey md:justify-end">
                    Next Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="relative aspect-[3/2] bg-pure-black overflow-hidden">
                    <Image
                      src={nextProject.image}
                      alt={nextProject.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="md:text-right">
                    <h3 className="text-title-md font-english font-semibold group-hover:text-grey-dark transition-colors">
                      {nextProject.title}
                    </h3>
                    <p className="text-body-sm text-grey-dark">({nextProject.year})</p>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="container-custom py-16">
        <div className="text-center mb-12">
          <h2 className="text-title-lg font-english font-bold mb-4">
            Project Gallery
          </h2>
          <p className="text-body-md text-grey-dark">
            프로젝트의 다양한 화면과 디테일을 확인해보세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative aspect-[4/3] bg-pure-black overflow-hidden">
            <Image
              src={item.image}
              alt={`${item.title} - Detail 1`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="relative aspect-[4/3] bg-pure-black overflow-hidden">
            <Image
              src={item.image}
              alt={`${item.title} - Detail 2`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="relative aspect-[4/3] bg-pure-black overflow-hidden">
            <Image
              src={item.image}
              alt={`${item.title} - Detail 3`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>

      <section className="container-custom py-16">
        <div className="text-center bg-pure-black text-primary p-12 space-y-6">
          <h2 className="text-title-lg font-english font-bold">
            다음 프로젝트를 함께 만들어보세요
          </h2>
          <p className="text-body-lg">
            새로운 아이디어와 도전을 기다리고 있습니다
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-primary text-pure-black hover:bg-primary-light">
              연락하기
            </Link>
            <Link href="/portfolio" className="btn-secondary border-primary text-primary hover:bg-primary hover:text-pure-black">
              다른 프로젝트 보기
            </Link>
          </div>
        </div>
      </section>

      <footer className="container-custom py-8">
        <div className="flex items-center justify-between text-body-sm border-t-2 border-pure-black pt-8">
          <Link href="/portfolio" className="hover:underline">← All Projects</Link>
          <div className="flex gap-8">
            <Link href="/works" className="hover:underline">Works</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
          <span>©2024</span>
        </div>
      </footer>
    </div>
  );
}