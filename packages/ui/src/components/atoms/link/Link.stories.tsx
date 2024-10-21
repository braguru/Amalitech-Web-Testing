import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Link } from './Link'
import { TargetProps } from './Link.type'

const meta = {
  title: 'Components/Atoms/Link',
  tags: ['autodocs'],
  component: Link,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AKrOAmkRETk3sYzaD2WCF9/Amalitech-Website-Redesign?node-id=74-5444&node-type=canvas&t=PYymbCCl1Z4DUWwI-0',
    },
    layout: 'centered',
  },
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const ExternalLink: Story = {
  args: {
    external: true,
    href: 'https://example.com',
    color: 'blue',
    label: 'External link',
    target: TargetProps.BLANK,
    title: 'External link',
    children: 'External link',
  },
  render: (args) => <Link {...args} />,
}
