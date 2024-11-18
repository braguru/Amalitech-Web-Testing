import { ImageProps as NextImageProps } from 'next/image'

export const DefaultImageArgs: NextImageProps = {
  src: 'https://images.pexels.com/photos/3183174/pexels-photo-3183174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  alt: 'Default Image',
  width: 150,
  height: 150,
  layout: 'intrinsic',
  quality: 75,
  priority: false,
  loading: 'lazy',
  placeholder: 'blur',
  blurDataURL:
    'https://images.pexels.com/photos/3183174/pexels-photo-3183174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  className: '',
  style: {}
}
