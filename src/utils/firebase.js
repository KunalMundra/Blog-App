// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-c223c.firebaseapp.com",
  projectId: "blog-c223c",
  storageBucket: "blog-c223c.appspot.com",
  messagingSenderId: "332688468940",
  appId: "1:332688468940:web:2f2a770ebf7e80f2070b69"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);