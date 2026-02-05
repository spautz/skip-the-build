# Skip The Build

Speed up local dev by using libraries without building them.

This utility lets you directly consume packages during local development -- boosting speed by 1-2
orders of magnitude in a large workspace -- without sacrificing quality checks.

[![npm version](https://img.shields.io/npm/v/skip-the-build.svg)](https://www.npmjs.com/package/skip-the-build)
[![readme](https://img.shields.io/badge/-readme-informational)](https://github.com/spautz/skip-the-build/blob/main/packages/skip-the-build/README.md)
[![build status](https://github.com/spautz/skip-the-build/workflows/CI/badge.svg)](https://github.com/spautz/skip-the-build/actions)
[![test coverage](https://img.shields.io/coveralls/github/spautz/skip-the-build/main.svg)](https://coveralls.io/github/spautz/skip-the-build?branch=main)
[![repo vulnerabilities](https://snyk.io/test/github/spautz/skip-the-build/badge.svg)](https://snyk.io/test/github/spautz/skip-the-build)

## Who is this for?

Library maintainers working in a package workspace.

Published packages must be vanilla Javascript. Transpiling those packages takes time, especially
when there's a long chain of dependencies.

Direct consumption -- consuming a local package as untranspiled Typescript -- is much faster for
local development, but is inherently dangerous: any import mistakes or issues with the build system
will go undetected.

Normally you have to choose between speed and "correctness" (building), and correctness wins.

> `skip-the-build` is a set of utilities to **conditionally** consume local packages directly.
>
> Run the full, formal build steps in CI; don't wait for them locally.

This used to require external scripts, brittle export paths, and a lot of care.
`skip-the-build` does it through your build system using [condition names](https://nodejs.org/docs/latest/api/packages.html#conditional-exports)
and NodeJS's standard resolution rules.

## Usage

### 1. Create a `skip-the-build.ts`

This can live anywhere: your workspace root, within a local package, or the location of your choice.

```javascript
import { defineConfig, isLocalDev, isGitBranch } from 'skip-the-build';

export default defineConfig({
  skipWhen: [
    isLocalDev,
  ],
  neverSkipWhen: [
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
});
```

### 2. Expose the direct export in your packages

For the `exportConditionName: 'local-dev'` above, add the `"local-dev"` condition to your package,
as the first entry under the entry point:

```json lines
  "exports": {
    ".": {
      "local-dev": "./src/index.ts", <-- add this
      "import": {
        "types": "./dist/esm/index.d.ts",
        "default": "./dist/esm/index.js"
      },
      "require": {
        // ...
      }
```

If `"local-dev"` is omitted, nothing bad will happen. It just won't speed things up.

### 3. Add it to your build config[s]

```javascript
// vite.configSchema.ts
import { maybeSkipTheBuild } from '@skip-the-build/vite'
import skipTheBuildConfig from 'your/local/skip-the-build.ts';

const viteConfig = defineConfig(
  maybeSkipTheBuild(skipTheBuildConfig, {
    // rest of your Vite config
    // ...
  }
);
```

Or do it manually if you prefer:

```javascript
// vite.configSchema.ts
import { getViteConfig } from '@skip-the-build/vite'
import skipTheBuildConfig from 'your/local/skip-the-build.ts';

const skipTheViteBuild = await getViteConfig(skipTheBuildConfig);

const viteConfig = defineConfig(
  mergeConfig({ /* your Vite config */ }, skipTheViteBuild)
);
```

## Dev tools, frameworks, and build systems

| Library/Tool    | Integration                     | Notes                                                                                                                                                                                                                                                                          |
|:----------------|:--------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Astro           | Use Vite integration            |                                                                                                                                                                                                                                                                                |
| ESBuild         | Use Vite integration            |                                                                                                                                                                                                                                                                                |
| Jest            | Manual                          |                                                                                                                                                                                                                                                                                |
| Next.js         | Webpack only                    | See Webpack / Turbopack                                                                                                                                                                                                                                                        |
| React Native    | Not supported                   |                                                                                                                                                                                                                                                                                |
| React-Scripts   | Manual                          | Possible with Webpack integration if using CRACO, React-App-Rewired, or similar                                                                                                                                                                                                |
| React-Router v7 | Use Vite integration            |                                                                                                                                                                                                                                                                                |
| Remix 3         | Use ESBuild integration         |                                                                                                                                                                                                                                                                                |
| Storybook       | Use Vite or Webpack integration |                                                                                                                                                                                                                                                                                |
| Tanstack Start  | Use Vite integration            |                                                                                                                                                                                                                                                                                |
| Turbopack       | Not supported                   | [resolve.conditionNames not supported](https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#missing-webpack-loader-features) ([issue #78912](https://github.com/vercel/next.js/discussions/78912)), and AI called potential workarounds "slightly cursed" |
| Vite            | `@skip-the-build/vite`          | Also works in other tools that use Vite under the hood                                                                                                                                                                                                                         |
| Vitest          | Use Vite integration            | Also works in other tools that use Vite under the hood                                                                                                                                                                                                                         |
| Webpack 5       | `@skip-the-build/webpack`       |                                                                                                                                                                                                                                                                                |

## API Reference

### Configuration

The `skip-the-build.ts` config has three keys:

#### skipWhen (list of rules)

The conditions when we _may_ skip the build.

This acts like an allowList: so long as any condition has been met, we'll proceed.
If no rules are specified, we'll always proceed.

#### neverSkipWhen (list of rules)

The conditions when we _will never_ skip the build.

This acts like a denyList: if any condition is met, we will not proceed -- even if a `skipWhen`
condition was met.

#### settings.enableLogs (info | warn | false)

The amount of internal logs which are emitted when `skip-the-build` runs.

* `info` logs information about rule evaluations, in addition to warnings.
* `warn` **(default)** logs alerts about unexpected results or non-critical errors.
* `false` will never log additional information.

Note that errors will always be shown.

#### settings.exportConditionName (condition name or names)

The [NodeJS condition name](https://nodejs.org/docs/latest/api/packages.html#conditional-exports)
(or names) which will be used to directly consume packages.

Defaults to `"local-dev"`

### Presets

A preset is a full set of rules for a common scenario. All presets use `exportConditionName: 'local-dev'` by default.

```javascript
import { presets } from 'skip-the-build';
```

| Preset name   | Notes                                                      |
|:--------------|------------------------------------------------------------|
| `default`     | Skips the build locally but not in CI                      |
| `devModeOnly` | Skips the build when NODE_ENV !== "production", local only |

### Rules

A rule is a function that checks some condition and returns either `true` only if the condition
has been met. Rules may be async, and you can add your own custom conditions by simply adding
your own functions to `skipWhen` or `neverSkipWhen`.

Many rules have overlapping checks (like `isCI`/`notCI`/`isLocalDev`/`notLocalDev`) --
pick the one which is most readable for your case.

#### Environment conditions

| Rule                                  | Returns true if:                                                                 |
|:--------------------------------------|----------------------------------------------------------------------------------|
| `envVarExists(name)`                  | The env variable has been set at all                                             |
| `envVarHasValue(name, value\|values)` | The env variable has been set, and it's one of the values provided               |
| `envVarIsDisabled(name)`              | The env var has either not been set, or it's set to ``, `false`, or `0`          |
| `envVarIsEnabled(name)`               | The env var has been set, and it's not ``, `false`, or `0`                       |
| `isCI`                                | [ci-info](https://www.npmjs.com/package/ci-info) detected a CI environment       |
| `isDevelopmentMode`                   | `NODE_ENV !== "production"`                                                      |
| `isProductionMode`                    | `NODE_ENV === "production"`                                                      |
| `isPullRequest`                       | [ci-info](https://www.npmjs.com/package/ci-info) detected a PR                   |
| `notCI`                               | [ci-info](https://www.npmjs.com/package/ci-info) did not detect a CI environment |
| `notPullRequest`                      | [ci-info](https://www.npmjs.com/package/ci-info) did not detect a PR             |

#### Repo conditions

| Rule                          | Returns true if:                                            |
|:------------------------------|-------------------------------------------------------------|
| `isGitBranch(string\|regex)`  | The current git branch matches the string or pattern        |
| `notGitBranch(string\|regex)` | The current git branch does not match the string or pattern |
| `isShallowClone`              | The current git repo is a shallow repository                |

#### General conditions

| Rule            | Returns true if:                                                            |
|:----------------|-----------------------------------------------------------------------------|
| `and(...Rules)` | All rules return true                                                       |
| `not(Rule)`     | The rule provided did not return true                                       |
| `or(...Rules)`  | Any rule returns true                                                       |
| `random(%)`     | Math.rand() is smaller than the number given. (% should be between 0 and 1) |
| Any function    | The function returns true, or a promise that resolves to true               |
| Any promise     | The promise resolves to true                                                |
| Any other value | The value is exactly true                                                   |
