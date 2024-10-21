import { colors } from '../tailwind-theme-objects';
import { CustomThemeConfig } from 'tailwindcss/types/config';

export const generateTailwindConfigTheme = () => {
    const theme: | Partial<
        CustomThemeConfig & {
            extend: Partial<CustomThemeConfig>;
        }
    >
        | undefined = {

            // Place all configurations you would like to add/extend into tailwind's theme config.
        extend: {
            colors: colors,
        }
    }

    return theme;
}

