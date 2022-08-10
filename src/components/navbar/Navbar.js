import React from 'react';
import './navbar.css';
import logo from './../../assets/logo.png';

const Navbar = () => {
    return (
        <section>
            <nav className='navbar'>
            <div>
                <img src={logo} alt='koloz logo' />
            </div>

            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Gallery</li>
                <li>Contact</li>
            </ul>
        </nav>
        </section>
        
    )
}

export default Navbar