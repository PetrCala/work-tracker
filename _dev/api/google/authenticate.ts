import {google} from 'googleapis';
import {OAuth2Client} from 'google-auth-library';
import * as fs from 'fs';
import PATHS from '@dev/PATHS';

const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

/**
 * Authenticate the user and get the OAuth2Client object.
 *
 * @returns The OAuth2Client object.
 */
async function authenticate(): Promise<OAuth2Client> {
  const credentials = JSON.parse(
    fs.readFileSync(PATHS.GOOGLE_API_CREDENTIALS, 'utf8'),
  );
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0],
  );

  let token;
  try {
    token = JSON.parse(fs.readFileSync(PATHS.GOOGLE_API_TOKEN, 'utf8'));
  } catch (error) {
    token = await getAccessToken(oAuth2Client);
  }
  oAuth2Client.setCredentials(token);
  return oAuth2Client;
}

/**
 * Get the access token from the OAuth2Client object.
 *
 * @param oAuth2Client The OAuth2Client object.
 * @returns The access token.
 */
async function getAccessToken(oAuth2Client: OAuth2Client): Promise<any> {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const {tokens} = await oAuth2Client.getToken(authUrl);
  fs.writeFileSync(PATHS.GOOGLE_API_TOKEN, JSON.stringify(tokens));
  console.log('Token stored to', PATHS.GOOGLE_API_TOKEN);
  return tokens;
}

export {authenticate, getAccessToken};
