import { HeadlineProps } from './Headline.types'
import { Meta, StoryObj } from '@storybook/react'
import { Headline } from './Headline'
import React from 'react'
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

const meta: Meta<HeadlineProps> = {
  title: 'UI Components/Headline',
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AKrOAmkRETk3sYzaD2WCF9/Amalitech-Website-Redesign?node-id=329-5592&node-type=frame&t=sxvTkr1aFM8a4ewR-0'
    }
  },
  argTypes: {
    level: {
      control: { type: 'select', options: [1, 2, 3, 4, 5, 6] },
      description: 'The heading level',
      table: {
        type: { summary: '1 | 2 | 3 | 4 | 5 | 6' },
        defaultValue: { summary: '2' }
      }
    },
    color: {
      control: { type: 'color', defaultValue: '#3e3d3a' },
      description: 'Color of text',
      table: {
        type: {
          summary:
            'base-black | base-white | base-orange | base-light-blue | base-green | base-yellow | base-red | base-ultra-marine'
        },
        defaultValue: { summary: 'base-black' }
      }
    },
    as: {
      control: {
        type: 'radio',
        options: ['display-1', 'display-2', 'display-3']
      },
      description: 'Applies a display style to the heading',
      table: { type: { summary: 'display-1 | display-2 | display-3' } }
    },
    children: {
      control: 'text',
      description: 'The content of the heading'
    }
  }
}

export default meta

type Story = StoryObj<HeadlineProps>

const HeadlineStory: Story = {
  render: (args: HeadlineProps) => <Headline {...args} />
}

export const HeadingLevel1: Story = {
  ...HeadlineStory,
  args: {
    ...headingLevel1Args
  }
}

export const HeadingLevel2: Story = {
  ...HeadlineStory,
  args: headingLevel2Args
}

export const HeadingLevel3: Story = {
  ...HeadlineStory,
  args: {
    ...headingLevel3Args,
    color: 'blue'
  }
}

export const HeadingLevel4: Story = {
  ...HeadlineStory,
  args: headingLevel4Args
}

export const HeadingLevel5: Story = {
  ...HeadlineStory,
  args: headingLevel5Args
}

export const HeadingLevel6: Story = {
  ...HeadlineStory,
  args: headingLevel6Args
}

// Stories for display styles
export const Display1: Story = {
  ...HeadlineStory,
  args: display1
}

export const Display2: Story = {
  ...HeadlineStory,
  args: display2
}

export const Display3: Story = {
  ...HeadlineStory,
  args: display3
}
