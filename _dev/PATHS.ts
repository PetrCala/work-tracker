import * as path from 'path';

const PROJECT_ROOT = path.resolve(__dirname, '..');

/**
 * Paths used in the project
 */
const PATHS = {
  PROJECT_ROOT: PROJECT_ROOT,
  TS_CONFIG: path.join(PROJECT_ROOT, 'tsconfig.json'),
  OUTPUT_FOLDER: path.join(PROJECT_ROOT, 'output'),
  DATA: path.join(PROJECT_ROOT, 'data'),
} as const;

export default PATHS;
