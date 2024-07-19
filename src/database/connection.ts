import SQLite from 'react-native-sqlite-storage';
import databaseConfig from './config';
import createTables from './migrations/createTables';
import seedData from './migrations/seedData';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

/**
 * Establishes a connection to the SQLite database.
 * @returns The database connection object.
 */
export const getDBConnection = async (): Promise<SQLite.SQLiteDatabase> => {
  const params: SQLite.DatabaseParams = {
    name: databaseConfig.name,
    // version: databaseConfig.version,
    // displayName: databaseConfig.displayName,
    // size: databaseConfig.size,
  };
  const db = await SQLite.openDatabase(params);
  await createDatabaseTables(db);
  return db;
};

/**
 * Creates the necessary tables in the database if they do not already exist.
 * @param db - The database connection object.
 */
const createDatabaseTables = async (
  db: SQLite.SQLiteDatabase,
): Promise<void> => {
  await db.executeSql(createTables);
  await db.executeSql(seedData);
};
