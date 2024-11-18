import type { Meta, StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'
import { DefaultImageArgs } from './Image.mock'
import { ImageComponent } from './Image'

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
      description: 'The width of the image (e.g., "100px", "50%").'
    },
    height: {
      control: 'number',
      description: 'The height of the image (e.g., "100px", "50%").'
    },
    placeholder: {
      control: 'radio',
      options: ['blur', 'empty'],
      description: 'Sets the placeholder behavior (blurred or empty).'
    },
    blurDataURL: {
      control: 'text',
      description:
        'Base64-encoded image to use as a placeholder while loading (used with "blur").'
    },
    className: {
      control: 'text',
      description: 'Custom CSS class name for styling the image.'
    },
    style: {
      control: 'object',
      description: 'Custom inline styles for the image.'
    },
    quality: {
      control: 'number',
      description: 'Image quality (1-100).'
    },
    priority: {
      control: 'boolean',
      description: 'If true, the image will be preloaded.'
    },
    layout: {
      control: 'radio',
      options: ['fixed', 'intrinsic', 'responsive', 'fill'],
      description: 'Layout type of the image.'
    },
    loading: {
      control: 'radio',
      options: ['lazy', 'eager'],
      description: 'Loading strategy of the image.'
    }
  }
}

export default meta

type Story = StoryObj<StoryProps>

export const Default: Story = {
  args: DefaultImageArgs
}
