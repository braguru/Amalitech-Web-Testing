import React from 'react'
import { LinkProps } from './Link.type'
import NextLink from 'next/link'

export const ExternalLink = ({
  href,
  target,
  title,
  children,
  color,
  iconLeft,
  className,
  style,
  ...props
}: LinkProps) => {
  return (
    <a
      href={href}
      target={target}
      title={title}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </a>
  )
}

export const InternalLink = ({ href, children, ...props }: LinkProps) => {
  return (
    // <NextLink href={href} {...rest}>
    //   {children}
    // </NextLink>
    <></>
  )
}
