import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  weight: ['300', '400', '500', '600', '700'],
})

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair', 
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap', 
  preload: true,
  weight: ['300', '400', '500', '600'],
})

// ===== 폰트 변수 결합 =====
export const fontVariables = [
  inter.variable,
  playfairDisplay.variable,
  jetbrainsMono.variable,
].join(' ')

// ===== 폰트 메타데이터 (설정과 별도 관리) =====
export const FONT_METADATA = {
  inter: {
    name: 'Inter',
    category: 'sans-serif',
    usage: ['Body text', 'UI components', 'Navigation'],
    variable: '--font-inter',
    fallback: 'system-ui, -apple-system, sans-serif',
    weights: [300, 400, 500, 600, 700],
    optimized: true,
  },
  playfairDisplay: {
    name: 'Playfair Display', 
    category: 'serif',
    usage: ['Main titles', 'Hero section', 'Display headings'],
    variable: '--font-playfair',
    fallback: 'Georgia, Times, serif',
    weights: [400, 500, 600, 700],
    styles: ['normal', 'italic'],
    optimized: true,
  },
  jetbrainsMono: {
    name: 'JetBrains Mono',
    category: 'monospace',
    usage: ['Code blocks', 'Tech stack', 'Terminal output'],
    variable: '--font-jetbrains',
    fallback: 'Consolas, Monaco, monospace',
    weights: [300, 400, 500, 600],
    optimized: true,
  },
  pretendard: {
    name: 'Pretendard Variable',
    category: 'sans-serif',
    usage: ['Korean text', 'CJK characters'],
    source: 'CDN',
    fallback: 'Apple SD Gothic Neo, Noto Sans KR, sans-serif',
    optimized: false,
  },
} as const

// ===== CSS 변수 매핑 =====
export const FONT_CSS_VARIABLES = {
  DISPLAY: '--font-family-display',
  KOREAN: '--font-family-korean',
  SANS: '--font-family-sans', 
  MONO: '--font-family-mono',
} as const

// ===== 폰트 스택 정의 =====
export const FONT_STACKS = {
  display: `var(${FONT_CSS_VARIABLES.DISPLAY}), Georgia, Times, serif`,
  korean: `var(${FONT_CSS_VARIABLES.KOREAN}), Apple SD Gothic Neo, Noto Sans KR, sans-serif`,
  sans: `var(${FONT_CSS_VARIABLES.SANS}), system-ui, -apple-system, sans-serif`,
  mono: `var(${FONT_CSS_VARIABLES.MONO}), Consolas, Monaco, monospace`,
} as const

// ===== 유틸리티 함수 =====
export const getFontVariable = (fontKey: keyof typeof FONT_CSS_VARIABLES) => {
  return `var(${FONT_CSS_VARIABLES[fontKey]})`
}

export const getFontInfo = (fontKey: keyof typeof FONT_METADATA) => {
  return FONT_METADATA[fontKey]
}

// ===== 폰트 로드 상태 체크 =====
export const checkFontLoaded = async (fontFamily: string): Promise<boolean> => {
  if (typeof window === 'undefined') return false
  
  try {
    if (document.fonts && document.fonts.check) {
      return document.fonts.check(`1em ${fontFamily}`)
    }
    return false
  } catch {
    return false
  }
}

// ===== 폰트 클래스명 헬퍼 =====
export const fontClasses = {
  display: 'font-display',
  korean: 'font-korean', 
  sans: 'font-sans',
  mono: 'font-mono',
} as const

// ===== 타입 정의 =====
export type FontKey = keyof typeof FONT_METADATA
export type FontVariable = keyof typeof FONT_CSS_VARIABLES
export type FontStack = keyof typeof FONT_STACKS
export type FontClass = keyof typeof fontClasses

// ===== 개발 모드 디버깅 =====
if (process.env.NODE_ENV === 'development') {
  console.log('Fonts loaded:', {
    inter: inter.className,
    playfairDisplay: playfairDisplay.className,
    jetbrainsMono: jetbrainsMono.className,
    variables: fontVariables,
  })
}