import type { Meta, StoryObj } from '@storybook/react'
import {
  buttonPrimaryArgs,
  buttonSmallArgs,
  buttonSecondaryArgs,
  longLabelArgs,
  buttonLargeArgs,
} from './Button.mock'
import { Button } from './Button'
import { ButtonProps } from './Button.types'
import React, { ComponentProps } from 'react'

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  title: 'UI Components/Button',
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/board/QBBqRYCVDFG9uwdM4myMCt/Pre-Kickoff%3A-Amalitech-Website?node-id=1-3179&node-type=sticky&t=S4eSH7rl9bpkFIMP-0',
    },
  },
  argTypes: {
    label: { control: 'text', description: 'The button label' },
    backgroundColor: { control: 'color', description: 'For custom buttons' },
    size: {
      control: { type: 'radio', options: ['sm', 'md', 'lg'] },
      description: 'How large a can be',
      table: { type: { summary: 'small | medium | large' } },
    },
  },
}

export default meta

type Story = StoryObj<ButtonProps>

const ButtonStory: Story = {
  render: (args ) => <Button {...args}/>,
}

export const Primary: Story = {
  ...ButtonStory,
  args: buttonPrimaryArgs,
}

export const Secondary: Story = {
  ...ButtonStory,
  args: buttonSecondaryArgs,
}

export const Large: Story = {
  ...ButtonStory,
  args: buttonLargeArgs,
}

export const Small: Story = {
  ...ButtonStory,
  args: buttonSmallArgs,
}

export const LongLabel: Story = {
  ...ButtonStory,
  args: longLabelArgs,
}

