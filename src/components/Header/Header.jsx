import React from "react"
import { NavLink } from "react-router-dom"
import css from "./Header.module.css"

export default function Header({ setIsModalOpen, setActiveForm }) {
  const handleLogin = () => {
    setActiveForm("login")
    setIsModalOpen(true)
  }

  const handleRegister = () => {
    setActiveForm("register")
    setIsModalOpen(true)
  }
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <div className={css.headerWrapper}>
          <div className={css.navLoginWrapper}>
            <NavLink to='/' className={css.logo}>
              <svg className={css.logoIcon} width='28' height='28'>
                <use href='/icons.svg#icon-logo'></use>
              </svg>
              LearnLingo
            </NavLink>
            <div className={css.navWrapper}>
              <NavLink to='/' className={css.homeLink}>
                Home
              </NavLink>
              <NavLink to='/teachers' className={css.teachersLink}>
                Teachers
              </NavLink>
            </div>
            <div className={css.loginWrapper}>
              <div className={css.loginButtons}>
                <button
                  type='button'
                  className={css.loginBtn}
                  onClick={handleLogin}
                >
                  <svg className={css.loginIcon} width='20px' height='20px'>
                    <use href='/icons.svg#icon-logIn_opt'></use>
                  </svg>
                  <span className={css.loginText}>Log in</span>
                </button>
                <button
                  type='button'
                  className={css.RegistrationBtn}
                  onClick={handleRegister}
                >
                  Registration
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
