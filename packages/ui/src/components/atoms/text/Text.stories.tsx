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
        'hero',
        'feature',
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

export const highlight: Story = {
  args: {
    type: 'highlight',
    variant: 'standard',
    color: 'neutral',
    children:
      'AmaliTech is a social enterprise that harnesses the potential of remote working to build the future of work in sub-Saharan Africa.Lady displaying an AmaliTech folder A large group of people, representing the whole company We provide employment pathways in the tech sector to young graduates in Sub-Saharan Africa, connecting them to the global demand for tech talent. Our approach combines training with employment and continuous learning  because evidence show that only this integrated approach actually works. By focusing on skilled ICT services, we contribute to ecosystem development and to the emergence of the future-proof industry with growth engine potential.'
  }
}
export const hero: Story = {
  args: {
    ...highlight.args,
    type: 'hero'
  }
}
export const feature: Story = {
  args: {
    ...highlight.args,
    type: 'feature'
  }
}

export const content: Story = {
  args: {
    ...highlight.args,
    type: 'content'
  }
}
export const caption: Story = {
  args: {
    ...highlight.args,
    type: 'caption'
  }
}
export const footnote: Story = {
  args: {
    ...highlight.args,
    type: 'footnote'
  }
}
