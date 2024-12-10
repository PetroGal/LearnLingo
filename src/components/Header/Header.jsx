import React from "react"
import { NavLink } from "react-router-dom"
import css from "./Header.module.css"

export default function Header() {
  return (
    <header>
      <NavLink to='/' className={css.logo}>
        <svg className={css.logoIcon} width='28' height='28'>
          <use href='/icons.svg#icon-logo'></use>
        </svg>
        LearnLingo
      </NavLink>
    </header>
  )
}
