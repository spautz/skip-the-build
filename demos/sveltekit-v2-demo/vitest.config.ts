import { defineConfig, mergeConfig, type UserConfigFn } from 'vite';

import baseVitestConfig from '../../vitest.config.ts';
// The Vite config already includes our skip-the-build settings
import viteConfig from './vite.config.js';

const vitestConfig: UserConfigFn = defineConfig(async (env) => {
  const resolvedViteConfig = typeof viteConfig === 'function' ? await viteConfig(env) : viteConfig;

  return mergeConfig(resolvedViteConfig, baseVitestConfig);
});

export default vitestConfig;
