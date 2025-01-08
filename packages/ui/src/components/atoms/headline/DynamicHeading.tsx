import React, { PropsWithChildren } from 'react'
import { HeadlineProps } from './Headline.types'

export const DynamicHeading = ({
  level,
  ...props
}: PropsWithChildren<HeadlineProps>): React.ReactElement => {
  const HeadingTag = `h${level}`

  return React.createElement(HeadingTag, props)
}
