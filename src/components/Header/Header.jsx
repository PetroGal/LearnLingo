import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <NavLink to='/'>LearnLingo</NavLink>
    </header>
  )
}
