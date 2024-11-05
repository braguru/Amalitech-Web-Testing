import React, { PropsWithChildren } from 'react'
import { ColumnProps } from './Column.types'
import { cva, cx } from 'class-variance-authority'
import { columnConfig } from './Column.utils'

export const ColVariants = cva('col-span-full', {
  variants: {
    background: {
      primary: 'bg-primary',
      'primary-alt': 'bg-primary-alt',
      secondary: 'bg-secondary',
      accent: 'bg-accent',
      'accent-alt': 'bg-accent-alt'
    },
     ...columnConfig
  },
  defaultVariants: {
    sm: 12,
    xs: 12,
    md: 0,
    lg: 0,
    xl: 0
  }
})

export const Column = ({
  children,
  background,
  className,
  xs,
  sm,
  lg,
  md,
  xl,
  ...props
}: PropsWithChildren<ColumnProps>): React.ReactElement => (
  <div
    role="presentation"
    aria-label={props['aria-label'] ?? 'col-item'}
    className={cx(
      ColVariants({
        background,
        xs,
        sm,
        lg,
        md,
        xl
      }),
      className
    )}
    {...props}
  >
    {children}
  </div>
)

export default Column
