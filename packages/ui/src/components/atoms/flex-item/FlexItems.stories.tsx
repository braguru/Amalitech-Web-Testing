import type { Meta, StoryObj } from '@storybook/react'
import React, { ComponentProps } from 'react'
import FlexItem from './FlexItem'
import { cvaProperties } from './FlexItem.cva'
import Flex from '../flex-wrapper/Flex'
import { FlexItemProps } from './FlexItem.types'
import { defaultContainer } from './FlexItem.mock'

const meta: Meta<ComponentProps<typeof FlexItem>> = {
  title: 'UI Components/FlexItem',
  component: FlexItem,
  tags: ['autodocs'],
  argTypes: {
    background: {
      description: 'FlexWrapper background color',
      control: { type: 'select' },
      options: ['primary-alt', 'accent-alt', 'neutral', 'none'],
      table: {
        type: { summary: 'string' }
      }
    },
    position: {
      description: 'Determines the positioning of the element',
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'auto'],
      table: { type: { summary: 'string' }, defaultValue: { summary: 'auto' } }
    },
    padding: {
      description: 'Padding of the FlexWrapper',
      control: { type: 'select' },
      options: [1, 2, 8, 12, 16, 24, 32, 48],
      table: { type: { summary: 'number' }, defaultValue: { summary: '2' } }
    },
    xs: {
      description:
        'Controls the span of the item on xs screen sizes. Accepts the the following values 1 - 12',
      options: Object.keys(cvaProperties.variants.xs),
      control: {
        type: 'select'
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100% of the parent container' }
      }
    },
    sm: {
      description:
        'Controls the span of the item on sm screen sizes. Accepts the the following values 1 - 12',
      options: Object.keys(cvaProperties.variants.sm),
      control: {
        type: 'select'
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100% of the parent container' }
      }
    },
    md: {
      description:
        'Controls the span of the item on md screen sizes. Accepts the the following values 1 - 12',
      options: Object.keys(cvaProperties.variants.md),
      control: {
        type: 'select'
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100% of the parent container' }
      }
    },
    lg: {
      description:
        'Controls the span of the column on lg screen sizes. Accepts the the following values 1 - 12',
      options: Object.keys(cvaProperties.variants.lg),
      control: {
        type: 'select'
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100% of the parent container' }
      }
    },
    xl: {
      description:
        'Controls the span of the column on xl screen sizes. Accepts the the following values 1 - 12',
      options: Object.keys(cvaProperties.variants.xl),
      control: {
        type: 'select'
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100% of the parent container' }
      }
    },
    grow: {
      description:
        'Determines if an item should grow to fill the space of the parent container',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof FlexItem>

export const FlexItemStory: Story = {
  args: defaultContainer,
  render: (args: FlexItemProps) => (
    <Flex gap={8} wrap position={'rightBottom'}>
      <FlexItem padding={8} {...args}>
        <div className="relative overflow-hidden bg-slate-800 w-[100%] h-80 text-white flex flex-col items-center gap-5 justify-center">
          <svg
            className="absolute left-0 top-0 w-fit h-72 "
            width="391"
            height="309"
            viewBox="0 0 391 309"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g style={{ mixBlendMode: 'overlay' }}>
              <path
                d="M362.344 87.1993C369.208 93.5226 379.898 93.0844 386.221 86.2207C392.544 79.357 392.106 68.6668 385.242 62.3435L362.344 87.1993ZM118.903 -137.072L362.344 87.1993L385.242 62.3435L141.802 -161.928L118.903 -137.072Z"
                fill="#2D3339"
              />
              <path
                d="M262.668 195.395C269.532 201.718 280.222 201.28 286.545 194.416C292.869 187.553 292.43 176.863 285.567 170.539L262.668 195.395ZM19.2275 -28.8763L262.668 195.395L285.567 170.539L42.126 -53.7321L19.2275 -28.8763Z"
                fill="#2D3339"
              />
              <path
                d="M162.991 303.591C169.855 309.914 180.545 309.476 186.869 302.612C193.192 295.749 192.754 285.059 185.89 278.735L162.991 303.591ZM-80.4493 79.3196L162.991 303.591L185.89 278.735L-57.5507 54.4638L-80.4493 79.3196Z"
                fill="#2D3339"
              />
            </g>
          </svg>
          <p className="text-heading-xs font-semibold z-10">
            Need Expert Developers? <br /> We've Got You Covered!
          </p>
          <p className="text-body-xs font-bold text-ellipsis overflow-hidden whitespace-nowrap max-w-[75%] z-10 text-center text-neutral-100">
            Reach out to discuss your development needs, and let’s build
            something great together.
          </p>
          <div className="absolute w-20 h-20 -top-8 -right-8 bg-primary border-8 border-white rounded-full" />
        </div>
      </FlexItem>
      <FlexItem padding={8} {...args}>
        <div className="relative overflow-hidden bg-amber-500 w-[100%] h-80 text-white flex flex-col items-center gap-5 justify-center">
          <svg
            className="absolute left-0 top-0 w-fit h-72 "
            width="391"
            height="309"
            viewBox="0 0 391 309"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g style={{ mixBlendMode: 'overlay' }}>
              <path
                d="M362.344 87.1993C369.208 93.5226 379.898 93.0844 386.221 86.2207C392.544 79.357 392.106 68.6668 385.242 62.3435L362.344 87.1993ZM118.903 -137.072L362.344 87.1993L385.242 62.3435L141.802 -161.928L118.903 -137.072Z"
                fill="#2D3339"
              />
              <path
                d="M262.668 195.395C269.532 201.718 280.222 201.28 286.545 194.416C292.869 187.553 292.43 176.863 285.567 170.539L262.668 195.395ZM19.2275 -28.8763L262.668 195.395L285.567 170.539L42.126 -53.7321L19.2275 -28.8763Z"
                fill="#2D3339"
              />
              <path
                d="M162.991 303.591C169.855 309.914 180.545 309.476 186.869 302.612C193.192 295.749 192.754 285.059 185.89 278.735L162.991 303.591ZM-80.4493 79.3196L162.991 303.591L185.89 278.735L-57.5507 54.4638L-80.4493 79.3196Z"
                fill="#2D3339"
              />
            </g>
          </svg>
          <p className="text-heading-xs font-semibold z-10">
            Need Expert Developers? <br /> We've Got You Covered!
          </p>
          <p className="text-body-xs font-bold text-ellipsis overflow-hidden whitespace-nowrap max-w-[75%] z-10 text-center text-neutral-100">
            Reach out to discuss your development needs, and let’s build
            something great together.
          </p>
          <div className="absolute w-20 h-20 -top-8 -right-8 bg-primary border-8 border-white rounded-full" />
        </div>
      </FlexItem>
    </Flex>
  )
}
export const FlexItemStepperStory: Story = {
  ...FlexItemStory,
  render: (args: FlexItemProps) => (
    <Flex gap={8} wrap lg={'row'} position={'bottom'}>
      <FlexItem
        className="rounded-sm"
        padding={1}
        background="primary-alt"
        {...args}
        md={6}
        lg={3}
      >
        <div className="relative space-y-4 text-white">
          <h2 className="text-heading-2xs font-semibold">600+</h2>
          <h3 className="text-body-lg">Employees</h3>
          <p className="text-body-md font-light">
            Semper pellentesque risus nulla id eu commodo aenean pulvinar.
          </p>
        </div>
      </FlexItem>
      <FlexItem
        className="rounded-sm h-[250px]"
        padding={12}
        {...args}
        md={9}
        lg={3}
        background="primary-alt-subtle"
      >
        <div className="relative space-y-4 text-white">
          <h2 className="text-heading-2xs font-semibold">600+</h2>
          <h3 className="text-body-lg">Employees</h3>
          <p className="text-body-md font-light">
            Semper pellentesque risus nulla id eu commodo aenean pulvinar.
          </p>
        </div>
      </FlexItem>
      <FlexItem
        className="rounded-sm lg:h-[300px]"
        padding={12}
        {...args}
        lg={3}
        background="accent-alt"
      >
        <div className="relative space-y-4 text-white">
          <h2 className="text-heading-2xs font-semibold">600+</h2>
          <h3 className="text-body-lg">Employees</h3>
          <p className="text-body-md font-light">
            Semper pellentesque risus nulla id eu commodo aenean pulvinar.
          </p>
        </div>
      </FlexItem>
    </Flex>
  )
}
