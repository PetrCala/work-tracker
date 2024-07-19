import * as path from 'path';

const PROJECT_ROOT = path.resolve(__dirname, '..');
const OUTPUT_FOLDER = path.join(PROJECT_ROOT, 'output');

/**
 * Paths used in the project
 */
const PATHS = {
  PROJECT_ROOT: PROJECT_ROOT,
  TS_CONFIG: path.join(PROJECT_ROOT, 'tsconfig.json'),
  OUTPUT_FOLDER: OUTPUT_FOLDER,
  DATA: path.join(PROJECT_ROOT, 'data'),
  REPORTS: path.join(OUTPUT_FOLDER, 'reports'),
} as const;

export default PATHS;
