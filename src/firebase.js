import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC7KRqVLvhzzBVVGQ9KfOCAWIgTvn-DdME",
    authDomain: "oceanic-hold-451407-s4.firebaseapp.com",
    projectId: "oceanic-hold-451407-s4",
    storageBucket: "oceanic-hold-451407-s4.firebasestorage.app",
    messagingSenderId: "90237730087",
    appId: "1:90237730087:web:542ceb0d340a3ec8aafd02",
    measurementId: "G-JNH91YVBFV"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
