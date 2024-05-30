# Package-Workspace Mode

A simple utility to switch a npm package workspace between "slow but correct" mode and "faster but informal" mode.

## Motivation

For local development of a npm package, in a pnpm workspace, the package setup can either be _fast_ or _correct_.

To be "correct", the package should be consumed through a `package.json` that exactly matches the package that will be
published to the npm registry.
This means transpiling the package to vanilla Javascript whenever its source code is changed -- which can be very slow
when working with a large package.

A "faster" option is to consume the package's source code directly -- even as untranspiled typescript -- via import maps
that directly reference the package source.
This offers a much better developer experience because you don't have to rebuild on each change.

The "correct" option is better for CI and prepublish checks: you want to ensure that the package works as expected when
consumed as an actual package.

The "faster" option is better for local development: when updating the library's code, you want to validate it quickly
in a consuming app to ensure it does what you expect.

### What This Package Does

This script makes it easy to switch a workspace from the "correct" options to the "faster" option -- and vice versa --
so that you can be "fast" in local development but "correct" in CI.

## How To Use This

1. Add a `workspace-modes.json` to your workspace root. This file defines the exact settings to use for "fast" and "
   correct" mode (or other presets you might want).
1. Run `package-workspace-mode [newMode]` to switch between the modes.

### Example

An example `workspace-modes.json` might look like:

```
{
  "schemaVersion": 1,
  "options": {},
  "modes": {
    "fast": {
      "packages/*": {
        "addEntryPoints": {
          "./internal-raw-src": "./src/index.ts"
        }
      },
      "demos/*": {
        "setImportMap": {
          "#spautz/node-library-template": "@spautz/node-library-template/internal-raw-src"
        }
      }
    },
    "correct": {
      "packages/*": {
        "removeEntryPoints": "./internal-raw-src"
      },
      "demos/*": {
        "setImportMap": {
          "#spautz/node-library-template": "@spautz/node-library-template"
        }
      }
    }
  }
}
```

This will:

- Define a "fast" mode and a "correct" mode
- Use an `internal-raw-src` entry point for "fast" mode
  - Packages will expose this entry point to consumers, allowing them to access `src/index.ts` directly
  - Consumers will reference that entry point via a local import map: `#spautz/node-library-template` will resolve to
    the `internal-raw-src` entry point, bypassing the usual package requirements
- Remove the `internal-raw-src` entry point in "correct" mode, and revert consumers' import maps so that they consume
  the package normally.

Additional modes can be defined in `workspace-modes.json` as desired. For example, instead of switching _all_ packages
to either "fast" or "correct" mode, you could set specific behaviors for some but not others.
