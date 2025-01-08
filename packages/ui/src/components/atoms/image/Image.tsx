import Image from 'next/image'
import React, { Suspense } from 'react'
import { cn } from '../../../shared/utils'
import { ImageVariants } from './Image.cva'
import { NextImageProps } from './Image.types'
import { ImageLoader } from './Image.loading'

export const ImageComponent = ({
  src,
  alt,
  width,
  height,
  ratio
}: NextImageProps): React.ReactElement => (
  <div>
    <Suspense fallback={<ImageLoader />}>
      <Image
        src={src}
        alt={alt}
        className={cn(ImageVariants({ aspectRatios: ratio }))}
        width={Number(width)}
        height={Number(height)}
      />
    </Suspense>
    {!src && <ImageLoader />}
  </div>
)
