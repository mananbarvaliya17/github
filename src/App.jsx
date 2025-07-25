// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from './website/Component/Navbar/Navbar'
// import Hero from './website/Component/Hero/Hero'
// import Footer from './website/Component/Footer/Footer'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// function App() {

//   return (
//     <>

//       <BrowserRouter>

//         <Navbar />

//         <Link to='/Footer'>page</Link>

//         <Routes>
//           <Route path='/' element={<Navbar />} />
//           <Route path='/Footer' element={<Footer />} />

//         </Routes>

//       </BrowserRouter>

//     </>
//   )
// }

// export default App


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

function App() {
  return (
    <>
      <BrowserRouter>

      <div className='Nav-container'>

        <h1>Helow </h1>

        <div className='Nav-tabs'>
          <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Go to home</Link>
          <Link to='/Collection' style={{ textDecoration: 'none', color: 'black' }}>go to Collection</Link>
          <Link to='/Contectus' style={{ textDecoration: 'none', color: 'black' }}>Go to contectus</Link>
          <Link to='/Login' style={{ textDecoration: 'none', color: 'black' }}>go to Loginpage</Link>
        </div>
      </div>

        <Routes>
          <Route path='/' element={<Hompage />} />
          <Route path='/Collection' element={<Collection />} />
          <Route path='/Contectus' element={<Contectus />} />
          <Route path='/Login' element={<Login />} />
        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
