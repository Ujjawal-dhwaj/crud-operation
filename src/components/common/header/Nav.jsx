import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    

     <div className="header">
    <div className="logo"> <NavLink  to={'/'}>CRUD OPERATION </NavLink></div>
    <div className="nav-links">
      <NavLink  to={'/'}>Home</NavLink>
      <NavLink to={'/table'}>CrudTable</NavLink>
    </div>
  </div>
    </>
  )
}

export default Nav;