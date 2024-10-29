import type { Meta, StoryObj } from '@storybook/react'
import React, { ComponentProps } from 'react'
import {
  backgroundContainer,
  defaultContainer,
  fluidContainer
} from './Container.mock'
import { ContainerType } from './Container.types'
import { Container } from './Container'

type StoryProps = ComponentProps<typeof Container>;

const meta: Meta<StoryProps> = {
  title: 'UI Components/Container',
  tags: ['autodocs'],
  argTypes: {
    background: {
      control: 'color',
      description: 'Container background color',
      table: {
        type: {
          summary: 'primary | secondary | primary-alt | secondary-alt | accent'
        }
      }
    },
    gap: {
      control: 'number',
      description: 'Margin bottom of the container',
      table: { type: { summary: '1 | 2 | 8 | 12 | 16 | 24 | 32 | 48' } }
    },
    fluid: {
      control: 'boolean',
      description: 'Sets the container to full width when value is set to true'
    }
  }
}

export default meta

type Story = StoryObj<typeof Container>

export const Default: Story = {
  args: defaultContainer,
  render: (args: ContainerType) => (
    <Container gap={12} {...args}>
      <div className="relative overflow-hidden w-[100%] h-80 text-white flex items-center justify-center">
        <p className="text-xl">General Team Expansion</p>
        <div className="absolute w-20 h-20 -top-4  -right-8 bg-slate-950 border-8 border-white rounded-full"></div>
      </div>
    </Container>
  )
}

export const Fluid: Story = {
  ...Default,
  args: fluidContainer
}

export const backgroundColor: Story = {
  args: backgroundContainer,
  render: (args) => (
    <Container {...args}>
      <div className="h-80 text-center  flex items-center justify-center">
        <p>Hurray!!</p>
      </div>
    </Container>
  )
}
