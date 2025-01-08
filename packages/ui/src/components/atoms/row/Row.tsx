import React, { PropsWithChildren } from 'react'
import { cn } from '../../../shared/utils'
import { RowProps } from './Row.types'
import { RowVariants } from './Row.cva'

export const Row = ({
  children,
  cols,
  gap,
  background,
  className,
  ...Props
}: Readonly<PropsWithChildren<RowProps>>): React.ReactElement => (
  <div
    aria-label={Props['aria-label'] ?? 'row-item'}
    className={cn(
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
