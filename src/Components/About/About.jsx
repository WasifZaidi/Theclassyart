import React from 'react'
import "../Css/About/About.css"
import Aboutmisson from "../../Images/about_missionimg.jpg"
import Aboutvalue from "../../Images/aboyt_value.jpg"
import Aboutvision from "../../Images/about_visionimg.jpg"
const About = () => {
    return (
        <div className='About margin_top'>
            <div className="container flex_box col gap_med">
                <div className="heading flex_box col gap_sm">
                    <h2 className='fs_heading_medium'>About Us</h2>
                    <p className='body_text_medium'>We are a team of professionals who specialize in providing top-notch graphics and animation services for gamers. Our mission is to help gaming enthusiasts take their gaming experience to the next level with stunning visuals and captivating animations. Whether you need custom character designs, high-quality gaming assets, or engaging animations, we have got you covered.</p>
                </div>
                <div className="content flex_box gap_sm">
                    <div className="left flex_box gap_sm">
                        <div className="sec flex_box col gap_sm">
                            <div className="img_box">
                                <img src={Aboutmisson} alt="" />
                                <div className="content">
                                   <span className='body_text_medium'>Our Mission</span>
                                   <p className='body_text_small'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae!</p>
                                </div>
                            </div>
                            <div className="img_box">
                                <img src={Aboutvalue} alt="" />
                                <div className="content">
                                   <span className='body_text_medium'>Our Vision</span>
                                   <p className='body_text_small'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae!</p>
                                </div>
                            </div>
                        </div>
                        <div className="sec  flex_box col gap_sm">
                            <div className="img_box">
                                <img src={Aboutvalue} alt="" />
                                <div className="content">
                                   <span className='body_text_medium'>Our Purpose</span>
                                   <p className='body_text_small'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae!</p>
                                </div>
                            </div>
                            <div className="img_box">
                                <img src={Aboutmisson} alt="" />
                                <div className="content">
                                   <span className='body_text_medium'>Our Value</span>
                                   <p className='body_text_small'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <h4 className='body_text_large'>Our Philosophy</h4>
                        <p className='body_text_small'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque consequat diam ac vulputate convallis. Quisque sit amet pretium nulla. Proin volutpat nibh pellentesque elementum tincidunt. Ut aliquam arcu vel augue lobortis tempor cras ultrices tortor et consequat est.</p>
                        <a href="#" className='btn outline_secondry'>Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
