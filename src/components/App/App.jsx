import processTeachers from "../../utils/processTeachers.js"
import { writeTeachersData } from "../../utils/firebaseDatabase.js"

export default function App() {
  const teachers = processTeachers()

  writeTeachersData(teachers)
  return (
    <div>
      <h1>Welcome to My Language App</h1>
    </div>
  )
}
