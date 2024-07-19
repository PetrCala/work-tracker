#!/bin/bash

# This is a generic shell script for invoking the main.ts file

set -e

if [ "$#" -lt 1 ]; then
  echo "Usage: ./invokeMain.sh <action> [--other-args]"
  exit 1
fi

action=$1
args="${@:2}"

ts-node _dev/main.ts $action $args
