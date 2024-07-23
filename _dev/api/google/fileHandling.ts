import {google, drive_v3} from 'googleapis';
import {OAuth2Client} from 'google-auth-library';
import * as fs from 'fs';
import * as path from 'path';
import PATHS from '@dev/PATHS';

async function createFolder(
  drive: drive_v3.Drive,
  parentId: string | undefined,
  folderName: string,
): Promise<string> {
  const fileMetadata = {
    name: folderName,
    mimeType: 'application/vnd.google-apps.folder',
    parents: parentId ? [parentId] : [],
  };

  const folder = await drive.files.create({
    resource: fileMetadata,
    fields: 'id',
  });

  return folder.data.id!;
}

async function getOrCreateFolders(
  drive: drive_v3.Drive,
  folderPath: string,
): Promise<string> {
  const folders = folderPath.split('/');
  let parentId: string | undefined = undefined;

  for (const folderName of folders) {
    const res = await drive.files.list({
      q: `name='${folderName}' and mimeType='application/vnd.google-apps.folder' and '${
        parentId ? parentId : 'root'
      }' in parents`,
      fields: 'files(id, name)',
      spaces: 'drive',
    });

    let folder = res.data.files?.find(folder => folder.name === folderName);

    if (!folder) {
      parentId = await createFolder(drive, parentId, folderName);
    } else {
      parentId = folder.id!;
    }
  }

  return parentId!;
}

/**
 * Upload a file to Google Drive.
 *
 * @param auth The OAuth2Client object.
 * @param localFileName The local file name to upload (in the data folder).
 * @param driveFolderPath The path to the folder in Google Drive.
 */
async function uploadFile(
  auth: OAuth2Client,
  localFileName: string,
  driveFolderPath: string,
) {
  const drive = google.drive({version: 'v3', auth});
  const folderId = await getOrCreateFolders(drive, driveFolderPath);

  const fileMetadata = {
    name: localFileName,
    parents: [folderId],
  };

  const filePath = path.resolve(PATHS.DATA, localFileName);
  const media = {
    mimeType: 'application/json',
    body: fs.createReadStream(filePath),
  };

  const file = await drive.files.create({
    resource: fileMetadata,
    media: media,
    fields: 'id',
  });

  console.log('File Id:', file.data.id);
}

export {uploadFile};
