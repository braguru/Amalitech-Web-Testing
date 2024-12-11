import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Flex from './Flex'

describe('Flex container Component', () => {
  test('renders with the correct child element with text "Hello World!" ', () => {
    render(
      <Flex>
        <div>Hello World!</div>
      </Flex>
    )

    const childElement = screen.getByText('Hello World!')
    expect(childElement).toBeInTheDocument()
  })
})
