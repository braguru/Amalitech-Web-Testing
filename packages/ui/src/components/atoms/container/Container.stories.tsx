import type { Meta, StoryObj } from '@storybook/react'
import React, { ComponentProps } from 'react'
import { Container } from './Container'
import { defaultContainer, fluidContainer } from './Container.mock'
import { ContainerType } from './Container.types'

const meta: Meta<ComponentProps<typeof Container>> = {
  title: 'UI Components/Container',
  component: Container,
  argTypes: {
    background: {
      description: 'Container background color',
      control: { type: 'select' },
      options: ['primary-alt', 'accent-alt', 'neutral']
    },
    gap: {
      description: 'Margin bottom of the container',
      control: { type: 'select' },
      options: [1, 2, 8, 12, 16, 24, 32, 48],
      table: { type: { summary: 'number' }, defaultValue: { summary: '8' } }
    },
    fluid: {
      description: 'Sets the container to full width when value is set to true',
      table: {
        defaultValue: { summary: 'false' }
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Container>

export const ContainerStory: Story = {
  args: defaultContainer,
  render: (args: ContainerType) => (
    <Container gap={2} {...args}>
      <div className="relative overflow-hidden w-[100%] h-80 text-white flex flex-col items-center gap-5 justify-center">
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
        <p className="text-heading-sm font-semibold z-10">
          Need Expert Developers? <br /> We've Got You Covered!
        </p>
        <p className="text-body-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap max-w-[75%] z-10 text-center text-neutral-100">
          Reach out to discuss your development needs, and let’s build something
          great together.
        </p>
        <div className="absolute w-20 h-20 -top-8 -right-8 bg-primary border-8 border-white rounded-full" />
      </div>
    </Container>
  )
}

export const FluidContainer: Story = {
  ...ContainerStory,
  args: fluidContainer
}

export const Default: Story = {
  ...ContainerStory,
  args: defaultContainer
}
