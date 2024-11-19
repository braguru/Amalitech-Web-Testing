import { createClient } from 'next-sanity'
import { getApiVersion } from './sanity.utils'

const apiVersion = getApiVersion()

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_CLIENT_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_CLIENT_DATASET,
  useCdn: false,
  apiVersion: apiVersion
})
