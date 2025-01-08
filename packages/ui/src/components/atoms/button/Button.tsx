import React from 'react'
import { ButtonProps } from './Button.types'
import { cn } from '../../../shared/utils'

export const Button = ({
  label,
  backgroundColor,
  className
}: ButtonProps): React.ReactElement => {
  const style = {
    backgroundColor,
    border: 'none'
  }

  return (
    <button
      style={style}
      className={cn(
        'bg-primary-600 font-semibold leading-lh-headline-2xs rounded-full p-2xl shadow-3xl',
        className
      )}
    >
      {label}
    </button>
  )
}
