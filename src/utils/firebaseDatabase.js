import axiosInstance from "./axiosInstance.js"

export async function writeTeachersData(teachers) {
  try {
    const response = await axiosInstance.put("/teachers.json", teachers)
    console.log("Data successfully written to Firebase!", response.data)
  } catch (error) {
    console.error("Error writing data", error)
    throw error
  }
}

export async function getTeachersData() {
  try {
    const response = await axiosInstance.get("/teachers.json")
    const data = response.data

    if (!data) {
      console.log("No teachers found in database.")
      return []
    }
    return Object.entries(data).map(([id, teacher]) => ({
      id,
      ...teacher,
    }))
  } catch (error) {
    console.error("Error fatching teachers:", error)
    throw error
  }
}
