import React from 'react'
import { LinkProps } from './Link.type'
import NextLink from 'next/link'

export const ExternalLink = (props: LinkProps) => {
  const {
    href,
    target,
    title,
    children,
    color,
    iconLeft,
    className,
    style,
    ...rest
  } = props

  return (
    <a
      href={href}
      target={target}
      title={title}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </a>
  )
}

export const InternalLink = (props: LinkProps) => {
  const { href, children, ...rest } = props

  return (
    // <NextLink href={href} {...rest}>
    //   {children}
    // </NextLink>
    <></>
  )
}
