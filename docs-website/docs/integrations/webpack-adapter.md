---
sidebar_position: 2
slug: /webpack-adapter
---

# Webpack Adapter

Package: `@skip-the-build/webpack`

## What it does

- Computes export conditions using the core package.
- Adds those conditions to Webpack `resolve.conditionNames`.

## API

### `getWebpackConfig(skipTheBuildConfig)`

Returns a partial Webpack config that sets `resolve.conditionNames`.

### `withSkipTheBuild(skipTheBuildConfig, baseConfig)`

Accepts a config object, a promise, or a config function. It returns a config of the same shape
with export conditions prepended to any existing `resolve.conditionNames`.

## Usage

```ts
import { withSkipTheBuild } from '@skip-the-build/webpack';
import skipTheBuildConfig from './skip-the-build.ts';

export default withSkipTheBuild(skipTheBuildConfig, {
  // your normal Webpack config
});
```

Config function support:

```ts
import { withSkipTheBuild } from '@skip-the-build/webpack';
import skipTheBuildConfig from './skip-the-build.ts';

export default withSkipTheBuild(skipTheBuildConfig, async (env, argv) => {
  return {
    // your normal Webpack config
  };
});
```
