import {FieldGroupDefinition} from 'sanity'

const blockGroups: FieldGroupDefinition[] = [
  {title: 'General', name: 'general', default: true},
  {title: 'Theme', name: 'theme'},
  {title: 'Numbers', name: 'numbers'},
  {title: 'Image(s)', name: 'image'},
]

export const getModuleFieldGroups = (groups: string[]): FieldGroupDefinition[] => {
  const moduleGroup = blockGroups.filter((record) => groups.includes(record.name))

  return moduleGroup
}
