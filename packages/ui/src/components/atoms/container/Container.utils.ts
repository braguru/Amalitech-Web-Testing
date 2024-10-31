import { colors } from '../../../tailwind-theme-objects'
import { GapsType } from './Container.types'

export const gaps = {
  1: 'xxs',
  2: 'xs',
  8: 'sm',
  12: 'md',
  16: 'lg',
  24: 'xl',
  32: '2xl',
  48: '3xl'
}

export const getMarginBottom = (gap: GapsType): string => gaps[`${gap}`]

export const getFlattenedColors = <T extends Record<string, unknown>>(
  colorObj: T,
  prefix = ''
): Record<string, string> =>
  Object.keys(colorObj).reduce(
    (acc, key) => {
      const value = colorObj[key as keyof T]

      let newKey

      if (key === 'DEFAULT') {
        newKey = prefix
      } else if (prefix) {
        newKey = `${prefix}-${key}`
      } else {
        newKey = key
      }

      // Check if value is a nested object
      if (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value)
      ) {
        // Recursively flatten the nested object
        Object.assign(
          acc,
          getFlattenedColors(
            value as unknown as Record<string, unknown>,
            newKey
          )
        )
      } else {
        // Assign the flattened key-value pair
        acc[newKey] = String(value)
      }

      return acc
    },
    {} as Record<string, string>
  )

export const getThemeColor = (color = ''):string => {
  const themeColors = getFlattenedColors(colors)

  return themeColors[color] ?? color
}

export const checkColorValidity = (color: string): boolean => {
  const s = new Option().style
  s.color = color

  return s.color !== ''
}

export const flattenedColors = getFlattenedColors(colors)
