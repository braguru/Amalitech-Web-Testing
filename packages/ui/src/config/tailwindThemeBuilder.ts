import { colors, fonts, breakpoints } from '../tailwind-theme-objects';
import { CustomThemeConfig } from 'tailwindcss/types/config';

export const generateTailwindConfigTheme = () => {
    const theme: | Partial<
        CustomThemeConfig & {
            extend: Partial<CustomThemeConfig>;
        }
    >
        | undefined = {
        extend: {
            colors: colors,
            screens: breakpoints,
            fontFamily: fonts,
        }
    }

    return theme;
}

