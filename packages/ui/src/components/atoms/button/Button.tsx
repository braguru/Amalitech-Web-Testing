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
      className='p-2xl shadow-3xl bg-primary-500  rounded-full'
    >
      {children ? children : label}
    </button>
  )
}
