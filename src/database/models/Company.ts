import {getDBConnection} from '../connection';

/**
 * Retrieves all companies from the companies table.
 * @returns An array of all companies.
 */
export const getAllCompanies = async (): Promise<
  {id: number; name: string}[]
> => {
  const db = await getDBConnection();
  const results = await db.executeSql('SELECT * FROM companies;');
  let companies: {id: number; name: string}[] = [];
  results.forEach(result => {
    for (let i = 0; i < result.rows.length; i++) {
      companies.push(result.rows.item(i));
    }
  });
  return companies;
};
