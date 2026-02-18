---
sidebar_position: 2
---

# Overview

This is a sample docs site for the packages in [spautz/skip-the-build](https://github.com/spautz/skip-the-build)

--


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

