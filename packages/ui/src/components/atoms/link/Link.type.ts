import { ComponentProps } from 'react'
import { LinkVariantsProps } from './Link.cva'

export enum TargetProps {
  BLANK = '_blank',
  SELF = '_self',
  PARENT = '_parent',
  TOP = '_top'
}

export interface LinkProps
  extends Omit<ComponentProps<'a'>, 'color'>,
    LinkVariantsProps {
  iconLeft?: boolean
  external?: boolean
  label?: string
}
