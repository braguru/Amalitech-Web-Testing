import React, { PropsWithChildren } from 'react'
import { FlexProps } from './Flex.types'
import { FlexVariants } from './Flex.cva'
import { cn } from '../../../shared/utils'

const Flex = ({
  children,
  background,
  gap,
  position,
  wrap,
  reverse,
  className,
  direction,
  padding,
  xs,
  sm,
  lg,
  md,
  xl,
  ...props
}: Readonly<PropsWithChildren<FlexProps>>): React.ReactElement => (
  <div
    aria-label={props['aria-label'] ?? 'flex-wrapper'}
    className={cn(
      FlexVariants({
        background,
        padding,
        gap,
        position,
        wrap,
        reverse,
        direction,
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

export default Flex
