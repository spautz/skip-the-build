---
sidebar_position: 3
slug: /astro-adapter
---

# Astro Adapter

Package: `@skip-the-build/astro`

## What it does

Astro uses Vite internally. This adapter computes export conditions using the core package and
injects a Vite config under Astro's `vite` key.

## API

### `getAstroConfig(skipTheBuildConfig)`

Returns a partial Astro config that includes a Vite config when skipping is allowed.

### `withSkipTheBuild(skipTheBuildConfig, baseConfig)`

Returns the merged Astro config.

## Usage

```ts
import { defineConfig } from 'astro/config';
import { withSkipTheBuild } from '@skip-the-build/astro';
import skipTheBuildConfig from './skip-the-build.ts';

export default defineConfig(
  await withSkipTheBuild(skipTheBuildConfig, {
    // your normal Astro config
  }),
);
```

If you need to avoid top-level `await`, call `getAstroConfig()` yourself and merge.
