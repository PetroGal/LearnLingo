import React from "react"
import { NavLink } from "react-router-dom"
import css from "./Header.module.css"

export default function Header() {
  return (
    <header>
      <div className={css.headerContainer}>
        <div className={css.headerWrapper}>
          <NavLink to='/' className={css.logo}>
            <svg className={css.logoIcon} width='28' height='28'>
              <use href='/icons.svg#icon-logo'></use>
            </svg>
            LearnLingo
          </NavLink>
          <div className={css.navWrapper}>
            <NavLink to='/home' className={css.homeLink}>
              Home
            </NavLink>
            <NavLink to='/teachers' className={css.teachersLink}>
              Teachers
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}
