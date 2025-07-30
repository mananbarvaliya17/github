import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './website/Component/Navbar/Navbar'
import Hero from './website/Component/Hero/Hero'
import Footer from './website/Component/Footer/Footer'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'  // <-- Import Link
import Hompage from './website/Hom/Hompage'
import Contectus from './website/Contectus/Contectus'
import Login from './website/Login/Login'
import Collection from './website/Collection/Collection'
import Product from './website/Component/Product/Product'
import Choice from './website/Component/Choice/Choice'

function App() {
  return (
    <>
      <BrowserRouter>

        <div className='Nav-container'>

          <h1>Helow </h1>
          <div className='Nav-tabs'>
            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}><h4>Home</h4></Link>
            <Link to='/Collection' style={{ textDecoration: 'none', color: 'black' }}><h4>Collection</h4></Link>
            <Link to='/Contectus' style={{ textDecoration: 'none', color: 'black' }}><h4>Contectus</h4></Link>
            <Link to='/Login' style={{ textDecoration: 'none', color: 'black' }}><h4>Login</h4></Link>
          </div>
          
        </div>

        <Routes>

          <Route path='/' element={<Hompage />} />
          <Route path='/Collection' element={<Collection />} />
          <Route path='/Contectus' element={<Contectus />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Product/:id' element={<Choice />} />

        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
