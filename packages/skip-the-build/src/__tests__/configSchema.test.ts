import { describe, expect, test } from 'vitest';

import { internal_finalConfigSchema, internal_partialConfigSchema } from '../index.js';

describe('internal_finalConfigSchema', () => {
  test('accepts valid objects', () => {
    const result = internal_finalConfigSchema.safeParse({
      skipWhen: [],
      neverSkipWhen: [],
      settings: {
        exportConditionName: 'unit-test-condition',
        validateConfig: true,
      },
    });
    expect(result.error).toBeFalsy();
  });

  test('rejects invalid objects', () => {
    const result = internal_finalConfigSchema.safeParse({});
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
