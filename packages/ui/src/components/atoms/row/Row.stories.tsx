import React, { ComponentProps } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Row from './Row'
import { defaultRow, rowCols, rowGap } from './Row.mock'

const meta: Meta<ComponentProps<typeof Row>> = {
  title: 'UI Components/Row',
  tags: ['autodocs'],
  argTypes: {
    background: {
      control: 'color',
      description: 'Row container background color',
      table: {
        type: {
          summary: 'primary | primary-alt | secondary | accent | accent-alt'
        }
      }
    },
    gap: {
      control: 'number',
      description: 'Gaps between elements in the container',
      table: {
        type: {
          summary: '0 | 2 | 4 | 6 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56'
        }
      }
    },
    cols: {
      control: 'number',
      description: 'Number of columns of the Row container',
      table: {
        type: { summary: '1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12' }
      }
    }
  }
}

export default meta

export const RowStory: StoryObj<typeof Row> = {
  args: defaultRow,
  render: (args) => (
    <Row {...args} gap={4}>
      <div className="h-40 col-span-12 "></div>
    </Row>
  )
}

export const Gap: StoryObj<typeof Row> = {
  ...RowStory,
  args: rowGap
}

export const Columns: StoryObj<typeof Row> = {
  ...RowStory,
  args: rowCols
}
