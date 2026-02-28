import type { UserConfig } from 'vite';
import { configDefaults, defineConfig } from 'vitest/config';

// Check each package and demo
const testPathsToExclude = [
  ...configDefaults.exclude,
  '**/.yalc/**',
  '**/coverage/**',
  '**/legacy-types/**',
  '**/setupTests.ts',
  'docs-website/**',
  // Each external-test has its own test config, following the conventions of its framework, so they're not included
  'external-tests/**',
  // Tests disabled for slow-package-example because they are .. just too slow
  'packages/slow-package-example/**',
  // Svelte tests require processing `.svelte` files: not worth the effort for workspace-level runs
  'demos/sveltekit-v2-demo',
  // @TODO: Restore demos
  'demos/angular-v21-demo',
];

const vitestConfig: UserConfig = defineConfig({
  test: {
    environment: 'jsdom',

    // This gets resolved *per project* (each package, plus the root)
    setupFiles: './setupTests.ts',

    exclude: testPathsToExclude,

    coverage: {
      provider: 'v8',
      exclude: [...(configDefaults.coverage.exclude || []), ...testPathsToExclude],
      reporter: ['html', 'lcov'],
    },
  },
});

export default vitestConfig;
