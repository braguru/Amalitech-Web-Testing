import { NextImageProps } from './Image.types'

export const DefaultImageArgs: NextImageProps = {
  src: 'https://images.pexels.com/photos/3183174/pexels-photo-3183174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  alt: 'Default Image',
  width: 150,
  height: 150,
  ratio: '16/9'
}

export const RatioImageArgs: NextImageProps = {
  src: 'https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  alt: 'Aspect Image',
  width: 150,
  height: 150,
  ratio: '2/1'
}
