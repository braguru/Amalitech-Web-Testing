import { cva } from 'class-variance-authority'
import { BackgroundVariants } from '../../../shared/colors.cva'
import { paddings } from '../flex-item/FlexItem.cva'

const flexDirection = {
  row: 'flex-row',
  column: 'flex-col'
}

export const positions = {
  top: 'items-start',
  right: 'justify-end',
  bottom: 'items-end',
  left: 'justify-start',
  centerVertical: 'items-center',
  centerHorizontal: 'place-content-center',
  centerBottom: 'justify-center items-end',
  XYCenter: 'place-content-center items-center',
  rightBottom: 'justify-end items-end',
  leftBottom: 'justify-start items-end',
  spaceBetween: 'justify-between',
  spaceAround: 'justify-around'
}

export const gaps = {
  1: 'gap-xxs',
  2: 'gap-xs',
  8: 'gap-sm',
  12: 'gap-md',
  16: 'gap-lg',
  24: 'gap-xl',
  32: 'gap-2xl',
  48: 'gap-3xl'
}

export const FlexVariants = cva('flex', {
  variants: {
    padding: paddings,
    xs: {
      row: 'xs:flex-row',
      column: 'xs:flex-col'
    },
    sm: {
      row: 'sm:flex-row',
      column: 'sm:flex-col'
    },
    md: {
      row: 'md:flex-row',
      column: 'md:flex-col'
    },
    lg: {
      row: 'lg:flex-row',
      column: 'lg:flex-col'
    },
    xl: {
      row: 'xl:flex-row',
      column: 'xl:flex-col'
    },
    direction: flexDirection,
    reverse: {
      true: null, // No direct class for reverse
      false: null // No direct class for non-reverse
    },
    wrap: {
      true: 'flex-wrap',
      false: 'lg:flex-nowrap'
    },
    position: positions,
    gap: gaps,
    background: BackgroundVariants
  },
  compoundVariants: [
    {
      direction: 'column',
      reverse: true,
      className: 'flex-col-reverse'
    },
    {
      direction: 'row',
      reverse: true,
      className: 'flex-row-reverse'
    },
    {
      wrap: true,
      direction: 'row',
      reverse: true,
      className: 'flex-wrap-reverse'
    }
  ],
  defaultVariants: {
    gap: 2 as keyof typeof gaps,
    padding: 2 as keyof typeof paddings,
    direction: 'row' as keyof typeof flexDirection,
    reverse: false,
    position: 'left' as keyof typeof positions
  }
})
