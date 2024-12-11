import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { NumberTileGrid } from './NumberTileGrid'
import { numberTileData } from './NumberTileGridMock'
import { getColumnBreakpoint } from './NumberTile.utils'
import { renderSymbol } from './NumberTileGrid.partials'

describe('Number Tile Component', () => {
  test('renders grid tile with correct numbers, captions, and symbols', () => {
    render(
      <NumberTileGrid numbers={numberTileData} theme="primary" columns={4} />
    )

    numberTileData.forEach((number) => {
      const numberElement = screen.getByText(number.value.toString())
      expect(numberElement).toBeInTheDocument()

      const captionElement = screen.getByText(number.caption)
      expect(captionElement).toBeInTheDocument()

      if (number.symbol) {
        const plusSymbolElement = screen.getAllByText('+')
        const percentSymbolElement = screen.getAllByText('%')
        expect(plusSymbolElement[0]).toBeInTheDocument()
        expect(percentSymbolElement[0]).toBeInTheDocument()
      }
    })
  })

  test('renders correct breakpoints for column value 5', () => {
    const resultFor5Columns = getColumnBreakpoint(5)
    expect(resultFor5Columns).toEqual({
      xs: 5,
      sm: 5,
      md: 3,
      lg: 1
    })
  })

  test('renders correct breakpoints for column value 4', () => {
    const resultFor4Columns = getColumnBreakpoint(4)
    expect(resultFor4Columns).toEqual({
      xs: 4,
      sm: 4,
      md: 2,
      lg: 1
    })
  })

  test('renders correct breakpoints for column value 3', () => {
    const resultFor3Columns = getColumnBreakpoint(3)
    expect(resultFor3Columns).toEqual({
      xs: 3,
      sm: 3,
      md: 2,
      lg: 1
    })
  })

  test('renders correct breakpoints for column value 2', () => {
    const resultFor2Columns = getColumnBreakpoint(2)
    expect(resultFor2Columns).toEqual({
      xs: 2,
      sm: 2,
      md: 1,
      lg: 1
    })
  })

  test('renders correct breakpoints for column value 1', () => {
    const resultFor1Column = getColumnBreakpoint(1)
    expect(resultFor1Column).toEqual({
      xs: 1,
      sm: 1,
      md: 1,
      lg: 1
    })
  })

  test('renders the correct symbols', () => {
    render(
      <NumberTileGrid numbers={numberTileData} theme="primary" columns={4} />
    )

    const plusSymbols = screen.getAllByText('+')
    const percentageSymbols = screen.getAllByText('%')

    expect(plusSymbols).toHaveLength(2)
    expect(percentageSymbols).toHaveLength(2)

    expect(plusSymbols[0]).toBeInTheDocument()
    expect(percentageSymbols[0]).toBeInTheDocument()
  })

  test('throws an error for an unsupported symbol', () => {
    expect(() => renderSymbol('unknown' as never)).toThrow('Unsupported symbol')
  })

  test('applies default column value when undefined', () => {
    render(<NumberTileGrid numbers={numberTileData} theme="primary" />)

    const columns = getColumnBreakpoint(4)
    expect(columns).toEqual({ xs: 4, sm: 4, md: 2, lg: 1 })
  })

  test('does not render a symbol when number.symbol is undefined', () => {
    const noSymbolData = [{ value: 10, caption: 'No Symbol' }]

    render(
      <NumberTileGrid numbers={noSymbolData} theme="primary" columns={4} />
    )

    const symbolElement = screen.queryByText('+')
    expect(symbolElement).not.toBeInTheDocument()
  })
})
