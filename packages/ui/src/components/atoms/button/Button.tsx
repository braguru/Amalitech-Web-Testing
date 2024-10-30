import React from 'react'
import { ButtonProps } from './Button.types'

export function Button({ label, backgroundColor, children }: ButtonProps) {
  const style = {
    backgroundColor,
    border: 'none'
  }

  return (
    <button
      style={style}
      className="bg-primary-600 rounded-round p-lg shadow-xxl"
    >
      {children ? children : label}
    </button>
  )
}
