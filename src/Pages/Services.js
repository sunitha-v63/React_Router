import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Services() {
  return (
    <>
   <h1>Services pages</h1>
   <div className='sub'>
   <NavLink to="UserProfile/1/name1">Userprofile</NavLink>
   <NavLink to="UserProfile/2/name2">Userprofile:2</NavLink>
   <NavLink to="UserStatus">UserStatus</NavLink>
   <Outlet/>
   </div>
   </>
  )
}

export default Services