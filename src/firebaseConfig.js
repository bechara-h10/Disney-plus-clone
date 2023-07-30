import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2i9NliwPeRfumenYkHfXXzyVJSLjuAg4",
  authDomain: "disney-plus-clone-3c774.firebaseapp.com",
  databaseURL:
    "https://disney-plus-clone-3c774-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "disney-plus-clone-3c774",
  storageBucket: "disney-plus-clone-3c774.appspot.com",
  messagingSenderId: "466444256993",
  appId: "1:466444256993:web:df35b087e664604a1459a0",
  measurementId: "G-2FKW8KR6GT",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
