import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDXyckZJwWBvHqaa7ZBoP56zhkHOqhT1CQ",
  authDomain: "crud-firebase-login.firebaseapp.com",
  projectId: "crud-firebase-login",
  storageBucket: "crud-firebase-login.appspot.com",
  messagingSenderId: "838673483005",
  appId: "1:838673483005:web:ed0e4e4a3fb11fb21c2a94",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

export {auth, firebase, db, storage}