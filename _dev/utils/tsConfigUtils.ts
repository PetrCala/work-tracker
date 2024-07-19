import * as fs from 'fs';
import * as path from 'path';
import PATHS from '@dev/PATHS';
import json5 from 'json5';

interface TsConfig {
  compilerOptions?: {
    paths?: {
      [key: string]: string[];
    };
  };
}

function readTsConfig(tsConfigPath: string = PATHS.TS_CONFIG): TsConfig {
  const fullPath = path.resolve(tsConfigPath);
  const tsConfigRaw = fs.readFileSync(fullPath, 'utf8');
  const tsConfig: TsConfig = json5.parse(tsConfigRaw);
  return tsConfig;
}

function getTsConfigAliases(tsConfigPath: string = PATHS.TS_CONFIG): {
  [alias: string]: string;
} {
  const tsConfig = readTsConfig(tsConfigPath);
  const paths = tsConfig.compilerOptions?.paths || {};
  const aliases: {[alias: string]: string} = {};
  // Convert paths to a simpler alias mapping
  Object.keys(paths).forEach(key => {
    const aliasKey = key.replace('/*', '');
    const aliasValue = paths[key][0].replace('/*', '');
    aliases[aliasKey] = aliasValue;
  });
  return aliases;
}

//
/**
 * Function to get full path to a folder inside the aliased directory
 *
 * @param alias Alias to search in
 * @param folderName Folder name to the the full path for
 * @returns The full path to the desired folder
 *
 * @example
 * const fullPath = getFullPathToFolderInsideAlias('@api', 'keys')
 * console.log(fullPath) // <project-root>/api/keys
 */
function getFullPathToFolderInsideAlias(
  alias: string,
  folderName: string,
): string {
  const tsConfigAliases = getTsConfigAliases(); // Use default tsconfig.json path
  const baseDir = tsConfigAliases[alias];
  if (!baseDir) {
    throw new Error(`Alias ${alias} is not defined.`);
  }
  const fullPath = path.resolve(PATHS.PROJECT_ROOT, baseDir, folderName);
  return fullPath;
}

export {getTsConfigAliases, getFullPathToFolderInsideAlias, readTsConfig};
