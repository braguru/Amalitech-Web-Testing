import { cva } from 'class-variance-authority'

export const gapSizes = {
  0: 'gap-none',
  2: 'gap-3xs',
  4: 'gap-2xs',
  6: 'gap-xs',
  8: 'gap-sm',
  12: 'gap-md',
  16: 'gap-lg',
  20: 'gap-xl',
  24: 'gap-2xl',
  32: 'gap-3xl',
  40: 'gap-4xl',
  48: 'gap-5xl',
  56: 'gap-6xl'
}

export const GapVariants = cva('gaps', {
  variants: {
    gap: gapSizes
  },
  defaultVariants: {
    gap: 4
  }
})
