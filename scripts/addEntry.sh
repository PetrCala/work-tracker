#!/bin/bash

# This script serves to add a data entry to the database.

set -e

DEV_FOLDER_NAME="_dev"
MAIN_FILE_NAME="main.ts"

SCRIPTS_DIR_REL=$(dirname "${BASH_SOURCE[0]}")
source "$SCRIPTS_DIR_REL/shellUtils.sh"

SCRIPTS_DIR=$(get_abs_path "$SCRIPTS_DIR_REL")
PROJECT_ROOT=$(dirname "$SCRIPTS_DIR")
DEV_DIR="$PROJECT_ROOT/$DEV_FOLDER_NAME"

NODE_ENV=development ts-node "$DEV_DIR/$MAIN_FILE_NAME" add-entry "$@"

success "Data entry added successfully!"
