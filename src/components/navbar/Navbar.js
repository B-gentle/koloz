import {React, useState } from 'react';
import './navbar.css';
import logo from './../../assets/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

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
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Gallery</li>
                <li>Contact</li>
            </ul>
            <span className='hamburger' onClick={()=>{setDisplay(true)}}><GiHamburgerMenu/></span>
        </nav>
        </section>
        
    )
}

export default Navbar