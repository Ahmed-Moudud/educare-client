// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvkO--LFCb3zDtvW0oqeyRMTF42FpRef4",
  authDomain: "assignment-ten-client.firebaseapp.com",
  projectId: "assignment-ten-client",
  storageBucket: "assignment-ten-client.appspot.com",
  messagingSenderId: "512566856598",
  appId: "1:512566856598:web:223a223ca8bcda8077ebb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;