import { cva as baseCva } from 'class-variance-authority'
import { BackgroundVariants } from '../../../shared/colors.cva'
import { ResponsiveScreenTypes } from '../../../shared/utils.type'

export const responsiveScreens: ResponsiveScreenTypes[] = [
  'lg',
  'md',
  'sm',
  'xl',
  'xs'
]

export const paddings = {
  1: 'p-xxs',
  2: 'p-xs',
  8: 'p-sm',
  12: 'p-md',
  16: 'p-lg',
  24: 'p-xl',
  32: 'p-2xl',
  48: 'p-3xl'
}

const positions = {
  start: 'place-self-start',
  end: 'place-self-end',
  center: 'place-self-center',
  auto: 'place-self-auto'
}

const grow = {
  true: 'grow',
  false: ''
}

export const cvaProperties = {
  variants: {
    xs: {
      1: 'xs:basis-1/12', // 8.333333%;
      2: 'xs:basis-2/12', // 16.666667%;
      3: 'xs:basis-3/12', // 25%;
      4: 'xs:basis-4/12', // 33.333333%;
      5: 'xs:basis-5/12', // 41.666667%;
      6: 'xs:basis-6/12', // 50%;
      7: 'xs:basis-7/12', // 58.333333%;
      8: 'xs:basis-8/12', // 66.666667%;
      9: 'xs:basis-9/12', // 75%;
      10: 'xs:basis-10/12', // 83.333333%;
      11: 'xs:basis-11/12', // 91.666667%;
      12: 'xs:basis-full' // 100%;
    },
    sm: {
      1: 'sm:basis-1/12',
      2: 'sm:basis-2/12',
      3: 'sm:basis-3/12',
      4: 'sm:basis-4/12',
      5: 'sm:basis-5/12',
      6: 'sm:basis-6/12',
      7: 'sm:basis-7/12',
      8: 'sm:basis-8/12',
      9: 'sm:basis-9/12',
      10: 'sm:basis-10/12',
      11: 'sm:basis-11/12',
      12: 'sm:basis-full'
    },
    md: {
      1: 'md:basis-1/12',
      2: 'md:basis-2/12',
      3: 'md:basis-3/12',
      4: 'md:basis-4/12',
      5: 'md:basis-5/12',
      6: 'md:basis-6/12',
      7: 'md:basis-7/12',
      8: 'md:basis-8/12',
      9: 'md:basis-9/12',
      10: 'md:basis-10/12',
      11: 'md:basis-11/12',
      12: 'md:basis-full'
    },
    lg: {
      1: 'lg:basis-1/12',
      2: 'lg:basis-2/12',
      3: 'lg:basis-3/12',
      4: 'lg:basis-4/12',
      5: 'lg:basis-5/12',
      6: 'lg:basis-6/12',
      7: 'lg:basis-7/12',
      8: 'lg:basis-8/12',
      9: 'lg:basis-9/12',
      10: 'lg:basis-10/12',
      11: 'lg:basis-11/12',
      12: 'lg:basis-full'
    },
    xl: {
      1: 'xl:basis-1/12',
      2: 'xl:basis-2/12',
      3: 'xl:basis-3/12',
      4: 'xl:basis-4/12',
      5: 'xl:basis-5/12',
      6: 'xl:basis-6/12',
      7: 'xl:basis-7/12',
      8: 'xl:basis-8/12',
      9: 'xl:basis-9/12',
      10: 'xl:basis-10/12',
      11: 'xl:basis-11/12',
      12: 'xl:basis-full'
    },
    padding: paddings,
    position: positions,
    grow,
    background: BackgroundVariants
  },
  compoundVariants: [],
  defaultVariants: {
    position: 'auto' as keyof typeof positions,
    padding: 2 as keyof typeof paddings,
    grow: false
  }
}

export const FlexItemVariants = baseCva('w-full ', cvaProperties)
