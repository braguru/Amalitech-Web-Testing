import { VariantProps } from 'class-variance-authority'

export type CVAVariantProps<T extends (...args: []) => unknown> =
  VariantProps<T>
