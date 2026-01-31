# Old notes

Found on disk; committing for historical record only.

This is how the previous script-based approach worked -- but it ended up being too brittle.
The strategy was to run these as precommit, postcommit, and postreceive hooks: they'd update
packages' `package.json`s throughout the workspace, shifting to/from/between "fast" mode and
"correct" mode.

Problems:

* It was difficult to understand. Adoption was low, it spawned a lot of questions.
* If anything failed about the hooks, it could leave the packages in an undesired state.
* Too much setup. This was the reference config:

```javascript
{
  "schemaVersion": 1,
  "options": {},
  "modes": {
    "fast": {
      "packages/*": {
        "addEntryPoints": {
          "./internal-raw-src": "./src/index.ts"
        }
      },
      "demos/*": {
        "setImportMap": {
          "#spautz/node-library-template": "@spautz/node-library-template/internal-raw-src"
        }
      }
    },
    "correct": {
      "packages/*": {
        "removeEntryPoints": "./internal-raw-src"
      },
      "demos/*": {
        "setImportMap": {
          "#spautz/node-library-template": "@spautz/node-library-template"
        }
      }
    }
  }
}
```

----

skip-the-build [true]
skip-the-build false
skip-the-build undo

Reading options from a config file:
skip-the-build preset=dev
skip-the-build preset=ci
skip-the-build pre-commit
skip-the-build post-commit

loosen-dependencies [true]
loosen-dependencies false
loosen-dependencies undo
