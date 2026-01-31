import { describe, expect, test } from 'vitest';

import { internal_configSchema } from '../index.js';

describe('config', () => {
  describe('internal_configSchema', () => {
    test('accepts valid objects', () => {
      const result = internal_configSchema.safeParse({
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
      const result = internal_configSchema.safeParse({});
      expect(result.error).toBeTruthy();
      expect(result.error?.name).toBe('ZodError');
    });
  });
});
