import {createClient} from '@sanity/client'
import {apiVersion, dataset, projectId} from './environments'

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: true,
  apiVersion: apiVersion,
})
