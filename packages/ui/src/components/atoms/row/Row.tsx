import React, { PropsWithChildren } from 'react'
import { RowProps } from './Row.types'
import { cva, cx } from 'class-variance-authority'

export const RowVariants = cva('grid', {
  variants: {
    background: {
      primary: 'bg-primary',
      'primary-alt': 'bg-primary-alt',
      secondary: 'bg-secondary',
      accent: 'bg-accent',
      'accent-alt': 'bg-accent-alt'
    },
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      7: 'grid-cols-7',
      8: 'grid-cols-8',
      9: 'grid-cols-9',
      10: 'grid-cols-10',
      11: 'grid-cols-11',
      12: 'grid-cols-12'
    },
    gap: {
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
  },
  defaultVariants: {
    gap: 4,
    cols: 3
  }
})

export const Row = ({
  children,
  cols,
  gap,
  background,
  className,
  ...Props
}: PropsWithChildren<RowProps>): React.ReactElement => (
  <div
    aria-label={Props['aria-label'] ?? 'row-item'}
    className={cx(
      RowVariants({
        background,
        gap,
        cols
      }),
      className
    )}
    {...Props}
  >
    {children}
  </div>
)

export default Row
