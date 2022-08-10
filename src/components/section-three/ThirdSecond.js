import React from 'react';
import Fliers from '../fliers/Fliers';
import './thirdSection.css';
import shield1 from '../../data/db';

const ThirdSecond = () => {


    return (
        <section className='third-section'>
                <span>Our Values</span>
                <span>Why choose us</span>
                {
                    shield1 && shield1.map((flier, id)=> <div className='third-section-fliersbox'><Fliers className='third-section-fliers' key={id} icon={<flier.icon/>} title={flier.title} content={flier.content} /></div>)
                }
        </section>
    )
}

export default ThirdSecond