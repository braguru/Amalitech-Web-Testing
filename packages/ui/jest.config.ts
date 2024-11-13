import type { Config } from 'jest'
import baseConfig from '../../jest.config'

const config: Config = {
  ...baseConfig,
  displayName: '@amt-web/ui',
  roots: ['<rootDir>/__tests__', '<rootDir>/src/components'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1'
  }
}

export default config
