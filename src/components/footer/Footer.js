import React from 'react';
import './footer.css';
import logo from './../../assets/logo.png';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-scroll';

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
                    <Link spy={true} to='navbar' smooth={true} activeClass='activeClass'>Home</Link>
                    <Link spy={true} to='about-us' smooth={true} activeClass='activeClass'>About</Link>
                    <Link spy={true} to='services' smooth={true} activeClass='activeClass'>Service</Link>
                    <Link spy={true} to='gallery' smooth={true} activeClass='activeClass'>Gallery</Link>
                    <Link spy={true} to='contact-us' smooth={true} activeClass='activeClass'>Contact</Link>
                </div>

                <div className='footer-services'>
                <Link spy={true} to='services' smooth={true} activeClass='activeClass'><span>SERVICES</span></Link>
                <Link spy={true} to='graphicsDesign' smooth={true}>Graphics Design</Link>
                <Link spy={true} to='productDesign' smooth={true}>Products Designer</Link>
                <Link spy={true} to='photography' smooth={true}>Photography</Link>
                <Link spy={true} to='digitalArt' smooth={true}>Illustration And Digital Arts</Link>
                <Link spy={true} to='contentWriting' smooth={true}>Social Media Design</Link>
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