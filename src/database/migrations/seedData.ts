/**
 * SQL query to seed the database with initial data.
 */
const seedData = `
INSERT INTO companies (name) VALUES ('Company A');
INSERT INTO companies (name) VALUES ('Company B');
INSERT INTO hours_worked (date, hours_worked, company_id) VALUES ('2024-01-01', 8, 1);
INSERT INTO hours_worked (date, hours_worked, company_id) VALUES ('2024-01-02', 6, 2);
`;

export default seedData;
