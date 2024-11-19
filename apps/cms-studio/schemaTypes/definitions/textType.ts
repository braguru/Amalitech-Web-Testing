import {defineField} from 'sanity'

export const headlineType = defineField({
  title: 'Headline',
  name: 'headline',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      title: 'Headline',
      name: 'headline',
    }),
  ],
})

export const textType = defineField({
  title: 'Text',
  name: 'text_definition',
  type: 'object',
  fields: [
    defineField({
      type: 'text',
      title: 'Text',
      name: 'text',
    }),
  ],
})
