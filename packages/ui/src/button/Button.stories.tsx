import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {}
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button'
  }
}

export const Secondary: Story = {
  args: {
    label: 'Button'
  }
}

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button'
  }
}

export const small: Story = {
  args: {
    size: 'small',
    label: 'Button'
  }
}

export const myStory = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/board/QBBqRYCVDFG9uwdM4myMCt/Pre-Kickoff%3A-Amalitech-Website?node-id=1-3179&node-type=sticky&t=S4eSH7rl9bpkFIMP-0'
    }
  }
}
