export enum TargetProps {
  BLANK = '_blank',
  SELF = '_self',
  PARENT = '_parent',
  TOP = '_top',
}

export type LinkProps = {
  label: string
  external?: boolean
  href: string
  target: TargetProps
  title: string
  children?: React.ReactNode
  color: string
  iconLeft?: boolean
  className?: string
  style?: React.CSSProperties
}
