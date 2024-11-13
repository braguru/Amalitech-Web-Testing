import { CVAVariantProps } from 'src/shared/utils.type'
import { ColumnVariants } from './Column.cva'

export type ColumnProps = React.HTMLAttributes<HTMLDivElement> &
  CVAVariantProps<typeof ColumnVariants>
