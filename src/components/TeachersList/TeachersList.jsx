import TeacherCard from "../TeacherCard/TeacherCard.jsx"
import teachers from "../../utils/teachersData.js"

export default function TeachersList() {
  return (
    <div>
      <TeacherCard teachers={teachers} />
      <TeacherCard />
      <TeacherCard />
    </div>
  )
}
