import React, { PropsWithChildren } from 'react'
import { ContainerType } from './Container.types'
import {
  checkColorValidity,
  getMarginBottom,
  getThemeColor
} from './Container.utils'

export function Container(props: Readonly<PropsWithChildren<ContainerType>>) {
  const {
    children,
    className,
    background,
    gap = 8,
    fluid = false,
    ...otherProps
  } = props

  const marginBottom = `mb-${getMarginBottom(gap)}`

  const containerColor = getThemeColor(
    typeof background === 'string' ? background : undefined
  )
  const bgColor = checkColorValidity(containerColor)
    ? containerColor
    : undefined

  return (
    <section
      aria-label={otherProps['aria-label'] ?? 'container'}
      className={`${marginBottom} ${fluid ? 'w-full' : 'container'}${className ?? ''}`}
      style={{
        ...(bgColor ? { backgroundColor: bgColor } : {})
      }}
      {...otherProps}
    >
      {children}
    </section>
  )
}
