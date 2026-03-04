---
sidebar_position: 4
slug: /angular-with-webpack-adapter
---

# Angular + Webpack Adapter

Package: `@skip-the-build/angular-with-webpack`

## Status

Not yet published. This adapter is planned for Angular projects that use a custom Webpack config.

## Expected shape

When implemented, it should mirror the Webpack adapter:

- `getAngularWebpackConfig(skipTheBuildConfig)` (name may vary)
- `withSkipTheBuild(skipTheBuildConfig, baseWebpackConfig)`

Until then, you can use the core Webpack adapter directly if you control your Webpack config.
