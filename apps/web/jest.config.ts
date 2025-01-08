import type { Config } from 'jest'
import baseConfig from './jest.config'

const config: Config = {
  ...baseConfig,
  displayName: 'web',
  rootDir: './'
}

export default config
