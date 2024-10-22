import React from 'react'
import {ButtonProps} from "./Button.types";

export function Button({ label, backgroundColor, size = "md", children }: ButtonProps) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.75;

  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale}rem`,
    border: "none",
    borderRadius: ".5rem"
  };

  return (
    <button style={style}>
      {children ? children :label}
    </button>
  );
}
