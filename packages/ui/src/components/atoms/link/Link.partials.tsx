import React, { PropsWithChildren } from 'react'
import NextLink from 'next/link'
import { ArrowNorthEast } from '../icons/ArrowNorthEast'
import { LinkProps, TargetProps } from './Link.type'
import { cn } from '../../../shared/utils'
import { getBorderColorClass, getIconColorClass } from './Link.utils'
import { LinkVariants } from './Link.cva'

export const ExternalLink = ({
  href = '',
  target = TargetProps.BLANK,
  title,
  label,
  color,
  iconLeft = false,
  className,
  style,
  variant = 'external',
  children,
  as,
  ...props
}: Readonly<PropsWithChildren<LinkProps>>): React.ReactElement => {
  const content = children ?? label

  return (
    <a
      href={href}
      target={target}
      title={title ?? label}
      className={cn(LinkVariants({ variant, as, color }), className)}
      style={style}
      {...props}
    >
      {as === 'icon' ? (
        children
      ) : (
        <span
          className={cn(
            'flex items-center gap-1 border-b border-transparent',
            getBorderColorClass(color),
            {
              'flex-row-reverse': iconLeft
            }
          )}
        >
          {content}
          <ArrowNorthEast
            className={cn('w-3.5 h-3.5', getIconColorClass(color))}
          />
        </span>
      )}
    </a>
  )
}

export const InternalLink = ({
  href = '',
  label,
  color,
  style,
  variant = 'internal',
  as,
  className,
  children,
  ...props
}: Readonly<PropsWithChildren<LinkProps>>): React.ReactElement => (
  <NextLink
    href={href}
    className={cn(LinkVariants({ variant, as, color }), className)}
    style={style}
    {...props}
  >
    {children ?? label}
  </NextLink>
)
