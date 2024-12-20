import { TextColorVariants } from '../../../shared/colors.cva'
import { NumberTile } from '../numberTileGrid/NumberTile.types'
import { StepperColorResult } from './NumberTileStepper.types'

export const StepperBackgroundVariants = {
  'primary-alt': 'bg-primary-alt',
  'primary-alt-800': 'bg-primary-alt-800',
  'primary-alt-700': 'bg-primary-alt-700',
  'primary-alt-900': 'bg-primary-alt-900',
  'secondary-600': 'bg-secondary-600',
  'accent-alt-yellow': 'bg-accent-600',
  'neutral-100': 'bg-neutral-100'
}

export const stepperColors = {
  'primary-alt': [
    'primary-alt-700',
    'primary-alt-800',
    'primary-alt-900',
    'primary-alt'
  ],
  mixed: ['neutral-100', 'primary-alt', 'secondary-600', 'accent-alt-yellow']
}

export const stepperFontColor = {
  'accent-alt-yellow': TextColorVariants['primary-alt'],
  'secondary-600': TextColorVariants.white,
  'primary-alt': TextColorVariants.white,
  'neutral-100': TextColorVariants['primary-alt'],
  'primary-alt-900': TextColorVariants.white,
  'primary-alt-800': TextColorVariants.white,
  'primary-alt-700': TextColorVariants.white
}

export const stepperBreakPointMdValues = [6, 8, 10, 12]
export const stepperHeightClasses = [
  'lg:h-[252px]',
  'lg:h-[352px]',
  'lg:h-[452px]',
  'lg:h-[552px]'
]

export const validateNumbers = (numbers: NumberTile[]): void => {
  if (numbers?.length < 2 || numbers?.length > 4) {
    throw new Error('numbers array must have between 2 to 4 items.')
  }
}

/**
 * Utility function to get the background color and font color for a stepper item.
 * @param theme - The current theme ('mixed' | 'shade').
 * @param index - The index of the current item.
 * @param totalItems - The total number of items in the stepper.
 * @returns An object containing `bgColor` and `fontColor`.
 */
export function getStepperColors(
  theme: keyof typeof stepperColors,
  index: number,
  totalItems: number
): StepperColorResult {
  const colorScheme = stepperColors[theme]

  // Determine the slice index based on the total number of items. This is used for the dynamic rendering of the colors
  const sliceIndex = totalItems === 2 ? 2 : totalItems === 3 ? 1 : 0

  const bgColor = colorScheme?.slice(sliceIndex)[
    index
  ] as keyof typeof StepperBackgroundVariants

  const fontColor = stepperFontColor[bgColor]

  return { bgColor, fontColor }
}

export const sortNumberTiles = (
  numbers: NumberTile[] | undefined
): NumberTile[] | undefined =>
  numbers?.slice().sort((num1, num2) => num1.value - num2.value)
