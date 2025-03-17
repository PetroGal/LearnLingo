import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC3Tj9KoWvIyt63HLqWpcNKZG5PT3-k8VA",
  authDomain: "learnlingo-6df12.firebaseapp.com",
  projectId: "learnlingo-6df12",
  storageBucket: "learnlingo-6df12.appspot.com",
  messagingSenderId: "515029356688",
  appId: "1:515029356688:web:fbebc70cddb848edc5c815",
  databaseURL:
    "https://learnlingo-6df12-default-rtdb.europe-west1.firebasedatabase.app/",
}

export const databaseURL =
  "https://learnlingo-6df12-default-rtdb.europe-west1.firebasedatabase.app/"

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)

export { app, db, auth }
