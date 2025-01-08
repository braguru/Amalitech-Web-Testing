import plugin from 'tailwindcss/plugin.js'
import { generateTailwindConfigTheme } from './src/config'

const theme = generateTailwindConfigTheme()
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme,
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus'])
    })
  ]
}

export default config
