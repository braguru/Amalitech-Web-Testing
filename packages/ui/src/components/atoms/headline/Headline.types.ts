import React from 'react'
import { TextColorVariants } from '../../../shared/colors.cva'

export interface HeadlineProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6
  as?: 'display-1' | 'display-2' | 'display-3'
  color?: keyof typeof TextColorVariants
  className?: string
}
