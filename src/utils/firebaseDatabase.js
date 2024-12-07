import { ref, set } from "firebase/database"
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
