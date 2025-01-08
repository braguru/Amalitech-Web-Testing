import {defineArrayMember, defineField} from 'sanity'

export const imageSliderModule = defineField({
  name: 'imageSliderModule',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      type: 'string',
    }),
    defineField({
      name: 'text',
      type: 'text',
    }),
    defineField({
      name: 'cta',
      type: 'array',
      of: [{type: 'link'}],
      validation: (rule) => rule.length(1).error('You can only add one item'),
    }),
    defineField({
      title: 'Orientation',
      type: 'string',
      name: 'orientation',
      description: 'Toggle to change image orientation to landscape',
      initialValue: 'portrait',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: [
          {title: 'Portrait', value: 'portrait'},
          {title: 'Landscape', value: 'landscape'},
        ],
      },
    }),
    defineField({
      type: 'string',
      name: 'Background',
      initialValue: 'white',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: [
          {title: 'White', value: 'white'},
          {title: 'Dark Blue', value: 'dark-blue'},
          {title: 'Neutral', value: 'neutral'},
        ],
      },
    }),
    defineField({
      name: 'autoplay',
      type: 'boolean',
    }),
    defineField({
      name: 'slides',
      type: 'array',
      of: [defineArrayMember({type: 'imageSlidesType', name: 'imageSliderCTA'})],
      validation: (rule) => rule.min(4).max(8),
    }),
  ],
})
