import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { NumberTileGrid } from './NumberTileGrid'
import { numberTileData, horizontalGridArgs } from './NumberTileGridMock'
import { getColumnBreakpoint } from './NumberTile.utils'
import { renderSymbol } from './NumberTileGrid.partials'

describe('NumberTileGrid Component', () => {
  test('renders grid tile with correct numbers, captions, and symbols', () => {
    render(
      <NumberTileGrid
        numbers={numberTileData}
        theme="primary"
        columns={4}
        symbol="plus"
      />
    )

    numberTileData.forEach(({ value, caption }) => {
      const numberElement = screen.getByText(value.toString())
      expect(numberElement).toBeInTheDocument()
      expect(numberElement).toHaveTextContent(value.toString())

      const captionElement = screen.getByText(caption)
      expect(captionElement).toBeInTheDocument()
      expect(captionElement).toHaveTextContent(caption)
    })

    const plusSymbols = screen.getAllByText('+')
    expect(plusSymbols.length).toBe(numberTileData.length)
    plusSymbols.forEach((symbol) => {
      expect(symbol).toHaveTextContent('+')
    })
  })

  test('applies the correct border color class based on the "border" prop', () => {
    render(<NumberTileGrid {...horizontalGridArgs} border="dark" />)
    const tile = screen
      .getByText(numberTileData[0]!.value.toString())
      ?.closest('div')

    expect(tile).toHaveClass('border-l border-primary-alt-900')
  })

  test('renders correct breakpoints for various column values', () => {
    const columnConfigs = [
      { columns: 5, expected: { xs: 5, sm: 5, md: 3, lg: 1 } },
      { columns: 4, expected: { xs: 4, sm: 4, md: 2, lg: 1 } },
      { columns: 3, expected: { xs: 3, sm: 3, md: 2, lg: 1 } },
      { columns: 2, expected: { xs: 2, sm: 2, md: 1, lg: 1 } },
      { columns: 1, expected: { xs: 1, sm: 1, md: 1, lg: 1 } }
    ]

    columnConfigs.forEach(({ columns, expected }) => {
      const breakpoints = getColumnBreakpoint(columns)
      expect(breakpoints).toEqual(expected)
    })
  })

  test('uses default column value when undefined', () => {
    render(
      <NumberTileGrid numbers={numberTileData} theme="primary" symbol="plus" />
    )
    const columns = getColumnBreakpoint(4)
    expect(columns).toEqual({ xs: 4, sm: 4, md: 2, lg: 1 })
  })

  test('renders symbols correctly when provided', () => {
    render(
      <NumberTileGrid
        numbers={numberTileData}
        theme="primary"
        columns={4}
        symbol="plus"
      />
    )

    const symbols = screen.getAllByText('+')
    expect(symbols).toHaveLength(numberTileData.length)
    expect(symbols[0]).toBeInTheDocument()
  })

  test('throws an error for an unsupported symbol', () => {
    expect(() => renderSymbol('unknown' as never)).toThrow('Unsupported symbol')
  })

  test('renders grid tile with correct number text and correct tag name (H2)', () => {
    render(
      <NumberTileGrid
        numbers={numberTileData}
        theme="primary"
        columns={4}
        symbol="plus"
      />
    )

    numberTileData.forEach((number) => {
      const headlineElement = screen.getByText(number.value.toString())
      expect(headlineElement).toBeInTheDocument()
      expect(headlineElement.tagName).toBe('H2')
    })
  })

  test('applies spacing and text styles correctly', () => {
    render(
      <NumberTileGrid
        numbers={numberTileData}
        theme="primary"
        columns={4}
        symbol="plus"
      />
    )
    if (!numberTileData[0]) {
      throw new Error('NumberTileData is empty')
    }
    const captionElement = screen.getByText(numberTileData[0].caption)
    expect(captionElement).toHaveClass('mt-4')
  })
})
