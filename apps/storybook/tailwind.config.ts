
import {generateTailwindConfigTheme} from '@amt-web/ui/src/config';
import plugin from 'tailwindcss/plugin.js';


const theme = generateTailwindConfigTheme();

const config = {
    content: ['../../packages/ui/src/**/*.{js,ts,jsx,tsx}'],
    darkMode: ['class', '[data-mode="dark"]'],
    theme,
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant(
                'hocus',
                ['&:hover', '&:focus']
            )
        })
    ],
}

export default config