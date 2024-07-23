import * as path from 'path';

const PROJECT_ROOT = path.resolve(__dirname, '..');
const DEV_FOLDER = path.join(PROJECT_ROOT, '_dev');
const OUTPUT_FOLDER = path.join(PROJECT_ROOT, 'output');
const SECRETS_FOLDER = path.join(DEV_FOLDER, 'secrets');

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

  SECRETS: SECRETS_FOLDER,
  GOOGLE_API_CREDENTIALS: path.join(
    SECRETS_FOLDER,
    'google_api_credentials.json',
  ),
  GOOGLE_API_TOKEN: path.join(SECRETS_FOLDER, 'google_api_token.json'),
} as const;

export default PATHS;
