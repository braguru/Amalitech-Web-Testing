import { RowVariants } from './Row'
import { CVAVariantProps } from 'src/shared/utils.type'

export interface RowProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CVAVariantProps<typeof RowVariants> {
  children: React.ReactNode
  classNames?: string
}
