import { StoryObj, Meta } from '@storybook/react'
import { NumberTileGrid } from './NumberTileGrid'
import { NumberTilesProps } from './NumberTile.types'
import { horizontalGridArgs, VerticalGridArgs } from './NumberTileGridMock'

const meta: Meta<NumberTilesProps> = {
  title: 'UI Components/NumberTileGrid',
  component: NumberTileGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AKrOAmkRETk3sYzaD2WCF9/Amalitech-Website-Redesign?node-id=1412-1117'
    }
  },
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'dark', 'light'],
      description:
        'Set theme color for tile. Uses primary for grid variant and dark for step variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      }
    },
    columns: {
      control: { type: 'select' },
      options: [1, 2, 3, 4],
      description: 'The number of columns for the grid',
      table: { defaultValue: { summary: '4' } }
    },
    numbers: {
      control: 'object',
      description: 'Array of numbers with captions to display in the grid',
      table: { type: { summary: 'value | caption | description | symbol' } }
    }
  }
}

export default meta
type Story = StoryObj<NumberTilesProps>

export const HorizontalGrid: Story = {
  args: horizontalGridArgs
}

export const VerticalGrid: Story = {
  args: VerticalGridArgs
}
