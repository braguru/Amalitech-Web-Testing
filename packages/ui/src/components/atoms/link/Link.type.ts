import { ComponentProps } from 'react'

export enum TargetProps {
  BLANK = '_blank',
  SELF = '_self',
  PARENT = '_parent',
  TOP = '_top',
}

export type LinkProps = {
  iconLeft?: boolean
  external?: boolean
  label?: string
} & ComponentProps<'a'>
