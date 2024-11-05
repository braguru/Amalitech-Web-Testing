import React from 'react'
import { HeadlineProps } from './Headline.types'

export const DynamicHeading = ({
  level,
  children,
  ...props
}: Partial<HeadlineProps>): React.ReactElement => {
  const HeadingTag = `h${level}`

  return React.createElement(HeadingTag, props, children)
}
