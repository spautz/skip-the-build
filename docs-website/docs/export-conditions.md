---
sidebar_position: 4
---

# Export Conditions

Export conditions are a standard feature of Node package resolution. You can add custom
conditions to your `exports` map, then enable them at runtime through your build tool.

## Add a condition to your package

Pick a condition name (for example `local-dev`) and add it as the first entry under each export.
This ensures it wins when enabled.

```json
{
  "exports": {
    ".": {
      "local-dev": "./src/index.ts",
      "import": {
        "types": "./dist/esm/index.d.ts",
        "default": "./dist/esm/index.js"
      },
      "require": {
        "types": "./dist/cjs/index.d.ts",
        "default": "./dist/cjs/index.cjs"
      }
    }
  }
}
```

## Enable the condition at runtime

The core package returns a list of conditions. Adapters then apply those conditions to your tool.
For example, the Vite adapter injects them into `resolve.conditions`.

If the list is empty, no extra condition is enabled and your normal exports are used.

## Picking a name

- Use a name that will never collide with standard Node conditions.
- `local-dev` is a good default and is used in the examples.

## Safety

Export conditions do not change your published packages. They only change which files are chosen
when a particular condition is enabled.
