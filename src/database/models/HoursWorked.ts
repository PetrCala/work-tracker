import {getDBConnection} from '../connection';

/**
 * Saves data to the hours_worked table.
 * @param date - The date of the work entry.
 * @param hoursWorked - The number of hours worked.
 * @param companyId - The ID of the company the work was done for.
 */
export const saveData = async (
  date: string,
  hoursWorked: number,
  companyId: number,
): Promise<void> => {
  const db = await getDBConnection();
  const query = `INSERT INTO hours_worked (date, hours_worked, company_id) VALUES (?, ?, ?);`;
  await db.executeSql(query, [date, hoursWorked, companyId]);
};

/**
 * Retrieves all data from the hours_worked table.
 * @returns An array of all entries in the hours_worked table.
 */
export const getAllData = async (): Promise<
  {id: number; date: string; hours_worked: number; company_id: number}[]
> => {
  const db = await getDBConnection();
  const results = await db.executeSql('SELECT * FROM hours_worked;');
  let data: {
    id: number;
    date: string;
    hours_worked: number;
    company_id: number;
  }[] = [];
  results.forEach(result => {
    for (let i = 0; i < result.rows.length; i++) {
      data.push(result.rows.item(i));
    }
  });
  return data;
};
