import React from 'react';
import './firstSection.css';
import firstImg from './../../assets/first-section.png';
import Button from '../button/Button';

const FirstSection = () => {
    return (
        <section className='first-section'>
            <div>
                <p>We're Offering Software Solutions For Your Business</p>
                <p>This is a new creative process where data and creativity come together to manage, organize, and track your business through digital graphic and dimensional thinking.

                    We create modern and engaging online experiences.</p>
                    <Button content='Get Started'/>
            </div>
            <div>
                <img src={firstImg} alt='first-ima' />
            </div>
        </section>
    )
}

export default FirstSection