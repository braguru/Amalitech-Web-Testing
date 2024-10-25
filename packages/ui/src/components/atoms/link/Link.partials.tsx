import React from 'react'
import { LinkProps } from './Link.type'
import NextLink from 'next/link'
import { cva, VariantProps, cx } from 'class-variance-authority'
import { ArrowNorthEast } from '../icons/ArrowNorthEast'

const LinkVariants = cva(
  [
    'text-primary font-semibold hover:text-primary-700 hover:underline focus:text-primary-700 focus:border-secondary focus:border-2 visited:bg-primary-400 disabled:text-primary-200 group'
  ],
  {
    variants: {
      variant: {
        internal: ['focus:py-0.5'],
        external: ['flex items-center gap-1 focus:py-1 px-0.5']
      }
    },
    compoundVariants: [{}],
    defaultVariants: {
      variant: 'internal'
    }
  }
)

export type LinkVariantsProps = VariantProps<typeof LinkVariants>

export const ExternalLink = ({
  href,
  target,
  title,
  children,
  color,
  iconLeft = false,
  className,
  style,
  variant,
  ...props
}: LinkProps) => {
  return (
    <a
      href={href}
      target={target}
      title={title}
      className={cx(LinkVariants({ variant }), className)}
      style={color ? { color: color, ...style } : style}
      {...props}
    >
      <span
        className={`flex items-center flex-row gap-1 ${iconLeft ? 'flex-row-reverse' : ''}`}
        style={color ? { color: color } : {}}
      >
        {children}
        <ArrowNorthEast
          className="w-[14px] h-[14px] transition-colors group-hover:text-primary-700"
          style={color ? { color: color, fill: color } : {}}
        />
      </span>
    </a>
  )
}

export const InternalLink = ({
  href = '',
  variant,
  children,
  color,
  style,
  ...props
}: LinkProps) => {
  return (
    <NextLink
      href={href}
      className={cx(LinkVariants({ variant }), props.className)}
      style={color ? { color: color, ...style } : style}
      {...props}
    >
      {children}
    </NextLink>
  )
}
