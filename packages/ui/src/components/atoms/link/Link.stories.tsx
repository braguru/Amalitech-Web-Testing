import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider/next-13.5'

import { Link } from './Link'
import { TargetProps } from './Link.type'

const meta = {
  title: 'UI Components/Link',
  tags: ['autodocs'],
  component: Link,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AKrOAmkRETk3sYzaD2WCF9/Amalitech-Website-Redesign?node-id=74-5444&node-type=canvas&t=PYymbCCl1Z4DUWwI-0'
    },
    layout: 'centered'
  }
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const InternalLink: Story = {
  args: {
    href: '/about-us',
    color: 'blue',
    label: 'About us',
    children: 'About us',
    variant: 'internal'
  },
  render: (args) => <Link {...args} />
}

export const ExternalLink: Story = {
  args: {
    external: true,
    href: 'https://example.com',
    color: 'blue',
    label: 'About us',
    target: TargetProps.BLANK,
    title: 'About us',
    children: 'About us',
    variant: 'external'
  },
  render: (args) => <Link {...args} />
}

export const ButtonLink: Story = {
  args: {
    href: '/button-link',
    color: 'blue',
    label: 'Button link',
    children: 'Button link',
    variant: 'button'
  },
  render: (args) => <Link {...args} />
}
