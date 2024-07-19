// Run the script using ts-node main.ts (install globally through npm install -g ts-node)

require('dotenv').config(); // for the process.env variables to read the .env file
// import { askForConfirmationInProduction, isProdEnv } from "./devUtils/devEnv"
import PATHS from '@dev/PATHS';

// const adminDb = admin.database();
(async () => {
  // await askForConfirmationInProduction() // Exits the script run upon production run user deny
  await main();
})();

async function main() {
  try {
    console.log('Running the main script...');
    console.log(PATHS.DATA);
    // await createAuthUsers();
    // console.log("Done.")
    // migrate_020_030(mainEnv);
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    process.exit(0);
  }
}
