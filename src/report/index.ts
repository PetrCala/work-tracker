import path from 'path';
import PATHS from '@dev/PATHS';
import CONST from '@src/CONST';
import {readJsonFile, writeJsonFile, createFolderIfNotExists} from '@dev/utils';
import {HoursWorkedData} from '@src/types/database';

interface Report {
  [key: string]: number;
}

/**
 * Generate a monthly report of hours worked for all companies.
 *
 * @param month The month to generate the report for.
 * @param year The year to generate the report for.
 * @param save If true, save the report to a file.
 * @returns The report object.
 */
const generateMonthlyReport = (
  month: string,
  year: string,
  save: boolean = true,
): Report => {
  if (!month || !year) {
    console.error(
      'Please specify both month and year as arguments. For example: ts-node monthlyReport.ts 01 2024',
    );
    process.exit(1);
  }

  const filePath = path.resolve(PATHS.DATA, CONST.DATA_FILES.DATA);

  const data: HoursWorkedData = readJsonFile(filePath);

  const report: {[key: string]: number} = {};

  data.forEach(entry => {
    const entryDate = new Date(entry.date);
    const entryMonth = (entryDate.getMonth() + 1).toString().padStart(2, '0'); // getMonth is zero-based
    const entryYear = entryDate.getFullYear().toString();

    if (entryMonth === month && entryYear === year) {
      if (!report[entry.company_name]) {
        report[entry.company_name] = 0;
      }
      report[entry.company_name] += entry.hours_worked;
    }
  });

  console.log(`Monthly Report for ${month}/${year}`);
  for (const company in report) {
    console.log(`Company: ${company}, Hours Worked: ${report[company]}`);
  }

  if (save) {
    const reportFilePath = path.resolve(
      PATHS.REPORTS,
      `${year}-${month}-report.json`,
    );
    createFolderIfNotExists(PATHS.REPORTS);
    writeJsonFile(reportFilePath, report);
    console.log(`Report saved to ${reportFilePath}`);
  }

  return report;
};

export {generateMonthlyReport};
