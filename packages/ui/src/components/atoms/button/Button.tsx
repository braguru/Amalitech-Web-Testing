import React from 'react'
import { ButtonProps } from './Button.types'

export const Button = ({
  label,
  backgroundColor,
  children
}: ButtonProps): React.ReactElement => {
  const style = {
    backgroundColor,
    border: 'none'
  }

  return (
    <button
      style={style}
      className="bg-primary-600 font-semibold leading-lh-headline-2xs rounded-full p-2xl shadow-3xl"
    >
      {children ? children : label}
    </button>
  )
}
