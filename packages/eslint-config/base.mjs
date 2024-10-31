import globals from 'globals';

export const base = {
  languageOptions: {
    globals: {
      ...globals.node
    },
    parserOptions: {
      allowAutomaticSingleRunInference: true,
      project: [
        './*/tsconfig.json'
      ],
      tsconfigRootDir: import.meta.dirname
    }
  },
  rules: {
   "arrow-body-style":["error",'as-needed'],
    "newline-before-return": "error",
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    'no-irregular-whitespace': 'off',
    'padded-blocks': [
      'error',
      {
        classes: 'never',
        switches: 'never',
        blocks: 'never'
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
    'no-console': 'error',
    "quotes": ["error", "single", { "avoidEscape": true }]
  }
}
