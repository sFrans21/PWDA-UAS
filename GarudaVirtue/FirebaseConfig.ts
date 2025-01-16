// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Tambahkan ini

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJXDobKYqFD24LV15DP9628t3In9LvLw0",
  authDomain: "pwda-uas-82210.firebaseapp.com",
  projectId: "pwda-uas-82210",
  storageBucket: "pwda-uas-82210.firebasestorage.app",
  messagingSenderId: "101690525130",
  appId: "1:101690525130:web:4ab0a32ac4a6ddc9e77b33",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
