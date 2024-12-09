import React from "react"
import { Link, NavLink } from "react-router-dom"
import css from "./Header.module.css"

export default function Header() {
  return (
    <header>
      <NavLink to='/' className={css.logo}>
        LearnLingo
      </NavLink>
    </header>
  )
}
