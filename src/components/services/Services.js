import React from 'react';
import './services.css';
import { services } from '../../data/db';
import Fliers from '../fliers/Fliers';
import Hr from '../hr/Hr';

const Services = () => {
    return (
        <section className='services'>
            <span>Our Services</span>
            <span>What We Offer</span>
            <span className='services-hr'><Hr /></span>
            <span className='services-flierbox'>
            {services && services.map((flier, id) => <span className='services-flier' key={id}><Fliers icon={<flier.icon />} title={flier.title} content={flier.content} /></span>)}
            </span>
            </section>
    )
}

export default Services