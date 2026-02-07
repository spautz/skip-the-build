import type { SkipTheBuildConfig } from 'skip-the-build';
import { describe, expect, test, vi } from 'vitest';
import type { Configuration } from 'webpack';

import { getWebpackConfig, withSkipTheBuild } from '../index.ts';

const createSkipConfig = (shouldSkip: boolean): SkipTheBuildConfig => ({
  skipWhen: [shouldSkip],
  settings: {
    exportConditionName: ['skip-the-build'],
  },
});

describe('@skip-the-build/webpack', () => {
  describe('getWebpackConfig()', () => {
    test('returns resolve condition names when skipping', async () => {
      const skipTheBuildConfig = createSkipConfig(true);
      const result = await getWebpackConfig(skipTheBuildConfig);

      expect(result).toEqual({
        resolve: {
          conditionNames: ['skip-the-build'],
        },
      });
    });

    test('returns empty resolve conditions when not skipping', async () => {
      const skipTheBuildConfig = createSkipConfig(false);
      const result = await getWebpackConfig(skipTheBuildConfig);

      expect(result).toEqual({
        resolve: {
          conditionNames: [],
        },
      });
    });
  });

  describe('withSkipTheBuild()', () => {
    test('prepends export conditions to a base configuration', async () => {
      const skipTheBuildConfig = createSkipConfig(true);
      const baseConfig: Configuration = { name: 'base' };

      const result = await withSkipTheBuild(skipTheBuildConfig, baseConfig);

      expect(result).toEqual({
        name: 'base',
        resolve: {
          conditionNames: ['skip-the-build'],
        },
      });
    });

    test('preserves existing resolve.conditionNames after prepending', async () => {
      const skipTheBuildConfig = createSkipConfig(true);
      const baseConfig: Configuration = {
        resolve: {
          conditionNames: ['already-there'],
        },
      };

      const result = await withSkipTheBuild(skipTheBuildConfig, baseConfig);

      expect(result.resolve?.conditionNames).toEqual(['skip-the-build', 'already-there']);
    });

    test('wraps a config function and reuses its arguments', async () => {
      const skipTheBuildConfig = createSkipConfig(true);
      const env = { production: true };
      const argv = { mode: 'production' };
      const baseConfig = vi.fn(async () => ({ name: 'function' as const }));

      const wrapped = withSkipTheBuild(skipTheBuildConfig, baseConfig);

      expect(typeof wrapped).toBe('function');

      const result = await wrapped(env, argv);

      expect(baseConfig).toHaveBeenCalledOnce();
      expect(baseConfig).toHaveBeenCalledWith(env, argv);
      expect(result).toEqual({
        name: 'function',
        resolve: {
          conditionNames: ['skip-the-build'],
        },
      });
    });

    test('supports arrays of configurations', async () => {
      const skipTheBuildConfig = createSkipConfig(true);
      const configs: Configuration[] = [
        { name: 'one' },
        { name: 'two', resolve: { conditionNames: ['existing'] } },
      ];

      const result = await withSkipTheBuild(skipTheBuildConfig, configs);

      expect(result).toEqual([
        {
          name: 'one',
          resolve: {
            conditionNames: ['skip-the-build'],
          },
        },
        {
          name: 'two',
          resolve: {
            conditionNames: ['skip-the-build', 'existing'],
          },
        },
      ]);
    });
  });
});
