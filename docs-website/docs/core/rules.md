---
sidebar_position: 2
---

# Rules

A rule is any value that eventually resolves to a boolean:

- `true` or `false`
- a function that returns a rule
- a promise that resolves to a rule

Rules may be sync or async. You can also write your own and include them in `skipWhen`
or `neverSkipWhen`.

## Boolean logic

| Rule | Returns true if |
|:-----|:----------------|
| `and(...rules)` | All rules resolve to true |
| `or(...rules)` | Any rule resolves to true |
| `not(rule)` | The rule resolves to false |

## Environment rules

| Rule | Returns true if |
|:-----|:----------------|
| `envVarExists(name)` | The env var is set (even to an empty value) |
| `envVarHasValue(name, value | values)` | The env var matches the provided value(s) |
| `envVarIsEnabled(name)` | The env var is set to anything except `""`, `"false"`, or `"0"` |
| `envVarIsDisabled(name)` | The env var is unset or set to `""`, `"false"`, or `"0"` |
| `isCI()` | `ci-info` detected a CI environment |
| `notCI()` | `ci-info` did not detect a CI environment |
| `isProductionMode()` | `NODE_ENV === "production"` |
| `isDevelopmentMode()` | `NODE_ENV !== "production"` |
| `isPullRequest()` | `ci-info` detected a pull request (may be `null` on some providers) |
| `notPullRequest()` | `ci-info` did not detect a pull request |

## Git rules

| Rule | Returns true if |
|:-----|:----------------|
| `isGitBranch(nameOrRegex)` | The current branch matches the pattern |
| `notGitBranch(nameOrRegex)` | The current branch does not match the pattern |
| `isShallowClone()` | The repo is a shallow clone |

## Process rules

| Rule | Returns true if |
|:-----|:----------------|
| `hasInteractiveTTY()` | `process.stdout.isTTY` is true |
| `noInteractiveTTY()` | `process.stdout.isTTY` is false |

## All rules export

`allRules` is a convenience export that merges all built-in rule functions into one object.
