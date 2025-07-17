import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue, remove , set} from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXG2NEN998vAh15eQvU2T9vQd8Rmsvn10",
  authDomain: "foodorder-6b268.firebaseapp.com",
  databaseURL: "https://foodorder-6b268-default-rtdb.firebaseio.com",
  projectId: "foodorder-6b268",
  storageBucket: "foodorder-6b268.firebasestorage.app",
  messagingSenderId: "291490961417",
  appId: "1:291490961417:web:04ce2947e07c17155cc0d8",
  measurementId: "G-VYWLRL5M98"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app)


export { ref, push, onValue, remove, set}