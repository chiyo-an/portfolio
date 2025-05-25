import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'aaaaaaa.dev',
  description: 'Frontend Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}