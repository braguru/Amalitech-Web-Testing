import { ButtonProps } from './Button.types'

export const buttonPrimaryArgs: Partial<ButtonProps> = {
  label: 'Read More',
  size: 'md'
}

export const buttonSecondaryArgs: Partial<ButtonProps> = {
  label: 'Discover More',
  backgroundColor: '#2bd465',
  size: 'md'
}

export const buttonSmallArgs: Partial<ButtonProps> = {
  label: 'More Info',
  backgroundColor: 'yellow',
  size: 'sm'
}

export const buttonLargeArgs: Partial<ButtonProps> = {
  label: 'Read More',
  backgroundColor: 'gold',
  size: 'lg'
}

export const longLabelArgs: Partial<ButtonProps> = {
  label: 'This is a button with a long label',
  backgroundColor: 'cyan',
  size: 'lg'
}
