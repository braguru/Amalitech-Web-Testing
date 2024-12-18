import React, { PropsWithChildren, ReactNode } from 'react'
import { FlexItemProps } from './FlexItem.types'
import { cn } from '../../../shared/utils'
import { FlexItemVariants } from './FlexItem.cva'

const FlexItem = ({
  position,
  xs,
  sm,
  lg,
  md,
  xl,
  padding,
  children,
  className,
  ...props
}: Readonly<PropsWithChildren<FlexItemProps>>): ReactNode => (
  <div
    aria-label={props['aria-label'] ?? 'flex-item'}
    className={cn(
      FlexItemVariants({
        position,
        padding,
        xs,
        sm,
        lg,
        md,
        xl
      }),
      className
    )}
  >
    {' '}
    {children}
  </div>
)

export default FlexItem
