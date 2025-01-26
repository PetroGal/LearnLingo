import TeacherCard from "../TeacherCard/TeacherCard.jsx"
import teachers from "../../utils/teachersData.js"
import css from "./TeachersList.module.css"

export default function TeachersList() {
  return (
    <ul className={css.teachersList}>
      {teachers.map((teacher) => (
        <TeacherCard key={teachers.name + teachers.surname} {...teacher} />
      ))}
    </ul>
  )
}
