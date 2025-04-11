// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL5-n6JAEeVgj5hcHQ5CNz598FjLJJbSs",
  authDomain: "portfolio-3f569.firebaseapp.com",
  projectId: "portfolio-3f569",
  storageBucket: "portfolio-3f569.firebasestorage.app",
  messagingSenderId: "463744532645",
  appId: "1:463744532645:web:a5ab74eb04611747370d4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };