import { cva } from 'class-variance-authority'
import React, { PropsWithChildren } from 'react'
import { cn } from 'src/shared/utils'
import { ContainerType } from './Container.types'

const ContainerVariants = cva('', {
  variants: {
    background: {
      primary: 'bg-primary',
      'primary-alt': 'bg-primary-alt',
      secondary: 'bg-secondary',
      accent: 'bg-accent',
      'accent-alt': 'bg-accent-alt',
    },
    fluid: {
      true: 'w-full',
      false: 'xs:mx-4 sm:!mx-5 md:!mx-6 lg:!mx-10',
    },
    gap: {
      1: 'mb-xxs',
      2: 'mb-xs',
      8: 'mb-sm',
      12: 'mb-md',
      16: 'mb-lg',
      24: 'mb-xl',
      32: 'mb-2xl',
      48: 'mb-3xl',
    },
  },
  defaultVariants: {
    gap: 8,
    fluid: false,
  },
})

export const Container = ({
  children,
  className,
  background,
  gap,
  fluid,
  ...props
}: PropsWithChildren<ContainerType>): React.ReactElement => (
  <section
    aria-label={props['aria-label'] ?? 'container'}
    className={cn(
      ContainerVariants({
        background,
        gap,
        fluid,
      }),
      className,
    )}
    {...props}
  >
    {children}
  </section>
)
