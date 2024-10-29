import { render, screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import { Button } from './Button'

describe('Button Component', () => {
  test('renders with the correct label', () => {
    const textContent = "Click Me"
    render(<Button label={textContent} backgroundColor="#1ecbe1" />)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(textContent)
  })
})
