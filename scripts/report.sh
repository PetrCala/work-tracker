#!/bin/bash

# Generate a report of hours worked during a certain month and year
# Usage: ./report.sh <month> <year> [--no-save]

set -e

if [ "$#" -lt 3 ] || [ "$#" -gt 4 ]; then
  echo "Usage: ./report.sh <company-name> <month> <year> [--no-save]"
  exit 1
fi

SCRIPTS_DIR_REL=$(dirname "${BASH_SOURCE[0]}")
source "$SCRIPTS_DIR_REL/shellUtils.sh"

SCRIPTS_DIR=$(get_abs_path "$SCRIPTS_DIR_REL")

company_name=$1
month=$2
year=$3
no_save_flag=""

if [ "$#" -eq 4 ]; then
  if [ "$4" == "--no-save" ]; then
    no_save_flag="--no-save"
  else
    echo "Invalid flag: $4"
    echo "Usage: ./report.sh <company-name> <month> <year> [--no-save]"
    exit 1
  fi
fi

source $SCRIPTS_DIR/invokeMain.sh report $company_name $month $year $no_save_flag
