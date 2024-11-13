import { ContainerType } from './Container.types'

export const defaultContainer: Partial<ContainerType> = {
  background: 'primary-alt',
  fluid: false,
  gap: 8
}

export const fluidContainer: Partial<ContainerType> = {
  fluid: true,
  background: 'accent-alt'
}
