/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly REACT_PUBLIC_API_KEY: string;
  readonly REACT_PUBLIC_AUTH_DOMAIN: string;
  readonly REACT_PUBLIC_PROJECT_ID: string;
  readonly REACT_PUBLIC_STORAGE_BUCKET: string;
  readonly REACT_PUBLIC_MESSAGING_SENDER_ID: string;
  readonly REACT_PUBLIC_APP_ID: string;
  readonly REACT_PUBLIC_MEASUREMENT_ID: string;
  readonly REACT_PUBLIC_USE_FIREBASE_EMULATOR: "run" | undefined;
  readonly REACT_FIRESTORE_GRAPHQL_EMULATOR_ENDPOINT: string;
  readonly REACT_FIRESTORE_GRAPHQL_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
