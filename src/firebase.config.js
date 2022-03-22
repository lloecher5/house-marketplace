import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMqszc9gHesOpgh3zmZDjmU7McbziRPic",
  authDomain: "house-marketplace-app-f8ee6.firebaseapp.com",
  projectId: "house-marketplace-app-f8ee6",
  storageBucket: "house-marketplace-app-f8ee6.appspot.com",
  messagingSenderId: "369671808505",
  appId: "1:369671808505:web:8966feac0587140520c928",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
