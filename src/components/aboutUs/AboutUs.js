import React from 'react';
import './aboutUs.css';
import aboutUs from './../../assets/about-us.png';
import Button from '../button/Button';
import Hr from '../hr/Hr';

const SectionTwo = () => {
    return (
        <section className='about-us'>
            <div>
                <img src={aboutUs} alt='about pho' />
            </div>
            <div>
                <span>About Us</span>
                <span className='about-hr'><Hr/></span>
                <span>We are a team of young innovative individuals, enthusiastic about design, technology and creative ideas in the digital workspace. Our services are built on these ideas, integrity and with the customers satisfaction in mind.

                    Collaboration is essential and helps promote the services and increased income for all parties involved.</span>
                    <Button className='read-more' content='Read more'/>
            </div>
        </section>
    )
}

export default SectionTwo