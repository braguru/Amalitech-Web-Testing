import type { Meta, StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'
import { DefaultImageArgs } from './Image.mock'
import { ImageComponent } from './Image'
import { NewAspectRatios } from './Image.cva'

type StoryProps = ComponentProps<typeof ImageComponent>

const meta: Meta<StoryProps> = {
  component: ImageComponent,
  title: 'UI Components/NextImage',
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/board/QBBqRYCVDFG9uwdM4myMCt/Pre-Kickoff%3A-Amalitech-Website?node-id=1-3179&node-type=sticky&t=S4eSH7rl9bpkFIMP-0'
    }
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'The source URL of the image.'
    },
    alt: {
      control: 'text',
      description: 'The alt text for the image.'
    },
    width: {
      control: 'number',
      description: 'The width of the image (in pixels).'
    },
    height: {
      control: 'number',
      description: 'The height of the image (in pixels).'
    },
    ratio: {
      control: 'select',
      description: 'Aspect ratio of the image.',
      options: Object.keys(NewAspectRatios)
    }
  }
}

export default meta

type Story = StoryObj<StoryProps>

export const Default: Story = {
  args: DefaultImageArgs
}

export const AspectRatio: Story = {
  args: DefaultImageArgs
}
