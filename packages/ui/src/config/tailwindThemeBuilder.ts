import {
  spacing,
  borderRadius,
  boxShadow,
  container,
  colors,
  fonts,
  breakpoints
} from '../tailwind-theme-objects'
import { CustomThemeConfig } from 'tailwindcss/types/config'

export const generateTailwindConfigTheme = (): Partial<CustomThemeConfig & { extend: Partial<CustomThemeConfig> }> => {
  const theme:
    | Partial<
        CustomThemeConfig & {
          extend: Partial<CustomThemeConfig>
        }
      >
    | undefined = {
    extend: {
      spacing,
      lineHeight: spacing,
      borderRadius,
      boxShadow,
      container,
      colors,
      screens: breakpoints,
      fontFamily: fonts
    }
  }

  return theme
}
