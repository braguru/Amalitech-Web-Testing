import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom' // To extend Jest matchers like "toHaveClass"
import { Text } from './Text' // Import the component to test

describe('Text Component', () => {
  // Test case for rendering with default props
  it('renders with default props (highlight and standard)', () => {
    const { container } = render(<Text>Default Text</Text>)

    expect(container.firstChild).toHaveClass('tracking-normal')
    expect(container.firstChild).toHaveClass('text-body-md')
    expect(container.firstChild).toHaveClass('font-normal') // Standard fontWeight
  })

  // Test case for rendering with custom value and fontWeight
  it('renders with custom value and fontWeight', () => {
    const { container } = render(
      <Text type="feature" variant="bold" color="neutral">
        Custom Text
      </Text>
    )

    expect(container.firstChild).toHaveClass('lg:text-body-xl')
    expect(container.firstChild).toHaveClass('font-bold')
  })

  // Test case for checking color variants
  it('applies the correct color variant', () => {
    const { container } = render(<Text color="primary">Success Text</Text>)

    expect(container.firstChild).toHaveClass('text-primary') // Ensure success color is applied
  })

  // Test case for checking the merged class names with twMerge
  it('applies twMerge to combine classes without conflict', () => {
    const { container } = render(
      <Text variant="bold" type="caption" className="tracking-tight">
        Merged Class Test
      </Text>
    )

    // Check merged classes
    expect(container.firstChild).toHaveClass('font-bold') // Bold from props
    expect(container.firstChild).toHaveClass('lg:text-body-sm') // From caption value
    expect(container.firstChild).toHaveClass('tracking-tight') // Custom tracking class
  })
})
