import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo} />
                    <p>Explore our diverse menu and enjoy doorstep delivery of delicious meals crafted with care to tantalize your taste buds</p>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt='facebook' />
                        <img src={assets.twitter_icon} alt='facebook' />
                        <img src={assets.linkedin_icon} alt='facebook' />


                    </div>
                </div>

                <div className='footer-content-middle'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home </li>
                        <li>About Us </li>
                        <li>Dlivery </li>
                        <li>Privecy policy </li>
                    </ul>
                </div>





                <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-7973002267 </li>
                        <li>rr8422617@gmail.com</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>

            <hr />
            <p className='footer-copyright'>copyright 2024  © Tomato.com - All Right Reserved.</p>

        </div>

    )
}

export default Footer