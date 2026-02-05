import type { SkipTheBuildConfig } from 'skip-the-build';
import type { UserConfig } from 'vite';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { maybeSkipTheBuild } from '../index.ts';

// @FIXME: Unreviewed AI-generated tests, need to review and expand

vi.mock('vite', () => ({
  mergeConfig: vi.fn((baseConfig, newConfig) => ({ ...baseConfig, ...newConfig })),
}));

beforeEach(() => {
  vi.clearAllMocks();
});

describe('maybeSkipTheBuild', () => {
  test('merges baseViteConfig with generated config', async () => {
    const mockBaseConfig: UserConfig = {
      resolve: {
        conditions: ['mockBaseCondition'],
      },
    };

    const mockSkipTheBuildConfig: SkipTheBuildConfig = {
      settings: {
        exportConditionName: ['mockCondition'],
      },
    };

    const result = await maybeSkipTheBuild(mockSkipTheBuildConfig, mockBaseConfig);

    expect(result.resolve?.conditions).toContain('mockBaseCondition');
    expect(result.resolve?.conditions).toContain('import');
    expect(result.resolve?.conditions).toContain('default');
    expect(result.resolve?.conditions).toContain('mockCondition');
  });

  test('ensures configurations are unique after merging', async () => {
    const mockBaseConfig: UserConfig = {
      resolve: {
        conditions: ['duplicateCondition', 'mockBaseCondition'],
      },
    };

    const mockSkipTheBuildConfig: SkipTheBuildConfig = {
      settings: {
        exportConditionName: ['duplicateCondition', 'mockCondition'],
      },
    };

    const result = await maybeSkipTheBuild(mockSkipTheBuildConfig, mockBaseConfig);

    const resolvedConditions = result.resolve?.conditions || [];
    expect(resolvedConditions).toHaveLength(new Set(resolvedConditions).size); // Assert uniqueness
    expect(resolvedConditions).toContain('mockCondition');
    expect(resolvedConditions).toContain('import');
    expect(resolvedConditions).toContain('default');
    expect(resolvedConditions).toContain('duplicateCondition');
  });

  test('calls mergeConfig with correct arguments', async () => {
    const mockBaseConfig: UserConfig = {
      resolve: {
        conditions: ['mockBaseCondition'],
      },
    };

    const mockSkipTheBuildConfig: SkipTheBuildConfig = {
      settings: {
        exportConditionName: ['mockCondition'],
      },
    };

    const { mergeConfig } = await import('vite');

    await maybeSkipTheBuild(mockSkipTheBuildConfig, mockBaseConfig);

    expect(mergeConfig).toHaveBeenCalledOnce();
    expect(mergeConfig).toHaveBeenCalledWith(
      mockBaseConfig,
      expect.objectContaining({
        resolve: expect.objectContaining({
          conditions: expect.arrayContaining([
            'mockBaseCondition',
            'mockCondition',
            'import',
            'default',
          ]),
        }),
      }),
    );
  });
});
