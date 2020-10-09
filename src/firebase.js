// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPUakK0H4QPMru6AjHvbwOBMfSFMKFPtw",
  authDomain: "gochat-84ebc.firebaseapp.com",
  databaseURL: "https://gochat-84ebc.firebaseio.com",
  projectId: "gochat-84ebc",
  storageBucket: "gochat-84ebc.appspot.com",
  messagingSenderId: "905500932106",
  appId: "1:905500932106:web:da5e9489622388d4f247f3",
  measurementId: "G-ZPY27TY3Q0"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();                          //database object
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
 