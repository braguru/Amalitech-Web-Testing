import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Link } from './Link'
import { TargetProps } from './Link.type'
import { FacebookIcon } from '../icons/FacebookIcon'

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
        type: 'select'
      },
      options: ['internal', 'external'],
      table: {
        defaultValue: { summary: 'internal' },
        type: {
          summary: 'internal | external '
        }
      },
      description:
        'This applies styling to the link based on the type of link it is.'
    },
    target: {
      control: {
        type: 'select'
      },
      options: [
        TargetProps.BLANK,
        TargetProps.PARENT,
        TargetProps.SELF,
        TargetProps.TOP
      ],
      table: {
        defaultValue: { summary: TargetProps.SELF },
        type: {
          summary: `${TargetProps.BLANK} | ${TargetProps.PARENT} | ${TargetProps.SELF} | ${TargetProps.TOP}`
        }
      },
      description:
        'The target attribute specifies where to open the linked document.'
    },
    color: {
      control: {
        type: 'select'
      },
      options: ['primary', 'secondary', 'accent', 'accent-alt', 'neutral'],
      description: 'The color of the link, from the theme palette',
      table: {
        defaultValue: { summary: 'primary' },
        type: {
          summary: 'primary | secondary | accent | accentAlt | neutral'
        }
      }
    },
    href: {
      description: 'The URL of the link'
    },
    label: {
      description: 'The label of the link'
    },
    external: {
      description: 'Indicates if the link is an external link'
    },
    iconLeft: {
      description: 'Indicates if the icon should be placed on the left'
    },
    title: {
      description: 'The title of the link'
    },
    children: {
      description: 'The content of the link',
      table: {
        type: {
          summary: 'ReactNode'
        }
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
    variant: 'internal',
    title: 'Learn more about us'
  },
  render: (args) => <Link {...args} />
}

export const ExternalLink: Story = {
  args: {
    external: true,
    href: 'https://example.com',
    label: 'About us',
    target: TargetProps.BLANK,
    title: 'Visit example.com to learn more',
    children: 'About us',
    variant: 'external'
  },
  render: (args) => <Link {...args} />
}

export const FooterLink: Story = {
  args: {
    href: '/about-us',
    label: 'About us',
    children: 'About us',
    as: 'icon',
    title: 'Learn more about us',
    color: 'neutral'
  },
  render: (args) => (
    <footer className="bg-primary-alt w-full min-w-[320px] max-w-[1440px] h-80 p-8">
      <Link {...args} />
    </footer>
  )
}

export const IconLink: Story = {
  args: {
    href: '/about-us',
    label: 'About us',
    children: 'About us',
    as: 'icon',
    title: 'Learn more about us on Facebook'
  },
  render: (args) => (
    <Link
      as={args.as}
      href={args.href}
      title={args.title}
      iconLeft={args.iconLeft}
    >
      <FacebookIcon />
    </Link>
  )
}
