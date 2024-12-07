import teachers from "./teachersData.js"

export default function processTeachers() {
  return teachers.reduce((result, teacher) => {
    const id = crypto.randomUUID()

    result[id] = { ...teacher, id }
    return result
  }, {})
}
