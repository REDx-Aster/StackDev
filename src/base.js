import Rebase from "re-base";
import firebase from "firebase/app";
import { database } from "firebase/database";
import { auth } from "firebase/auth";
// require("firebase/database");

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB_lSP3kzxeEtAy62qLQ2t7vsGkg_BXmQI",
  authDomain: "cool-guitar.firebaseapp.com",
  databaseURL:
    "https://cool-guitar-default-rtdb.europe-west1.firebasedatabase.app",
  //   projectId: "cool-guitar",
  //   storageBucket: "cool-guitar.appspot.com",
  //   messagingSenderId: "634869507934",
  //   appId: "1:634869507934:web:90875570520f9344fb11cf",
});
const base = Rebase.createClass(firebaseApp.database());
export { firebaseApp };
export default base;
