import React, { PropsWithChildren } from 'react'
import { cn } from '../../../shared/utils'
import { ColumnProps } from './Column.types'
import { ColumnVariants } from './Column.cva'

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
}: Readonly<PropsWithChildren<ColumnProps>>): React.ReactElement => (
  <div
    className={cn(
      ColumnVariants({
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
