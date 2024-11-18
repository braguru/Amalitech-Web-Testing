import { CustomThemeConfig } from 'tailwindcss/types/config'
import {
  borderRadius,
  boxShadow,
  breakpoints,
  colors,
  container,
  fonts,
  fontSize,
  lineHeight,
  spacing,
  gaps
} from '../tailwind-theme-objects'

export const generateTailwindConfigTheme = (): Partial<
  CustomThemeConfig & { extend: Partial<CustomThemeConfig> }
> => ({
  extend: {
    spacing,
    borderRadius,
    boxShadow,
    container,
    colors,
    screens: breakpoints,
    fontFamily: fonts,
    lineHeight,
    fontSize
  }
})
