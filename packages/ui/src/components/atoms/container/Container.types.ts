import { BackgroundVariants } from '../../../shared/colors.cva'

export interface ContainerType extends React.HTMLAttributes<HTMLDivElement> {
  fluid?: boolean
  background?: keyof typeof BackgroundVariants
  gap?: GapsType
}

type GapsType = 1 | 2 | 8 | 12 | 16 | 24 | 32 | 48
