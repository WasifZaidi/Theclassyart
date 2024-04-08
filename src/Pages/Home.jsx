import React from 'react'
import Hero from '../Components/Header/Hero'
import Services from '../Components/Services/Services'
import About from '../Components/About/About'
import Navbar from "../Components/Header/Navbar"
const Home = () => {
  return (
    <div className='Home'>
       {/* =============Navbar================= */}
         <Navbar/>
          {/* =============Header================= */}
          <Hero/>
          {/* =============Services================= */}
          <Services/>
          {/* =============About================= */}
          <About/>
    </div>
  )
}

export default Home
