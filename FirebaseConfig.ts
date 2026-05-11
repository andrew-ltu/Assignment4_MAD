import AsyncStorage from "@react-native-async-storage/async-storage";
import { getApps, initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDk9xdNwBJw86bmGlLWxq5B1SJyKw9h54I",
  authDomain: "cse3mad-assignmnet4.firebaseapp.com",
  projectId: "cse3mad-assignmnet4",
  storageBucket: "cse3mad-assignmnet4.firebasestorage.app",
  messagingSenderId: "576432509599",
  appId: "1:576432509599:web:a04de548109434796908aa",
  measurementId: "G-WPM9JX5W7C"
};

// 1. Check if an app is already running before starting a new one
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// 2. Export the correctly initialized services
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);
export const storage = getStorage(app);
export { app };

