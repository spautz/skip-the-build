---
sidebar_position: 1
---

# Skip The Build

Speed up local dev by using libraries without building them.

## What this is

`skip-the-build` is a small utility that lets you switch between two workspace modes:

- Fast local development by consuming library source directly.
- Correct CI and production builds that consume built packages.

It does that by enabling Node export conditions when you want them, and leaving your normal
build pipeline alone when you do not.

## Start here

1. Read [Workspace Modes](./workspace-modes.md) for the mental model.
2. Read [How It Works](./how-it-works.md) for the mechanics.
3. Set up [Export Conditions](./export-conditions.md) in your packages.
4. Configure the core package in [Config](./core/config.md) and pick [Rules](./core/rules.md) or [Presets](./core/presets.md).
5. Wire it into your toolchain using the adapter docs in the Integrations section.
