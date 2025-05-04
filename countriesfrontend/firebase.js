// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBykv_Ok6wNT6B6h8fvJ42MvAD2l5iF0zU",
  authDomain: "country-api-f1690.firebaseapp.com",
  projectId: "country-api-f1690",
  storageBucket: "country-api-f1690.firebasestorage.app",
  messagingSenderId: "611402498519",
  appId: "1:611402498519:web:f4fca37557eaca4dee0b92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Firebase Auth instance
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
