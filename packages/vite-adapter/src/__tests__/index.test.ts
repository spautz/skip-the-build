import type { SkipTheBuildConfig } from 'skip-the-build';
import type { UserConfig } from 'vite';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { getViteConfig, withSkipTheBuild } from '../index.ts';

/*
 * Vite fails when imported in Vitest, due to an ESBuild environment check, so we mock it.
 * End-to-end behavior is validated by the demo-apps and external-tests.
 */
vi.mock('vite');

beforeEach(() => {
  vi.clearAllMocks();
});

describe('@skip-the-build/vite', () => {
  describe('getViteConfig()', () => {
    test('returns overrides UserConfig when skipping', async () => {
      const skipTheBuildConfig: SkipTheBuildConfig = {
        skipWhen: [true],
        settings: {
          exportConditionName: ['my-condition'],
        },
      };

      const result: UserConfig = await getViteConfig(skipTheBuildConfig);

      expect(result).toEqual({
        resolve: {
          conditions: ['my-condition'],
        },
        ssr: {
          resolve: {
            conditions: ['my-condition'],
          },
        },
        environments: {
          client: {
            resolve: {
              conditions: ['my-condition'],
            },
          },
          ssr: {
            resolve: {
              conditions: ['my-condition'],
            },
          },
        },
      });
    });

    test('returns overrides UserConfig when not-skipping', async () => {
      const skipTheBuildConfig: SkipTheBuildConfig = {
        skipWhen: [false],
        settings: {
          exportConditionName: ['my-condition'],
        },
      };

      const result: UserConfig = await getViteConfig(skipTheBuildConfig);

      expect(result).toEqual({});
    });
  });

  describe('withSkipTheBuild()', () => {
    test('Merges configs with `mergeConfig`', async () => {
      const { mergeConfig: mergeConfigMock } = await import('vite');

      const skipTheBuildConfig: SkipTheBuildConfig = {
        skipWhen: [true],
        settings: {
          exportConditionName: ['my-condition'],
        },
      };
      const baseConfig: UserConfig = {
        build: {
          sourcemap: true,
        },
      };

      const result = await withSkipTheBuild(skipTheBuildConfig, baseConfig);

      expect(mergeConfigMock).toHaveBeenCalledOnce();
      expect(mergeConfigMock).toHaveBeenCalledWith(
        {
          resolve: {
            conditions: ['my-condition'],
          },
          ssr: {
            resolve: {
              conditions: ['my-condition'],
            },
          },
          environments: {
            client: {
              resolve: {
                conditions: ['my-condition'],
              },
            },
            ssr: {
              resolve: {
                conditions: ['my-condition'],
              },
            },
          },
        },
        baseConfig,
      );
      // These check should always pass (since `mergeConfig` is mocked), but it's an extra
      // safety net just in case
      expect(result).not.toBe(skipTheBuildConfig);
      expect(result).not.toBe(baseConfig);
      expect(result).toEqual({
        build: {
          sourcemap: true,
        },
        resolve: {
          conditions: ['my-condition'],
        },
        ssr: {
          resolve: {
            conditions: ['my-condition'],
          },
        },
        environments: {
          client: {
            resolve: {
              conditions: ['my-condition'],
            },
          },
          ssr: {
            resolve: {
              conditions: ['my-condition'],
            },
          },
        },
      });
    });

    test('Merges configs with `mergeConfig`, when baseConfig already has conditions', async () => {
      const { mergeConfig: mergeConfigMock } = await import('vite');

      const skipTheBuildConfig: SkipTheBuildConfig = {
        skipWhen: [true],
        settings: {
          exportConditionName: ['my-condition'],
        },
      };
      const baseConfig: UserConfig = {
        build: {
          sourcemap: true,
        },
        resolve: {
          conditions: ['existing-condition-in-config'],
        },
        environments: {
          ssr: {
            resolve: {
              conditions: ['existing-ssr-condition-in-config'],
            },
          },
        },
      };

      const result = await withSkipTheBuild(skipTheBuildConfig, baseConfig);

      expect(mergeConfigMock).toHaveBeenCalledOnce();
      expect(mergeConfigMock).toHaveBeenCalledWith(
        {
          resolve: {
            conditions: ['my-condition'],
          },
          ssr: {
            resolve: {
              conditions: ['my-condition'],
            },
          },
          environments: {
            client: {
              resolve: {
                conditions: ['my-condition'],
              },
            },
            ssr: {
              resolve: {
                conditions: ['my-condition'],
              },
            },
          },
        },
        baseConfig,
      );
      // These check should always pass (since `mergeConfig` is mocked), but it's an extra
      // safety net just in case
      expect(result).not.toBe(skipTheBuildConfig);
      expect(result).not.toBe(baseConfig);
      expect(result).toEqual({
        build: {
          sourcemap: true,
        },
        resolve: {
          conditions: ['my-condition', 'existing-condition-in-config'],
        },
        ssr: {
          resolve: {
            conditions: ['my-condition'],
          },
        },
        environments: {
          client: {
            resolve: {
              conditions: ['my-condition'],
            },
          },
          ssr: {
            resolve: {
              conditions: ['my-condition', 'existing-ssr-condition-in-config'],
            },
          },
        },
      });
    });
  });
});
