// require('dotenv').config(); // for the process.env variables to read the .env file
import dotenv from 'dotenv';
import {resolve} from 'path';
import {confirmExecution} from '@dev/utils';
import PATHS from '@dev/PATHS';
import CONST from '@src/CONST';

const env =
  process.env.NODE_ENV || // Set in the console
  process.argv[2] || // Set in the console
  process.env.ENVIRONMENT || // Set in the .env file
  CONST.ENVIRONMENT.DEV; // Default

console.debug(`Loading the environment: '${env}'`);

const envFile = resolve(PATHS.PROJECT_ROOT, `.env.${env}`);

dotenv.config({path: envFile}); // Load the .env. file

const environment = process.env.ENVIRONMENT; // From .env, could be null
if (!environment) {
  throw new Error(
    'Failed to load the environment from the .env file. Provide the environment name either as the first argument, NODE_ENV or use a plain .env file.',
  );
}

// Perhaps export the environment too if necessary

const isProdEnv = environment === CONST.ENVIRONMENT.PROD;

/** If the script is run in the production environment, ask for confirmation before proceeding.
 * Exit the script run if the user does not confirm.
 *
 * @returns Promise that resolves to void.
 */
async function askForConfirmationInProduction(): Promise<void> {
  if (isProdEnv) {
    const executionPermitted = await confirmExecution(
      'Are you sure you want to run this script in the production environment? (y/n) ',
    );
    if (!executionPermitted) {
      console.log('Script run cancelled.');
      process.exit(0);
    }
  }
  return;
}

export {isProdEnv, askForConfirmationInProduction};
