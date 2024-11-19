import { createElement } from 'react'
import { HeadlineBlok } from '../../components/headline/HeadlineBlok'
import { LinkBlok } from '../../components/link/LinkBlok'
import { TextBlok } from '../../components/text/TextBlok'
import { Demo, Page } from '../../sanity/sanity.types'

// types
export type SchemaData = Pick<Page | Demo, 'body'> & {
  _key: string
  _type: string
}

// schema-to-component map
const schemaComponents = new Map()

schemaComponents.set('link_blok', LinkBlok)
schemaComponents.set('text_blok', TextBlok)
// add name of block on sanity and their web component
schemaComponents.set('headline_blok', HeadlineBlok)

// Dynamically create components from their schema type
export const componentMapper = (
  body: Array<SchemaData>
): React.ReactElement => {
  const componentObj = Object.fromEntries(schemaComponents)
  if (!body?.length) {
    return <></>
  }

  const components = body.map((schemaType: SchemaData) => {
    if (
      schemaType._type &&
      typeof componentObj[schemaType?._type] !== 'undefined'
    ) {
      return createElement(componentObj[schemaType?._type], {
        ...schemaType,
        key: schemaType?._key
      })
    }
  })

  return <>{components}</>
}
