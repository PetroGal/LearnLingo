import { Routes, Route } from "react-router-dom"
import { writeTeachersData } from "../../utils/firebaseDatabase.js"
import { getTeachersData } from "../../utils/firebaseDatabase.js"
import Header from "../Header/Header.jsx"
import HomePage from "../../pages/HomePage/HomePage.jsx"
import TeachersPage from "../../pages/TeachersPage/TeachersPage.jsx"

export default function App() {
  writeTeachersData(teachers)
  getTeachersData()

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/teachers' element={<TeachersPage />}></Route>
      </Routes>
    </div>
  )
}
