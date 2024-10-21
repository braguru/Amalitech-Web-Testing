export interface ButtonProps {
    children?: React.ReactNode
    primary?: boolean
    label?: string
    size?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }