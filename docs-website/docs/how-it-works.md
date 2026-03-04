---
sidebar_position: 3
---

# How It Works

`skip-the-build` does not rewrite files or change module resolution rules. It relies on the
existing conditional exports system in Node and on the condition support exposed by bundlers.

## At a high level

1. You add an export condition such as `local-dev` to your package `exports`.
2. `skip-the-build` decides whether that condition should be enabled.
3. An adapter (Vite, Webpack, Astro, etc) applies the export conditions to your build tool.

## What the core package does

The core package evaluates your config and returns a list of export conditions:

- `evaluateConfig()` returns `true` when a skip is allowed.
- `getExportConditions()` returns your configured condition name(s) when a skip is allowed.
- If a skip is not allowed, `getExportConditions()` returns an empty list.

Adapters consume those conditions and apply them using standard configuration fields:

- Vite: `resolve.conditions` (and `ssr.resolve.conditions`).
- Webpack: `resolve.conditionNames`.
- Astro: uses Vite under the hood and applies the Vite config.

No build outputs are modified. Your packages can still be built and published normally.
