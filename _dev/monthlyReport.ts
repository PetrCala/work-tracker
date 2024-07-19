import fs from 'fs';
import path from 'path';
import PATHS from '@dev/PATHS';

// Define the structure of the JSON data
interface HoursWorkedEntry {
  date: string;
  hours_worked: number;
  company: string;
}

// Function to read and parse the JSON file
const readJsonFile = (filePath: string): HoursWorkedEntry[] => {
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
};

// Function to generate the monthly report
const generateMonthlyReport = (
  data: HoursWorkedEntry[],
  month: string,
  year: string,
): {[key: string]: number} => {
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

  return report;
};

// Main function to execute the script
const main = () => {
  const filePath = path.resolve(PATHS.DATA, 'hoursWorked.json');
  const month = process.argv[2]; // e.g., "01" for January
  const year = process.argv[3]; // e.g., "2024"

  if (!month || !year) {
    console.error(
      'Please specify both month and year as arguments. For example: ts-node monthlyReport.ts 01 2024',
    );
    process.exit(1);
  }

  const data = readJsonFile(filePath);
  const report = generateMonthlyReport(data, month, year);

  console.log(`Monthly Report for ${month}/${year}`);
  for (const company in report) {
    console.log(`Company: ${company}, Hours Worked: ${report[company]}`);
  }
};

main();
