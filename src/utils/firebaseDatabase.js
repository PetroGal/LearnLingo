import {
  getDatabase,
  ref,
  query,
  orderByKey,
  startAfter,
  limitToFirst,
  get,
} from "firebase/database"
import axiosInstance from "./axiosInstance.js"

const PER_PAGE = 4

export async function writeTeachersData(teachers) {
  try {
    const response = await axiosInstance.put("/teachers.json", teachers)
    console.log("Data successfully written to Firebase!", response.data)
  } catch (error) {
    console.error("Error writing data", error)
    throw error
  }
}

export async function getTeachersData(lastKey = null, filters = {}) {
  try {
    const db = getDatabase()

    let teachersQuery = query(
      ref(db, "teachers"),
      orderByKey(),
      limitToFirst(PER_PAGE + 1)
    )

    if (lastKey) {
      teachersQuery = query(
        ref(db, "teachers"),
        orderByKey(),
        startAfter(String(lastKey)),
        limitToFirst(PER_PAGE + 1)
      )
    }

    const snapshot = await get(teachersQuery)
    if (!snapshot.exists()) return { teachers: [], lastKey: null }

    let teachersArray = Object.entries(snapshot.val()).map(([id, teacher]) => ({
      id,
      ...teacher,
    }))

    // 🔹 Apply filters
    teachersArray = teachersArray.filter((teacher) => {
      const { language, level, price } = filters

      return (
        (!language || teacher.language === language) &&
        (!level || teacher.level === level) &&
        (!price || teacher.price === Number(price))
      )
    })

    const nextKey =
      teachersArray.length > PER_PAGE && teachersArray[PER_PAGE]
        ? String(teachersArray[PER_PAGE].id)
        : null

    return {
      teachers: teachersArray.slice(0, PER_PAGE),
      lastKey: nextKey,
    }
  } catch (error) {
    console.error("Error fetching teachers:", error)
    throw error
  }
}
