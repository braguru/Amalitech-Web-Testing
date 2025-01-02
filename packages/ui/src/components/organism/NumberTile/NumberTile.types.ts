import { borderColor } from 'src/components/molecules/numberTileGrid/NumberTile.utils'
import { cols } from '../../atoms/row/Row.cva'

export interface NumberTile {
  value: number
  caption: string
  description?: string
}

interface BaseNumberTilesProps {
  variant: 'grid' | 'step'
  numbers: NumberTile[]
  className?: string
  symbol: 'percentage' | 'plus'
}

interface NumberTilesStepProps extends BaseNumberTilesProps {
  variant: 'step'
  theme: 'mixed' | 'primary-alt'
  columns?: never
}

export interface NumberTilesGridProps extends BaseNumberTilesProps {
  variant: 'grid'
  theme: 'primary' | 'secondary'
  columns?: keyof typeof cols
  borderColor: keyof typeof borderColor
}

export type NumberTilesProps = NumberTilesStepProps | NumberTilesGridProps
