import { HeadlineProps } from './Headline.types'
import { Meta, StoryObj } from '@storybook/react'
import { Headline } from './Headline'
import {
  display1,
  display2,
  display3,
  headingLevel1Args,
  headingLevel2Args,
  headingLevel3Args,
  headingLevel4Args,
  headingLevel5Args,
  headingLevel6Args
} from './Headline.mock'
import { TextColorVariants } from '../../../shared/colors.cva'

const textColor = Object.keys(TextColorVariants)

const meta: Meta<HeadlineProps> = {
  title: 'UI Components/Headline',
  component: Headline,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AKrOAmkRETk3sYzaD2WCF9/Amalitech-Website-Redesign?node-id=329-5592&node-type=frame&t=sxvTkr1aFM8a4ewR-0'
    }
  },
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      description: 'The heading level',
      table: {
        defaultValue: { summary: '2' }
      }
    },
    color: {
      control: { type: 'select' },
      options: textColor,
      description: 'Color of text',
      table: {
        defaultValue: { summary: 'black' }
      }
    },
    as: {
      control: {
        type: 'radio'
      },
      options: ['display-1', 'display-2', 'display-3'],
      description: 'Applies a display style to the heading'
    },
    children: {
      description: 'The content of the heading'
    }
  }
}

export default meta

type Story = StoryObj<HeadlineProps>

export const HeadingLevel1: Story = {
  args: headingLevel1Args
}

export const HeadingLevel2: Story = {
  args: headingLevel2Args
}

export const HeadingLevel3: Story = {
  args: headingLevel3Args
}

export const HeadingLevel4: Story = {
  args: headingLevel4Args
}

export const HeadingLevel5: Story = {
  args: headingLevel5Args
}

export const HeadingLevel6: Story = {
  args: headingLevel6Args
}

// Stories for display styles
export const Display1: Story = {
  args: display1
}

export const Display2: Story = {
  args: display2
}

export const Display3: Story = {
  args: display3
}
