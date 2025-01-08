/**
 * NumberTile Component
 *
 * @param {'grid' | 'step'} props.variant - The layout variant.
 * - For `step`, accepted themes are `primary-alt` and `mixed`.
 * - For `grid`, accepted themes are `primary` and `secondary`.
 * @param {'primary' | 'secondary' | 'primary-alt' | 'mixed'} props.theme - The theme for the tile.
 * @param {string} [props.className] - Additional CSS classes.
 * @param {'percentage' | 'plus'} props.symbol - The symbol type.
 * @param {NumberTile[]} props.numbers - The number data.
 * @param {keyof typeof cols} [props.columns] - Number of columns (only applicable for `grid` variant).
 * @param {keyof typeof borderColor} [props.borderColor] - Border color (only applicable for `grid` variant).
 * @returns {React.ReactElement} - Rendered NumberTile component.
 */

import React from 'react'
import NumberTileStepper from '../../molecules/numberTileStepper/NumberTileStepper'
import { NumberTileGrid } from '../../molecules/numberTileGrid/NumberTileGrid'
import { NumberTilesProps } from './NumberTile.types'

export const NumberTile = (props: NumberTilesProps): React.ReactElement => {
  const { variant, theme, numbers, symbol, className } = props

  if (variant === 'grid') {
    const { columns, borderColor } = props

    return (
      <NumberTileGrid
        numbers={numbers}
        theme={theme}
        columns={columns}
        symbol={symbol}
        className={className}
        border={borderColor}
      />
    )
  }

  if (variant === 'step') {
    return (
      <NumberTileStepper
        theme={theme}
        numbers={numbers}
        symbol={symbol}
        className={className}
      />
    )
  }

  return <div className={className}>Invalid variant</div>
}
