import React from 'react'
import { HeadlineProps } from './Headline.types'
import { DynamicHeading } from './DynamicHeading'
import { cva } from 'class-variance-authority'

export const Headline = ({
  level,
  as,
  color,
  children,
  className = '',
  ...props
}: HeadlineProps): React.ReactElement => {
  const style = { color: `var(--${color || 'base-black'})` }
  const headlineVariants = cva('font-sans font-bold', {
    variants: {
      level: {
        1: [
          'text-body-2xl leading-lh-headline-xs md:text-heading-lg lh-headline-xl '
        ],
        2: [
          'text-body-xl leading-lh-headline-xxs md:text-heading-md lh-headline-lg'
        ],
        3: ['text-heading-3xs md:text-heading-sm'],
        4: ['text-body-lg leading-lh-headline-3xs md:text-heading-xs'],
        5: ['text-body-md leading-lh-body-lg md:text-heading-xxs lh-body-3xl'],
        6: ['text-body-sm leading-lh-body-md md:text-body-lg lh-headline-2xs']
      },
      as: {
        'display-1': 'text-heading-md md:text-heading-3xl lh-headline-4xl ',
        'display-2': 'text-heading-sm md:text-heading-xxl lh-headline-3xl ',
        'display-3': 'text-heading-xs md:text-heading-xl lh-headline-2xl '
      }
    },
    defaultVariants: {
      level: 2,
      as: undefined
    }
  })
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
