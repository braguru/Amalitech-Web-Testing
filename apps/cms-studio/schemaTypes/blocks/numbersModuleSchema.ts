import {defineArrayMember, defineField} from 'sanity'
import {numberTileThemeFields} from '../definitions/numberTilesType'
import {getModuleFieldGroups} from '../groups/blockGroups'

export const numberModuleSchema = defineField({
  title: 'Numbers Module',
  name: 'numbers_module',
  type: 'object',
  description: 'Module to display numerical content',
  groups: getModuleFieldGroups(['general', 'numbers']),
  preview: {
    select: {
      title: 'headline',
      subtitle: 'layout',
      media: 'background_image',
      image: 'image',
    },
    prepare({image, media, subtitle, title}) {
      const asset = subtitle === 'default' ? media : subtitle === 'two_column' ? image : ''
      const layout = subtitle.replace('_', ' ').toUpperCase()

      return {
        title,
        media: asset,
        subtitle: 'Layout: ' + layout + ' ' + 'Audience: DE',
      }
    },
  },
  fields: [
    defineField({
      title: 'Module Layout',
      name: 'layout',
      type: 'string',
      description: 'Which layout should the content use?',
      group: 'general',
      initialValue: 'default',
      validation: (rule) => rule.required(),
      options: {
        list: [
          {title: 'Default', value: 'default'},
          {title: 'Two Column', value: 'two_column'},
          {title: 'Stepper', value: 'stepper'},
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'caption',
      type: 'string',
      group: 'general',
      description: 'Short caption to the numerical values',
    }),
    defineField({
      name: 'headline',
      type: 'string',
      group: 'general',
    }),
    defineField({
      title: 'Text',
      name: 'description',
      type: 'text',
      rows: 3,
      group: 'general',
    }),
    defineField({
      title: 'Background Image',
      name: 'background_image',
      description: 'Only works for Default layout. Upload image to use Dark Blue background',
      type: 'image',
      group: 'general',
      hidden: ({parent}) => parent.layout !== 'default',
      options: {
        hotspot: true,
        metadata: ['blurhash'],
      },
    }),
    defineField({
      name: 'image',
      type: 'image',
      group: 'general',
      description: 'Upload image for Two Column layout',
      hidden: ({parent}) => parent.layout !== 'two_column',
      options: {
        hotspot: true,
        metadata: ['blurhash'],
      },
    }),
    defineField({
      title: 'Image Right',
      name: 'image_right',
      type: 'boolean',
      group: 'general',
      description: 'Only works for Two Column layout. Toggle to position image to the right',
      initialValue: false,
      hidden: ({parent}) => parent.layout !== 'two_column',
    }),
    defineField({
      title: 'Number Symbol',
      name: 'symbol',
      type: 'string',
      group: 'numbers',
      initialValue: 'plus',
      options: {
        list: ['percentage', 'plus'],
      },
    }),
    ...numberTileThemeFields,
    defineField({
      name: 'numbers',
      type: 'array',
      group: 'numbers',
      description: 'Add number tiles. Min 2 and Max 4',
      of: [
        defineArrayMember({
          type: 'number_tile',
          name: 'numbers',
        }),
      ],
      validation: (rule) => rule.min(2).max(4),
    }),
  ],
})
