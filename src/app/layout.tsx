import type { Metadata } from 'next'
import { fontVariables } from '@/lib/fonts'
import '../styles/globals.css'
import '../styles/cursor.css'

export const metadata: Metadata = {
  title: 'Frontend Developer Who Speaks Design',
  description: '퍼블리싱 경험과 개발 역량을 결합한 완성형 프론트엔드 개발자',
  keywords: ['frontend', 'developer', 'publisher', 'react', 'nextjs', 'portfolio'],
  authors: [{ name: 'AN JEONG EUN' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={fontVariables}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
        <link 
          rel="stylesheet" 
          as="style" 
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" 
        />
      </head>
      <body className="antialiased font-korean">
        {children}
      </body>
    </html>
  )
}