import * as path from 'path';
const readline = require('readline');
import PATHS from '@dev/PATHS';
import CONST from '@src/CONST';
import {askForValue, readJsonFile, writeJsonFile} from '@dev/utils';
import {HoursWorkedEntry} from '@src/types/database';

const askForDate = async (defaultDate: string): Promise<string> => {
  let date = defaultDate;
  let validFormat = false;

  while (!validFormat) {
    const userInput = await askForValue(
      `Enter the date (if empty: ${defaultDate}): `,
    );
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (userInput === '') {
      validFormat = true;
    } else if (regex.test(userInput)) {
      date = userInput;
      validFormat = true;
    } else {
      console.log('Invalid date format. Please use the format YYYY-MM-DD.');
    }
  }

  return date;
};

async function addEntry(): Promise<void> {
  const fullPath = path.join(PATHS.DATA, CONST.DATA_FILES.DATA);
  const data = readJsonFile(fullPath);
  const lastEntry = data[data.length - 1];

  const currentDate = new Date().toISOString().split('T')[0];
  const date = await askForDate(currentDate);

  async function getEntryValue(
    prompt: string,
    lastValue: string,
  ): Promise<string> {
    return (
      (await askForValue(`Enter the ${prompt} (if empty: ${lastValue}): `)) ||
      lastValue.toString()
    );
  }

  const lastEntryDetails = {
    hoursWorked: lastEntry.hours_worked,
    ratePerDay: lastEntry.rate_per_day,
    currency: lastEntry.currency,
    companyName: lastEntry.company_name,
  };

  const prompts = {
    hoursWorked: 'hours worked',
    ratePerDay: 'rate per day',
    currency: 'currency',
    companyName: 'company name',
  };

  const hoursWorked = await getEntryValue(
    prompts.hoursWorked,
    lastEntryDetails.hoursWorked,
  );
  const ratePerDay = await getEntryValue(
    prompts.ratePerDay,
    lastEntryDetails.ratePerDay,
  );
  const currency = await getEntryValue(
    prompts.currency,
    lastEntryDetails.currency,
  );
  const companyName = await getEntryValue(
    prompts.companyName,
    lastEntryDetails.companyName,
  );

  const newEntry: HoursWorkedEntry = {
    date: date,
    hours_worked: parseInt(hoursWorked),
    rate_per_day: parseInt(ratePerDay),
    currency: currency,
    company_name: companyName,
  };
  console.log('New entry:');
  console.log(newEntry);
  const confirmAddEntry = await askForValue(
    'Do you want to add this entry? (Y/N): ',
  );
  if (confirmAddEntry.toUpperCase() === 'Y') {
    data.push(newEntry);
    writeJsonFile(fullPath, data);
    console.log('Entry added successfully!');
  } else {
    console.log('Entry not added.');
  }
  return;
}

export {addEntry};
