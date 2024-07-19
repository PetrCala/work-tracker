/**
 * SQL query to create necessary tables in the database.
 */
const createTables = `
  CREATE TABLE IF NOT EXISTS companies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT
  );

  CREATE TABLE IF NOT EXISTS hours_worked (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT,
      hours_worked INTEGER,
      company_id INTEGER,
      FOREIGN KEY (company_id) REFERENCES companies (id)
  );
`;

export default createTables;
