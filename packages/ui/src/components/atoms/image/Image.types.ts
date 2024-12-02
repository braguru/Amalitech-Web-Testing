import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { ImageProps as NextImage } from 'next/image'
import { NewAspectRatios } from './Image.cva'

export interface Ratio {
  ratio?: keyof typeof NewAspectRatios
}

interface BaseImageProps {
  src: string | StaticImport
  alt: string
  width: number
  height: number
}

export type NextImageProps = NextImage & BaseImageProps & Ratio
