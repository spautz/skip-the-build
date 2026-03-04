---
sidebar_position: 5
---

# Turborepo

Turborepo will still run dependency builds for tasks that declare
`"dependsOn": ["^build"]`, even if your local consumers can use source directly.

You have two options:

## Option A: Gate the build command

Make the build task conditional:

```json
{
  "scripts": {
    "build": "skip-the-build || your-build-command"
  }
}
```

When `skip-the-build` evaluates to true, the build step is skipped. When it evaluates to false,
your normal build runs.

## Option B: Avoid depending on build

For local dev tasks (watch, dev, test), run them directly without `^build` dependencies.
This keeps the task graph smaller and avoids unnecessary waits.

## Notes

- CI should still run full builds.
- Combine this with a strict `neverSkipWhen` rule such as `isCI` or `isGitBranch('main')`.
