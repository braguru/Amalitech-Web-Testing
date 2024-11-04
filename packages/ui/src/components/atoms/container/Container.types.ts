import { colors } from 'src/tailwind-theme-objects'

type BackgroundType = Extract<
  keyof typeof colors,
  | 'primary'
  | 'secondary'
  | 'primary-alt'
  | 'secondary-alt'
  | 'accent'
  | 'accent-alt'
>

export interface ContainerType extends React.HTMLAttributes<HTMLDivElement> {
  fluid?: boolean
  classNames?: string
  background?: BackgroundType
  gap?: GapsType
}

export type GapsType = 1 | 2 | 8 | 12 | 16 | 24 | 32 | 48
