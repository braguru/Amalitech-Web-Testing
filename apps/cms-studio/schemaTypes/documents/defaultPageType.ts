import {defineArrayMember, defineField, defineType} from 'sanity'

export const defaultPageType = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'New Page',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Page Content',
      of: [
        // TODO: Remove and replace appopriate modules
        defineArrayMember({
          name: 'linker',
          type: 'link',
        }),
      ],
    }),
  ],
})
