import {
  getDatabase,
  ref,
  query,
  orderByKey,
  startAfter,
  limitToFirst,
  get,
} from "firebase/database"
import { db } from "../firebaseConfig.js"
import axiosInstance from "./axiosInstance.js"

const PER_PAGE = 4

export async function writeTeachersData(teachers) {
  try {
    const response = await axiosInstance.put("/teachers.json", teachers)
    console.log("✅ Data successfully written to Firebase!", response.data)
  } catch (error) {
    console.error("❌ Error writing data", error)
    throw error
  }
}

export async function getTeachersData(lastKey = null, filters = {}) {
  try {
    console.log("🔹 Received filters:", filters)

    let teachersQuery = query(ref(db, "teachers"), orderByKey())

    if (lastKey) {
      teachersQuery = query(teachersQuery, startAfter(lastKey))
    }

    teachersQuery = query(teachersQuery, limitToFirst(PER_PAGE))

    const snapshot = await get(teachersQuery)
    if (!snapshot.exists()) {
      console.log("⚠️ No teachers found in Firebase.")
      return { teachers: [], lastKey: null }
    }

    let teachersArray = Object.entries(snapshot.val()).map(([id, teacher]) => ({
      id,
      ...teacher,
    }))

    console.log("📌 Retrieved teachers before filtering:", teachersArray)

    // 🔹 Debug: Log languages before filtering
    teachersArray.forEach((teacher) => {
      console.log(`👀 Teacher ${teacher.id} languages:`, teacher.languages)
    })

    // 🔹 Apply filters (Fixed Logic)
    if (filters.language) {
      const filterLang = filters.language.toLowerCase().trim()
      teachersArray = teachersArray.filter((teacher) => {
        if (!teacher.languages || !Array.isArray(teacher.languages)) {
          console.warn(
            `⚠️ Skipping teacher ${teacher.id}, invalid languages field`
          )
          return false
        }

        const teacherLanguages = teacher.languages.map((lang) =>
          lang.toLowerCase().trim()
        )

        const isMatch = teacherLanguages.includes(filterLang)
        console.log(
          `🔍 Checking ${teacher.id}: Does ${teacherLanguages} include "${filterLang}"? → ${isMatch}`
        )

        return isMatch // ✅ This must explicitly return TRUE only for matches
      })
    }

    console.log("✅ Teachers after filtering:", teachersArray)

    const nextKey =
      teachersArray.length > PER_PAGE && teachersArray[PER_PAGE]
        ? String(teachersArray[PER_PAGE].id)
        : null

    console.log("🚀 Final result:", {
      teachers: teachersArray.slice(0, PER_PAGE),
      lastKey: nextKey,
    })

    return {
      teachers: teachersArray.slice(0, PER_PAGE),
      lastKey: nextKey,
    }
  } catch (error) {
    console.error("❌ Error fetching teachers:", error)
    throw error
  }
}
