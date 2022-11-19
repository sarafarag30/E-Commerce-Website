import React from 'react'
import { NavLink } from 'react-router-dom';

const LoginBtn = () => {
  return (
    <>
      <NavLink to="/login" className="btn btn-outline-primary ms-auto">
      <span className='fa fa-user-plus me-1'></span> Login
      </NavLink>
    </>
  )
}

export default LoginBtn
