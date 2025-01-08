import {defineField} from 'sanity'
import {COLOR_VARIANTS} from '../options/colorVariants'

export const linkType = defineField({
  title: 'Link',
  description: 'Create hyperlink to another page or external URL',
  name: 'link',
  type: 'object',
  fields: [
    defineField({
      title: 'Label',
      name: 'label',
      type: 'string',
      description: 'Text to display link',
    }),
    defineField({
      title: 'Use External Link',
      name: 'external',
      type: 'boolean',
      description: 'Toggle to use link for external URL',
    }),
    defineField({
      title: 'Target Page',
      name: 'internal',
      type: 'reference',
      to: [{type: 'page'}],
      hidden: ({parent}) => parent?.external,
    }),
    defineField({
      title: 'External Link URL',
      name: 'url',
      type: 'url',
      hidden: ({parent}) => !parent?.external,
    }),
    defineField({
      title: 'Color',
      name: 'color',
      type: 'string',
      initialValue: 'primary',
      options: {
        list: COLOR_VARIANTS,
        layout: 'dropdown',
      },
    }),
  ],
})
