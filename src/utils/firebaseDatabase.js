import { get, ref, set } from "firebase/database"
import db from "../firebaseConfig.js"

export function writeTeachersData(teachers) {
  const teachersRef = ref(db, "teachers")

  set(teachersRef, teachers)
    .then(() => {
      console.log("Data has been successfully wrtitten into the database!")
    })
    .catch((error) => {
      console.error("There is an error when writing data: ", error)
    })
}

export function getTeachersData() {
  const teachersRef = ref(db, "teachers")

  get(teachersRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log("Data received: ", snapshot.val())
      } else {
        console.log("Data is not found")
      }
    })
    .catch((error) => {
      console.log("Data is not available: ", error)
    })
}
