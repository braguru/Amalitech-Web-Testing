import {defineArrayMember, defineField, defineType} from 'sanity'
import {slugDefinition} from '../../shared/page.definitions'

export const demoDocument = defineType({
  title: 'Demo Page',
  name: 'demo',
  type: 'document',
  fields: [
    slugDefinition,
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
        defineArrayMember({
          name: 'link_blok',
          type: 'link',
        }),
        defineArrayMember({
          name: 'text_blok',
          type: 'text_definition',
        }),
        defineArrayMember({
          name: 'headline_blok',
          type: 'headline',
        }),
        defineArrayMember({
          name: 'numbers_module_blok',
          type: 'numbers_module',
        }),
      ],
    }),
  ],
})
