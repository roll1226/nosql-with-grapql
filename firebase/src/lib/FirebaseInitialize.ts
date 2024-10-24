import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
import { env } from "../env/dotEnv";

const FIREBASE_EMULATOR_FIRESTORE_PORT = 8000;
const FIREBASE_EMULATOR_FUNCTIONS_PORT = 5001;

const isEmulator = () => {
  const useEmulator = env.isFirebaseEmulator();
  return !!(useEmulator && useEmulator);
};

const app = initializeApp(env.getFirebaseConfig());

const firebaseFunctions = getFunctions(app, "asia-northeast1");
const firebaseFirestore = getFirestore(app);

if (isEmulator()) {
  connectFirestoreEmulator(
    firebaseFirestore,
    "localhost",
    FIREBASE_EMULATOR_FIRESTORE_PORT
  );
  connectFunctionsEmulator(
    firebaseFunctions,
    "localhost",
    FIREBASE_EMULATOR_FUNCTIONS_PORT
  );
}

export { firebaseFirestore, firebaseFunctions };
