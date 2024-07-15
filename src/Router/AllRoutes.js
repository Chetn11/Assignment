import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Pricing from '../pages/Pricing'
import Contact from '../pages/Contact'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
        <Route path='/contact-us' element={<Contact/>}></Route>
    </Routes>
  )
}
