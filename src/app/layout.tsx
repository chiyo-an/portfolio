import type { Metadata } from 'next'
import { fontVariables } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Frontend Developer Who Speaks Design',
  description: '5년의 퍼블리싱 경험과 개발 역량을 결합한 완성형 프론트엔드 전문가',
  keywords: ['frontend', 'developer', 'publisher', 'react', 'nextjs', 'portfolio'],
  authors: [{ name: 'Your Name' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={fontVariables}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}