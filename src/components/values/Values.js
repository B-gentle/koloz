import React from 'react';
import Fliers from '../fliers/Fliers';
import './values.css';
import shield1 from '../../data/db';
import Hr from '../hr/Hr';
import { motion } from 'framer-motion';

const ThirdSecond = () => {
    const transition = { duration: 2, type: 'spring' }

    return (
        <section className='values'>
            <span>Our Values</span>
            <span>Why choose us</span>
            <span><Hr /></span>
            <div className='values-fliersbox'>
                {
                    shield1 && shield1.map((flier, id) => <motion.span
                    initial={{ left: '70%' }}
                    whileInView={{ left: '0' }}
                    transition={transition}
                        key={id}
                        className='values-fliers'>
                        <Fliers icon={<flier.icon />} title={flier.title} content={flier.content} />
                    </motion.span>)
                }
            </div>
        </section>
    )
}

export default ThirdSecond