import { ComponentProps } from 'react'
import { LinkVariantsProps } from './Link.partials'

export enum TargetProps {
  BLANK = '_blank',
  SELF = '_self',
  PARENT = '_parent',
  TOP = '_top'
}

export type LinkProps = {
  iconLeft?: boolean
  external?: boolean
  label?: string
} & ComponentProps<'a'> &
  LinkVariantsProps
