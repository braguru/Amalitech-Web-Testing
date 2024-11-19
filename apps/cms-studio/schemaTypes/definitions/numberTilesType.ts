import {defineField} from 'sanity'

export const numberTileType = defineField({
  name: 'number_tile',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caption',
      description: 'Short caption to the numerical values',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      description: 'Extra information on number tile. Shows only for stepper layout',
      type: 'text',
      rows: 2,
    }),
  ],
})

export const numberTileThemeFields = [
  defineField({
    title: 'Number Theme',
    name: 'stepper_theme',
    type: 'string',
    initialValue: 'mixed',
    group: 'numbers',
    hidden: ({parent}) => parent.layout !== 'stepper',
    options: {
      list: [
        {title: 'Mixed', value: 'mixed'},
        {title: 'Dark Blue', value: 'primary-alt'},
      ],
      layout: 'radio',
      direction: 'horizontal',
    },
  }),
  defineField({
    title: 'Number Theme',
    name: 'grid_theme',
    type: 'string',
    initialValue: 'dark',
    group: 'numbers',
    hidden: ({parent}) => parent.layout !== 'two_column',
    options: {
      list: [
        {title: 'Dark', value: 'dark'},
        {title: 'Light', value: 'light'},
      ],
      layout: 'radio',
      direction: 'horizontal',
    },
  }),
]
