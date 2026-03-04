---
sidebar_position: 1
---

# Config File

A `skip-the-build` config can be an object, a function that returns an object, or a promise.
You can also compose configs with `extend`.

```ts
import { defineSkipTheBuildConfig, presets } from 'skip-the-build';

export default defineSkipTheBuildConfig({
  extend: presets.default,
  settings: {
    exportConditionName: 'local-dev',
  },
});
```

## Shape

### `skipWhen` (array of rules)

The allow list. If any rule evaluates to `true`, a skip is allowed.
If `skipWhen` is provided and all rules evaluate to `false`, a skip is not allowed.

### `neverSkipWhen` (array of rules)

The deny list. If any rule evaluates to `true`, a skip is not allowed even if `skipWhen` passed.

### `extend` (config or list of configs)

Merge in one or more other configs. Each entry can be an object, a function, or a promise.
Later configs override earlier ones. Arrays are concatenated.

### `settings.exportConditionName` (string or array)

The export condition(s) to enable when a skip is allowed. This is required when config validation
is enabled (default).

### `settings.validateConfig` (boolean)

When `true` (default), the config is validated against the schema. Set to `false` to bypass
validation (useful for advanced setups or staged migrations).

## Evaluation rules

- Rules can be booleans, sync functions, or promises.
- At least one of `skipWhen` or `neverSkipWhen` must be present when validation is enabled.
- If `skipWhen` is omitted, a skip is allowed by default and only blocked by `neverSkipWhen`.
- If you want to always proceed, set `skipWhen: []`.

See [Rules](./rules.md) for the available built-in rules.
