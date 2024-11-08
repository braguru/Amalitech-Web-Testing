import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'
import { TextProps } from './Text.types'
import { TextColorVariants } from '../../../shared/colors.cva'

const textColor = Object.keys(TextColorVariants)

const meta: Meta<typeof Text> = {
  title: 'UI Components/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant: {
      options: ['bold', 'accent', 'emphasis', 'standard'],
      control: { type: 'select' }
    },

    type: {
      options: [
        'feature',
        'hero',
        'highlight',
        'content',
        'caption',
        'footnote'
      ],
      control: { type: 'select' }
    },
    color: {
      options: textColor,
      control: { type: 'select' }
    }
  }
}

export default meta
type Story = StoryObj<TextProps>

export const feature: Story = {
  args: {
    type: 'feature',
    variant: 'emphasis',
    color: 'neutral',
    children:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  }
}

export const hero: Story = {
  args: {
    ...feature.args,
    type: 'hero'
  }
}
export const highlight: Story = {
  args: {
    ...feature.args,
    type: 'highlight'
  }
}
export const content: Story = {
  args: {
    ...feature.args,
    type: 'content'
  }
}
export const caption: Story = {
  args: {
    ...feature.args,
    type: 'caption'
  }
}
export const footnote: Story = {
  args: {
    ...feature.args,
    type: 'footnote'
  }
}
