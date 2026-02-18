import { withSkipTheBuild } from '@skip-the-build/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, type UserConfigFn } from 'vite';

import skipTheBuildSettings from '../../skip-the-build.ts';

const viteConfig: UserConfigFn = defineConfig(
  withSkipTheBuild(skipTheBuildSettings, (_env) => ({
    plugins: [
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler']],
        },
      }),
    ],
  })),
);

export default viteConfig;
