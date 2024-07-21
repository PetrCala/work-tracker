import {Auth} from 'firebase-admin/lib/auth';
import {Database} from 'firebase/database';
import admin from '@dev/admin/admin';

/**
 * Get the auth object for the admin user. Targets the environment as specified
 * in the .env file.
 *
 * @returns The admin auth object.
 */
async function getAdminAuth(): Promise<Auth> {
  return admin.auth();
}

/**
 * Get the database object for the admin user. Targets the environment as specified
 * in the .env file.
 *
 * @returns The admin database object.
 */
async function getAdminDb(): Promise<Database> {
  return admin.database();
}

export {getAdminAuth, getAdminDb};
