import { BackgroundVariants } from 'src/shared/colors.cva'
import { CVAVariantProps } from 'src/shared/utils.type'
import { FlexItemVariants } from './FlexItem.cva'

export interface FlexItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CVAVariantProps<typeof FlexItemVariants> {
  background?: keyof typeof BackgroundVariants
}
