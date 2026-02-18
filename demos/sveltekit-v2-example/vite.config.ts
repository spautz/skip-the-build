import { withSkipTheBuild } from '@skip-the-build/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type UserConfigFn } from 'vite';

import skipTheBuildSettings from '../../skip-the-build.ts';

const viteConfig: UserConfigFn = defineConfig(
  withSkipTheBuild(skipTheBuildSettings, {
    plugins: [sveltekit()],
    // Tell Vitest to use the `browser` entry points in `package.json` files, even though it's running in Node
    resolve: process.env.VITEST
      ? {
          conditions: ['browser'],
        }
      : undefined,
  }),
);

export default viteConfig;
