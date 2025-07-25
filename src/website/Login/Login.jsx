import React from 'react'
import './Login.css'
import Footer from '../Component/Footer/Footer'

const Login = () => {
  return (
    <div>
      <h1>Login page</h1>
      <div className='foem-data'>

        <form>
          <input
            type="text"
            placeholder="F name:"
            name="firstName"
          />
          <input
            type="text"
            placeholder="L name:"
            name="lastName"
          />
          <input
            type="password"
            placeholder="Password:"
            name="password"
          />
          <input
            type="password"
            placeholder="Confirm Password:"
            name="confirmPassword"
          />
          <button>Submitte</button>
        </form>
      </div>

      <Footer />


    </div>
  )
}

export default Login