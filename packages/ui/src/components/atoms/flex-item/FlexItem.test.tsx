import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import FlexItem from './FlexItem'

describe('Flex container Component', () => {
  test('renders with the correct child element with text "Hurray Item is Rendered!" ', () => {
    render(
      <FlexItem>
        <div>Hurray Item is Rendered!</div>
      </FlexItem>
    )

    const childElement = screen.getByText('Hurray Item is Rendered!')
    expect(childElement).toBeInTheDocument()
  })
})
