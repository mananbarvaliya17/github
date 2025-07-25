import React from 'react'
import './Navbar.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Hero from '../Hero/Hero'

const Navbar = () => {
    return (
        <div>
            <div className='Nav-link'>                

                <h1>home</h1>
                <h1>cart</h1>
                <h1>section</h1>
                <h1>contect us</h1>
                <h1>login</h1>

            </div>
        </div>
    )
}

export default Navbar