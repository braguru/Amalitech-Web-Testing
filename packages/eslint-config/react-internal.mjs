import jsxA11y from 'eslint-plugin-jsx-a11y'

export const reactInternal = {
  files: ['**/*.{js,jsx,ts,tsx}'],
  plugins: {
    'jsx-a11y': jsxA11y
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    }
  },
  rules: {
   '@typescript-eslint/explicit-function-return-type': 'error',

    // Accessibility rules
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/label-has-associated-control': 'error',
    'jsx-a11y/anchor-has-content': 'warn'
  }
}
