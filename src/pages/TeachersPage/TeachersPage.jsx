import { useState, useEffect } from "react"
import { getTeachersData } from "../../utils/firebaseDatabase.js"
import Filters from "../../components/Filters/Filters.jsx"
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn.jsx"
import TeachersList from "../../components/TeachersList/TeachersList.jsx"
import css from "./TeachersPage.module.css"

export default function TeachersPage() {
  const [teachers, setTeachers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        setLoading(true)
        const teachersData = await getTeachersData()
        setTeachers(teachersData)
      } catch (error) {
        setError(true)
        console.error("Error fetching teachers data: ", error)
      } finally {
        setLoading(false)
      }
    }
    fetchTeachers()
  }, [])

  return (
    <div className={css.teachersSection}>
      <div className={css.teachersContainer}>
        <Filters />
        {loading && <p>Loading teachers, please wait...</p>}
        {error && <p>Oops! There is an error, please reload the page!</p>}
        {teachers.length > 0 && <TeachersList teachers={teachers} />}
        <LoadMoreBtn />
      </div>
    </div>
  )
}
