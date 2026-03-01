import { describe, expect, test } from 'vitest';

import { internal_configSchema, internal_partialConfigSchema } from '../index.js';

describe('internal_configSchema', () => {
  test('accepts valid objects', () => {
    const result = internal_configSchema.safeParse({
      settings: {
        exportConditionName: 'unit-test-condition',
      },
    });
    expect(result.error).toBeFalsy();
  });

  test('rejects invalid objects', () => {
    const result = internal_configSchema.safeParse({});
    expect(result.error).toBeTruthy();
    expect(result.error?.name).toBe('ZodError');
  });
});

describe('internal_partialConfigSchema', () => {
  test('accepts partial objects without settings', () => {
    const result = internal_partialConfigSchema.safeParse({
      skipWhen: [true],
    });
    expect(result.error).toBeFalsy();
  });

  test('accepts indirect extends', () => {
    const result = internal_partialConfigSchema.safeParse({
      extend: () => ({ settings: { exportConditionName: 'indirect' } }),
    });
    expect(result.error).toBeFalsy();
  });
});
