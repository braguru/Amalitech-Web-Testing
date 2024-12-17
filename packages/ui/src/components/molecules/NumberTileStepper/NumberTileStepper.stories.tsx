import { ComponentProps } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import NumberTileStepper from './NumberTileStepper'
import { stepperWith4Args } from './NumberTileStepper.mock'

const meta: Meta<ComponentProps<typeof NumberTileStepper>> = {
  title: 'UI Components/NumberTileStepper',
  component: NumberTileStepper,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AKrOAmkRETk3sYzaD2WCF9/Amalitech-Website-Redesign?node-id=1412-1117'
    }
  },
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof NumberTileStepper>

export const StepperStory: Story = {
  args: stepperWith4Args
}
