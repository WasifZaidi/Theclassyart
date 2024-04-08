import React from 'react'
import "../Css/Header/Navbar.css"
import Tcalogo from "../../Images/tcalogo.png"
const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="container flex_box jc_sb alg_cen">
        <div className="logo">
          <img src={Tcalogo} alt="Tcalogo" />
        </div>
        <ul className='flex_box gap_sm alg_cen'>
          <li><a href="#" className='body_text_small'>Home</a></li>
          <li><a href="#" className='body_text_small'>About</a></li>
          <li><a href="#" className='body_text_small'>Services</a></li>
          <li><a href="#" className='body_text_small'>Portfolio</a></li>
          <li><a href="#" className='body_text_small'>Contact Us</a></li>
          <a href="#" className='btn outline_secondry'>Get Started</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
