import React from 'react';
import Button from '../button/Button';
import Hr from '../hr/Hr';
import './contactUs.css';

const ContactUs = () => {
  return (
    <section className='contact-us'>
            <form>
                <input type='text' placeholder='Name'/>
                <input type='email' placeholder='Email Address'/>
                <textarea placeholder='Message'></textarea>
                <span className='contact-button'><Button content='Start a Project'/></span>
            </form>
        <div>
            <span>Contact Us</span>
            <span>Do You Have Any Project?</span>
            <span><Hr /></span>
            <span>We have a team of experts in the field of graphics design, product design, photography, and more who can help you make professional and eye catching designs to effectively sell your products and brand to the right audience.

We work 24/7. We would be happy to work with you, reach out to us today.</span>
        </div>
    </section>
  )
}

export default ContactUs