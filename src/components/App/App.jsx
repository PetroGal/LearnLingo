import processTeachers from "../../utils/processTeachers.js"

export default function App() {
  const processedData = processTeachers()
  console.log(processedData)

  return (
    <div>
      <h1>Welcome to My Language App</h1>
    </div>
  )
}
