import React from 'react';
import style from './Button.module.css';
export interface ButtonProps {
  children?: React.ReactNode
  primary?: boolean
  label?: string
  size?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({ label, ...other }: ButtonProps): JSX.Element {
  return (
    <>
      <button className={style.storybook_button} type="button" {...other}>
        {label}
      </button>
    </>
  )
}

Button.displayName = 'Button'
