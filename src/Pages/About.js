import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function About() {
  return (
    <>
    <h1>About pages</h1>
    <nav>
    <NavLink to="setting">Setting</NavLink>
    </nav>
    <Outlet/>
    </>
  )
}

export default About