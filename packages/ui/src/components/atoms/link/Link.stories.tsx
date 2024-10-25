import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

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
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['internal', 'external']
      }
    },
    target: {
      control: {
        type: 'select',
        options: [
          TargetProps.BLANK,
          TargetProps.PARENT,
          TargetProps.SELF,
          TargetProps.TOP
        ]
      }
    },
    color: {
      control: {
        type: 'color'
      }
    },
    href: {
      control: {
        type: 'text'
      }
    },
    label: {
      control: {
        type: 'text'
      }
    },
    external: {
      control: {
        type: 'boolean'
      }
    },
    iconLeft: {
      control: {
        type: 'boolean'
      }
    },
    title: {
      control: {
        type: 'text'
      }
    },
    children: {
      control: {
        type: 'text'
      }
    }
  }
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const InternalLink: Story = {
  args: {
    href: '/about-us',
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
    label: 'About us',
    target: TargetProps.BLANK,
    title: 'About us',
    children: 'About us',
    variant: 'external'
  },
  render: (args) => <Link {...args} />
}
