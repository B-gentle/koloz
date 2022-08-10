import React from 'react';
import './fliers.css';

const Fliers = ({icon, title, content}) => {
  return (
    <div className='fliers'>
<span>{icon}</span>
<span>{title}</span>
<span>{content}</span>
    </div>
  )
}

export default Fliers