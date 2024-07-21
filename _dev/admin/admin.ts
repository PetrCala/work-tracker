// Create and export the admin logged database object
import * as path from 'path';
import '@dev/utils/loadEnv'; // Load the environment variables
const admin = require('firebase-admin');
import CONST from '@src/CONST';
import PATHS from '@dev/PATHS';

const environment = process.env.ENVIRONMENT; // From .env, could be null
if (!environment) {
  throw new Error('ENVIRONMENT not set in .env file');
}

if (environment === CONST.ENVIRONMENT.TEST) {
  throw new Error('Cannot run the admin sdk in the test environment');
}

const databaseURL = process.env.DATABASE_URL ?? '';

let sdkFileName: string;

if (environment === CONST.ENVIRONMENT.DEV) {
  sdkFileName = CONST.ADMIN_SDK.DEV;
} else if (environment === CONST.ENVIRONMENT.PROD) {
  sdkFileName = CONST.ADMIN_SDK.PROD;
} else {
  throw new Error('Invalid environment');
}

const sdkFilePath = path.resolve(PATHS.PROJECT_ROOT, `${sdkFileName}.json`);
const serviceAccount = require(sdkFilePath); // Automatically fails if the .env variables are not specified

// Initialize the app with a service account and the database URL
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: databaseURL,
});

export default admin;
