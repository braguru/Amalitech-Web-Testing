import type { Config } from 'jest'
import baseConfig from '../../jest.config'

const config: Config = {
  ...baseConfig,
  displayName: 'ui',
  rootDir: './'
}

export default config
