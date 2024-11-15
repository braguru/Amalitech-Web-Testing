import { cva, VariantProps } from 'class-variance-authority'
import { TextColorVariants } from '../../../shared/colors.cva'
export const TextVariant = cva('tracking-normal', {
  variants: {
    type: {
      hero: 'text-body-xl leading-lh-body-2xl  lg:text-body-2xl lg:leading-lh-body-3xl',
      feature: 'lg:text-body-xl text-body-lg leading-lh-body-xl',
      highlight:
        'lg:text-body-lg  lg:leading-lh-body-xl text-body-md leading-lh-body-lg',
      content:
        'lg:text-body-md lg:leading-lh-body-lg text-body-sm leading-lh-body-md',
      caption:
        'lg:text-body-sm lg:leading-lh-body-md text-body-xs leading-lh-body-sm',
      footnote:
        'lg:text-body-xs lg:leading-lh-body-sm text-body-2xs leading-lh-body-xs'
    },
    variant: {
      bold: 'font-bold',
      accent: 'font-semibold',
      emphasis: 'italic',
      standard: 'font-normal'
    },
    color: TextColorVariants
  },

  defaultVariants: {
    type: 'content',
    variant: 'standard'
  }
})
export type TextVariantProps = VariantProps<typeof TextVariant>
