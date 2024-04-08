import React from 'react'
import "../Css/Header/Hero.css"
import Headerimg1 from "../../Images/header_img1.jpg"
import Headerimg2 from "../../Images/header_img2.jpg"
import Headerimg3 from "../../Images/header_img3.jpg"
import Headerimg5 from "../../Images/header_img5.jpg"
const Hero = () => {
  return (
    <div className='Hero margin_top flex_box col gap_med'>
      <div className="container">
      <div className="heading flex_box col gap_sm">
      <h3 className='fs_heading_medium'>WELCOME TO THE</h3>
      <h1 className='fs_heading_large'><span>CLASSY</span> ART</h1>
      <p className='fs_heading_small'>LEVEL UP YOUR GAME WITH OUR STUNNING <span>GRAPHIC</span> AND <span>ANIMATION</span> SERVICES!</p>
<div className="btns flex_box gap_sm">
      <button className='btn outline_secondry'>Contact Now</button>
      <button className='btn outline_primary'>Our Portfolio</button>
</div>
      </div>
      </div>
      <div className="images">
        <img src={Headerimg1} alt="" />
        <img src={Headerimg2} alt="" />
        <img src={Headerimg3} alt="" />
        <img src={Headerimg1} alt="" />
        <img src={Headerimg2} alt="" />
     </div>
    </div>
  )
}

export default Hero