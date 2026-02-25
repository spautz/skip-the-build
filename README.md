# Skip The Build

Speed up local dev by using libraries without building them.

This utility lets you directly consume packages during local development -- reducing build and
live-reload times significantly -- without sacrificing quality checks.

[![npm version](https://img.shields.io/npm/v/skip-the-build.svg)](https://www.npmjs.com/package/skip-the-build)
[![readme](https://img.shields.io/badge/-readme-informational)](https://github.com/spautz/skip-the-build/blob/main/packages/skip-the-build/README.md)
[![build status](https://github.com/spautz/skip-the-build/workflows/CI/badge.svg)](https://github.com/spautz/skip-the-build/actions)
[![test coverage](https://img.shields.io/coveralls/github/spautz/skip-the-build/main.svg)](https://coveralls.io/github/spautz/skip-the-build?branch=main)
[![repo vulnerabilities](https://snyk.io/test/github/spautz/skip-the-build/badge.svg)](https://snyk.io/test/github/spautz/skip-the-build)

## Who is this for?

Library maintainers working in a package workspace.

## Problem

For an in-workspace dependency, you normally have to choose between:

* A) "Correct": the library is built before it's used, to become a normal, well-formed npm package --
     just resolved through the workspace instead of a registry.
* B) "Fast": the library's source files are processed directly by their consumers, without a separate build
     step -- and without being a well-formed npm packages.

`skip-the-build` makes it easy to _switch back and forth_ between the two: "fast" for local dev,
"correct" for CI.

More information: [Workspace Modes](http://spautz.github.io/skip-the-build/workspace-modes/)
and [How It Works](http://spautz.github.io/skip-the-build/how-it-works/)

## Usage

### 1. Create a `skip-the-build.ts`

This can live anywhere: your workspace root, a local package, or the location of your choice.

```javascript
import { defineConfig, isCI, hasInteractiveTTY, isGitBranch } from 'skip-the-build';

export default defineConfig({
  skipWhen: [
    hasInteractiveTTY(),
  ],
  neverSkipWhen: [
    isCI(),
    isGitBranch('main'),
  ],
  settings: {
    exportConditionName: 'local-dev',
  },
});
```

Or use a preset:

```javascript
import { defineConfig, presets } from 'skip-the-build';

export default defineConfig({
  extend: presets.default,
  settings: {
    exportConditionName: 'local-dev',
  },
});
```

Full docs:
* [Config file](http://spautz.github.io/skip-the-build/core/config/)
* [All Rules](http://spautz.github.io/skip-the-build/core/rules/)
* [Presets](http://spautz.github.io/skip-the-build/core/presets/)


### 2. Expose the direct export in your packages

To match the `exportConditionName: "local-dev"` above, add the `"local-dev"` condition to your package,
as the first item under each entry:

```json lines
  "exports": {
    ".": {
      "local-dev": "./src/index.ts",  <-- add this
      "import": {
        "types": "./dist/esm/index.d.ts",
        "default": "./dist/esm/index.js"
      },
      "require": {
        // ...
      },
```

If `"local-dev"` is omitted, nothing bad will happen: you'll just have to run the build to generate
the package's `.js` and `.d.ts` files each time the source changes.


Full docs:
* [Setting up export conditions](http://spautz.github.io/skip-the-build/export-conditions/)

### 3. Add it to your build configs

Add `withSkipTheBuild()` to your package's consumers' build configs.

```javascript
// vite.config.ts
import { defineConfig } from 'vite';
import { withSkipTheBuild } from '@skip-the-build/vite';
import skipTheBuildConfig from 'your/local/skip-the-build.ts';

const viteConfig = defineConfig(
  withSkipTheBuild(skipTheBuildConfig, {
    // rest of your Vite config
    // ...
  }
);
```

Or do it manually if you prefer:

```javascript
// vite.config.ts
import { defineConfig, mergeConfig } from 'vite';
import { getViteConfig } from '@skip-the-build/vite';
import skipTheBuildConfig from 'your/local/skip-the-build.ts';

const skipTheViteBuild = await getViteConfig(skipTheBuildConfig);

const viteConfig: UserConfig = mergeConfig(skipTheViteBuild, defineConfig({
  // rest of your Vite config
  // ...
});
```

## Available Integrations

| Package name                                                                                                   | Use if you have                           | Notes                                                                          |
|:---------------------------------------------------------------------------------------------------------------|:------------------------------------------|:-------------------------------------------------------------------------------|
| [`@skip-the-build/angular-with-webpack`](http://spautz.github.io/skip-the-build/angular-with-webpack-adapter/) | `angular.json` + `webpack.config.ts`      | Not yet published. Requires some additional setup.                             |
| [`@skip-the-build/astro`](http://spautz.github.io/skip-the-build/astro-adapter/)                               | `astro.config.ts`                         |                                                                                |
| [`@skip-the-build/nextjs-with-webpack`](http://spautz.github.io/skip-the-build/nextjs-with-webpack-adapter/)   | `next.config.ts`                          | Not yet published. Webpack only: Turbobuild does not support export conditions |
| [`@skip-the-build/nuxt-with-vite`](http://spautz.github.io/skip-the-build/nuxt-with-vite-adapter/)             | `nuxt.config.ts` with a `vite` section    | Not yet published.                                                             |
| [`@skip-the-build/nuxt-with-webpack`](http://spautz.github.io/skip-the-build/nuxt-with-webpack-adapter/)       | `nuxt.config.ts` with a `webpack` section | Not yet published.                                                             |
| [`@skip-the-build/rolldown`](http://spautz.github.io/skip-the-build/rolldown-adapter/)                         | `rolldown.config.ts`                      | Not yet published.                                                             |
| [`@skip-the-build/tsdown`](http://spautz.github.io/skip-the-build/tsdown-adapter/)                             | `tsdown.config.ts`                        | Not yet published.                                                             |
| [`@skip-the-build/vite`](http://spautz.github.io/skip-the-build/vite-adapter/)                                 | `vite.config.ts`                          |                                                                                |
| [`@skip-the-build/webpack`](http://spautz.github.io/skip-the-build/webpack-adapter/)                           | `webpack.config.ts`                       |                                                                                |

Each integration package provides two helpers:
* <code>async get<em>IntegrationName</em>Config(skipTheBiuldConfig)</code> to create a partial config with export conditions
* <code>async withSkipTheBuild(skipTheBiuldConfig, baseConfig)</code> to automatically merge or apply the export conditions to your config
 
### Frameworks and Build Systems

This is the same information as the table above.

| Framework / Tool | Integration                                                                                                                                                                                                                                                                                   |
|:-----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Angular          | [`@skip-The-build/angular-with-webpack`](http://spautz.github.io/skip-the-build/angular-with-webpack/)                                                                                                                                                                                        |
| Astro            | [`@skip-The-build/astro`](http://spautz.github.io/skip-the-build/vite-adapter/)                                                                                                                                                                                                               |
| Cypress          | Not planned, but straightforward: request it or contribute a PR                                                                                                                                                                                                                               |
| Jest             | Not planned, but straightforward: request it or contribute a PR                                                                                                                                                                                                                               |
| Next.js          | [`@skip-the-build/nextjs-with-webpack`](http://spautz.github.io/skip-the-build/nextjs-with-webpack-adapter/) if using Webpack. (Turbobuild not supported; see note below)                                                                                                                     |
| Nuxt             | [`@skip-the-build/nuxt-with-vite`](http://spautz.github.io/skip-the-build/nuxt-with-vite-adapter/) or [`@skip-the-build/nuxt-with-webpack`](http://spautz.github.io/skip-the-build/nuxt-with-webpack-adapter/)                                                                                |
| Parcel           | Not planned, but straightforward: request it or contribute a PR                                                                                                                                                                                                                               |
| React Native     | Not supported                                                                                                                                                                                                                                                                                 |
| React-Scripts    | Not officially supported, but [`@skip-the-build/webpack`](http://spautz.github.io/skip-the-build/webpack-adapter/) will work if using CRACO, React-App-Rewired, or similar                                                                                                                    |
| React-Router v7  | [`@skip-The-build/vite`](http://spautz.github.io/skip-the-build/vite-adapter/)                                                                                                                                                                                                                |
| Remix 3          | Not yet implemented                                                                                                                                                                                                                                                                           |
| Storybook        | Depends on config. Dedicated helpers not yet implemented.                                                                                                                                                                                                                                     |
| Tanstack Start   | [`@skip-The-build/vite`](http://spautz.github.io/skip-the-build/vite-adapter/)                                                                                                                                                                                                                |
| Turbopack        | Not supported: [resolve.conditionNames not supported](https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#missing-webpack-loader-features) ([issue #78912](https://github.com/vercel/next.js/discussions/78912)), and AI called potential workarounds "slightly cursed" |
| Vite             | [`@skip-the-build/vite`](http://spautz.github.io/skip-the-build/vite-adapter/)                                                                                                                                                                                                                |
| Vitest           | [`@skip-The-build/vite`](http://spautz.github.io/skip-the-build/vite-adapter/)                                                                                                                                                                                                                |
| Webpack          | [`@skip-the-build/webpack`](http://spautz.github.io/skip-the-build/webpack-adapter/)                                                                                                                                                                                                          |


### CLI Integration

_Not yet implemented_

```shell
EXPORT_CONDITIONS=$(npx skip-the-build get-conditions)

node --conditions=$EXPORT_CONDITIONS index.js
bun --conditions=$EXPORT_CONDITIONS index.ts
deno run --conditions=$EXPORT_CONDITIONS mod.ts
esbuild src/index.ts --bundle --conditions=$EXPORT_CONDITIONS
```

### Usage with Turborepo

Turborepo will still run -- and wait for -- dependency builds for tasks that have `"dependsOn": ["^build"]`.

There are two ways to fix this:

* A) Gate the build command with `skip-the-build || your-build-command`
* B) Run build/watch/dev commands directly, without also running dependencies

See doc: [Usage with Turborepo](http://spautz.github.io/skip-the-build/turborepo/)
