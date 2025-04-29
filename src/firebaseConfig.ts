// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { signInAnonymously, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDLVStGWL5l7mR0hYNMGZ7x7bGm-ULKrtI",
  authDomain: "mhgapdemo.firebaseapp.com",
  projectId: "mhgapdemo",
  storageBucket: "mhgapdemo.firebasestorage.app",
  messagingSenderId: "839977847197",
  appId: "1:839977847197:web:e13a070f50bec9acc60774",
  measurementId: "G-8L81P4CRER"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, analytics,createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signInAnonymously };
