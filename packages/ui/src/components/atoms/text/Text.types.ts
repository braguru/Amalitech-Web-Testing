import { TextVariantProps } from './Text.cva'

export interface TextProps
  extends TextVariantProps,
    Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'> {
  className?: string
}
