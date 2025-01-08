import { BackgroundVariants } from '../../../shared/colors.cva'
import { CVAVariantProps } from '../../../shared/utils.type'
import { FlexVariants } from './Flex.cva'

export interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CVAVariantProps<typeof FlexVariants> {
  background?: keyof typeof BackgroundVariants
}
