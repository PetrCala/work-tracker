// Taken and modified form the Expensify GitHub
// Source: https://github.com/Expensify/App/blob/main/src/CONFIG.ts

import type {NativeConfig} from 'react-native-config';
import Config from 'react-native-config';
import CONST from './CONST';
import getPlatform from '@libs/getPlatform';

// react-native-config doesn't trim whitespace on iOS for some reason so we
// add a trim() call to prevent headaches
const get = (config: NativeConfig, key: string, defaultValue: string): string =>
  (config?.[key] ?? defaultValue).trim();

// Set default values to contributor friendly values to make development work out of the box without an .env file
const ENVIRONMENT = get(Config, 'ENVIRONMENT', CONST.ENVIRONMENT.DEV);

export default {
  APP_NAME: 'Work Tracker',
  COMPONENT_NAME:
    getPlatform() === CONST.PLATFORM.IOS ? 'work_tracker' : 'work_tracker',
  ENVIRONMENT,
  IS_IN_PRODUCTION:
    // Platform.OS === 'web' ? process.env.NODE_ENV === 'production' : !__DEV__,
    process.env.NODE_ENV === 'production' && !__DEV__,
  IS_IN_STAGING: ENVIRONMENT === CONST.ENVIRONMENT.STAGING,
  IS_IN_DEVELOPMENT: ENVIRONMENT === CONST.ENVIRONMENT.DEV,
  IS_IN_TEST:
    process.env.NODE_ENV === 'test' || ENVIRONMENT === CONST.ENVIRONMENT.TEST,
} as const;
