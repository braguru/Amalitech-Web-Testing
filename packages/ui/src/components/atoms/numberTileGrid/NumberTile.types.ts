import { VariantProps } from 'class-variance-authority'
import { NumberTilesVariant } from './NumberTile.cva'
import { cols } from '../row/Row.cva'

export interface NumberTile {
  value: number
  caption: string
  description?: string
  symbol?: 'percentage' | 'plus'
}

export interface NumberTilesProps
  extends VariantProps<typeof NumberTilesVariant> {
  theme: 'primary' | 'secondary' | 'dark' | 'light'
  numbers: NumberTile[]
  className?: string
  background?: 'mixed' | 'shades'
  columns?: keyof typeof cols
}
