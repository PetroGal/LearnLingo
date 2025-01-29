import TeacherCard from "../TeacherCard/TeacherCard.jsx"
import css from "./TeachersList.module.css"

export default function TeachersList({ teachers }) {
  return (
    <ul className={css.teachersList}>
      {teachers.map((teacher) => (
        <TeacherCard key={teacher.id} {...teacher} />
      ))}
    </ul>
  )
}
