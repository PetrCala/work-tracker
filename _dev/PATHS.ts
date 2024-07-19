import * as path from 'path';

const PROJECT_ROOT = path.resolve(__dirname, '..');
const DEV_FOLDER = path.join(PROJECT_ROOT, '_dev');
const OUTPUT_FOLDER = path.join(PROJECT_ROOT, 'output');

/**
 * Paths used in the project
 */
const PATHS = {
  PROJECT_ROOT: PROJECT_ROOT,
  TS_CONFIG: path.join(PROJECT_ROOT, 'tsconfig.json'),
  DATA: path.join(PROJECT_ROOT, 'data'),
  DEV_FOLDER: DEV_FOLDER,
  INVOICE_TEMPLATES: path.join(DEV_FOLDER, 'invoice', 'templates'),
  OUTPUT_FOLDER: OUTPUT_FOLDER,
  REPORTS: path.join(OUTPUT_FOLDER, 'reports'),
  INVOICES: path.join(OUTPUT_FOLDER, 'invoices'),
} as const;

export default PATHS;
