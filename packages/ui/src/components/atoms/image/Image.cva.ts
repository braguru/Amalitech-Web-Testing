import { cva } from 'class-variance-authority'

export const NewAspectRatios = {
  circle: 'aspect-1/1 rounded-full',
  '1/1': 'aspect-1/1',
  '1/2': 'aspect-1/2',
  '1/2-pill': 'aspect-1/2 rounded-full',
  '2/1': 'aspect-2/1',
  '2/1-pill': 'aspect-2/1 rounded-full',
  '2/3': 'aspect-2/3',
  '3/1': 'aspect-3/1',
  '1/4': 'aspect-1/4',
  '4/3': 'aspect-4/3',
  '5/3': 'aspect-5/3',
  '5/4': 'aspect-5/4',
  '9/16': 'aspect-9/16',
  '16/9': 'aspect-16/9'
}

export const ImageVariants = cva('aspectRatios', {
  variants: {
    aspectRatios: NewAspectRatios
  },
  defaultVariants: {
    aspectRatios: '1/1'
  }
})
