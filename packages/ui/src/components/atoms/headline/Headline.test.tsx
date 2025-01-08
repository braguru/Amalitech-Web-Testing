import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Headline } from './Headline'

describe('Headline Component', () => {
  it('renders the correct heading level (h2)', () => {
    render(<Headline level={2}>This is a heading</Headline>)
    const headingElement = screen.getByRole('heading', { level: 2 })
    expect(headingElement).toBeInTheDocument()
    expect(headingElement).toHaveTextContent('This is a heading')
  })

  it('applies the correct display style (display-1)', () => {
    render(
      <Headline level={3} as="display-1">
        Styled Heading
      </Headline>
    )
    const headingElement = screen.getByRole('heading', { level: 3 })
    expect(headingElement).toHaveClass('font-bold')
    expect(headingElement).toHaveClass('md:text-heading-2xl')
    expect(headingElement).toHaveTextContent('Styled Heading')
  })

  it('renders with default color if no color is provided', () => {
    render(<Headline level={1}>Default Color Heading</Headline>)
    const headingElement = screen.getByRole('heading', { level: 1 })
    expect(headingElement).toHaveStyle({ color: 'var(--base-black)' })
  })

  it('renders with custom color if provided', () => {
    render(
      <Headline level={1} color="black">
        Custom Color Heading
      </Headline>
    )
    const headingElement = screen.getByRole('heading', { level: 1 })
    expect(headingElement).toHaveStyle({ color: 'var(--primary-500)' })
  })
})
