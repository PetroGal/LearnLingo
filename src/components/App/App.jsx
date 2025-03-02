import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { writeTeachersData } from "../../utils/firebaseDatabase.js"
import { getTeachersData } from "../../utils/firebaseDatabase.js"
import Header from "../Header/Header.jsx"
import HomePage from "../../pages/HomePage/HomePage.jsx"
import TeachersPage from "../../pages/TeachersPage/TeachersPage.jsx"
import Modal from "../Modal/Modal.jsx"
import LoginForm from "../LoginForm/LoginForm.jsx"
import RegisterForm from "../RegisterForm/RegisterForm.jsx"

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeForm, setActiveForm] = useState(null)

  const handleModal = () => {
    setIsModalOpen(false)
  }

  const handleLogin = () => {
    setActiveForm("login")
  }

  return (
    <div>
      <Header setIsModalOpen={setIsModalOpen} setActiveForm={setActiveForm} />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/teachers' element={<TeachersPage />}></Route>
      </Routes>
      <Modal isOpen={isModalOpen} onClose={handleModal}>
        {activeForm === "login" && (
          <LoginForm onClose={() => setIsModalOpen(false)} />
        )}
        {activeForm === "register" && (
          <RegisterForm onClose={() => setIsModalOpen(false)} />
        )}
      </Modal>
    </div>
  )
}
