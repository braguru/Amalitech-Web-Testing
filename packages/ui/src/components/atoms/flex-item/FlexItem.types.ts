import { CVAVariantProps } from '../../../shared/utils.type'
import { FlexItemVariants } from './FlexItem.cva'

export interface FlexItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CVAVariantProps<typeof FlexItemVariants> {
}
