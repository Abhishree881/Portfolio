// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhOlC5YlWw0ltXkcR9iTwjC57eVydENpQ",
  authDomain: "abhishree-portfolio.firebaseapp.com",
  projectId: "abhishree-portfolio",
  storageBucket: "abhishree-portfolio.appspot.com",
  messagingSenderId: "143543634823",
  appId: "1:143543634823:web:3128fc6c14896f2597a122",
  measurementId: "G-KDEL2PBPYF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
