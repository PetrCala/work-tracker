require('dotenv').config(); // for the process.env variables to read the .env file
import {confirmExecution} from '@dev/utils';
import CONST from '@src/CONST';

const environment = process.env.ENVIRONMENT; // From .env, could be null
if (!environment) {
  throw new Error('ENVIRONMENT not set in .env file');
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
