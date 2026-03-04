---
sidebar_position: 1
slug: /vite-adapter
---

# Vite Adapter

Package: `@skip-the-build/vite`

## What it does

- Computes export conditions using the core package.
- Injects those conditions into Vite resolution for client and SSR.

## API

### `getViteConfig(skipTheBuildConfig)`

Returns a partial Vite config that sets `resolve.conditions` (plus SSR and environment equivalents)
when skipping is allowed. If skipping is not allowed, it returns an empty object.

### `withSkipTheBuild(skipTheBuildConfig, baseConfig)`

Returns an async config function that merges the skip-the-build config with your base config.
This avoids top-level `await`.

## Usage

```ts
import { defineConfig } from 'vite';
import { withSkipTheBuild } from '@skip-the-build/vite';
import skipTheBuildConfig from './skip-the-build.ts';

export default defineConfig(
  withSkipTheBuild(skipTheBuildConfig, {
    // your normal Vite config
  }),
);
```

If you prefer manual control:

```ts
import { defineConfig, mergeConfig } from 'vite';
import { getViteConfig } from '@skip-the-build/vite';
import skipTheBuildConfig from './skip-the-build.ts';

const skipConfig = await getViteConfig(skipTheBuildConfig);

export default defineConfig(
  mergeConfig(skipConfig, {
    // your normal Vite config
  }),
);
```
