// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBKNYMZ5GkScyIWrdNbFLG4BPMUYzyqW4",
  authDomain: "b12-a9-firesheild-theporosh-sk.firebaseapp.com",
  projectId: "b12-a9-firesheild-theporosh-sk",
  storageBucket: "b12-a9-firesheild-theporosh-sk.firebasestorage.app",
  messagingSenderId: "625055538999",
  appId: "1:625055538999:web:54af0fb5bfc83ba90704b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;