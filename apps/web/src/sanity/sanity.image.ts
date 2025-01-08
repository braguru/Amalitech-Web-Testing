import createImageUrlBuilder from '@sanity/image-url'
import { sanityClient } from './sanity.client'

const builder = createImageUrlBuilder(sanityClient)

type UrlForReturnType = ReturnType<typeof builder.image>

export const urlFor = (source: string): UrlForReturnType =>
  builder.image(source)

export const generateImageUrl = (props: string): string => urlFor(props)?.url()
