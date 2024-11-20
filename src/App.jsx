import React from 'react'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Aboutus from './Pages/Aboutus'
import Contactus from './Pages/Contactus'
import Services from './Pages/Services'
import Login from './Pages/Login'
import Line from './Components/Line'
import MPOS from './Pages/MPOS'
// import PANServices from './Pages/PANServices'
// import ABES from './Pages/ABES'
// import Software from './Pages/Android-App-Development'
// import RechargeSoftware from './Pages/Recharge-Software'
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
      {/* <Software/> */}
      {/* <RechargeSoftware/> */}
      {/* <ABES/> */}
      {/* <PANServices/> */}
      <MPOS/>
      <Services />
      <Line />
      <Aboutus />
      <Line />
      <Contactus />
    </div>
  )
}

export default App