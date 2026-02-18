---
sidebar_position: 3
---

# Overview

This is a sample docs site for the packages in [spautz/skip-the-build](https://github.com/spautz/skip-the-build)

--

A preset is a full set of rules for a common scenario. All presets use `exportConditionName: 'local-dev'` by default.

```javascript
import { presets } from 'skip-the-build';
```

| Preset name   | When it skips              | Notes                                                                        |
|:--------------|----------------------------|------------------------------------------------------------------------------|
| `default`     | Running locally            | Fast for local dev, slow/correct for CI                                      |
| `devModeOnly` | Running dev builds locally | Extra safe: fast for hot reload and local tests, slow/correct for all builds |
| `envVarOnly`  | `env.SKIP_THE_BUILD=1`     | For testing                                                                  |
