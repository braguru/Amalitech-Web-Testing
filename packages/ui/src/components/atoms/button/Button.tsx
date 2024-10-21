import React from 'react'
import { ButtonProps } from './Button.types'

export function Button({ label, ...other }: ButtonProps): JSX.Element {
  return (
    <button className="border-4 transition-all text-primary  border-white bg-primary hocus:bg-white  hocus:border-primary px-5 py-2 rounded-full text-white hocus:text-primary font-semibold" type="button" {...other}>
      {label}
    </button>
  )
}

Button.displayName = 'Button'
