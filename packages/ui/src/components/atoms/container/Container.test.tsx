import React from 'react'
import '@testing-library/jest-dom'
import { Container } from './Container'
import { render, screen } from '@testing-library/react'

describe('Container Component', () => {
  test('renders with the correct arial label', () => {
    render(
      <Container>
        <div>Hello</div>
      </Container>
    )

    const childElement = screen.getByText('Hello')
    expect(childElement).toBeInTheDocument()
  })
})
