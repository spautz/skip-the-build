#!/usr/bin/env bash

THIS_SCRIPT_NAME=$(basename "$0")
echo "### Begin ${THIS_SCRIPT_NAME}"

# Fail if anything in here fails
set -e
# Run from the repo root
pushd "$(dirname -- "${BASH_SOURCE[0]:-$0}")/.."

source ./scripts/helpers/helpers.sh

###################################################################################################
# Quick shorthand for running all packages', demos', *and* external-tests' checks together.
# This will take a while to run.

./scripts/build-workspace.sh
# @TODO: ./scripts/build-external-tests.sh

###################################################################################################

popd
echo "### End ${THIS_SCRIPT_NAME}"
