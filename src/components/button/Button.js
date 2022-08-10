import React from 'react';
import './button.css';

const Button = ({content}) => {
  return (
    <button className='gen-button'>{content}</button>
  )
}

export default Button