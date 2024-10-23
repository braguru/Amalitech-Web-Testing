import React from 'react'
import {ButtonProps} from "./Button.types";


export function Button({ label, backgroundColor, size = "md", children }: ButtonProps) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.75;

  const style = {
    backgroundColor,
    border: "none",
  };

  return (
    <button style={style} className='bg-primary-600 rounded-round p-lg shadow-xxl'>
      {children ? children :label}
    </button>
  );
}
