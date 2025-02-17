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
  const [allLanguages, setAllLanguages] = useState([])
  const [allLevels, setAllLevels] = useState([])
  const [allPrices, setAllPrices] = useState([])
  const [selectedLanguage, setSelectedLanguage] = useState("")
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

  useEffect(() => {
    if (teachers.length > 0) {
      const eachTeacherLanguages = [
        ...new Set(teachers.flatMap((teacher) => teacher.languages)),
      ]
      const eachTeacherLevels = [
        ...new Set(teachers.flatMap((teacher) => teacher.levels)),
      ]
      const eachTeacherPrices = [
        ...new Set(teachers.map((teacher) => Number(teacher.price_per_hour))),
      ]

      // ✅ Set state so Filters receive the data
      setAllLanguages(eachTeacherLanguages)
      setAllLevels(eachTeacherLevels)
      setAllPrices(eachTeacherPrices.sort((a, b) => a - b))

      console.log(eachTeacherLanguages)
      console.log(eachTeacherLevels)
      console.log(eachTeacherPrices)
    }
  }, [teachers])

  const visibleTeachers = teachers.filter(
    (teacher) =>
      (selectedLanguage === "" ||
        teacher.languages.includes(selectedLanguage)) &&
      (selectedLevel === "" || teacher.levels.includes(selectedLevel)) &&
      (selectedPrice === "" || teacher.price_per_hour === Number(selectedPrice))
  )
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
          allLanguages={allLanguages}
          // setAllLanguages={setAllLanguages}
          allLevels={allLevels}
          // setAllLevels={setAllLevels}
          allPrices={allPrices}
          // setAllPrices={setAllPrices}
          selectedLanguage={selectedLanguage}
          onLanguageSelect={changeLanguage}
          selectedLevel={selectedLevel}
          onLevelSelect={changeLevel}
          selectedPrice={selectedPrice}
          onPriceSelect={changePrice}
        />
        {loading && <p>Loading teachers, please wait...</p>}
        {error && <p>Oops! There is an error, please reload the page!</p>}
        {teachers.length > 0 && (
          <TeachersList
            teachers={
              (selectedLanguage || selectedLevel || selectedPrice) &&
              visibleTeachers.length === 0
                ? [] // If filters are applied but no match, show an empty list
                : selectedLanguage || selectedLevel || selectedPrice
                ? visibleTeachers // Show filtered teachers
                : teachers // Show all loaded teachers if no filters applied
            }
            // teachers={
            //   selectedLanguage !== "" && visibleTeachers.length === 0
            //     ? []
            //     : selectedLanguage !== ""
            //     ? visibleTeachers
            //     : teachers
            // }
          />
        )}
        {hasMore && !loading && <LoadMoreBtn onClick={loadMoreTeachers} />}
      </div>
    </div>
  )
}
