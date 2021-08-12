import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDVKbpYpEailpBbYSCh9gmtljDOox6DOO8",
  authDomain: "chat-c78a8.firebaseapp.com",
  projectId: "chat-c78a8",
  storageBucket: "chat-c78a8.appspot.com",
  messagingSenderId: "948965231082",
  appId: "1:948965231082:web:55cc1b9fab9ea5334eca93",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
