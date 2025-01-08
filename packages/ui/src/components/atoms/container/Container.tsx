import React, { PropsWithChildren } from 'react'
import { cn } from '../../../shared/utils'
import { ContainerType } from './Container.types'
import ContainerVariants from './Container.cva'

export const Container = ({
  children,
  className,
  background,
  gap,
  fluid,
  ...props
}: Readonly<PropsWithChildren<ContainerType>>): React.ReactElement => (
  <section
    aria-label={props['aria-label'] ?? 'container'}
    className={cn(
      ContainerVariants({
        background,
        gap,
        fluid
      }),
      className
    )}
    {...props}
  >
    {children}
  </section>
)
