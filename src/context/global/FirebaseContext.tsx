import type {ReactNode} from 'react';
import {createContext, useContext} from 'react';
import type {Auth} from 'firebase/auth';
import {
  initializeAuth,
  getReactNativePersistence,
  connectAuthEmulator,
} from 'firebase/auth';
import type {Database} from 'firebase/database';
import {connectDatabaseEmulator, getDatabase} from 'firebase/database';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {isConnectedToAuthEmulator} from '@src/libs/Firebase/FirebaseUtils';
import {FirebaseApp} from '@libs/Firebase/FirebaseApp';
import FirebaseConfig from '@libs/Firebase/FirebaseConfig';
import {isConnectedToDatabaseEmulator} from '@src/libs/Firebase/FirebaseUtils';
import CONFIG from '@src/CONFIG';

type FirebaseContextProps = {
  auth: Auth;
  db: Database;
};

const FirebaseContext = createContext<FirebaseContextProps | null>(null);

/** Fetch the FirebaseContext. If the context does not exist, throw an error.
 *
 * @example { db, storage } = useFirebase();
 */
export const useFirebase = (): FirebaseContextProps => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error(
      'firebaseContext must be used within a FirebaseContextProvider',
    );
  }
  return context;
};

type FirebaseProviderProps = {
  children: ReactNode;
};

/** Provide a firebase context to the application
 */
export const FirebaseProvider: React.FC<FirebaseProviderProps> = ({
  children,
}) => {
  // Initialize Auth with React Native persistence
  const auth: Auth = initializeAuth(FirebaseApp, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
  const db = getDatabase(FirebaseApp);

  // Check if emulators should be used
  if (CONFIG.IS_IN_TEST) {
    if (!FirebaseConfig.authDomain) {
      throw new Error('Auth URL not defined in FirebaseConfig');
    }
    if (!FirebaseConfig.databaseURL) {
      throw new Error('Database URL not defined in FirebaseConfig');
    }

    if (!isConnectedToAuthEmulator(auth)) {
      connectAuthEmulator(auth, FirebaseConfig.authDomain);
    }

    // Safety check to connect to emulators only if they are not already running
    if (!isConnectedToDatabaseEmulator(db)) {
      connectDatabaseEmulator(
        db,
        CONFIG.TEST_HOST,
        CONFIG.TEST_REALTIME_DATABASE_PORT,
      );
    }
  }

  return (
    <FirebaseContext.Provider value={{auth, db}}>
      {children}
    </FirebaseContext.Provider>
  );
};
