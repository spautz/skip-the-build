import { withSkipTheBuild } from '@skip-the-build/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type UserConfig } from 'vite';

import skipTheBuildSettings from '../../skip-the-build.ts';

const baseConfig: UserConfig = defineConfig({
  plugins: [sveltekit()],
  // Tell Vitest to use the `browser` entry points in `package.json` files, even though it's running in Node
  resolve: process.env.VITEST
    ? {
        conditions: ['browser'],
      }
    : undefined,
});

const viteConfig = await withSkipTheBuild(skipTheBuildSettings, baseConfig);

export default viteConfig;
