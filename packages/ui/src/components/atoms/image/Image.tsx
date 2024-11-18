import Image from 'next/image'
import React from 'react'
import { NextImageProps } from './Image.types'

export const ImageComponent = ({
  src,
  alt,
  width,
  height,
  layout = 'intrinsic',
  quality,
  priority,
  loading = 'lazy',
  placeholder,
  blurDataURL,
  className,
  style,
  onLoad,
  onError
}: NextImageProps): React.ReactElement => (
  <Image
    src={src}
    alt={alt}
    width={Number(width)}
    height={Number(height)}
    layout={layout}
    quality={quality}
    priority={loading ? undefined : priority}
    loading={loading}
    placeholder={placeholder}
    blurDataURL={
      placeholder === 'blur' && !blurDataURL ? String(src) : blurDataURL
    }
    className={className}
    style={style}
    onLoad={onLoad}
    onError={onError}
  />
)
