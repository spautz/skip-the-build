import { withSkipTheBuild } from '@skip-the-build/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, type UserConfig } from 'vite';

import skipTheBuildSettings from '../../skip-the-build.ts';

const viteConfig: Promise<UserConfig> = withSkipTheBuild(
  skipTheBuildSettings,
  defineConfig({
    plugins: [
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler']],
        },
      }),
    ],
  }),
);

export default viteConfig;
