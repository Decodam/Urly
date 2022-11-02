import firebase from "firebase"
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAuyT7-tlWOknB7vdEimBT8v6UwmZY6Iho",
    authDomain: "urly-link.firebaseapp.com",
    projectId: "urly-link",
    storageBucket: "urly-link.appspot.com",
    messagingSenderId: "851332946591",
    appId: "1:851332946591:web:8150716b7d8cbf8a2320aa"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;