import { CVAVariantProps } from 'src/shared/utils.type'
import { ColVariants } from './Column'

export interface ColumnProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CVAVariantProps<typeof ColVariants> {
  children: React.ReactNode
  classNames?: string
}
