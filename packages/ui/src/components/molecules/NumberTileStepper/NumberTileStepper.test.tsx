import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Stepper from './NumberTileStepper'
import {
  stepperWith1Args,
  stepperWith2Args,
  stepperWith3Args,
  stepperWith4Args,
  stepperWith5Args,
  stepperWithEmptySymbolArgs
} from './NumberTileStepper.mock'
import { getStepperColors } from './NumberTileStepper.utils'

describe('Stepper container Component tests', () => {
  test('renders with the 4 child element with', () => {
    render(<Stepper {...stepperWith4Args}></Stepper>)

    const element = screen.getByTestId('flex-container')
    expect(element).toBeInTheDocument()
    expect(element.children.length).toBe(4)
  })
  test('renders stepper with the 3 child element with', () => {
    render(<Stepper {...stepperWith3Args}></Stepper>)
    const element = screen.getByTestId('flex-container')
    expect(element).toBeInTheDocument()
    expect(element.children.length).toBe(3)
  })
  test('renders stepper with the 2 child element', () => {
    render(<Stepper {...stepperWith2Args}></Stepper>)
    const element = screen.getByTestId('flex-container')
    expect(element).toBeInTheDocument()
    expect(element.children.length).toBe(2)
  })
  test('renders stepper without symbol when not provided', () => {
    render(<Stepper {...stepperWithEmptySymbolArgs}></Stepper>)
    const element = screen.getByTestId('flex-container')

    const elementContent = element.children[0]
      ?.getElementsByTagName('h3')
      .item(0)
    const text = elementContent?.textContent || ''

    expect(element).toBeInTheDocument()
    expect(text).toEqual('5000')
    expect(element.children.length).toBe(2)
  })
  test('Throws an error when Stepper is provided with 1 child element', () => {
    const logSpy = jest.spyOn(console, 'log')

    // Ensures the Stepper component throws an error when rendered with invalid arguments
    expect(() => render(<Stepper {...stepperWith1Args} />)).toThrow(
      'numbers array must have between 2 to 4 items.'
    )

    logSpy.mockRestore()
  })
  test('Throws an error when Stepper is provided with 5 child element', () => {
    const logSpy = jest.spyOn(console, 'log')

    // Ensures the Stepper component throws an error when rendered with invalid arguments
    expect(() => render(<Stepper {...stepperWith5Args} />)).toThrow(
      'numbers array must have between 2 to 4 items.'
    )

    logSpy.mockRestore()
  })
})

describe('getStepperColors util function', () => {
  test('returns correct colors for theme "mixed"  and totalItems = 2', () => {
    const themeColor = {
      bgColor: 'secondary-600',
      fontColor: 'text-white'
    }
    const result = getStepperColors('mixed', 0, 2)
    expect(result).toEqual({
      bgColor: themeColor.bgColor,
      fontColor: themeColor.fontColor
    })
  })
  test('returns correct colors for theme "shade"  and totalItems = 4', () => {
    const themeColor = {
      bgColor: 'accent-alt-yellow',
      fontColor: 'text-primary-alt'
    }
    const result = getStepperColors('mixed', 3, 4)

    expect(result).toEqual({
      bgColor: themeColor.bgColor,
      fontColor: themeColor.fontColor
    })
  })
  test('returns correct colors for theme "shade"  and totalItems = 3', () => {
    const themeColor = {
      bgColor: 'primary-alt-800',
      fontColor: 'text-white'
    }
    const result = getStepperColors('shades', 0, 3)

    expect(result).toEqual({
      bgColor: themeColor.bgColor,
      fontColor: themeColor.fontColor
    })
  })

  test('returns undefined property values for unknown theme', () => {
    // @ts-expect-error Testing invalid theme case
    const result = getStepperColors('unknown', 0, 2)
    expect(result).toEqual({
      bgColor: undefined,
      fontColor: undefined
    })
  })
})
