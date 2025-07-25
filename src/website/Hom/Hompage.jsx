import React from 'react'
import Hero from '../Component/Hero/Hero'
import Blog from '../Component/Blog/Blog'
import Footer from '../Component/Footer/Footer'
import Choice from '../Component/Choice/Choice'
import Product from '../Component/Product/Product'

const Hompage = () => {
  return (
    <div>
      <Hero />
      <Blog />
      <Choice />
      <Product />
      <Footer />
    </div>
  )
}

export default Hompage