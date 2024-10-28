import tlPlugin from 'eslint-plugin-testing-library'
import jestPlugin from 'eslint-plugin-jest'

export const testingLibrary = {
  files: ['**/*.spec.{js,jsx,ts,tsx}', '**/*.test.{js,jsx,ts,tsx}'],
  plugins: {
    jest: jestPlugin,
    'testing-library/react': tlPlugin
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    }
  },
  rules: {
    // Testing rules
    'jest/no-restricted-matchers': [
      'error',
      {
        toMatchSnapshot: 'Use toMatchInlineSnapshot() instead.'
      }
    ],
    'jest/no-large-snapshots': 'error',
    'no-undef': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': 'off'
  }
}
