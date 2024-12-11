import React from 'react'
import { SymbolColorVariant } from './NumberTile.utils'

export const renderSymbol = (
  symbol: 'percentage' | 'plus',
  theme?: keyof typeof SymbolColorVariant
): React.ReactNode => {
  const symbolColorClass = theme ? SymbolColorVariant[theme] : ''
  switch (symbol) {
    case 'percentage':
      return <span className={`ml-1 ${symbolColorClass}`}>%</span>
    case 'plus':
      return <span className={`ml-1 ${symbolColorClass}`}>+</span>
    default:
      throw new Error('Unsupported symbol')
  }
}
