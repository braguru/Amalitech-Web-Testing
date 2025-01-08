import type { Meta, StoryObj } from '@storybook/react'
import React, { ComponentProps } from 'react'
import Flex from './Flex'
import { FlexProps } from './Flex.types'
import { defaultContainer } from './Flex.mock'
import { positions } from './Flex.cva'

const meta: Meta<ComponentProps<typeof Flex>> = {
  title: 'UI Components/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {
    background: {
      description: 'Flex background color',
      control: { type: 'select' },
      options: ['primary-alt', 'accent-alt', 'neutral', 'none']
    },
    direction: {
      description: 'Position of contents',
      control: { type: 'select' },
      options: ['column', 'row'],
      table: { type: { summary: 'string' }, defaultValue: { summary: 'row' } }
    },
    gap: {
      description: 'Gap of the Flex component',
      control: { type: 'select' },
      options: [1, 2, 8, 12, 16, 24, 32, 48],
      table: { type: { summary: 'number' }, defaultValue: { summary: '2' } }
    },
    padding: {
      description: 'Padding of the Flex component',
      control: { type: 'select' },
      options: [1, 2, 8, 12, 16, 24, 32, 48],
      table: { type: { summary: 'number' }, defaultValue: { summary: '2' } }
    },
    wrap: {
      control: 'boolean',
      description:
        'Activates the wrap functionality of the Wrapper when set to true'
    },
    reverse: {
      control: 'boolean',
      description: 'Reverses the contents of the wrapper'
    },
    position: {
      description: 'Position of contents',
      control: { type: 'select' },
      options: Object.keys(positions),
      table: { type: { summary: 'string' }, defaultValue: { summary: 'left' } }
    }
  }
}

export default meta
type Story = StoryObj<typeof Flex>

export const FlexStory: Story = {
  args: defaultContainer,
  render: (args: FlexProps) => (
    <Flex gap={8} {...args}>
      <div className="relative p-4 overflow-hidden bg-slate-800 w-[100%] h-80 text-white flex flex-col items-center gap-5 justify-center">
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
          Reach out to discuss your development needs, and let’s build something
          great together.
        </p>
        <div className="absolute w-20 h-20 -top-8 -right-8 bg-primary border-8 border-white rounded-full" />
      </div>
      <div className="relative p-4 overflow-hidden bg-amber-500 w-[100%] h-80 text-white flex flex-col items-center gap-5 justify-center">
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
          Reach out to discuss your development needs, and let’s build something
          great together.
        </p>
        <div className="absolute w-20 h-20 -top-8 -right-8 bg-primary border-8 border-white rounded-full" />
      </div>
    </Flex>
  )
}
