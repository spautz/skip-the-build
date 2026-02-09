#!/usr/bin/env bash
set -euo pipefail

NUM_FILES_TO_GENERATE=3000

# Always run from the package root
REPO_ROOT=$(git -C "$(dirname "${BASH_SOURCE[0]:-$0}")" rev-parse --show-toplevel)
PACKAGE_ROOT="$REPO_ROOT/packages/slow-package-example"
pushd "$PACKAGE_ROOT"

mkdir -p src/generated

indexFileContents=""
for ((i=0; i<$NUM_FILES_TO_GENERATE; i++)); do
  printf 'export type Thing%d<T> =\n  T extends infer U ? U[] : never;\n\nexport const value%d: Thing%d<number> = [%d];\n' \
    "$i" "$i" "$i" "$i" \
    > "src/generated/file-$i.ts"

  indexFileContents+="export * from './file-$i.js';"$'\n'
done

printf "%s" "$indexFileContents" > src/generated/index.ts

popd
