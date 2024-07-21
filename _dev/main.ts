// Run the script using ts-node main.ts (install globally through npm install -g ts-node)

import '@dev/utils/loadEnv'; // Load the environment variables
import {askForConfirmationInProduction} from '@dev/utils/loadEnv';
import {generateMonthlyReport} from '@src/report';
import {createExampleInvoice} from '@src/invoice/example';
import {saveToDb} from './temp/saveToDb';

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
      const [month, year, ...otherArgs] = args;
      const saveFile = !otherArgs.includes('--no-save');
      generateMonthlyReport(month, year, saveFile);
    } else if (action === 'create-example-invoice') {
      await createExampleInvoice();
    } else if (action === 'test') {
      await saveToDb();
    }
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    process.exit(0);
  }
}
