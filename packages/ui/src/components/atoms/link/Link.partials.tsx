import React from 'react'
import { LinkProps } from './Link.type'
import NextLink from 'next/link'
import { cva, VariantProps, cx } from 'class-variance-authority'
import { ArrowNorthEast } from '../icons/ArrowNorthEast'

const LinkVariants = cva(
  [
    'text-primary font-semibold hover:text-primary-700 hover:underline focus:text-primary-700 visited:bg-primary-400 disabled:text-primary-200 group'
  ],
  {
    variants: {
      variant: {
        internal: [''],
        external: ['flex items-center gap-1'],
        button: ['flex gap-1 p-10 border-secondary border-2  rounded-sm']
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
      style={style}
      {...props}
    >
      <span
        className={`flex items-center flex-row gap-1 ${iconLeft ? 'flex-row-reverse' : ''}`}
      >
        {children}
        <ArrowNorthEast className="w-[14px] h-[14px] transition-colors group-hover:text-primary-700" />
      </span>
    </a>
  )
}

export const InternalLink = ({
  href = '',
  variant,
  children,
  ...props
}: LinkProps) => {
  return (
    <NextLink
      href={href}
      className={cx(LinkVariants({ variant }), props.className)}
      {...props}
    >
      {children}
    </NextLink>
  )
}
