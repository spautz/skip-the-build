import { fileURLToPath, URL } from 'node:url';
import { withSkipTheBuild } from '@skip-the-build/vite';
import tailwindcss from '@tailwindcss/vite';
import { devtools } from '@tanstack/devtools-vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite';
import { defineConfig, type UserConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

import skipTheBuildSettings from '../../skip-the-build.ts';

const viteConfig: UserConfig = await withSkipTheBuild(
  skipTheBuildSettings,
  // This is the default config from Tanstack-Start
  defineConfig({
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [
      devtools(),
      nitro(),
      // this is the plugin that enables path aliases
      viteTsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
      tailwindcss(),
      tanstackStart(),
      viteReact({
        babel: {
          plugins: ['babel-plugin-react-compiler'],
        },
      }),
    ],
  }),
);

export default viteConfig;
