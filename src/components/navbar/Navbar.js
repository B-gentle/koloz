import {React, useState } from 'react';
import './navbar.css';
import logo from './../../assets/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-scroll';

const Navbar = () => {

    const [display, setDisplay] = useState(false)
    return (
        <section>
            <nav className='navbar'>
            <div>
                <img src={logo} alt='koloz logo' />
            </div>

            <ul className={display ? 'display' : ''}>
            <div>
                <img src={logo} alt='koloz logo' />
            </div>
                <span className='close' onClick={()=>{setDisplay(false)}}><GrClose /></span>
                <Link spy={true} to='navbar' smooth={true} activeClass='activeClass'><li>Home</li></Link>
                <Link spy={true} to='about-us' smooth={true} activeClass='activeClass'><li>About</li></Link>
                <Link spy={true} to='services' smooth={true} activeClass='activeClass'><li>Services</li></Link>
                <Link spy={true} to='gallery' smooth={true} activeClass='activeClass'><li>Gallery</li></Link>
                <Link spy={true} to='contact-us' smooth={true} activeClass='activeClass'><li>Contact</li></Link> 
            </ul>
            <span className='hamburger' onClick={()=>{setDisplay(true)}}><GiHamburgerMenu/></span>
        </nav>
        </section>
        
    )
}

export default Navbar