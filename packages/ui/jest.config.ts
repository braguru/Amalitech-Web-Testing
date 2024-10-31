import type { Config } from 'jest'
import baseConfig from '../../jest.config'

const config: Config = {
  ...baseConfig,
<<<<<<< HEAD
  displayName: '@amt-web/ui',
  roots:[
    '<rootDir>/__tests__',
    '<rootDir>/src/components'
  ] 
};
=======
  displayName: 'ui',
  rootDir: './'
}
>>>>>>> 7b762ac75e525c9791bdb697ab501440c8191633

export default config
