import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAu_PWUI444j09twmuTQr0m4HQLuUVbkes',
  authDomain: 'examen-7dd1f.firebaseapp.com',
  databaseURL: 'https://examen-7dd1f.firebaseio.com',
  projectId: 'examen-7dd1f',
  storageBucket: 'examen-7dd1f.appspot.com',
  messagingSenderId: '221502480995',
  appId: '1:221502480995:web:6ed43ade44db7e2c380e56'
})

const db = firebaseApp.firestore()

// export const coleccion = db.collection('frutas')
export { db }
