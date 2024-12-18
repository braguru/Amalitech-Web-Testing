import { BackgroundVariants } from 'src/shared/colors.cva'
import { CVAVariantProps } from '../../../shared/utils.type'
import { RowVariants } from './Row.cva'
export interface RowProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CVAVariantProps<typeof RowVariants> {
  background?: keyof typeof BackgroundVariants
}
