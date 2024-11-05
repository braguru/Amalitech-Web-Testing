import {
  borderRadius,
  boxShadow,
  breakpoints,
  colors,
  container,
  fonts,
  gaps,
  fontSize,
  lineHeight,
  spacing
} from '../tailwind-theme-objects'
import {CustomThemeConfig} from 'tailwindcss/types/config'

export const generateTailwindConfigTheme = (): Partial<CustomThemeConfig & { extend: Partial<CustomThemeConfig> }> => ({
    extend: {
      spacing,
      borderRadius,
      boxShadow,
      container,
      colors,
      screens: breakpoints,
      fontFamily: fonts,
      gap: gaps,
      lineHeight,
      fontSize
    }
  })
