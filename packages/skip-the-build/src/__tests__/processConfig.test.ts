import { describe, expect, test } from 'vitest';

import { evaluateConfig, getExportConditions, internal_parseConfig } from '../processConfig.js';

describe('processConfig', () => {
  test('internal_parseConfig merges extended configs and drops extend from output', async () => {
    const baseConfig = {
      settings: { exportConditionName: 'base-export' },
      skipWhen: [true],
      neverSkipWhen: [false],
    };

    const parsed = await internal_parseConfig({
      extend: baseConfig,
      skipWhen: [false],
      settings: { exportConditionName: 'override-export' },
    });

    expect(parsed.settings.exportConditionName).toBe('override-export');
    expect(parsed.skipWhen).toEqual([true, false]);
    expect(parsed.neverSkipWhen).toEqual([false]);
    expect(parsed).not.toHaveProperty('extend');
  });

  test('internal_parseConfig resolves indirect configs for extends', async () => {
    const parsed = await internal_parseConfig(async () => ({
      extend: [
        () => ({
          skipWhen: [true],
        }),
        Promise.resolve({
          neverSkipWhen: [false],
        }),
      ],
      settings: { exportConditionName: 'indirect' },
    }));

    expect(parsed.skipWhen).toEqual([true]);
    expect(parsed.neverSkipWhen).toEqual([false]);
  });

  test('evaluateConfig obeys skipWhen truthiness and neverSkipWhen can block', async () => {
    const passingConfig = {
      settings: { exportConditionName: 'pass' },
      skipWhen: [() => false, () => () => true],
      neverSkipWhen: [],
    };

    expect(await evaluateConfig(passingConfig)).toBe(true);

    const blockedConfig = {
      ...passingConfig,
      neverSkipWhen: [() => true],
      settings: { exportConditionName: 'blocked' },
    };

    expect(await evaluateConfig(blockedConfig)).toBe(false);
  });

  test('getExportConditions only returns values when evaluation succeeds', async () => {
    const failingConfig = {
      settings: { exportConditionName: 'fail' },
      skipWhen: [false],
      neverSkipWhen: [],
    };

    expect(await getExportConditions(failingConfig)).toEqual([]);

    const passingConfig = {
      settings: { exportConditionName: ['first', 'second'] },
      skipWhen: [true],
      neverSkipWhen: [],
    };

    expect(await getExportConditions(passingConfig)).toEqual(['first', 'second']);
  });
});
