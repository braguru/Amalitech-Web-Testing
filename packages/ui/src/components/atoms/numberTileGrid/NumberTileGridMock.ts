import { NumberTile, NumberTilesProps } from './NumberTile.types'

export const numberTileData: NumberTile[] = [
  {
    value: 400,
    caption: 'Trained Individuals',
    symbol: 'plus',
    description:
      'We create opportunities for the youth, foster gender equality and inclusion through dedicated recruiting, mentoring and support provision.'
  },
  {
    value: 600,
    caption: 'Employees',
    symbol: 'percentage',
    description:
      'We create opportunities for the youth, foster gender equality and inclusion through dedicated recruiting, mentoring and support provision.'
  },
  {
    value: 3000,
    caption: 'Trainees',
    symbol: 'plus',
    description:
      'We create opportunities for the youth, foster gender equality and inclusion through dedicated recruiting, mentoring and support provision.'
  },
  {
    value: 5000,
    caption: 'Individual Jobs',
    symbol: 'percentage',
    description:
      'We create opportunities for the youth, foster gender equality and inclusion through dedicated recruiting, mentoring and support provision.'
  }
]

export const horizontalGridArgs: NumberTilesProps = {
  columns: 4,
  numbers: numberTileData,
  theme: 'primary'
}

export const VerticalGridArgs: NumberTilesProps = {
  ...horizontalGridArgs,
  theme: 'primary',
  columns: 2
}
