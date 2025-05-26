/**
 * 🎨 Design System Constants
 * 
 * 모든 디자인 토큰을 중앙에서 관리
 * TypeScript 타입 안정성 보장
 * CSS 변수와 일대일 매칭
 */

// ===== 색상 시스템 =====
export const COLORS = {
  // Primary Neon Colors
  ELECTRIC_YELLOW: '#E8FF00',
  BRIGHT_YELLOW: '#F0FF47', 
  NEON_LIME: '#DDFF00',
  
  // Dark System
  PURE_BLACK: '#000000',
  RICH_BLACK: '#0A0A0A',
  CHARCOAL: '#1A1A1A',
  DARK_GREY: '#2A2A2A',
  LIGHT_GREY: '#9CA3AF',
} as const

// ===== 폰트 시스템 =====
export const TYPOGRAPHY = {
  // Font Sizes
  TITLE_XL: '4.5rem',     // 72px
  TITLE_LG: '3rem',       // 48px  
  TITLE_MD: '2rem',       // 32px
  TITLE_SM: '1.5rem',     // 24px
  BODY_LG: '1.25rem',     // 20px
  BODY_MD: '1rem',        // 16px
  BODY_SM: '0.875rem',    // 14px
  CODE: '0.75rem',        // 12px

  // Line Heights
  TITLE: 1.1,
  HEADING: 1.2,
  BODY: 1.6,
  RELAXED: 1.8,

  // Font Weights
  LIGHT: 300,
  NORMAL: 400,
  MEDIUM: 500,
  SEMIBOLD: 600,
  BOLD: 700,
} as const

// ===== 간격 시스템 =====
export const SPACING = {
  XS: '0.5rem',   // 8px
  SM: '1rem',     // 16px
  MD: '1.5rem',   // 24px
  LG: '2rem',     // 32px
  XL: '3rem',     // 48px
  '2XL': '4rem',  // 64px
  '3XL': '6rem',  // 96px
} as const

// ===== 그림자 시스템 =====
export const SHADOWS = {
  NEON: '0 0 5px var(--color-electric-yellow), 0 0 10px var(--color-electric-yellow), 0 0 20px var(--color-electric-yellow)',
  NEON_LG: '0 0 10px var(--color-electric-yellow), 0 0 20px var(--color-electric-yellow), 0 0 40px var(--color-electric-yellow)',
  NEON_XL: '0 0 20px var(--color-electric-yellow), 0 0 40px var(--color-electric-yellow), 0 0 80px var(--color-electric-yellow)',
} as const

// ===== 애니메이션 시스템 =====
export const ANIMATIONS = {
  // Duration
  FAST: '0.15s',
  NORMAL: '0.3s', 
  SLOW: '0.5s',

  // Easing
  EASE: 'ease',
  EASE_IN_OUT: 'ease-in-out',
  EASE_OUT: 'ease-out',

  // Custom Easing
  BOUNCE: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  BACK: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const

// ===== 브레이크포인트 =====
export const BREAKPOINTS = {
  XS: '475px',
  SM: '640px', 
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',

  // 커스텀 브레이크포인트
  MOBILE_MAX: '767px',
  TABLET_MIN: '768px',
  TABLET_MAX: '1023px', 
  DESKTOP_MIN: '1024px',
  DESKTOP_MAX: '1439px',
  LARGE_MIN: '1440px',
} as const

// ===== CSS 변수명 매핑 =====
export const CSS_VARIABLES = {
  // Colors
  ELECTRIC_YELLOW: '--color-electric-yellow',
  BRIGHT_YELLOW: '--color-bright-yellow',
  NEON_LIME: '--color-neon-lime',
  PURE_BLACK: '--color-pure-black',
  RICH_BLACK: '--color-rich-black',
  CHARCOAL: '--color-charcoal',
  DARK_GREY: '--color-dark-grey',
  LIGHT_GREY: '--color-light-grey',

  // Fonts
  FONT_DISPLAY: '--font-family-display',
  FONT_KOREAN: '--font-family-korean',
  FONT_SANS: '--font-family-sans',
  FONT_MONO: '--font-family-mono',

  // Shadows
  SHADOW_NEON: '--shadow-neon',
  SHADOW_NEON_LG: '--shadow-neon-lg', 
  SHADOW_NEON_XL: '--shadow-neon-xl',
} as const

// ===== 유틸리티 함수 =====
export const getColorVariable = (colorKey: keyof typeof COLORS) => {
  const variableMap = {
    ELECTRIC_YELLOW: CSS_VARIABLES.ELECTRIC_YELLOW,
    BRIGHT_YELLOW: CSS_VARIABLES.BRIGHT_YELLOW,
    NEON_LIME: CSS_VARIABLES.NEON_LIME,
    PURE_BLACK: CSS_VARIABLES.PURE_BLACK,
    RICH_BLACK: CSS_VARIABLES.RICH_BLACK,
    CHARCOAL: CSS_VARIABLES.CHARCOAL,
    DARK_GREY: CSS_VARIABLES.DARK_GREY,
    LIGHT_GREY: CSS_VARIABLES.LIGHT_GREY,
  }
  return `var(${variableMap[colorKey]})`
}

export const getShadowVariable = (shadowKey: keyof typeof SHADOWS) => {
  const variableMap = {
    NEON: CSS_VARIABLES.SHADOW_NEON,
    NEON_LG: CSS_VARIABLES.SHADOW_NEON_LG,
    NEON_XL: CSS_VARIABLES.SHADOW_NEON_XL,
  }
  return `var(${variableMap[shadowKey]})`
}

// ===== 타입 정의 =====
export type ColorKey = keyof typeof COLORS
export type TypographyKey = keyof typeof TYPOGRAPHY  
export type SpacingKey = keyof typeof SPACING
export type ShadowKey = keyof typeof SHADOWS
export type AnimationKey = keyof typeof ANIMATIONS
export type BreakpointKey = keyof typeof BREAKPOINTS

// ===== 컴포넌트에서 사용 예시 =====
/*
import { COLORS, TYPOGRAPHY, getColorVariable } from '@/lib/design-system'

// 1. 직접 값 사용
const titleStyle = {
  fontSize: TYPOGRAPHY.TITLE_XL,
  color: COLORS.ELECTRIC_YELLOW,
}

// 2. CSS 변수 함수 사용  
const buttonStyle = {
  backgroundColor: getColorVariable('ELECTRIC_YELLOW'),
  boxShadow: getShadowVariable('NEON_LG'),
}

// 3. 타입 안정성
const spacing: SpacingKey = 'LG' // ✅ 타입 체크됨
const invalidSpacing: SpacingKey = 'INVALID' // ❌ 타입 에러
*/