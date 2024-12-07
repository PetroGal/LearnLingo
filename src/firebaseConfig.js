import { getDatabase, ref, set } from "firebase/database"
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyC3Tj9KoWvIyt63HLqWpcNKZG5PT3-k8VA",
  authDomain: "learnlingo-6df12.firebaseapp.com",
  projectId: "learnlingo-6df12",
  storageBucket: "learnlingo-6df12.firebasestorage.app",
  messagingSenderId: "515029356688",
  appId: "1:515029356688:web:fbebc70cddb848edc5c815",
}

const app = initializeApp(firebaseConfig)

const db = getDatabase(app)

export default db
