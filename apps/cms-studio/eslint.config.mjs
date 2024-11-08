import deprecationPlugin from 'eslint-plugin-deprecation'
import * as importPlugin from 'eslint-plugin-import'
import jestPlugin from 'eslint-plugin-jest'
import eslint from '@eslint/js'
import tlPlugin from 'eslint-plugin-testing-library'
import tseslint from 'typescript-eslint'
import {base} from '../../packages/eslint-config/base.mjs'
import {reactInternal} from '../../packages/eslint-config/react-internal.mjs'

export default tseslint.config(
  {
    env: {
      browser: true,
    },
    files: ['**/*.{ts}'],
    plugins: {
      ['@typescript-eslint']: tseslint.plugin,
      ['import']: importPlugin,
      ['deprecation']: deprecationPlugin,
      ['jest']: jestPlugin,
      ['testing-library']: tlPlugin,
    },
  },

  // Default extensions
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      'env.d.ts',
      'sanity.cli.ts',
      'sanity.config',
      '*.config.*',
      '**/app.js',
      'dist/**',
      '.sanity/**',
    ],
  },
  base,
  reactInternal,
)
