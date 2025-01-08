import { LinkVariantsProps } from './Link.cva'

export const getBorderColorClass = (
  color?: LinkVariantsProps['color']
): string => {
  switch (color) {
    case 'secondary':
      return 'group-hover:border-secondary-700'
    case 'accent':
      return 'group-hover:border-accent-500'
    case 'accent-alt':
      return 'group-hover:border-accent-alt-700'
    case 'neutral':
      return 'group-hover:border-neutral-200'
    default:
      return 'group-hover:border-primary-700'
  }
}

export const getIconColorClass = (
  color?: LinkVariantsProps['color']
): string => {
  switch (color) {
    case 'secondary':
      return 'text-secondary group-hover:text-secondary-700'
    case 'accent':
      return 'text-accent group-hover:text-accent-500'
    case 'accent-alt':
      return 'text-accent-alt group-hover:text-accent-alt-700'
    case 'neutral':
      return 'text-neutral-100 group-hover:text-neutral-200'
    default:
      return 'text-primary group-hover:text-primary-700'
  }
}
