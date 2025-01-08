import { cva } from 'class-variance-authority'
import { TextColorVariants } from '../../../shared/colors.cva'

export const HeadlineVariants = cva('font-sans', {
  variants: {
    level: {
      1: [
        'font-semibold text-body-2xl leading-lh-headline-xs lg:text-heading-lg md:text-heading-md leading-lh-headline-xl'
      ],
      2: [
        'font-semibold text-body-xl leading-lh-headline-2xs lg:text-heading-md md:text-heading-sm leading-lh-headline-lg'
      ],
      3: [
        'font-semibold text-heading-3xs md:text-heading-xs lg:text-heading-sm'
      ],
      4: [
        'font-semibold text-body-lg leading-lh-headline-3xs lg:text-heading-xs md:text-heading-2xs leading-lh-body-2xl'
      ],
      5: [
        'font-semibold text-body-md leading-lh-body-lg lg:text-heading-2xs md:text-body-lg leading-lh-body-3xl'
      ],
      6: [
        'font-semibold text-body-sm leading-lh-body-md md:text-body-lg leading-lh-headline-2xs'
      ]
    },
    as: {
      'display-1':
        'font-bold text-heading-md lg:text-heading-3xl md:text-heading-2xl leading-lh-headline-4xl ',
      'display-2':
        'font-bold text-heading-sm lg:text-heading-2xl md:text-heading-xl leading-lh-headline-3xl ',
      'display-3':
        'font-bold text-heading-xs lg:text-heading-xl md:text-heading-lg leading-lh-headline-2xl '
    },
    colorVariants: TextColorVariants
  },
  defaultVariants: {
    level: 2
  }
})
