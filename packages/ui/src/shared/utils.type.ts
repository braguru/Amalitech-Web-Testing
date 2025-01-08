import { VariantProps } from 'class-variance-authority'
import { colors } from '../tailwind-theme-objects'

export type CVAVariantProps<T extends (...args: []) => unknown> =
  VariantProps<T>

export type BackgroundType = Extract<
  keyof typeof colors,
  | 'primary'
  | 'secondary'
  | 'primary-alt'
  | 'secondary-alt'
  | 'accent'
  | 'accent-alt'
>

export type GapsType = 1 | 2 | 8 | 12 | 16 | 24 | 32 | 48
export type ResponsiveScreenTypes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
