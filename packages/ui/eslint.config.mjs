// @ts-check

import eslint from '@eslint/js'
import deprecationPlugin from 'eslint-plugin-deprecation'
import * as importPlugin from 'eslint-plugin-import'
import jestPlugin from 'eslint-plugin-jest'
import tlPlugin from 'eslint-plugin-testing-library'
import tseslint from 'typescript-eslint'
import { base } from '../eslint-config/base.mjs'
import prettierConfig from 'eslint-config-prettier'
import { reactInternal } from '../eslint-config/react-internal.mjs'
import * as storybookPlugin from 'eslint-plugin-storybook'
import { testingLibrary } from '../eslint-config/testing-library.mjs'

export default tseslint.config(
  // Plugins
  {
    plugins: {
      ['@typescript-eslint']: tseslint.plugin,
      ['import']: importPlugin,
      ['deprecation']: deprecationPlugin,
      ['jest']: jestPlugin,
      ['testing-library']: tlPlugin
    }
  },

  // Default extensions
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,

  // Files to ignore
  {
    ignores: ['**/dist/*', '.prettierrc.js', '*.config.*','coverage/*']
  },

  // Base config
  // @ts-expect-error: base config may have type issues
  base,

  // React specific config
  reactInternal,
  {
    files: ['./**/*.stories.{ts, tsx}'],
    plugins: {
      ['storybook/recommended']: storybookPlugin
    }
  },

  // Testing rules
  testingLibrary
)
