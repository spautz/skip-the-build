---
sidebar_position: 2
---

# Workspace Modes

When a package lives in the same workspace as its consumers, you have two competing goals:

- Correct builds: consume the package exactly as it would be published (built JS, types, package.json exports).
- Fast feedback: consume the package source directly so rebuilds and reloads are fast.

`skip-the-build` lets you switch between those modes without changing any source code.

## Mode A: Correct

- Your consumers resolve the normal `import` and `require` entries in `exports`.
- You build the package before running the consumer.
- This is what you want in CI and in release pipelines.

## Mode B: Fast

- Your consumers resolve a custom export condition such as `local-dev`.
- That condition points at package source (`src/**`) instead of built output.
- No extra build step is needed for local development.

## Switching between modes

`skip-the-build` evaluates your config at runtime and returns a list of export conditions.
If the conditions list is empty, you are in Correct mode. If it includes `local-dev` (or whatever
name you choose), you are in Fast mode.

See [Config](./core/config.md) for the rules and [Export Conditions](./export-conditions.md) for package setup.
