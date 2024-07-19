import path from 'path';
import PATHS from '@dev/PATHS';
import CONST from '@src/CONST';
import {readJsonFile} from '@dev/utils';

// Define the structure of the JSON data
interface HoursWorkedEntry {
  date: string;
  hours_worked: number;
  company: string;
}

interface Report {
  [key: string]: number;
}

// Function to generate the monthly report
const generateMonthlyReport = (month: string, year: string): Report => {
  if (!month || !year) {
    console.error(
      'Please specify both month and year as arguments. For example: ts-node monthlyReport.ts 01 2024',
    );
    process.exit(1);
  }

  const filePath = path.resolve(PATHS.DATA, `${CONST.DATA_FILE_NAME}.json`);

  const data: HoursWorkedEntry[] = readJsonFile(filePath);

  const report: {[key: string]: number} = {};

  data.forEach(entry => {
    const entryDate = new Date(entry.date);
    const entryMonth = (entryDate.getMonth() + 1).toString().padStart(2, '0'); // getMonth is zero-based
    const entryYear = entryDate.getFullYear().toString();

    if (entryMonth === month && entryYear === year) {
      if (!report[entry.company]) {
        report[entry.company] = 0;
      }
      report[entry.company] += entry.hours_worked;
    }
  });

  console.log(`Monthly Report for ${month}/${year}`);
  for (const company in report) {
    console.log(`Company: ${company}, Hours Worked: ${report[company]}`);
  }

  return report;
};

export {generateMonthlyReport};
