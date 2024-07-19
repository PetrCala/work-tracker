// Taken and modified form the Expensify GitHub
// Source: https://github.com/Expensify/App/blob/main/src/CONST.ts

// import Config from 'react-native-config';

// Creating a default array and object this way because objects ({}) and arrays ([]) are not stable types.
// Freezing the array ensures that it cannot be unintentionally modified.
const EMPTY_ARRAY = Object.freeze([]);
const EMPTY_OBJECT = Object.freeze({});

// const ANDROID_PACKAGE_NAME = 'com.petrcala.worktracker';
const GH_PAGES_URL = 'https://petrcala.github.io/work-tracker';

const CONST = {
  APP_DOWNLOAD_LINK: `${GH_PAGES_URL}/assets/html/qr-link.html`,
  APP_QR_CODE_LINK: `${GH_PAGES_URL}/assets/images/work-tracker-qr-code-with-logo.png`,
  APP_IN_BETA: true,
  AVAILABLE_PLATFORMS: ['ios', 'android'],
  BUTTON_STATES: {
    DEFAULT: 'default',
    ACTIVE: 'active',
    PRESSED: 'pressed',
    COMPLETE: 'complete',
    DISABLED: 'disabled',
  },
  COLOR_SCHEME: {
    LIGHT: 'light',
    DARK: 'dark',
  },
  DATA_FILES: {
    COMPANIES: 'companies.json',
    DATA: 'data.json',
  },
  DATE: {
    SQL_DATE_TIME: 'YYYY-MM-DD HH:mm:ss',
    FNS_FORMAT_STRING: 'yyyy-MM-dd',
    LOCAL_TIME_FORMAT: 'h:mm a',
    YEAR_MONTH_FORMAT: 'yyyyMM',
    MONTH_FORMAT: 'MMMM',
    WEEKDAY_TIME_FORMAT: 'eeee',
    MONTH_DAY_ABBR_FORMAT: 'MMM d',
    SHORT_DATE_FORMAT: 'MM-dd',
    MONTH_DAY_YEAR_ABBR_FORMAT: 'MMM d, yyyy',
    MONTH_DAY_YEAR_FORMAT: 'MMMM d, yyyy',
    FNS_TIMEZONE_FORMAT_STRING: "yyyy-MM-dd'T'HH:mm:ssXXX",
    FNS_DB_FORMAT_STRING: 'yyyy-MM-dd HH:mm:ss.SSS',
    LONG_DATE_FORMAT_WITH_WEEKDAY: 'eeee, MMMM d, yyyy',
    UNIX_EPOCH: '1970-01-01 00:00:00.000',
    MAX_DATE: '9999-12-31',
    MIN_DATE: '0001-01-01',
    ORDINAL_DAY_OF_MONTH: 'do',
  },
  DIRECTION: {
    LEFT: 'left',
    RIGHT: 'right',
  },
  DROPDOWN_BUTTON_SIZE: {
    LARGE: 'large',
    MEDIUM: 'medium',
  },
  ENVIRONMENT: {
    DEV: 'development',
    STAGING: 'staging',
    PROD: 'production',
    TEST: 'test',
  },
  EMPTY_ARRAY,
  EMPTY_OBJECT,
  INVALID_CHARS: ['.', '#', '$', '[', ']'],
  LOCAL_IMAGE_PREFIX: 'file://',
  MONTHS: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  MONTHS_ABBREVIATED: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  OS: {
    WINDOWS: 'Windows',
    MAC_OS: 'Mac OS',
    ANDROID: 'Android',
    IOS: 'iOS',
    LINUX: 'Linux',
    NATIVE: 'Native',
  },
  PLATFORM: {
    IOS: 'iOS',
    ANDROID: 'Android',
    WEB: 'Web',
  },
  STATUS_BAR_STYLE: {
    LIGHT_CONTENT: 'light-content',
    DARK_CONTENT: 'dark-content',
  },
  STORE_LINKS: {
    ANDROID:
      'https://play.google.com/store/apps/details?id=com.petrcala.worktracker',
    IOS: 'https://testflight.apple.com/join/TBA',
  },
  THEME: {
    DEFAULT: 'system',
    FALLBACK: 'dark',
    DARK: 'dark',
    LIGHT: 'light',
    SYSTEM: 'system',
  },
  TIME_PERIOD: {
    AM: 'AM',
    PM: 'PM',
  },
} as const;

export default CONST;
