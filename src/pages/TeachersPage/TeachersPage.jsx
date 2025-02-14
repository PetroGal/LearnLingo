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
  const [lastKey, setLastKey] = useState(null)
  const [hasMore, setHasMore] = useState(true)
  // ✅ Lifted filter state
  const [selectedLanguage, setSelectedLanguage] = useState("French")
  const [selectedLevel, setSelectedLevel] = useState("")
  const [selectedPrice, setSelectedPrice] = useState("")

  useEffect(() => {
    const getTeachers = async () => {
      try {
        setLoading(true)
        const { teachers: newTeachers, lastKey: newLastKey } =
          await getTeachersData()
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
    getTeachers()
  }, [])

  const changeLanguage = (newLanguage) => {
    setSelectedLanguage(newLanguage)
    console.log(newLanguage)
  }

  const changeLevel = (newLevel) => {
    setSelectedLevel(newLevel)
    console.log(newLevel)
  }

  const changePrice = (newPrice) => {
    setSelectedPrice(newPrice)
    console.log(newPrice)
  }

  // ✅ Function to apply all filters
  const visibleTeachers = teachers.filter((teacher) => {
    const matchesLanguage =
      selectedLanguage === "" || teacher.languages.includes(selectedLanguage)
    const matchesLevel = selectedLevel === "" || teacher.level === selectedLevel
    const matchesPrice = selectedPrice === "" || teacher.price === selectedPrice

    return matchesLanguage && matchesLevel && matchesPrice
  })

  const loadMoreTeachers = async () => {
    if (!lastKey) return
    try {
      setLoading(true)
      const { teachers: newTeachers, lastKey: newLastKey } =
        await getTeachersData(lastKey)
      setTeachers((prevTeachers) => [...prevTeachers, ...newTeachers])
      setLastKey(newLastKey)
      setHasMore(!!newLastKey)
    } catch (error) {
      setError(true)
      console.log("Error loading more teachers:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={css.teachersSection}>
      <div className={css.teachersContainer}>
        <Filters
          selectedLanguage={selectedLanguage}
          onLanguageSelect={changeLanguage}
          selectedLevel={selectedLevel}
          onLevelSelect={changeLevel}
          selectedPrice={selectedPrice}
          onPriceSelect={changePrice}
        />
        {loading && <p>Loading teachers, please wait...</p>}
        {error && <p>Oops! There is an error, please reload the page!</p>}
        {teachers.length > 0 && <TeachersList teachers={visibleTeachers} />}
        {hasMore && !loading && <LoadMoreBtn onClick={loadMoreTeachers} />}
      </div>
    </div>
  )
}
