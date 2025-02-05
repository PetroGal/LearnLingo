// import { useState, useEffect } from "react"
// import { getTeachersData } from "../../utils/firebaseDatabase.js"
// import Filters from "../../components/Filters/Filters.jsx"
// import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn.jsx"
// import TeachersList from "../../components/TeachersList/TeachersList.jsx"
// import css from "./TeachersPage.module.css"

// export default function TeachersPage() {
//   const [teachers, setTeachers] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(false)
//   const [lastKey, setLastKey] = useState(null)
//   const [hasMore, setHasMore] = useState(true)

//   // 🔹 State for Filters
//   const [selectedLanguage, setSelectedLanguage] = useState("")
//   const [selectedLevel, setSelectedLevel] = useState("")
//   const [selectedPrice, setSelectedPrice] = useState("")

//   useEffect(() => {
//     const fetchTeachers = async () => {
//       try {
//         setLoading(true)
//         const { teachers: newTeachers, lastKey: newLastKey } =
//           await getTeachersData(
//             null,
//             selectedLanguage,
//             selectedLevel,
//             selectedPrice
//           )
//         setTeachers(newTeachers)
//         setLastKey(newLastKey)
//         setHasMore(!!newLastKey)
//       } catch (error) {
//         setError(true)
//         console.error("Error fetching teachers data: ", error)
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchTeachers()
//   }, [selectedLanguage, selectedLevel, selectedPrice]) // 🔹 Fetch data when filters change

//   const loadMoreTeachers = async () => {
//     if (!lastKey) return
//     try {
//       setLoading(true)
//       const { teachers: newTeachers, lastKey: newLastKey } =
//         await getTeachersData(
//           lastKey,
//           selectedLanguage,
//           selectedLevel,
//           selectedPrice
//         )
//       setTeachers((prevTeachers) => [...prevTeachers, ...newTeachers])
//       setLastKey(newLastKey)
//       setHasMore(!!newLastKey)
//     } catch (error) {
//       setError(true)
//       console.log("Error loading more teachers:", error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className={css.teachersSection}>
//       <div className={css.teachersContainer}>
//         {/* 🔹 Pass State-Updating Functions to Filters */}
//         <Filters
//           selectedLanguage={selectedLanguage}
//           setSelectedLanguage={setSelectedLanguage}
//           selectedLevel={selectedLevel}
//           setSelectedLevel={setSelectedLevel}
//           selectedPrice={selectedPrice}
//           setSelectedPrice={setSelectedPrice}
//         />
//         {loading && <p>Loading teachers, please wait...</p>}
//         {error && <p>Oops! There is an error, please reload the page!</p>}
//         {teachers.length > 0 && <TeachersList teachers={teachers} />}
//         {hasMore && !loading && <LoadMoreBtn onClick={loadMoreTeachers} />}
//       </div>
//     </div>
//   )
// }

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
