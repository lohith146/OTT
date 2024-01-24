// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC15_5Pq0KysKMmiTSee7A5BHKsaucWH6M",
  authDomain: "ottgpt-8f6de.firebaseapp.com",
  projectId: "ottgpt-8f6de",
  storageBucket: "ottgpt-8f6de.appspot.com",
  messagingSenderId: "927662598218",
  appId: "1:927662598218:web:f539d1695078a3fd411eb3",
  measurementId: "G-3QERX4LMPS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
