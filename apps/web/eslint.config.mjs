// @ts-check
import deprecationPlugin from 'eslint-plugin-deprecation'
import * as importPlugin from 'eslint-plugin-import'
import jestPlugin from 'eslint-plugin-jest'
import tlPlugin from 'eslint-plugin-testing-library'
import tseslint from 'typescript-eslint'
import { base } from '../../packages/eslint-config/base.mjs'
import { next } from '../../packages/eslint-config/next.mjs'
import { reactInternal } from '../../packages/eslint-config/react-internal.mjs'
import { testingLibrary } from '../../packages/eslint-config/testing-library.mjs'

export default tseslint.config(
  {
    files: ['app/**/*.{ts,tsx}'],
    plugins: {
      ['@typescript-eslint']: tseslint.plugin,
      ['import']: importPlugin,
      ['deprecation']: deprecationPlugin,
      ['jest']: jestPlugin,
      ['testing-library']: tlPlugin
    }
  },
  {
    ignores: ['.next', '.prettierrc.js', '*.config.*']
  },
  // @ts-ignore
  base,
  next,
  reactInternal,

  // Testing rules
  testingLibrary
)
