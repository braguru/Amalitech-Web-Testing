// @ts-check
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import { base } from '../../packages/eslint-config/base.mjs'

export default tseslint.config(
  // Default extensions
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  
  { ignores: ['**/*.config.*', './.storybook/*'] },
  { files: ['**/*'] },

  // @ts-ignore
  base
)
