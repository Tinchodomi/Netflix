// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //esta funcion se utiliza para  iniciar la conexion con firebase

import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2raB-Dq-WG0_KB_BaqWQ4ibrF-Ycu_GU",
  authDomain: "tiendanike-91.firebaseapp.com",
  projectId: "tiendanike-91",
  storageBucket: "tiendanike-91.appspot.com",
  messagingSenderId: "50556883045",
  appId: "1:50556883045:web:2ad7256bb06f2bc95b368c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)