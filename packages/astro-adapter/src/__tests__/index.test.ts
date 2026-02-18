import type { AstroUserConfig } from 'astro';
import type { SkipTheBuildConfig } from 'skip-the-build';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { getAstroConfig, withSkipTheBuild } from '../index.ts';

/*
 * Vite fails when imported in Vitest, due to an ESBuild environment check, so we mock it through Astro.
 * End-to-end behavior is validated by the demo-apps and external-tests.
 */
vi.mock('astro/config');
vi.mock('vite');

beforeEach(() => {
  vi.clearAllMocks();
});

describe('@skip-the-build/astro', () => {
  describe('getAstroConfig()', () => {
    test('returns overrides AstroUserConfig when skipping', async () => {
      const skipTheBuildConfig: SkipTheBuildConfig = {
        skipWhen: [true],
        settings: {
          exportConditionName: ['my-condition'],
        },
      };

      const result: AstroUserConfig = await getAstroConfig(skipTheBuildConfig);

      expect(result).toEqual({
        vite: {
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
      });
    });

    test('returns overrides AstroUserConfig when not-skipping', async () => {
      const skipTheBuildConfig: SkipTheBuildConfig = {
        skipWhen: [false],
        settings: {
          exportConditionName: ['my-condition'],
        },
      };

      const result: AstroUserConfig = await getAstroConfig(skipTheBuildConfig);

      expect(result).toEqual({});
    });
  });

  describe('withSkipTheBuild()', () => {
    test('Merges configs with `mergeConfig`', async () => {
      const { mergeConfig: mergeConfigMock } = await import('astro/config');

      const skipTheBuildConfig: SkipTheBuildConfig = {
        skipWhen: [true],
        settings: {
          exportConditionName: ['my-condition'],
        },
      };
      const baseConfig: AstroUserConfig = {
        site: 'https://example.com/',
        vite: {
          build: {
            sourcemap: true,
          },
        },
      };

      const configFn = withSkipTheBuild(skipTheBuildConfig, baseConfig);
      const result = await configFn();

      expect(mergeConfigMock).toHaveBeenCalledOnce();
      expect(mergeConfigMock).toHaveBeenCalledWith(
        {
          vite: {
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
        },
        baseConfig,
      );
      // These check should always pass (since `mergeConfig` is mocked), but it's an extra
      // safety net just in case
      expect(result).not.toBe(skipTheBuildConfig);
      expect(result).not.toBe(baseConfig);
      expect(result).toEqual({
        site: 'https://example.com/',
        vite: {
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
        },
      });
    });

    test('Merges configs with `mergeConfig`, when baseConfig already has conditions', async () => {
      const { mergeConfig: mergeConfigMock } = await import('astro/config');

      const skipTheBuildConfig: SkipTheBuildConfig = {
        skipWhen: [true],
        settings: {
          exportConditionName: ['my-condition'],
        },
      };
      const baseConfig: AstroUserConfig = {
        site: 'https://example.com/',
        vite: {
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
        },
      };

      const configFn = withSkipTheBuild(skipTheBuildConfig, baseConfig);
      const result = await configFn();

      expect(mergeConfigMock).toHaveBeenCalledOnce();
      expect(mergeConfigMock).toHaveBeenCalledWith(
        {
          vite: {
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
        },
        baseConfig,
      );
      // These check should always pass (since `mergeConfig` is mocked), but it's an extra
      // safety net just in case
      expect(result).not.toBe(skipTheBuildConfig);
      expect(result).not.toBe(baseConfig);
      expect(result).toEqual({
        site: 'https://example.com/',
        vite: {
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
        },
      });
    });
  });
});
