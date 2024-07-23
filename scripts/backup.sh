#!/bin/bash

# This script serves to backup a data file to Google Drive.
# Usage: ./backup.sh <backup-file-name> <google-drive-folder-path>

set -e

DEV_FOLDER_NAME="_dev"
MAIN_FILE_NAME="main.ts"

SCRIPTS_DIR_REL=$(dirname "${BASH_SOURCE[0]}")
source "$SCRIPTS_DIR_REL/shellUtils.sh"

SCRIPTS_DIR=$(get_abs_path "$SCRIPTS_DIR_REL")
PROJECT_ROOT=$(dirname "$SCRIPTS_DIR")
DEV_DIR="$PROJECT_ROOT/$DEV_FOLDER_NAME"

if [ "$#" -lt 2 ] || [ "$#" -gt 2 ]; then
  error "Usage: ./backup.sh <backup-file-name> <google-drive-folder-path>"
  exit 1
fi

NODE_ENV=development ts-node backup "$@"

success "Done!"
