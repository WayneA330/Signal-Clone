import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_CIC9hrk1XKpUB6bMLW5GkQry_555omo",
  authDomain: "signal-clone-580f0.firebaseapp.com",
  projectId: "signal-clone-580f0",
  storageBucket: "signal-clone-580f0.appspot.com",
  messagingSenderId: "404611971041",
  appId: "1:404611971041:web:8eddd422e15100a94684a0",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
