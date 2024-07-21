import {UserID} from '@src/types/database';
import type {IsEqual} from 'type-fest';

const DBPATHS = {
  ROOT: '',

  COMPANIES: 'companies',
  COMPANIES_COMPANY_ID: {
    route: '/companies/:company_id',
    getRoute: (company_id: string) => `companies/${company_id}` as const,
  },
  CONFIG: 'config',
  CONFIG_APP_SETTINGS: 'config/app_settings',
  HOURS_WORKEED: 'hours_worked',
  HOURS_WORKEED_USER_ID: {
    route: '/hours_worked/:user_id',
    getRoute: (user_id: UserID) => `hours_worked/${user_id}` as const,
  },
  HOURS_WORKEED_USER_ID_ENTRY_ID: {
    route: '/hours_worked/:user_id/:entry_id',
    getRoute: (user_id: UserID, entry_id: string) =>
      `hours_worked/${user_id}/${entry_id}` as const,
  },
  USERS: 'users',
  USERS_USER_ID: {
    route: '/users/:user_id',
    getRoute: (user_id: UserID) => `users/${user_id}` as const,
  },
} as const;

export default DBPATHS;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ExtractPathName<TRoute> = TRoute extends {
  getRoute: (...args: any[]) => infer TRouteName;
}
  ? TRouteName
  : TRoute;

type AllPaths = {
  [K in keyof typeof DBPATHS]: ExtractPathName<(typeof DBPATHS)[K]>;
}[keyof typeof DBPATHS];

type PathIsPlainString = IsEqual<AllPaths, string>;

/**
 * Represents all database routes in the app as a union of literal strings.
 *
 * If this type resolves to `never`, it implies that one or more routes defined within `PATHS` have not correctly used
 * `as const` in their `getPath` function return value.
 */
type Path = PathIsPlainString extends true ? never : AllPaths;

export type {Path};
