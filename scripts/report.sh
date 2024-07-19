#!/bin/bash

# Generate a report of hours worked during a certain month and year
# Usage: ./report.sh <month> <year> [--no-save]

set -e

if [ "$#" -lt 2 ] || [ "$#" -gt 3 ]; then
  echo "Usage: ./report.sh <month> <year> [--no-save]"
  exit 1
fi

month=$1
year=$2
no_save_flag=""

if [ "$#" -eq 3 ]; then
  if [ "$3" == "--no-save" ]; then
    no_save_flag="--no-save"
  else
    echo "Invalid flag: $3"
    echo "Usage: ./report.sh <month> <year> [--no-save]"
    exit 1
  fi
fi

ts-node _dev/main.ts report $month $year $no_save_flag
