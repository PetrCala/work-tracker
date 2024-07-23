import path from 'path';
import PATHS from '@dev/PATHS';
import CONST from '@src/CONST';
import {readJsonFile, writeJsonFile, createFolderIfNotExists} from '@dev/utils';
import {CompanyName, HoursWorkedData} from '@src/types/database';
import {isEmptyObject} from '@src/types/utils/EmptyObject';

interface Report {
  hours_worked: number;
  days_worked: number;
  revenue: number;
}

/**
 * Generate a monthly report of hours worked for all companies.
 *
 * @param companyName The company to generate the report for.
 * @param month The month to generate the report for.
 * @param year The year to generate the report for.
 * @param save If true, save the report to a file.
 * @returns The report object.
 */
const generateMonthlyReport = (
  companyName: CompanyName,
  month: string,
  year: string,
  save: boolean = true,
): Report | {} => {
  if (!companyName || !month || !year) {
    console.error(
      'Please specify all of company, month and year as arguments. For example: ts-node monthlyReport.ts Apple 01 2024',
    );
    process.exit(1);
  }

  const filePath = path.resolve(PATHS.DATA, CONST.DATA_FILES.DATA);

  const data: HoursWorkedData = readJsonFile(filePath);

  let currency: string | null = null;
  let report: Report = {
    hours_worked: 0,
    days_worked: 0,
    revenue: 0,
  };

  data.forEach(entry => {
    const entryDate = new Date(entry.date);
    const entryMonth = (entryDate.getMonth() + 1).toString().padStart(2, '0'); // getMonth is zero-based
    const entryYear = entryDate.getFullYear().toString();

    if (entry.currency) {
      currency = entry.currency;
    }

    if (entryMonth === month && entryYear === year) {
      if (entry.company_name == companyName) {
        let daysWorked = entry.hours_worked / 8;
        report.hours_worked += entry.hours_worked;
        report.days_worked += daysWorked;
        report.revenue += daysWorked * entry.rate_per_day;
      }
    }
  });

  if (isEmptyObject(report)) {
    console.log('No data found for the specified month/year.');
    return {};
  }

  console.log(`Monthly report for ${companyName} ${month}/${year}`);
  console.log(`Hours Worked: ${report.hours_worked}`);
  console.log(`Days Worked: ${report.days_worked}`);
  console.log(`Revenue: ${currency} ${report.revenue}`);

  if (save) {
    const reportFilePath = path.resolve(
      PATHS.REPORTS,
      `${year}-${month}-${companyName}.json`,
    );
    createFolderIfNotExists(PATHS.REPORTS);
    writeJsonFile(reportFilePath, report);
    console.log(`Report saved to ${reportFilePath}`);
  }

  return report;
};

export {generateMonthlyReport};
