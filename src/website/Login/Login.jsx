import React from 'react'
import './Login.css'
import Footer from '../Component/Footer/Footer'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Homepage from '../Hom/Hompage'

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
          <div className='btn'>
            <Link to="/homepage">
              <button>Submit Now</button>
            </Link>
            <button>Reset</button>
          </div>
        </div>
      </form>

      <Footer />


    </div>
  )
}

export default Login

