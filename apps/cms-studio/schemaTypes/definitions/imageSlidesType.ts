import {defineField} from 'sanity'

export const imageSlidesType = defineField({
  name: 'imageSlidesType',
  type: 'object',
  fields: [
    defineField({
      name: 'slideImage',
      type: 'image',
    }),
    defineField({
      name: 'caption',
      type: 'string',
    }),
  ],
})
