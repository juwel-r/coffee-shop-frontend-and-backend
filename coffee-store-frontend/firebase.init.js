import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBieLDsGGCMSO7POH13qzu0KluKssywqJ0",
  authDomain: "coffee-shop-a916e.firebaseapp.com",
  projectId: "coffee-shop-a916e",
  storageBucket: "coffee-shop-a916e.firebasestorage.app",
  messagingSenderId: "177929219716",
  appId: "1:177929219716:web:ef758fdc2e656c4c2f1cd1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
