import { describe, expect, test } from 'vitest';

import { configSchema } from '../index.js';

describe('config', () => {
  describe('configSchema', () => {
    test('accepts valid objects', () => {
      const result = configSchema.safeParse({
        whenToSkip: {
          default: true,
        },
        settings: {
          importConditionName: 'unit-test-condition',
        },
      });
      expect(result.error).toBeFalsy();
    });

    test('rejects invalid objects', () => {
      const result = configSchema.safeParse({});
      expect(result.error).toBeTruthy();
      expect(result.error?.name).toBe('ZodError');
    });
  });
});
