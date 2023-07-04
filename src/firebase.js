import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyApOEMwp4gjahKqG2kAbgwnVpl6yquLSuk",
  authDomain: "blog-71a2e.firebaseapp.com",
  projectId: "blog-71a2e",
  storageBucket: "blog-71a2e.appspot.com",
  messagingSenderId: "447146277586",
  appId: "1:447146277586:web:07d04f1a16b1bf9e580b0b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); //認証初期化
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
