import {HoursWorkedEntry, UserID} from '@src/types/database';
import {Database, ref, set} from 'firebase/database';
import {generateDatabaseKey} from './baseFunctions';
import DBPATHS from './DBPATHS';

const hoursWorkedRef = DBPATHS.HOURS_WORKEED_USER_ID;

/**
 * Save the hours worked entry to the database.
 *
 * @param db Database object.
 * @param userId User ID to save the hours worked entry under.
 * @param hoursWorked Hours worked entry to save.
 */
async function saveHoursWorked(
  db: Database,
  userId: UserID,
  hoursWorked: HoursWorkedEntry,
): Promise<void> {
  const userHoursRef = hoursWorkedRef.getRoute(userId);

  const newEntryKey = generateDatabaseKey(db, userHoursRef);
  if (!newEntryKey) {
    throw new Error('Failed to generate the database key.');
  }

  await set(ref(db, `${userHoursRef}/${newEntryKey}`), hoursWorked);
}

export {saveHoursWorked};
