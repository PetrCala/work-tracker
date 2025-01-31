import * as path from 'path';
import fs from 'fs';
import PATHS from '@dev/PATHS';
import CONST from '@src/CONST';
import {askForValue, readJsonFile, writeJsonFile} from '@dev/utils';

async function removeEntry(): Promise<void> {
  const fullPath = path.join(PATHS.DATA, CONST.DATA_FILES.DATA);
  if (!fs.existsSync(fullPath)) {
    console.log('Data file not found. Exiting...');
    return;
  }
  const data = readJsonFile(fullPath) || [];
  const lastEntry = data[data.length - 1] || {};
  if (!lastEntry) {
    console.log('No entries found. Exiting...');
    return;
  }

  console.log('Last entry:');
  console.log(lastEntry);

  const confirmRemove = await askForValue(
    'Do you want to remove this last entry? (Y/N): ',
  );
  if (confirmRemove.toUpperCase() === 'Y') {
    data.pop();
    writeJsonFile(fullPath, data);
    console.log('Entry removed successfully!');
  } else {
    console.log('Entry not removed.');
  }
  return;
}

export default removeEntry;
