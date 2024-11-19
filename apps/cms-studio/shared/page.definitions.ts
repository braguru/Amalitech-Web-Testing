import {defineField} from 'sanity'

export const slugDefinition = defineField({
  name: 'slug',
  type: 'slug',
  options: {
    source: 'title',
    slugify: (input) => 'demo-' + input.toLowerCase().replace(/\s+/g, '-'),
  },
})
