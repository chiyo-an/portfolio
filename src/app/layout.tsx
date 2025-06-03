import type { Metadata } from 'next'
import { fontVariables } from '@/lib/fonts'
import '@/styles/globals.css'
import CustomCursor from '@/components/ui/CustomCursor'
import ClientLayout from '@/components/layout/ClientLayout'

export const metadata: Metadata = {
  title: 'Frontend Developer Who Speaks Design',
  description: '퍼블리싱 경험과 개발 역량을 결합한 완성형 프론트엔드 개발자',
  keywords: ['frontend', 'developer', 'publisher', 'react', 'nextjs', 'portfolio'],
  authors: [{ name: 'AN JEONG EUN' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
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
          href="https://fonts.googleapis.com/css2?family=Boldonse:wght@400;500;600;700&family=Noto+Sans:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased font-korean">
        <CustomCursor />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}