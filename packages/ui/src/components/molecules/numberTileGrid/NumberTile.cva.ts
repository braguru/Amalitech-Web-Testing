import { cva } from 'class-variance-authority'
import { borderColor, ThemeColorVariant } from './NumberTile.utils'
import { cols } from '../../atoms/row/Row.cva'

export const NumberTilesVariant = cva('p-4', {
  variants: {
    theme: ThemeColorVariant,
    columns: cols,
    border: borderColor
  },
  defaultVariants: {
    theme: 'primary',
    columns: 4,
    border: 'light'
  }
})
