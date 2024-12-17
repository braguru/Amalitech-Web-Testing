import { NumberTile } from '../../atoms/numberTileGrid/NumberTile.types'
import { StepperProps } from './NumberTileStepper.types'

export const stepperData: NumberTile[] = [
  {
    value: 5000,
    caption: 'Individual Jobs',
    description:
      'Lorem ipsum dolor sit amet consectetur. Semper pellentesque risus nulla id eu commodo aenean pulvinar commodo aenean.'
  },
  {
    value: 400,
    caption: 'Individual Jobs Available',
    description: 'Lorem ipsum dolor sit amet consectetur. '
  },
  {
    value: 600,
    caption: 'Employees',
    description:
      'Semper pellentesque risus nulla id eu commodo aenean pulvinar.'
  },
  {
    value: 3000,
    caption: 'Trained Individuals',

    description:
      'Dolor sit amet consectetur. Semper pellentesque risus nulla id eu commodo aenean pulvinar.'
  }
]

export const stepperWith4Args: StepperProps = {
  numbers: stepperData,
  theme: 'mixed',
  symbol: 'percentage'
}
export const stepperWith3Args: StepperProps = {
  numbers: [
    {
      value: 5000,
      caption: 'Individual Jobs',
      description:
        'Lorem ipsum dolor sit amet consectetur. Semper pellentesque risus nulla id eu commodo aenean pulvinar commodo aenean.'
    },
    {
      value: 400,
      caption: 'Individual Jobs Available',

      description: 'Lorem ipsum dolor sit amet consectetur. Sn pulvinar.'
    },
    {
      value: 600,
      caption: 'Employees',

      description:
        'Semper pellentesque risus nulla id eu commodo aenean pulvinar.'
    }
  ],
  theme: 'mixed',
  symbol: 'percentage'
}

export const stepperWith2Args: StepperProps = {
  numbers: [
    {
      value: 5000,
      caption: 'Individual Jobs',
      description:
        'Lorem ipsum dolor sit amet consectetur. Semper pellentesque risus nulla id eu commodo aenean pulvinar commodo aenean.'
    },
    {
      value: 400,
      caption: 'Individual Jobs Available',

      description: 'Lorem ipsum dolor sit amet consectetur. Sn pulvinar.'
    }
  ],
  theme: 'mixed',
  symbol: 'percentage'
}

export const stepperWith1Args: StepperProps = {
  numbers: [
    {
      value: 5000,
      caption: 'Individual Jobs',
      description:
        'Lorem ipsum dolor sit amet consectetur. Semper pellentesque risus nulla id eu commodo aenean pulvinar commodo aenean.'
    }
  ],
  theme: 'mixed',
  symbol: 'percentage'
}

export const stepperWithEmptySymbolArgs: StepperProps = {
  numbers: [
    {
      value: 5000,
      caption: 'Individual Jobs',
      symbol: undefined,
      description:
        'Lorem ipsum dolor sit amet consectetur. Semper pellentesque risus nulla id eu commodo aenean pulvinar commodo aenean.'
    },
    {
      value: 5000,
      caption: 'Career Opportunities',
      symbol: undefined,
      description:
        'Lorem ipsum dolor sit amet consectetur. Semper pellentesque risus nulla id eu commodo aenean pulvinar commodo aenean.'
    }
  ],
  theme: 'mixed',
  symbol: ''
}

export const stepperWith5Args: StepperProps = {
  numbers: [
    {
      value: 5000,
      caption: 'Individual Jobs',
      symbol: undefined,
      description:
        'Lorem ipsum dolor sit amet consectetur. Semper pellentesque risus nulla id eu commodo aenean pulvinar commodo aenean.'
    },
    {
      value: 7000,
      caption: 'Career Opportunities',
      symbol: undefined,
      description:
        'Lorem ipsum dolor sit amet consectetur. Semper pellentesque risus nulla id eu commodo aenean pulvinar commodo aenean.'
    },
    {
      value: 3000,
      caption: 'Opportunities',
      symbol: undefined,
      description:
        'Lorem ipsum dolor sit amet consectetur. Semper pellentesque risus nulla id eu commodo aenean pulvinar commodo aenean.'
    },
    {
      value: 2000,
      caption: 'Employment',
      symbol: undefined,
      description:
        'Lorem ipsum dolor sit amet consectetur. Semper pellentesque risus nulla id eu commodo aenean pulvinar commodo aenean.'
    },
    {
      value: 200,
      caption: 'Training',
      symbol: undefined,
      description:
        'Lorem ipsum dolor sit amet consectetur. Semper pellentesque risus nulla id eu commodo aenean pulvinar commodo aenean.'
    }
  ],
  theme: 'mixed',
  symbol: 'percentage'
}
