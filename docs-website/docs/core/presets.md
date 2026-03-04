---
sidebar_position: 3
---

# Presets

Presets are prebuilt configs for common scenarios.

```ts
import { presets } from 'skip-the-build';
```

| Preset | Skip behavior | Notes |
|:------|:---------------|:------|
| `alwaysSkip` | Always allows skipping | Useful for local-only experiments |
| `default` | Allows skipping when the terminal is interactive and blocks on CI or main | Good local default |
| `devModeOnly` | Allows skipping when `NODE_ENV !== "production"`, blocks on CI | Safe for local dev builds |
| `envVarOnly` | Allows skipping when `SKIP_THE_BUILD` is enabled | Explicit opt-in |
| `neverSkip` | Never allows skipping | Useful as a baseline or override |

You can compose presets with your own config using `extend`.
