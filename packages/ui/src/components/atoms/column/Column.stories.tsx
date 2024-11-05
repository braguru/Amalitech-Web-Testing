import React, { ComponentProps } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Column from './Column'
import Row from '../row/Row'

const acceptedValue = ' 0 | 1 | 2 | 3 | 4 | 5| 6 | 7 | 8 | 9 | 10 | 11 | 12';

const meta: Meta<ComponentProps<typeof Column>> = {
  title: 'UI Components/Column',
  tags: ['autodocs'],
  argTypes: {
    xs: {
      description: 'Controls the span of the column on xs screen sizes',
      control: {
        type: 'number'
      },
      defaultValue: {
        summary: '12 - full span for xs screen sizes'
      },
      table: {
        type: {
          summary: acceptedValue
        }
      }
    },
    sm: {
      description: 'Controls the span of the column on sm screen sizes',
      control: {
        type: 'number'
      },
      defaultValue: {
        summary: '12 - full span for sm  screen sizes'
      },
      table: {
        type: {
          summary: acceptedValue
        }
      }
    },
    md: {
      description: 'Controls the span of the column on md screen sizes',
      control: {
        type: 'number'
      },
      defaultValue: {
        summary: '0 - full span for md  screen sizes'
      },
      table: {
        type: {
          summary: acceptedValue
        }
      }
    },
    lg: {
      description: 'Controls the span of the column on lg screen sizes',
      control: {
        type: 'number'
      },
      defaultValue: {
        summary: '0 - Defaults to col-none for lg screen sizes'
      },
      table: {
        type: {
          summary: acceptedValue
        }
      }
    },
    xl: {
      description: 'Controls the span of the column on xl screen sizes',
      control: {
        type: 'number'
      },
      defaultValue: {
        summary: '0 - Defaults to col-none for xl screen sizes'
      },
      table: {
        type: {
          summary: acceptedValue
        }
      }
    },
    background: {
      control: 'color',
      description: 'Column container background color',
      table: {
        type: {
          summary: 'primary | primary-alt | secondary | accent | accent-alt'
        }
      }
    }
  }
}

export default meta

export const ColumnStory: StoryObj<typeof Column> = {
  render: (args) => (
    <Row className="grid grid-cols-12 gap-4">
      <Column
        {...args}
        background='accent'
        className="w-full h-40 rounded-lg  flex items-center justify-center"
      >
        1
      </Column>
      <Column
        {...args}
        className=" w-full h-40 rounded-lg  flex items-center justify-center"
        background='primary'
      >
        2
      </Column>
      <Column
        {...args}
        className=" w-full h-40 rounded-lg flex items-center justify-center"
        background='primary-alt'
      >
        3
      </Column>
    </Row>
  )
}
