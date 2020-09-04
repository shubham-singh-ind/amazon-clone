import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDZlDCgIoviQj6k1UhQjtFxsAJXW7RnTQA",
  authDomain: "clone-863ba.firebaseapp.com",
  databaseURL: "https://clone-863ba.firebaseio.com",
  projectId: "clone-863ba",
  storageBucket: "clone-863ba.appspot.com",
  messagingSenderId: "286551287046",
  appId: "1:286551287046:web:446538afb58cd86036aa87",
  measurementId: "G-2BF2Y832XJ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
