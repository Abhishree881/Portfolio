// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWT8f4is6EJoqc7xW_4KQKKnw6lRfXybw",
  authDomain: "abhishreeportfolio.firebaseapp.com",
  projectId: "abhishreeportfolio",
  storageBucket: "abhishreeportfolio.appspot.com",
  messagingSenderId: "803654610384",
  appId: "1:803654610384:web:ce52778aefcbf1158eddd5",
  measurementId: "G-D6CHTK282Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
