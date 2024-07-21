import path from 'path';
import PATHS from '@dev/PATHS';
import CONST from '@src/CONST';
import {readJsonFile} from '@dev/utils';
import {HoursWorkedData, HoursWorkedEntry} from '@src/types/database';
import {saveHoursWorked} from '@database/hoursWorked';
import {getAdminDb} from '@dev/admin/adminUtils';
import {Database} from 'firebase/database';
import CONFIG from '@src/CONFIG';

async function saveToDb(): Promise<void> {
  const filePath = path.resolve(PATHS.DATA, CONST.DATA_FILES.DATA);
  const db: Database = await getAdminDb();

  const data: HoursWorkedData = readJsonFile(filePath);

  const userId = process.env.USER_ID || CONFIG.USER_ID;

  for (const entry of data) {
    const newEntry: HoursWorkedEntry = {
      date: entry.date,
      hours_worked: entry.hours_worked,
      rate_per_day: entry.rate_per_day,
      currency: entry.currency,
      company_name: entry.company_name,
    };
    console.log('Saving entry:', newEntry);
    await saveHoursWorked(db, userId, newEntry);
  }
}

export {saveToDb};
