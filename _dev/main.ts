// Run the script using ts-node main.ts (install globally through npm install -g ts-node)

require('dotenv').config(); // for the process.env variables to read the .env file
import {askForConfirmationInProduction, isProdEnv} from '@dev/utils/devEnv';
import {generateMonthlyReport} from './report';
import PATHS from '@dev/PATHS';

(async () => {
  await askForConfirmationInProduction(); // Exits the script run upon production run user deny
  await main();
})();

async function main() {
  try {
    const flags = process.argv.slice(2);
    if (flags.length < 1) {
      console.log(
        'Incorrect usage of the main script. Usage: ts-node <action> [--other-args]',
      );
      process.exit(0);
    }
    console.debug('Running the main script...');
    const [action, ...args] = flags;
    if (action === 'report') {
      const [month, year] = args;
      generateMonthlyReport(month, year);
    }
    // await createAuthUsers();
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    process.exit(0);
  }
}
