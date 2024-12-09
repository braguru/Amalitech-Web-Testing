import createImageUrlBuilder from '@sanity/image-url'
import { sanityClient } from './sanity.client'
import { SanityImage } from './sanity.types'

const builder = createImageUrlBuilder(sanityClient)

type UrlForReturnType = ReturnType<typeof builder.image>

export const urlFor = (source: SanityImage): UrlForReturnType =>
  builder.image(source)

export const generateImageUrl = (props: SanityImage): string =>
  urlFor(props)?.url()
