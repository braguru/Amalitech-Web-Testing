import { BackgroundVariants } from 'src/shared/colors.cva'
import { CVAVariantProps } from 'src/shared/utils.type'
import { FlexVariants } from './Flex.cva'

export interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CVAVariantProps<typeof FlexVariants> {
  background?: keyof typeof BackgroundVariants
}
