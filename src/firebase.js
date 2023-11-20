import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyDjW70m00R6gUkpZHxcub_kemek1gg7gbw",
    authDomain: "insta-clone-c813a.firebaseapp.com",
    projectId: "insta-clone-c813a",
    storageBucket: "insta-clone-c813a.appspot.com",
    messagingSenderId: "254925912464",
    appId: "1:254925912464:web:ccc679283ed07b8aafdb15"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const storage = firebase.storage()
const db = firebaseApp.firestore()
export { auth, db, storage }