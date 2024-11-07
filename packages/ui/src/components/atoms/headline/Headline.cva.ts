import { cva } from 'class-variance-authority'
import { TextColorVariants } from '../../../shared/colors.cva'

export const HeadlineVariants = cva('font-sans font-bold', {
  variants: {
    level: {
      1: [
        'text-body-2xl leading-lh-headline-xs md:text-heading-lg leading-lh-headline-xl '
      ],
      2: [
        'text-body-xl leading-lh-headline-2xs md:text-heading-md leading-lh-headline-lg'
      ],
      3: ['text-heading-3xs md:text-heading-sm'],
      4: ['text-body-lg leading-lh-headline-3xs md:text-heading-xs'],
      5: [
        'text-body-md leading-lh-body-lg md:text-heading-2xs leading-lh-body-3xl'
      ],
      6: [
        'text-body-sm leading-lh-body-md md:text-body-lg leading-lh-headline-2xs'
      ]
    },
    as: {
      'display-1':
        'text-heading-md md:text-heading-3xl leading-lh-headline-4xl ',
      'display-2':
        'text-heading-sm md:text-heading-2xl leading-lh-headline-3xl ',
      'display-3': 'text-heading-xs md:text-heading-xl leading-lh-headline-2xl '
    },
    colorVariants: TextColorVariants
  },
  defaultVariants: {
    level: 2,
    colorVariants: 'black'
  }
})
