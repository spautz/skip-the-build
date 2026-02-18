---
sidebar_position: 1
---

# Overview

This is a sample docs site for the packages in [spautz/skip-the-build](https://github.com/spautz/skip-the-build)


--


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
