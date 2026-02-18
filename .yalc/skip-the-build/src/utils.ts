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

type Awaitable<T> = T | Promise<T>;

async function resolveFnOrPromise<ValueType, ExtraArgsType extends Array<unknown>>(
  value: Awaitable<ValueType | ((...args: ExtraArgsType) => Awaitable<ValueType>)>,
  ...extraArgs: ExtraArgsType
): Promise<ValueType> {
  const value2 = await value;
  if (typeof value2 === 'function') {
    const fn = value2 as (...args: ExtraArgsType) => Awaitable<ValueType>;
    return await fn(...extraArgs);
  }
  return value2;
}

export { deepMerge, resolveFnOrPromise };
