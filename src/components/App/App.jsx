import processTeachers from "../../utils/processTeachers.js"
import { writeTeachersData } from "../../utils/firebaseDatabase.js"
import { getTeachersData } from "../../utils/firebaseDatabase.js"
import Header from "../Header/Header.jsx"

export default function App() {
  const teachers = processTeachers()

  //writeTeachersData(teachers)
  getTeachersData()

  return (
    <div>
      <Header />
      <main>
        <div>
          <h1>Welcome to My Language App</h1>
        </div>
      </main>
    </div>
  )
}
