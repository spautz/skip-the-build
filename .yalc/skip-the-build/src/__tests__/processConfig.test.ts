import { describe, expect, test } from 'vitest';

import { evaluateConfig, getExportConditions, internal_parseConfig } from '../processConfig.js';

describe('processConfig', () => {
  test('internal_parseConfig merges extended configs and drops extend from output', () => {
    const baseConfig = {
      settings: { exportConditionName: 'base-export' },
      skipWhen: [true],
    };

    const parsed = internal_parseConfig({
      extend: baseConfig,
      skipWhen: [false],
      settings: { exportConditionName: 'override-export' },
    });

    expect(parsed.settings.exportConditionName).toBe('override-export');
    expect(parsed.skipWhen).toEqual([true, false]);
    expect(parsed).not.toHaveProperty('extend');
  });

  test('evaluateConfig obeys skipWhen truthiness and neverSkipWhen can block', async () => {
    const passingConfig = {
      settings: { exportConditionName: 'pass' },
      skipWhen: [() => false, () => () => true],
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
    };

    expect(await getExportConditions(failingConfig)).toEqual([]);

    const passingConfig = {
      settings: { exportConditionName: ['first', 'second'] },
      skipWhen: [true],
    };

    expect(await getExportConditions(passingConfig)).toEqual(['first', 'second']);
  });
});
