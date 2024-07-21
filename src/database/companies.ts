import {Company} from '@src/types/database';
import {Database, ref, set} from 'firebase/database';
import {generateDatabaseKey} from './baseFunctions';
import DBPATHS from './DBPATHS';

const companiesRef = DBPATHS.COMPANIES;

/**
 * Add a company entry to the database.
 *
 * @param db Database object.
 * @param company Company entry to add.
 */
async function addCompanyToDb(db: Database, company: Company): Promise<void> {
  const newEntryKey = generateDatabaseKey(db, companiesRef);
  if (!newEntryKey) {
    throw new Error('Failed to generate the database key.');
  }

  await set(ref(db, `${companiesRef}/${newEntryKey}`), company);
}

export {addCompanyToDb};
