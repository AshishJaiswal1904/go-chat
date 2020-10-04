// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA-aAHUQKl0dL9lEEjTDPi3rRReHkW8PXk",
    authDomain: "go-chat-ef664.firebaseapp.com",
    databaseURL: "https://go-chat-ef664.firebaseio.com",
    projectId: "go-chat-ef664",
    storageBucket: "go-chat-ef664.appspot.com",
    messagingSenderId: "126215910136",
    appId: "1:126215910136:web:98b2169fb5898acabbc10d",
    measurementId: "G-MY5DZ7FQR9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();                          //database object
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;