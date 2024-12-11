import { cva } from 'class-variance-authority'
import { ThemeColorVariant } from './NumberTile.utils'
import { cols } from '../row/Row.cva'

export const NumberTilesVariant = cva('p-4', {
  variants: {
    theme: ThemeColorVariant,
    columns: cols
  },
  defaultVariants: {
    theme: 'primary',
    columns: 4
  }
})
