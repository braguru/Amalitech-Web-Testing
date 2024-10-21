import type { StorybookConfig } from '@storybook/react-vite';
import path, { dirname, join } from 'path';
import { mergeConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
  stories: ['../../../packages/ui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-themes',
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-designs')
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  /**
   * Adds all the path aliases listed in the tsconfig file to storybook config
   * @param config config object for storybook
   * @returns the modified config object
   */
  viteFinal: async (config) => {
    config.plugins?.push(tsconfigPaths());

    return mergeConfig(config, {
      server: {
        watch: {
          ignored: ['**/coverage/**', '**/node_modules/**', '**/dist/**']
        }
      }
    });
  },

  typescript: {
    reactDocgen: 'react-docgen'

  }
}
export default config
