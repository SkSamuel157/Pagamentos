// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAPxPsMiwhAwRhZPwTl53HIzphETeAUeQ",
    authDomain: "pagamentos-c1e9e.firebaseapp.com",
    projectId: "pagamentos-c1e9e",
    storageBucket: "pagamentos-c1e9e.appspot.com",
    messagingSenderId: "1059785350870",
    appId: "1:1059785350870:web:36747888cbf25e78273377"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
