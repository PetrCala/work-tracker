#!/bin/bash

# Generate a report of hours work during a certain month and year
# Usage: ./report.sh <month> <year>

set -e

if [ "$#" -ne 2 ]; then
  echo "Usage: ./report.sh <month> <year>"
  exit 1
fi

month=$1
year=$2

ts-node _dev/main.ts report $month $year
