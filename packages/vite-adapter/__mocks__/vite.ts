import type { UserConfig } from 'vite';
import { type Mock, vi } from 'vitest';

/*
 * Vite fails when imported in Vitest, due to an ESBuild environment check, so instead of
 * running it directly we mock it out.
 *
 * These are used for the unit tests within the `packages/`.
 * End-to-end behavior is validated by the demo-apps and external-tests.
 *
 * @TODO: Single-source this with `skip-the-build/utils`
 */

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return value != null && Object.prototype.toString.call(value) === '[object Object]';
}

function deepMerge<T>(base: T, overrides: T): T {
  if (Array.isArray(base) && Array.isArray(overrides)) {
    return [...base, ...overrides] as T;
  }

  if (isPlainObject(base) && isPlainObject(overrides)) {
    const out = { ...base } as Record<string, unknown>;
    for (const key of Object.keys(overrides)) {
      out[key] = key in base ? deepMerge(base[key], overrides[key]) : overrides[key];
    }
    return out as T;
  }

  return overrides;
}

export const mergeConfig: Mock<typeof deepMerge<UserConfig>> = vi.fn(deepMerge);
