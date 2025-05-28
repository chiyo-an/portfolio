import { Inter, JetBrains_Mono } from 'next/font/google'

// Inter 폰트 (영문 본문용)
export const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap'
})

// JetBrains Mono (코드용)
export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains',
  display: 'swap'
})

export const pretendard = inter
export const fontVariables = `${inter.variable} ${jetbrainsMono.variable}`