import { useState, useEffect } from "react"
import { getTeachersData } from "../../utils/firebaseDatabase.js"
import Filters from "../../components/Filters/Filters.jsx"
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn.jsx"
import TeachersList from "../../components/TeachersList/TeachersList.jsx"
import css from "./TeachersPage.module.css"

export default function TeachersPage() {
  const [teachers, setTeachers] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getTeachersData()
      .then((data) => {
        setTeachers(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  })

  return (
    <div className={css.teachersSection}>
      <div className={css.teachersContainer}>
        <Filters />
        {loading && <p>Loading teachers, please wait...</p>}
        {teachers.length > 0 && <TeachersList />}
        <LoadMoreBtn />
      </div>
    </div>
  )
}
