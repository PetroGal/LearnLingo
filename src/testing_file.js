import { useEffect, useState } from "react"
import Filters from "../Filters/Filters"
import TeachersList from "../TeachersList/TeachersList"
import { getTeachersData } from "../../services/firebaseDatabase"
import css from "./TeachersPage.module.css"

export default function TeachersPage() {
  const [teachers, setTeachers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [lastKey, setLastKey] = useState(null)
  const [hasMore, setHasMore] = useState(true)
  const [selectedFilters, setSelectedFilters] = useState({
    language: "",
    level: "",
    price: "",
  })

  const handleFilterChange = (newFilters) => {
    setSelectedFilters(newFilters)
  }

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        setLoading(true)
        const { teachers: newTeachers, lastKey: newLastKey } =
          await getTeachersData(null, selectedFilters) // Pass filters
        setTeachers(newTeachers)
        setLastKey(newLastKey)
        setHasMore(!!newLastKey)
      } catch (error) {
        setError(true)
        console.error("Error fetching teachers data: ", error)
      } finally {
        setLoading(false)
      }
    }
    fetchTeachers()
  }, [selectedFilters]) // Fetch new data when filters change

  return (
    <div className={css.teachersSection}>
      <Filters onFilterChange={handleFilterChange} />{" "}
      {/* Pass filter handler */}
      {teachers.length > 0 && <TeachersList teachers={teachers} />}
      {hasMore && !loading && (
        <button
          className={css.loadMoreBtn}
          onClick={async () => {
            if (!lastKey) return
            try {
              setLoading(true)
              const { teachers: newTeachers, lastKey: newLastKey } =
                await getTeachersData(lastKey, selectedFilters)
              setTeachers((prev) => [...prev, ...newTeachers])
              setLastKey(newLastKey)
              setHasMore(!!newLastKey)
            } catch (error) {
              console.error("Error loading more teachers:", error)
            } finally {
              setLoading(false)
            }
          }}
        >
          Load More
        </button>
      )}
      {loading && <p>Loading...</p>}
      {error && <p>Error loading teachers</p>}
    </div>
  )
}
