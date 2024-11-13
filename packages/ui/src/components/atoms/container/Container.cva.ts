import { cva } from 'class-variance-authority'
import { BackgroundVariants } from '../../../shared/colors.cva'

export default cva('', {
  variants: {
    background: BackgroundVariants,
    fluid: {
      true: 'w-full',
      false: 'xs:mx-4 sm:!mx-5 md:!mx-6 lg:!mx-10'
    },
    gap: {
      1: 'mb-xxs',
      2: 'mb-xs',
      8: 'mb-sm',
      12: 'mb-md',
      16: 'mb-lg',
      24: 'mb-xl',
      32: 'mb-2xl',
      48: 'mb-3xl'
    }
  },
  defaultVariants: {
    gap: 8,
    fluid: false
  }
})
