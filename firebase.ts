// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWxAaqLBHy6iiSxefAJmURybmHWueEBIM",
  authDomain: "vizflt.firebaseapp.com",
  projectId: "vizflt",
  storageBucket: "vizflt.appspot.com",
  messagingSenderId: "292671029612",
  appId: "1:292671029612:web:78d6ac188da2ab314d7349"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);

auth.useDeviceLanguage();
