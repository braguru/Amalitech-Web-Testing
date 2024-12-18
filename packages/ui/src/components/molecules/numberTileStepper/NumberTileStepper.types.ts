import { VariantProps } from 'class-variance-authority'
import { NumberTile } from '../numberTileGrid/NumberTile.types'
import { StepperVariant } from './NumberTileStepper.cva'
import { StepperBackgroundVariants } from './NumberTileStepper.utils'

export interface StepperProps
  extends VariantProps<typeof StepperVariant>,
    React.HTMLAttributes<HTMLDivElement> {
  numbers: NumberTile[]
  symbol: 'percentage' | 'plus' | ''
  theme?: 'mixed' | 'primary-alt'
}

export interface StepperColorResult {
  bgColor: keyof typeof StepperBackgroundVariants
  fontColor: string
}
