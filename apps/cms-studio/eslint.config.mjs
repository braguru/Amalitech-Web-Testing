import deprecationPlugin from 'eslint-plugin-deprecation'
import * as importPlugin from 'eslint-plugin-import'
import jestPlugin from 'eslint-plugin-jest'
import tlPlugin from 'eslint-plugin-testing-library'
import tseslint from 'typescript-eslint'
import { base } from '../../packages/eslint-config/base.mjs'
import { reactInternal } from '../../packages/eslint-config/react-internal.mjs'

export default tseslint.config(
  {
    files: ['**/*.{ts}'],
    plugins: {
      ['@typescript-eslint']: tseslint.plugin,
      ['import']: importPlugin,
      ['deprecation']: deprecationPlugin,
      ['jest']: jestPlugin,
      ['testing-library']: tlPlugin,
    },
  },
  {
    ignores: ['env.d.ts', 'sanity.cli.ts', 'sanity.config', '*.config.*'],
  },
  base,
  reactInternal,
)
