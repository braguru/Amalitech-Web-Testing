import { HeadlineProps } from './Headline.types'

export const defaultheadingLevelArgs: HeadlineProps = {
  level: 2,
  color: 'primary-alt',
  children: 'Empowering the next generation of technology leaders in Africa'
}

export const headingLevel1Args: HeadlineProps = {
  ...defaultheadingLevelArgs,
  level: 1
}

export const headingLevel2Args: HeadlineProps = {
  ...defaultheadingLevelArgs,
  level: 2
}

export const headingLevel3Args: HeadlineProps = {
  ...defaultheadingLevelArgs,
  level: 3
}
export const headingLevel4Args: HeadlineProps = {
  ...defaultheadingLevelArgs,
  level: 4
}
export const headingLevel5Args: HeadlineProps = {
  ...defaultheadingLevelArgs,
  level: 5
}
export const headingLevel6Args: HeadlineProps = {
  ...defaultheadingLevelArgs,
  level: 6
}

// Stories for display styles
export const display1: HeadlineProps = {
  ...defaultheadingLevelArgs,
  level: 2,
  as: 'display-1'
}
export const display2: HeadlineProps = {
  ...defaultheadingLevelArgs,
  level: 3,
  as: 'display-2'
}
export const display3: HeadlineProps = {
  ...defaultheadingLevelArgs,
  level: 4,
  as: 'display-3'
}
