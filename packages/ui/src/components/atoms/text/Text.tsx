import React, { PropsWithChildren } from 'react'
import { TextProps } from './Text.types'
import { TextVariant } from './Text.cva'

export const Text = ({
  type,
  variant,
  color,
  children,
  className = ''
}: PropsWithChildren<TextProps>): React.ReactElement => (
  <p
    className={` ${TextVariant({ type: type, variant: variant, color: color })} ${className} `}
  >
    {children}
  </p>
)
