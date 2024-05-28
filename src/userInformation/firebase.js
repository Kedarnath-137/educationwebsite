// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqNEDwudTR6kRUCxpPigFC7vqHTQnwPlY",
  authDomain: "education-website-85e5a.firebaseapp.com",
  projectId: "education-website-85e5a",
  storageBucket: "education-website-85e5a.appspot.com",
  messagingSenderId: "1037359862432",
  appId: "1:1037359862432:web:8e908a9f481ed3899f6fc5",
  measurementId: "G-288K5LSWPB"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);