import { sanityClient } from './sanity.client'
import { Demo } from './sanity.types'

export const getDemoPage = async (): Promise<Demo> => {
  const [data] = await sanityClient.fetch('*[_type == "demo"]')

  return data
}
