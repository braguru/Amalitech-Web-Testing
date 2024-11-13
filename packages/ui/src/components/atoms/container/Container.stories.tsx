import type { Meta, StoryObj } from '@storybook/react'
import React, { ComponentProps } from 'react'
import { defaultContainer, fluidContainer } from './Container.mock'
import { ContainerType } from './Container.types'
import { Container as ContainerComponent } from './Container'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Logo from '../../../assets/images/Logo.png'

const meta: Meta<ComponentProps<typeof ContainerComponent>> = {
  title: 'UI Components/Container',
  // component: Container,
  tags: ['autodocs'],
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

export const Container: StoryObj<typeof ContainerComponent> = {
  args: defaultContainer,
  render: (args: ContainerType) => (
    <ContainerComponent gap={2} {...args}>
      <div className="relative overflow-hidden w-[100%] h-80 text-white flex flex-col items-center gap-5 justify-center">
        <img
          src={Logo}
          alt="Logo"
          className="absolute left-0 top-0 w-fit h-72 "
        />
        <p className="text-heading-sm font-semibold z-10">
          Need Expert Developers? <br /> We've Got You Covered!
        </p>
        <p className="text-body-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap max-w-[75%] z-10 text-center text-neutral-100">
          Reach out to discuss your development needs, and let’s build something
          great together.
        </p>
        <div className="absolute w-20 h-20 -top-8 -right-8 bg-primary border-8 border-white rounded-full" />
      </div>
    </ContainerComponent>
  )
}

export const FluidContainer: StoryObj<typeof ContainerComponent> = {
  ...Container,
  args: fluidContainer
}
