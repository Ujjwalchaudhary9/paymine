import React from 'react'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Aboutus from './Pages/Aboutus'
import Contactus from './Pages/Contactus'
import Services from './Pages/Services'
import Login from './Pages/Login'
import Line from './Components/Line'
const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Services />
      <Line />
      <Aboutus />
      <Line />
      <Contactus />
    </div>
  )
}

export default App