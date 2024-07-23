#!/bin/bash

# This script serves to modify data in the database.
# Usage: ./modifyData.sh <action> <args>
# Available actions: add-entry remove-entry

set -e

DEV_FOLDER_NAME="_dev"
MAIN_FILE_NAME="main.ts"

SCRIPTS_DIR_REL=$(dirname "${BASH_SOURCE[0]}")
source "$SCRIPTS_DIR_REL/shellUtils.sh"

SCRIPTS_DIR=$(get_abs_path "$SCRIPTS_DIR_REL")
PROJECT_ROOT=$(dirname "$SCRIPTS_DIR")
DEV_DIR="$PROJECT_ROOT/$DEV_FOLDER_NAME"

if [ "$#" -lt 1 ] || [ "$#" -gt 1 ]; then
  error "Usage: ./modifyData.sh <action>"
  exit 1
fi

ACTION=$1

if [ "$ACTION" != "add-entry" ] && [ "$ACTION" != "remove-entry" ]; then
  error "Invalid action: $ACTION"
  exit 1
fi

NODE_ENV=development ts-node "$DEV_DIR/$MAIN_FILE_NAME" $ACTION "$@"

success "Done!"
