import React from 'react'
import { HeadlineProps } from './Headline.types'
import { DynamicHeading } from './DynamicHeading'
import { cva } from 'class-variance-authority'

export const Headline: React.FC<HeadlineProps> = ({
  level,
  as,
  color,
  children,
  className = '',
  ...props
}) => {
  const style = { color: `var(--${color || 'base-black'})` };
  const headlineVariants = cva('font-sans font-bold', {
    variants: {
      level: {
        1: ['text-body-xxl leading-lh-headline-xs md:text-heading-lg lh-headline-xl '],
        2: ['text-body-xl leading-lh-headline-xxs md:text-heading-md lh-headline-lg'],
        3: ['text-heading-xxxs md:text-heading-sm'],
        4: ['text-body-lg leading-lh-headline-xxxs md:text-heading-xs'],
        5: ['text-body-md leading-lh-body-lg md:text-heading-xxs lh-body-xxxl'],
        6: ['text-body-sm leading-lh-body-md md:text-body-lg lh-headline-xxs'],
      },
      as: {
        'display-1': 'text-heading-md md:text-heading-xxxl lh-headline-xxxxl ',
        'display-2': 'text-heading-sm md:text-heading-xxl lh-headline-xxxl ',
        'display-3': 'text-heading-xs md:text-heading-xl lh-headline-xxl ',
      },
    },
      defaultVariants: {
        level: 2,
        as: undefined
      }
  });
  const headingCheck = level > 0 && level < 7 ? level : 2

  return (
    <DynamicHeading
      level={headingCheck}
      style={style}
      className={`${headlineVariants({ level: headingCheck, as })} ${className}`}
      {...props}
    >
      {children}
    </DynamicHeading>
  )
}
