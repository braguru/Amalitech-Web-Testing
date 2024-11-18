import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { ImageProps as NextImage } from 'next/image'

interface BaseImageProps {
  src: string | StaticImport
  alt: string
  width: number
  height: number
  layout?: 'fixed' | 'intrinsic' | 'responsive' | 'fill'
  quality?: number
  priority?: boolean
  loading?: 'lazy' | 'eager'
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  className?: string
  style?: React.CSSProperties
  onLoad?: React.ReactEventHandler<HTMLImageElement>
  onError?: React.ReactEventHandler<HTMLImageElement>
}

export type NextImageProps = NextImage & BaseImageProps
