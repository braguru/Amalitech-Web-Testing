import React, { ComponentProps } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Column from './Column'
import Row from '../row/Row'

const meta: Meta<ComponentProps<typeof Column>> = {
  title: 'UI Components/Column',
  tags: ['autodocs'],
  argTypes: {
    xs: {
      description: 'Controls the span of the column on xs screen sizes',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      control: {
        type: 'select'
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '12' }
      }
    },
    sm: {
      description: 'Controls the span of the column on sm screen sizes',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      control: {
        type: 'select'
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '12' }
      }
    },
    md: {
      description: 'Controls the span of the column on md screen sizes',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      control: {
        type: 'select'
      },
      table: {
        type: { summary: 'number' }
      }
    },
    lg: {
      description: 'Controls the span of the column on lg screen sizes',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      control: {
        type: 'select'
      },
      table: {
        type: { summary: 'number' }
      }
    },
    xl: {
      description: 'Controls the span of the column on xl screen sizes',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      control: {
        type: 'select'
      },
      table: {
        type: { summary: 'number' }
      }
    },
    background: {
      description: 'Column container background color',
      options: ['primary-alt', 'neutral', 'accent-alt'],
      control: {
        type: 'select'
      },
      table: {
        type: { summary: 'string' }
      }
    }
  }
}

export default meta

const Default: StoryObj<typeof Column> = {
  args: {
    md: 6,
    lg: 4
  }
}

export const EqualDistribution: StoryObj<typeof Column> = {
  ...Default,
  render: (args) => (
    <Row cols={12} gap={12} className="border p-10">
      <Column
        {...args}
        className="h-40 rounded-lg flex items-center justify-center border"
      >
        1
      </Column>
      <Column
        {...args}
        className="h-40 rounded-lg flex items-center justify-center border"
      >
        2
      </Column>
      <Column
        {...args}
        className="h-40 rounded-lg flex items-center justify-center border"
      >
        3
      </Column>
    </Row>
  )
}

export const MiddleColumnSpan6: StoryObj<typeof Column> = {
  render: (args) => (
    <Row cols={12} className="border-2 border-accent-alt-300 p-10">
      <Column
        className="h-40 w-full rounded-lg flex items-center justify-center border"
        md={8}
      >
        1
      </Column>
      <Column
        {...args}
        className="h-40 w-full rounded-lg flex items-center justify-center border"
        md={4}
      >
        2
      </Column>
    </Row>
  )
}

export const ColumnWithBackground: StoryObj<typeof Column> = {
  ...Default,
  render: (args) => (
    <Row cols={12} gap={12}>
      <Column
        {...args}
        background="primary-alt"
        className="col-span-4 w-full h-40 rounded-lg flex items-center justify-center text-white border"
      >
        1
      </Column>
      <Column
        {...args}
        background="accent-alt"
        className="col-span-4 h-40 rounded-lg flex items-center justify-center text-white border"
      >
        2
      </Column>
      <Column
        {...args}
        background="neutral"
        className="col-span-4 h-40 rounded-lg flex items-center justify-center text-white border"
      >
        3
      </Column>
    </Row>
  )
}
