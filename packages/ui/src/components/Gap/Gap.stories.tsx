import React, { ComponentProps, ReactNode } from 'react'
import { gapSizes, GapVariants } from './Gap.cva'
import { Meta, StoryObj } from '@storybook/react'
import { cn } from '../../shared/utils'
interface GapWrapperProps {
  children: ReactNode
  gap: keyof typeof gapSizes
}

export const GapWrapper: React.FC<GapWrapperProps> = ({
  children,
  gap = 4
}) => <div className={cn(GapVariants({ gap: gap }), 'bg-gray')}>{children}</div>

type StoryProps = ComponentProps<typeof GapWrapper>

const meta: Meta<StoryProps> = {
  component: GapWrapper,
  title: 'UI Components/Gap',
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/board/QBBqRYCVDFG9uwdM4myMCt/Pre-Kickoff%3A-Amalitech-Website?node-id=1-3179&node-type=sticky&t=S4eSH7rl9bpkFIMP-0'
    }
  },
  argTypes: {
    gap: {
      control: 'select',
      options: Object.keys(gapSizes)
    }
  }
}

export default meta

type Story = StoryObj<StoryProps>

export const Default: Story = {
  args: {
    gap: 4,
    children: (
      <>
        <div className="bg-blue-200 p-4">Child 1</div>
        <div className="bg-red-200 p-4">Child 2</div>
        <div className="bg-green-200 p-4">Child 3</div>
      </>
    )
  }
}

export const LargeGap: Story = {
  args: {
    gap: 8,
    children: (
      <>
        <div className="bg-blue-200 p-4">Child 1</div>
        <div className="bg-red-200 p-4">Child 2</div>
        <div className="bg-green-200 p-4">Child 3</div>
      </>
    )
  }
}
