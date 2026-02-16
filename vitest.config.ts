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
  // @TODO: Restore demos
  'demos/angular-v21-example',
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
