type FirebaseConfigEnvType = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
};

export interface DotEnvInterface {
  getFirebaseConfig: () => FirebaseConfigEnvType;
  isFirebaseEmulator: () => boolean;
}

class DotEnv implements DotEnvInterface {
  getFirebaseConfig = () => {
    return {
      apiKey: import.meta.env.REACT_PUBLIC_API_KEY,
      authDomain: import.meta.env.REACT_PUBLIC_AUTH_DOMAIN,
      projectId: import.meta.env.REACT_PUBLIC_PROJECT_ID,
      storageBucket: import.meta.env.REACT_PUBLIC_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.REACT_PUBLIC_MESSAGING_SENDER_ID,
      appId: import.meta.env.REACT_PUBLIC_APP_ID,
      measurementId: import.meta.env.REACT_PUBLIC_MEASUREMENT_ID,
    };
  };

  isFirebaseEmulator = () => {
    return Boolean(import.meta.env.REACT_PUBLIC_USE_FIREBASE_EMULATOR);
  };
}

export const env = new DotEnv();
