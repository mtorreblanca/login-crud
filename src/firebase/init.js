import * as firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu_PWUI444j09twmuTQr0m4HQLuUVbkes",
  authDomain: "examen-7dd1f.firebaseapp.com",
  databaseURL: "https://examen-7dd1f.firebaseio.com",
  projectId: "examen-7dd1f",
  storageBucket: "examen-7dd1f.appspot.com",
  messagingSenderId: "221502480995",
  appId: "1:221502480995:web:6ed43ade44db7e2c380e56"
};
  // FORMA 1
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore()
// export const coleccion = db.collection('frutas')

// FORMA 2
let firebaseApp = firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
//let coleccion = db.collection('frutas')

export { db, firebase};
