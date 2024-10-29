import { render, screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import { Container } from './Container'
import {
  getFlattenedColors,
  gaps,
  getMarginBottom,
  getThemeColor,
  checkColorValidity
} from './Container.utils'

describe('Container Component', () => {
  test('Should render p tag with a "Render me!!" TEXT', () => {
    render(
      <Container background="secondary">
        <div className="h-80 text-center  flex items-center justify-center">
          <p>Render me!!</p>
        </div>
      </Container>
    )

    const containerElement = screen.getByText('Render me!!')
    expect(containerElement).toBeInTheDocument()
  })
})

describe('Utils function tests for  getMarginBottom', () => {
  test('should return correct margin tailwind value value when a 48 Gap input is provided', () => {
    const gap = 48

    const result = getMarginBottom(gap)
    expect(result).toBe(gaps[gap])
  })
  test('should return correct margin tailwind value value when a 2 Gap value input is provided', () => {
    const gap = 2
    const value = 'xs'

    const result = getMarginBottom(gap)
    expect(result).toBe(value)
  })
})

describe('Utils function tests for  getFlattenedColors', () => {
  it('should flatten colors object correctly', () => {
    const colorsObj = {
      primary: {
        DEFAULT: '#FF0000',
        light: '#FF9999'
      },
      secondary: '#00FF00'
    }

    const flattenedColors = getFlattenedColors(colorsObj)

    expect(flattenedColors).toEqual({
      primary: '#FF0000',
      'primary-light': '#FF9999',
      secondary: '#00FF00'
    })
  })

  it('should flatten flatten nested color objects', () => {
    const colorsObj = {
      primary: {
        '200': '#FF0000'
      }
    }

    const flattenedColors = getFlattenedColors(colorsObj, '')

    expect(flattenedColors).toEqual({
      'primary-200': '#FF0000'
    })
  })
  it('should return an empty object when an empty object is provided', () => {
    const colorsObj = {}

    const flattenedColors = getFlattenedColors(colorsObj, '')
    expect(flattenedColors).toEqual({})
  })
})

describe('Utils function tests for  getThemeColor', () => {
  test('should return the correct theme color when a valid color key is provided', () => {
    const validColorKey = 'primary'
    const expectedColor = 'var(--primary-600)'
    const result = getThemeColor(validColorKey)
    expect(result).toBe(expectedColor)
  })
  test('should return an empty string when input is undefined or null', () => {
    expect(getThemeColor('')).toBe('')
  })
})

describe('Utils function tests for  checkColorValidity', () => {
  test('should return true when a valid CSS color name is provided', () => {
    const result = checkColorValidity('red')
    expect(result).toBe(true)
  })
  test('should return false when an empty string is provided', () => {
    const result = checkColorValidity('')
    expect(result).toBe(false)
  })
  test('should return true for valid hex color codes', () => {
    const isValid = checkColorValidity('#FFA500')
    expect(isValid).toBe(true)
  })
  test('should return true for valid RGB color values', () => {
    const isValid = checkColorValidity('rgb(255, 165, 0)')
    expect(isValid).toBe(true)
  })

  test('should return false for invalid color names', () => {
    // Test invalid color name
    const isValid = checkColorValidity('invalidColorName')

    expect(isValid).toBe(false)
  })
})
