import React from 'react';
import './footer.css';
import logo from './../../assets/logo.png';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {

    const date = new Date().getFullYear();
    return (
        <section className='footSection'>
            <div className='footer'>
                <div className='footer-note'>
                    <img src={logo} alt='logo' />
                    <p>We are a team of young innovative individuals, enthusiastic about design, technology and creative ideas in the digital workspace. Our services are built on these ideas, integrity and with the customers satisfaction in mind.</p>
                    <p className='footer-contact'>
                        <span>Contact</span>
                        <span>+2349162775998</span>
                    </p>
                    <p className='footer-social-links'>
                        <span>Social Links</span>
                        <span>
                            <FaFacebook />
                            <FaLinkedin />
                            <FaTwitter />
                        </span>
                    </p>

                </div>
                <div className='quick-links'>
                    <span>QUICK LINKS</span>
                    <span>Home</span>
                    <span>About</span>
                    <span>Service</span>
                    <span>Gallery</span>
                    <span>Contact</span>
                </div>

                <div className='footer-services'>
                    <span>SERVICES</span>
                    <span>Graphics Design</span>
                    <span>Products Designer</span>
                    <span>Photography</span>
                    <span>Illustration And Digital Arts</span>
                    <span>Social Media Design</span>
                </div>

                <div className='footer-info'>
                    <span>FURTHER INFORMATION</span>
                    <span>Terms and Conditions</span>
                    <span>Privacy Policy</span>
                    <span>Team</span>
                </div>
            </div>
            <p>Copyright &copy; {date}-koloz. All Rights Reserved</p>
        </section>
    )
}

export default Footer