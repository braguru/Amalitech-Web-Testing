// @ts-check

import nextPlugin from '@next/eslint-plugin-next'
import reactPlugin from 'eslint-plugin-react'
import hooksPlugin from 'eslint-plugin-react-hooks'
import tlPlugin from 'eslint-plugin-testing-library'

export const next = {
  plugins: {
    react: reactPlugin,
    'react-hooks': hooksPlugin,
    '@next/next': nextPlugin,
    'testing-library/react': tlPlugin
  },
  rules: {
    ...nextPlugin.configs.recommended.rules
  }
}
