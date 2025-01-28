import axiosInstance from "./axiosInstance.js"

export async function writeTeachersData(teachers) {
  try {
    const response = await axiosInstance.put("/teachers.json", teachers)
    console.log("Data successfully written!", response.data)
  } catch (error) {
    console.error("Error writing data", error)
  }
}

export async function getTeachersData() {
  try {
    const response = await axiosInstance.get("teachers.json")
    if (response.data) {
      console.log("Data received", response.data)
      return response.data
    } else {
      console.log("No data found")
      return null
    }
  } catch (error) {
    console.error("Error fatching data:", error)
    throw error
  }
}
