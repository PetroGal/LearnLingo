import processTeachers from "../../utils/processTeachers.js"
import { writeTeachersData } from "../../utils/firebaseDatabase.js"
import { getTeachersData } from "../../utils/firebaseDatabase.js"
import Header from "../Header/Header.jsx"
import HomePage from "../../pages/HomePage/HomePage.jsx"

export default function App() {
  const teachers = processTeachers()

  getTeachersData()

  return (
    <div>
      <main>
        <div>
          <HomePage />
        </div>
      </main>
    </div>
  )
}
