// @ts-check
import tseslint from 'typescript-eslint'
import { base } from '../../packages/eslint-config/base.mjs'

export default tseslint.config(
  { ignores: ['**/*.config.*', './.storybook/*'] },
  { files: ['**/*'] },

  // @ts-ignore
  base
)
