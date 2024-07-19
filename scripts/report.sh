#!/bin/bash

# Generate a report of hours work during a certain month and year working for a certain company
# Usage: ./report.sh <company> <month> <year>

set -e

if [ "$#" -ne 3 ]; then
  echo "Usage: ./report.sh <company> <month> <year>"
  exit 1
fi

company=$1
month=$2
year=$3

ts-node _dev/main.ts report $company $month $year
