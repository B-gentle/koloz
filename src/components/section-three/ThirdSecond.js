import React from 'react';
import Fliers from '../fliers/Fliers';
import './thirdSection.css';

const ThirdSecond = () => {
    return (
        <section className='third-section'>
            <p>
                <span>Our Values</span>
                <span>Why choose us</span>
                <Fliers/>
            </p>
        </section>
    )
}

export default ThirdSecond