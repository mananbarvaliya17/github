import React from 'react'
import './Login.css'
import Footer from '../Component/Footer/Footer'

const Login = () => {
  return (
    <div>
        <form>
      <div className='form-data'>
          <input
            type="text"
            placeholder="F name :-"
            name="firstName"
          />
          <input
            type="text"
            placeholder="L name :-"
            name="lastName"
          />
          <input
            type="password"
            placeholder="Password :-"
            name="password"
          />
          <input
            type="password"
            placeholder="Confirm Password :-"
            name="confirmPassword"
          />
          <button>Submitte</button>
      </div>
        </form>

      <Footer />


    </div>
  )
}

export default Login