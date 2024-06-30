import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
import { env } from "../env/dotEnv";

const isEmulator = () => {
  const useEmulator = env.isFirebaseEmulator();
  return !!(useEmulator && useEmulator);
};

const app = initializeApp(env.getFirebaseConfig());

const firebaseFunctions = getFunctions(app, "asia-northeast1");
const firebaseFirestore = getFirestore(app);

if (isEmulator()) {
  connectFirestoreEmulator(firebaseFirestore, "localhost", 8000);
  connectFunctionsEmulator(firebaseFunctions, "localhost", 5001);
}

export { firebaseFirestore, firebaseFunctions };
