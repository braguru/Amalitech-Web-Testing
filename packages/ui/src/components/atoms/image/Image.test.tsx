import { render, screen } from '@testing-library/react'
import { ImageComponent } from './Image'
import '@testing-library/jest-dom'
import React from 'react'

describe('ImageComponent', () => {
  const src = 'https://via.placeholder.com/150'
  const alt = 'Placeholder Image'
  const width = 150
  const height = 150

  it('renders correctly with required props (src, alt, width, height)', () => {
    render(<ImageComponent src={src} alt={alt} width={width} height={height} />)

    const image = screen.getByAltText(alt)
    expect(image).toBeInTheDocument()

    expect(image).toHaveAttribute(
      'src',
      expect.stringMatching(/^\/_next\/image\?url=/)
    )

    expect(image).toHaveAttribute('alt', alt)
    expect(image).toHaveAttribute('width', String(width))
    expect(image).toHaveAttribute('height', String(height))
  })

  it('renders with the correct width and height as numbers', () => {
    render(<ImageComponent src={src} alt={alt} width={width} height={height} />)

    const image = screen.getByAltText(alt)
    expect(image).toHaveAttribute('width', String(width))
    expect(image).toHaveAttribute('height', String(height))
  })
})
