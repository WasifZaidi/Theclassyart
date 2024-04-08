import React from 'react'
import "../Css/Services/Services.css"
import Nftserviceimg from "../../Images/nft1.jpg"
import logoserviceimg from "../../Images/logo1.jpg"
import artserviceimg from "../../Images/art1.jpg"
import bannerserviceimg from "../../Images/bannerservice.jpg"
const Services = () => {
    return (
        <div className='Services margin_top'>
            <div className="container flex_box col gap_med">
                <div className="heading">
                    <h3 className='body_text_large'>TAKE YOUR GAME TO NEXT LEVEL</h3>
                    <h2 className='fs_heading_medium'>Exclusive Services</h2>
                </div>
                <div className="cards">
                    <div className="card flex_box col  gap_sm">
                        <img src={Nftserviceimg} alt="Nft service" />
                        <div className="content">
                            <h4 className='body_text_large'>NFT Services</h4>
                            <p className='body_text_small'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, pariatur.</p>
                        </div>
                    </div>
                    <div className="card flex_box col gap_sm">
                        <img src={logoserviceimg} alt="Nft service" />
                        <div className="content">
                            <h4 className='body_text_large'>Logo Emotes</h4>
                            <p className='body_text_small'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, pariatur.</p>
                        </div>
                    </div>
                    <div className="card flex_box col gap_sm">
                        <img src={artserviceimg} alt="Nft service" />
                        <div className="content">
                            <h4 className='body_text_large'>2d & 3d Art</h4>
                            <p className='body_text_small'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, pariatur.</p>
                        </div>
                    </div>
                    <div className="card flex_box col gap_sm">
                        <img src={bannerserviceimg} alt="Nft service" />
                        <div className="content">
                            <h4 className='body_text_large'>Banner & Overlays</h4>
                            <p className='body_text_small'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, pariatur.</p>
                        </div>
                    </div>
                    <div className="card flex_box col gap_sm">
                        <img src={Nftserviceimg} alt="Nft service" />
                        <div className="content">
                            <h4 className='body_text_large'>Vtuber Models</h4>
                            <p className='body_text_small'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, pariatur.</p>
                        </div>
                    </div>
                    <div className="card flex_box col gap_sm">
                        <img src={Nftserviceimg} alt="Nft service" />
                        <div className="content">
                            <h4 className='body_text_large'>Website Designing</h4>
                            <p className='body_text_small'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, pariatur.</p>
                        </div>
                    </div>
                    <div className="card flex_box col gap_sm">
                        <img src={Nftserviceimg} alt="Nft service" />
                        <div className="content">
                            <h4 className='body_text_large'>Room Art</h4>
                            <p className='body_text_small'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, pariatur.</p>
                        </div>
                    </div>
                    <div className="card flex_box col gap_sm">
                        <img src={Nftserviceimg} alt="Nft service" />
                        <div className="content">
                            <h4 className='body_text_large'>Transition Screens</h4>
                            <p className='body_text_small'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, pariatur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
