import { VariantProps } from 'class-variance-authority'
import { NumberTilesVariant } from './NumberTile.cva'
import { cols } from '../../atoms/row/Row.cva'
import { borderColor } from './NumberTile.utils'

export interface NumberTile {
  value: number
  caption: string
  description?: string
}

export interface NumberTilesProps
  extends VariantProps<typeof NumberTilesVariant> {
  theme: 'primary' | 'secondary'
  numbers: NumberTile[]
  className?: string
  symbol: 'percentage' | 'plus'
  border?: keyof typeof borderColor
  columns?: keyof typeof cols
}
